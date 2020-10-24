.PHONY: build
build:
	docker-compose build
	docker-compose run api rails db:migrate db:seed

.PHONY: start
start:
	docker-compose up -d

.PHONY: stop
stop:
	docker-compose down

.PHONY: api-test
api-test:
	docker-compose run api rspec

.PHONY: app-test
app-test:
	docker-compose run app yarn test --coverage --watchAll=false
