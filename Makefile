all: build deploy

build: 
	go run indexer.go

deploy:
	firebase deploy --only hosting

