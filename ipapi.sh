txtrst=$(tput sgr0) # Text reset
txtyel=$(tput setaf 7) # Yellow
txtgrn=$(tput setaf 6) # Green
txtred=$(tput setaf 9) # red
echo ${txtyel}copying ingest-profiles-api src
cp -R ingest-profiles-api/ ingest-profiles-api-dev-docs/
echo ${txtyel}Finished copying src files
echo ${txtred}Generating API docs...
cd ingest-profiles-api
echo ${txtyel}generating docs for ingest-profiles-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template
cd ../ingest-profiles-api-dev-docs
echo ${txtyel}generating docs for ingest-profiles-api-dev-docs
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v1
echo ${txtgrn}finished generating docs
echo ${txtred}copying docs to Developer Docs directories....
cd ..
cp -R ingest-profiles-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/video-cloud/ingest-profiles-api/reference/versions/v1
echo ${txtgrn}Finished!
echo ${txtrst}
