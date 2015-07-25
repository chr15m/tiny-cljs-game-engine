all: build/js/app.js build/index.html build/css/site.css build/css/loaders/loaders.min.css

build/css/loaders/loaders.min.css: resources/public/css/loaders/loaders.min.css
	mkdir -p build/css/loaders/
	cp $< $@

build/css/site.css: resources/public/css/site.css
	cp $< $@

build/js/app.js: src/**/**
	lein cljsbuild once min

