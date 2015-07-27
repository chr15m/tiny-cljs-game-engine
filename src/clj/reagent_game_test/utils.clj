(ns reagent-game-test.utils
  (require [clojure.string :refer [split]]))

; slurp in a single text file at compile time
(defmacro load-text-file [relative-uri-filename] (slurp relative-uri-filename))

; load in a set of files from a directory that match a particular extension at compile time
; https://www.refheap.com/18583
(defmacro load-file-set
  [dir ext]
  (apply merge (for [file (file-seq (clojure.java.io/file dir))
             :when (and (.isFile file) (.endsWith (str file) ext))]
         {(last (split (str file) #"/")) (slurp file)})))
