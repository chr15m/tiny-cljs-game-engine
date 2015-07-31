LDR=build/css/loaders/loaders.min.css
CSS=build/css/site.css
IDX=build/index.html
APP=build/js/app.js
XTRN=externs.js

all: $(APP) $(CSS) $(IDX) $(LDR)

$(LDR): resources/public/css/loaders/loaders.min.css
	mkdir -p build/css/loaders/
	cp $< $@

$(CSS): resources/public/css/site.css
	cp $< $@

$(APP): src/**/** $(XTRN)
	rm -f $(APP)
	lein cljsbuild once min

$(XTRN): src/cljs/**/**
	lein externs > externs.js

$(IDX): src/clj/reagent_game_test/*.clj
	lein run -m reagent-game-test.utils/index-html > $(IDX)

clean:
	rm $(LDR) $(CSS) $(APP) $(IDX)
