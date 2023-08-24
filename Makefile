proto:
	rm -f ./app/pb/*.js
	rm -f ./app/pb/*.ts
	protoc \
	--js_out=import_style=commonjs,binary:./app/pb \
	--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
	--ts_out=grpc_js:./app/pb \
	--plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
	--grpc_out=grpc_js:./app/pb \
	-I ./app/proto \
	./app/proto/*.proto


.PHONY: proto
