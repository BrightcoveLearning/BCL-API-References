txtrst=$(tput sgr0) # Text reset
txtyel=$(tput setaf 7) # Yellow
txtgrn=$(tput setaf 6) # Green
txtred=$(tput setaf 9) # red
echo ${txtred}Copying src files to the -dev-docs folders
echo ${txtyel}copying analytics-api src
cp -R analytics-api/ analytics-api-dev-docs/
echo ${txtyel}copying audience-api src
cp -R audience-api/ audience-api-dev-docs/
echo ${txtyel}copying data-dollection-api src
cp -R data-collection-api/ data-collection-api-dev-docs/
echo ${txtyel}copying data-dollection-api-v1 src
cp -R data-collection-api/ data-collection-api-dev-docs-v1/
echo ${txtyel}copying cms-api src
cp -R cms-api/ cms-api-dev-docs/
echo ${txtyel}copying di-api src
cp -R di-api/ di-api-dev-docs/
echo ${txtyel}copying ingest-profiles-api src
cp -R ingest-profiles-api/ ingest-profiles-api-dev-docs/
echo ${txtyel}copying oauth-api src
cp -R oauth-api/ oauth-api-dev-docs/
echo ${txtyel}copying delivery-system-api src
cp -R delivery-system-api/ delivery-system-api-dev-docs/
echo ${txtyel}copying player-management-api src
cp -R player-management-api/ player-management-api-dev-docs/
echo ${txtyel}copying playback-api src
cp -R playback-api/ playback-api-dev-docs/
echo ${txtyel}copying policy-api src
cp -R policy-api/ policy-api-dev-docs/
echo ${txtyel}copying once-ingest-api src
cp -R once-ingest-api/ once-ingest-api-dev-docs/
echo ${txtyel}copying once-media-management-api src
cp -R once-media-management-api/ once-media-management-api-dev-docs/
echo ${txtyel}copying once-status-api src
cp -R once-status-api/ once-status-api-dev-docs/
echo ${txtyel}copying live-api src
cp -R live-api/ live-api-dev-docs/
echo ${txtyel}Finished copying src files
echo ${txtred}Generating API docs...
cd analytics-api
echo ${txtyel}generating docs for analytics-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template
cd ../analytics-api-dev-docs
echo ${txtyel}generating docs for analytics-api-dev-docs
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v1
cd ../audience-api
echo ${txtyel}generating docs for audience-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template
cd ../audience-api-dev-docs
echo ${txtyel}generating docs for audience-api-dev-docs
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v1
cd ../data-collection-api
echo ${txtyel}generating docs for data-collection-api
apidoc -i v2/src/  -f .js -o v2/doc/ -t ../template
cd ../data-collection-api-dev-docs
echo ${txtyel}generating docs for data-collection-api-dev-docs
apidoc -i v2/src/  -f .js -o v2/doc/ -t ../template-v1
cd ../data-collection-api-v1
echo ${txtyel}generating docs for data-collection-api-v1
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template
cd ../data-collection-api-dev-docs-v1
echo ${txtyel}generating docs for data-collection-api-dev-docs-v1
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v1
cd ../cms-api
echo ${txtyel}generating docs for cms-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template
cd ../cms-api-dev-docs
echo ${txtyel}generating docs for cms-api-dev-docs
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v1
cd ../di-api
echo ${txtyel}generating docs for di-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template
cd ../di-api-dev-docs
echo ${txtyel}generating docs for di-api-dev-docs
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v1
cd ../ingest-profiles-api
echo ${txtyel}generating docs for ingest-profiles-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template
cd ../ingest-profiles-api-dev-docs
echo ${txtyel}generating docs for ingest-profiles-api-dev-docs
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v1
cd ../oauth-api
echo ${txtyel}generating docs for oauth-api
apidoc -i v3/src/  -f .js -o v3/doc/ -t ../template
apidoc -i v4/src/  -f .js -o v4/doc/ -t ../template
cd ../oauth-api-dev-docs
echo ${txtyel}generating docs for oauth-api-dev-docs
apidoc -i v4/src/  -f .js -o v3/doc/ -t ../template-v0
apidoc -i v4/src/  -f .js -o v3/doc/ -t ../template-v0
cd ../playback-api
echo ${txtyel}generating docs for playback-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template
cd ../playback-api-dev-docs
echo ${txtyel}generating docs for playback-api-dev-docs
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v1
cd ../policy-api
echo ${txtyel}generating docs for policy-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template
cd ../policy-api-dev-docs
echo ${txtyel}generating docs for policy-api-dev-docs
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v1
cd ../once-ingest-api
echo ${txtyel}generating docs for once-ingest-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template
cd ../once-ingest-api-dev-docs
echo ${txtyel}generating docs for once-ingest-api-dev-docs
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v0
cd ../once-media-management-api
echo ${txtyel}generating docs for once-media-management-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template
cd ../once-media-management-api-dev-docs
echo ${txtyel}generating docs for once-media-management-api-dev-docs
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v0
cd ../once-status-api
echo ${txtyel}generating docs for once-status-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template
cd ../once-status-api-dev-docs
echo ${txtyel}generating docs for once-status-api-dev-docs
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v0
cd ../delivery-system-api
echo ${txtyel}generating docs for delivery-system-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template
cd ../delivery-system-api-dev-docs
echo ${txtyel}generating docs for delivery-system-api-dev-docs
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v0
cd ../player-management-api
echo ${txtyel}generating docs for player-management-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template
cd ../player-management-api-dev-docs
echo ${txtyel}generating docs for player-management-api-dev-docs
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v0
cd ../live-api
echo ${txtyel}generating docs for live-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template
cd ../live-api-dev-docs
echo ${txtyel}generating docs for live-api-dev-docs
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v0
echo ${txtgrn}finished generating docs
echo ${txtred}copying docs to Developer Docs directories....
cd ..
echo ${txtyel}copying analytics-api docs
cp -R analytics-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/video-cloud/analytics-api/references/versions/v1
echo ${txtyel}copying audience-api docs
cp -R audience-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/video-cloud/audience-api/references/versions/v1
echo ${txtyel}copying data-dollection-api docs
cp -R data-collection-api-dev-docs/v2/doc/ ../BCL-developer-docs/en/video-cloud/analytics-api/references/data-collection/v2
echo ${txtyel}copying data-dollection-api-v1 docs
cp -R data-collection-api-dev-docs-v1/v1/doc/ ../BCL-developer-docs/en/video-cloud/analytics-api/references/data-collection/v1
echo ${txtyel}copying cms-api docs
cp -R cms-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/video-cloud/cms-api/references/cms-api/versions/v1
echo ${txtyel}copying di-api docs
cp -R di-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/video-cloud/di-api/reference/versions/v1
echo ${txtyel}copying ingest-profiles-api docs
cp -R ingest-profiles-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/video-cloud/ingest-profiles-api/reference/versions/v1
echo ${txtyel}copying oauth-api docs
cp -R oauth-api-dev-docs/v3/doc/ ../BCL-developer-docs/en/video-cloud/oauth-api/reference/versions/v3
cp -R oauth-api-dev-docs/v4/doc/ ../BCL-developer-docs/en/video-cloud/oauth-api/reference/versions/v4
echo ${txtyel}copying oauth-api docs to perform
cp -R oauth-api-dev-docs/v3/doc/ ../BCL-developer-docs/en/perform/oauth-api/reference/versions/v3
cp -R oauth-api-dev-docs/v4/doc/ ../BCL-developer-docs/en/perform/oauth-api/reference/versions/v4
echo ${txtyel}copying delivery-system-api docs
cp -R delivery-system-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/video-cloud/concepts/delivery-system-api/references/v1
echo ${txtyel}copying delivery-system-api docs to perform
cp -R delivery-system-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/perform/concepts/delivery-system-api/references/v1
echo ${txtyel}copying player-management-api docs
cp -R player-management-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/video-cloud/player-management/reference/versions/v1
echo ${txtyel}copying player-management-api docs to perform
cp -R player-management-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/perform/player-management/reference/versions/v1
echo ${txtyel}copying playback-api docs
cp -R playback-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/video-cloud/playback-api/references/versions/v1
echo ${txtyel}copying policy-api docs
cp -R policy-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/video-cloud/policy-api/references/versions/v1
echo ${txtyel}copying once-ingest-api docs
cp -R once-ingest-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/once/references/ingest-api/versions/v1
echo ${txtyel}copying once-media-management-api docs
cp -R once-media-management-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/once/references/media-management-api/versions/v1
echo ${txtyel}copying once-status-api docs
cp -R once-status-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/once/references/status-api/versions/v1
echo ${txtyel}copying live-api docs
cp -R live-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/live/references/versions/v1
echo ${txtgrn}Finished!
echo ${txtrst}
