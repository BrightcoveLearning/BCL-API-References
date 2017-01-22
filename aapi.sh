txtrst=$(tput sgr0) # Text reset
txtyel=$(tput setaf 7) # Yellow
txtgrn=$(tput setaf 6) # Green
txtred=$(tput setaf 9) # red
echo ${txtred}Copying Analytics API src files to the -dev-docs folders
echo ${txtyel}copying analytics-api src
cp -R analytics-api/ analytics-api-dev-docs/
echo ${txtyel}Finished copying src files
echo ${txtred}Generating API docs...
cd analytics-api
echo ${txtyel}generating docs for analytics-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template
cd ../analytics-api-dev-docs
echo ${txtyel}generating docs for analytics-api-dev-docs
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v1
echo ${txtgrn}finished generating docs
echo ${txtred}copying docs to Developer Docs directories....
cd ..
echo ${txtyel}copying analytics-api docs
cp -R analytics-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/video-cloud/analytics-api/references/versions/v1
echo ${txtgrn}Finished!
echo ${txtrst}
