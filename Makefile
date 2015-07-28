LDR=build/css/loaders/loaders.min.css
CSS=build/css/site.css
IDX=build/index.html
APP=build/js/app.js

all: $(APP) $(CSS) $(IDX) $(LDR)

$(LDR): resources/public/css/loaders/loaders.min.css
	mkdir -p build/css/loaders/
	cp $< $@

$(CSS): resources/public/css/site.css
	cp $< $@

$(APP): src/**/**
	rm -f $(APP)
	lein cljsbuild once min


$(IDX): src/clj/reagent_game_test/*.clj
	lein run -m reagent-game-test.utils/index-html > $(IDX)

clean:
	rm $(LDR) $(CSS) $(APP) $(IDX)
