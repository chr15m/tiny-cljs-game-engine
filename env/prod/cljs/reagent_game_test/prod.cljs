(ns reagent-game-test.prod
  (:require [reagent-game-test.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
