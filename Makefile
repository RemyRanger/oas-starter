# Lint OAS document
lint:
	npx @redocly/cli@latest lint 

# Generate OAS bundled document in {spec_dir}/dist
generate:
	rm -rf dist
	npx @redocly/cli@latest bundle --output dist --ext yaml

docker-docs: lint generate
	docker stop doc-server || true
	docker run -d --rm --name doc-server \
	-p 8080:80 \
	-v $$(pwd)/dist:/var/www/html/static/dist \
	-e URLS="$$(ls -1 dist | jq -Rn '[inputs | { url: "/static/dist/\(.)", name: "\(.)" }]')" \
	volbrene/redoc
