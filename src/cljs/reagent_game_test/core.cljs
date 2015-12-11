(ns reagent-game-test.core
    (:require [reagent-game-test.sfx :as sfx]
              [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [goog.events :as events]
              [goog.dom :as dom]
              [goog.history.EventType :as EventType]
              [cljs-uuid-utils.core :as uuid]
              [cljs.core.async :refer [chan <! timeout]])
    (:require-macros [cljs.core.async.macros :refer [go go-loop]])
    (:import goog.History))

(enable-console-print!)

; all of the entities that appear in our game
(def game-state (atom {:entities {}}))

(def blurb "a tiny cljs game engine experiment.")

(print blurb)

(print "initial game-state: " (map (fn [[id e]] (print id "->" e)) (:entities @game-state)))

;; -------------------------
;; Helper functions

; handle window resizing
(defn re-calculate-viewport-size [old-viewport-size]
  (dom/getViewportSize (dom/getWindow)))
(def viewport-size (atom (re-calculate-viewport-size nil)))
(.addEventListener js/window "resize" #(swap! viewport-size re-calculate-viewport-size))

(defn get-time-now [] (.getTime (js/Date.)))

; turn a position into a CSS style declaration
(defn compute-position-style [{[x y] :pos angle :angle}]
  (let [size @viewport-size]
    {:top (+ y (/ (.-height size) 2))
     :left (+ x (/ (.-width size) 2))
     :transform (str "rotate(" angle "turn)")}))

(defn behaviour-static [old-state elapsed now]
  old-state)

(defn behaviour-loop [old-state elapsed now]
  (assoc old-state :pos [(* (Math.cos (/ now 500)) 100)
                         (* (Math.sin (/ now 500)) 100)]))

(defn behaviour-rock [old-state elapsed now]
  (-> old-state
      (assoc-in [:pos 0] (* (Math.cos (/ now 500)) 50))
      (assoc-in [:angle] (Math.cos (/ now 2000)))))

; insert a single new entity record into the game state and kick off its control loop
; entity-definition = :symbol :color :pos :angle :behaviour
(defn make-entity [entity-definition]
  (let [id (uuid/uuid-string (uuid/make-random-uuid))
        entity {id (assoc entity-definition :id id :chan (chan))}]
    ; swap the new entity definition into our game state
    (swap! game-state assoc-in
      [:entities id] (entity id))
    ; kick off the entity's control loop
    (go-loop [last-time (get-time-now)]
      ; run every 20 milliseconds
      (<! (timeout 20))
      (let [now (get-time-now)
            elapsed (- now last-time)]
        ; update this entity's properties according to its behaviour function
        (let [behaviour-fn (get-in @game-state [:entities id :behaviour])]
          (if (not (nil? behaviour-fn))
            (swap! game-state update-in [:entities id] behaviour-fn elapsed now)))
        (recur now)))
    ; return the entity we created
    entity))

; define our initial game entities
(make-entity {:symbol "◎" :color 0 :pos [-300 -200] :angle 0 :behaviour behaviour-loop})
(make-entity {:symbol "❤" :color 1 :pos [0 0] :angle 0})
(make-entity {:symbol "◍" :color 0 :pos [-20 300] :angle 0 :behaviour behaviour-rock})
(make-entity {:symbol "⬠" :color 0 :pos [-350 -50] :angle 0})
(make-entity {:symbol "▼" :color 0 :pos [-200 50] :angle 0})
(make-entity {:symbol "➤" :color 1 :pos [300 200] :angle 0})
(make-entity {:symbol "⚡" :color 0 :pos [50 -200] :angle 0})

; http://carmenla.me/blog/posts/2015-06-22-reagent-live-markdown-editor.html
(defn component-splat [content]
  (fn []
    [:div {:dangerouslySetInnerHTML {:__html (str content)}}]))

(defn component-svg-test [w h svg-content]
  [:svg {:width w
         :height h
         :id "canvas"
         :style {:position "absolute" :top "500px" :left "60%"}
         }
   [:defs
    [:filter {:id "glowfilter" :width w :height h :x (* w -0.5) :y (* h -0.5)
              :dangerouslySetInnerHTML
              {:__html "<feGaussianBlur in='SourceGraphic' stdDeviation='5'/>
                       <feMerge>
                        <feMergeNode/><feMergeNode in='SourceGraphic'/>
                       </feMerge>"}}]]
   svg-content])

(defn component-circle-thing []
  [component-svg-test 100 100
    [:circle {:cx 50
              :cy 50
              :r 20
              :style {:fill "#0f0"
                      :filter "url(#glowfilter)"}}]])

;; -------------------------
;; Views
  
(defn home-page []
  [:div
    [:div {:id "game-board"}
      [component-circle-thing]
      ; DOM "scene grapher"
      (doall (map (fn [[id e]] [:div {:class (str "sprite c" (:color e)) :key id :style (compute-position-style e) :on-click (fn [ev] (sfx/play :blip))} (:symbol e)]) (:entities @game-state)))]
    ; info blurb
    [:div {:class "info c2"} blurb [:p "[ " [:a {:href "http://github.com/chr15m/tiny-cljs-game-engine"} "source code"] " ]"]]
    ; tv scan-line effect
    [:div {:id "overlay"}]])

;; -------------------------
;; Initialize app
(defn mount-root []
  (reagent/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
