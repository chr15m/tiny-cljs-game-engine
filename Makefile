LDR=build/css/loaders/loaders.min.css
CSS=build/css/site.css
IDX=build/index.html
APP=build/js/app.js
JSFXR=build/lib/jsfxr/sfxr.js build/lib/jsfxr/riffwave.js

all: $(APP) $(CSS) $(IDX) $(LDR) $(JSFXR)

$(LDR): resources/public/css/loaders/loaders.min.css
	mkdir -p build/css/loaders/
	cp $< $@

$(CSS): resources/public/css/site.css
	cp $< $@

$(APP): src/**/**
	rm -f $(APP)
	lein cljsbuild once min


$(JSFXR): resources/public/lib/jsfxr/sfxr.js resources/public/lib/jsfxr/riffwave.js
	git submodule init
	git submodule update
	mkdir -p build/lib/jsfxr
	cp -av resources/public/lib/jsfxr/sfxr.js resources/public/lib/jsfxr/riffwave.js build/lib/jsfxr

$(IDX): src/clj/reagent_game_test/*.clj
	lein run -m reagent-game-test.utils/index-html > $(IDX)

clean:
	rm $(LDR) $(CSS) $(APP) $(IDX) $(JSFXR)
