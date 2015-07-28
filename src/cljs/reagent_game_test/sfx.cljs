(ns reagent-game-test.sfx
  (:require-macros [reagent-game-test.utils :refer [load-file-set]]))

; load the sound effects definitions from disk at compile time
(def sound-files-json (load-file-set "resources/sounds/" ".sfxr.json"))

; process the sound files into native data
(def sfx-defs (->> (map
    (fn [[fname sdef]]
      [(first (.split fname ".")) (js->clj (.parse js/JSON sdef))])
    sound-files-json) (into {})))

; turn a sfxr datastructure into an Audio element
(defn to-audio [sdef]
  (let [a (js/Audio.)
        s (.generate (js/SoundEffect. (clj->js sdef)))]
    (set! (.-src a) (.-dataURI s))
    a))

(def sfx (->> (map (fn [[id sdef]] [(keyword id) (to-audio sdef)]) sfx-defs) (into {})))

(defn play [id]
  (.play (sfx id)))
