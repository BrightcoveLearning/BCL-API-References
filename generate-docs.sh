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
echo finished generating docs
echo copying docs to Developer Docs directories....
cd ..
echo copying analytics-api docs
cp -R analytics-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/video-cloud/analytics-api/references/versions/v1
echo copying data-dollection-api docs
cp -R data-collection-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/video-cloud/analytics-api/references/data-collection/v1
echo copying cms-api docs
cp -R cms-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/video-cloud/cms-api/references/cms-api/versions/v1
echo copying cms-api docs
cp -R cms-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/video-cloud/cms-api/references/cms-api/versions/v1
echo copying di-api docs
cp -R di-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/video-cloud/di-api/reference/versions/v1
echo copying ingest-profiles-api docs
cp -R ingest-profiles-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/video-cloud/ingest-profiles-api/reference/versions/v1
echo copying oauth-api docs
cp -R oauth-api-dev-docs/v3/doc/ ../BCL-developer-docs/en/video-cloud/oauth-api/reference/versions/v3
echo copying playback-api docs
cp -R playback-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/video-cloud/playback-api/references/versions/v1
echo copying policy-api docs
cp -R policy-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/video-cloud/policy-api/references/versions/v1
echo copying once-ingest-api docs
cp -R once-ingest-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/once/references/ingest-api/versions/v1
echo copying once-media-management-api docs
cp -R once-media-management-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/once/references/media-management-api/versions/v1
echo copying once-status-api docs
cp -R once-status-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/once/references/status-api/versions/v1

