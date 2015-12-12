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
(defonce viewport-size (atom {}))

(def blurb "a tiny cljs game engine experiment.")

(print blurb)

(print "initial game-state: " (map (fn [[id e]] (print id "->" e)) (:entities @game-state)))

;; -------------------------
;; Helper functions

; handle window resizing
(defn re-calculate-viewport-size [old-viewport-size]
  (let [viewport-size (dom/getViewportSize (dom/getWindow))
        w (.-width viewport-size)
        h (.-height viewport-size)]
    {:w w
     :h h
     :extent (/ (min w h) 2)
     :ratio (/ (min w h) 1024)}))

(defn get-time-now [] (.getTime (js/Date.)))

; turn a position into a CSS style declaration
(defn compute-position-style [{[x y] :pos angle :angle [ew eh] :size}]
  (let [{:keys [w h extent ratio]} @viewport-size
        position-style {:left (+ (* x extent) (/ w 2))
                        :top (+ (* y extent) (/ h 2))
                        :transform (str "translate(-50%, -50%) rotate(" angle "turn) scale(" ratio ", " ratio ")")}]
    (if ew
      (assoc position-style :width (* ew extent) :height (* eh extent))
      position-style)))

(defn behaviour-static [old-state elapsed now]
  old-state)

(defn behaviour-loop [old-state elapsed now]
  (assoc old-state :pos [(* (Math.cos (/ now 500)) 0.100)
                         (* (Math.sin (/ now 500)) 0.100)]))

(defn behaviour-rock [old-state elapsed now]
  (-> old-state
      (assoc-in [:pos 0] (* (Math.cos (/ now 500)) 0.05))
      (assoc-in [:angle] (Math.cos (/ now 2000)))))

(defn behaviour-expand [old-state elapsed now]
  (-> old-state
      (assoc-in [:svg 1 :r] (+ 0.04 (* (Math.cos (/ now 200)) 0.001)))))

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

(defn play-blip [ev] (sfx/play :blip))

(defn component-svg [[w h] id style svg-content]
  (let [rw (* w (:extent @viewport-size))
        rh (* h (:extent @viewport-size))]
    [:svg {:view-box (str "0 0 " w " " h)
           :id id
           :key id
           :class "sprite"
           :style style}
     [:defs
      [:filter {:id "glowfilter"
                :width rw
                :height rh
                :x (* rw -0.5)
                :y (* rh -0.5)
                ; http://carmenla.me/blog/posts/2015-06-22-reagent-live-markdown-editor.html
                :dangerouslySetInnerHTML
                {:__html "<feGaussianBlur in='SourceGraphic' stdDeviation='0.015'/>
                         <feMerge>
                         <feMergeNode/><feMergeNode in='SourceGraphic'/>
                         </feMerge>"}}]]
     svg-content]))

; define our initial game entities
(make-entity {:symbol "◎" :color 0 :pos [-300 -200] :angle 0 :behaviour behaviour-loop :on-click play-blip})
(make-entity {:symbol "❤" :color 1 :pos [0 0] :angle 0})
;(make-entity {:symbol "◍" :color 0 :pos [-20 300] :angle 0 :behaviour behaviour-rock})
(make-entity {:symbol "⬠" :color 0 :pos [-0.350 -0.50] :angle 0})
(make-entity {:symbol "▼" :color 0 :pos [-1.0 1.0] :angle 0})
(make-entity {:symbol "➤" :color 1 :pos [0.300 0.200] :angle 0})
(make-entity {:symbol "⚡" :color 0 :pos [0.50 -0.200] :angle 0})

(make-entity {:pos [-1.0 -1.0]
              :size [0.3 0.3]
              :angle 0
              :behaviour behaviour-expand
              :on-click play-blip
              :svg [:circle {:cx 0.15
                             :cy 0.15
                             :r 0.04
                             :style {:fill "#0f0"
                                     :filter "url(#glowfilter)"}}]})

;; -------------------------
;; Views

(defn home-page []
  [:div
    [:div {:id "game-board"}
      ; DOM "scene grapher"
      (doall (map
               (fn [[id e]] (cond
                              ; render a "symbol"
                              (:symbol e) [:div {:class (str "sprite c" (:color e)) :key id :style (compute-position-style e) :on-click (:on-click e)} (:symbol e)]
                              ; render an SVG
                              (:svg e) [:div {:key id :on-click (:on-click e)} [component-svg (:size e) id (compute-position-style e) (:svg e)]]))
               (:entities @game-state)))]
    ; info blurb
    [:div {:class "info c2"} blurb [:p "[ " [:a {:href "http://github.com/chr15m/tiny-cljs-game-engine"} "source code"] " ]"]]
    ; tv scan-line effect
    [:div {:id "overlay"}]])

;; -------------------------
;; Initialize app

; get the real viewport size for the first time
(swap! viewport-size re-calculate-viewport-size)

; update the current viewport size if it changes
(js/window.addEventListener "resize" #(swap! viewport-size re-calculate-viewport-size))

(defn mount-root []
  (reagent/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
