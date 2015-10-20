echo Generating API docs...
cd analytics-api
echo generating docs for analytics-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template
cd ../analytics-api-dev-docs
echo generating docs for analytics-api-dev-docs
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v1
cd ../data-collection-api
echo generating docs for data-collection-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template
cd ../data-collection-api-dev-docs
echo generating docs for data-collection-api-dev-docs
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v1
cd ../cms-api
echo generating docs for cms-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template
cd ../cms-api-dev-docs
echo generating docs for cms-api-dev-docs
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v1
cd ../di-api
echo generating docs for di-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template
cd ../di-api-dev-docs
echo generating docs for di-api-dev-docs
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v1
cd ../ingest-profiles-api
echo generating docs for ingest-profiles-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template
cd ../ingest-profiles-api-dev-docs
echo generating docs for ingest-profiles-api-dev-docs
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v1
cd ../oauth-api
echo generating docs for oauth-api
apidoc -i v3/src/  -f .js -o v3/doc/ -t ../template
apidoc -i v4/src/  -f .js -o v4/doc/ -t ../template
cd ../oauth-api-dev-docs
echo generating docs for oauth-api-dev-docs
apidoc -i v4/src/  -f .js -o v3/doc/ -t ../template-v0
apidoc -i v4/src/  -f .js -o v3/doc/ -t ../template-v0
cd ../playback-api
echo generating docs for playback-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template
cd ../playback-api-dev-docs
echo generating docs for playback-api-dev-docs
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v1
cd ../policy-api
echo generating docs for policy-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template
cd ../policy-api-dev-docs
echo generating docs for policy-api-dev-docs
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v1
cd ../once-ingest-api
echo generating docs for once-ingest-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template
cd ../once-ingest-api-dev-docs
echo generating docs for once-ingest-api-dev-docs
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v1
cd ../once-media-management-api
echo generating docs for once-media-management-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template
cd ../once-media-management-api-dev-docs
echo generating docs for once-media-management-api-dev-docs
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v0
cd ../once-status-api
echo generating docs for once-status-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template
cd ../once-status-api-dev-docs
echo generating docs for once-status-api-dev-docs
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v0
cd ../delivery-system-api
echo generating docs for delivery-system-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template
cd ../delivery-system-api-dev-docs
echo generating docs for delivery-system-api-dev-docs
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v0
cd ../player-management-api
echo generating docs for player-management-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template
cd ../player-management-api-dev-docs
echo generating docs for player-management-api-dev-docs
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v0
