(ns reagent-game-test.core
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [secretary.core :as secretary :include-macros true]
              [goog.events :as events]
              [goog.dom :as dom]
              [goog.history.EventType :as EventType]
              [cljs.core.async :refer [chan <! timeout]])
    (:require-macros [cljs.core.async.macros :refer [go go-loop]])
    (:import goog.History))

; all of the entities that appear in our game
(def game-state (atom {
                          :entities [
                                     {:id :p0 :symbol "❤" :color 1 :pos [0 0] :angle 0}
                                     {:id :p1 :symbol "⬠" :color 0 :pos [0 0] :angle 0}
                                     {:id :p2 :symbol "▼" :color 0 :pos [-200 50] :angle 0}
                                     {:id :p3 :symbol "➤" :color 1 :pos [300 200] :angle 0} 
                                     {:id :p4 :symbol "⚡" :color 0 :pos [50 -200] :angle 0} 
                                     {:id :p5 :symbol "◍" :color 0 :pos [-20 300] :angle 0}]}))

(enable-console-print!)

;; -------------------------
;; Helper functions

(defn re-calculate-viewport-size []
  (def viewport-size (dom/getViewportSize (dom/getWindow))))

(.addEventListener js/window "resize" re-calculate-viewport-size)
(re-calculate-viewport-size)

(defn get-time-now [] (.getTime (js/Date.)))

(defn compute-position-style [e]
  {:top (+ ((:pos e) 1) (/ (.-height viewport-size) 2))
   :left (+ ((:pos e) 0) (/ (.-width viewport-size) 2))
   :transform (str "rotate(" (:angle e) "turn)")})

(defn game-loop [elapsed now]
  (swap! game-state (fn [old-game-state]
    (let [
      n old-game-state
      ; here is where we update some entity properties - fully immutable!
      n (assoc-in n [:entities 0 :pos 1] (* (Math.sin (/ now 500)) 100))
      n (assoc-in n [:entities 0 :pos 0] (* (Math.cos (/ now 500)) 100))
      n (assoc-in n [:entities 5 :pos 0] (* (Math.cos (/ now 500)) 50)) 
      n (assoc-in n [:entities 5 :angle] (Math.cos (/ now 2000)))]
      n))))

; run the game loop
(defonce looper 
  (go-loop [last-time (get-time-now)]
    (<! (timeout 20))
    (let [now (get-time-now)
          elapsed (- now last-time)]
      (game-loop elapsed now)
      (recur now))))

;; -------------------------
;; Views
  
(defn home-page []
  [:div
    [:div {:id "game-board"}
      ; DOM "scene grapher"
      (map-indexed (fn [i e] [:div {:class (str "sprite c" (:color e)) :key (:id e) :style (compute-position-style e)} (:symbol e)]) (:entities @game-state))]
    ; info blurb
    [:div {:class "info c2"} "a tiny cljs game engine experiment." [:p "[ " [:a {:href "http://github.com/chr15m/tiny-cljs-game-engine"} "source code"] " ]"]]
    ; tv scan-line effect
    [:div {:id "overlay"}]])

; *** everything below is reagent boilerplate *** ;

(defn current-page []
  [:div [(session/get :current-page)]])

;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute "/" []
  (session/put! :current-page #'home-page))

;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
     EventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

;; -------------------------
;; Initialize app
(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (hook-browser-navigation!)
  (mount-root))
