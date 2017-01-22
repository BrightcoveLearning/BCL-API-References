txtrst=$(tput sgr0) # Text reset
txtyel=$(tput setaf 7) # Yellow
txtgrn=$(tput setaf 6) # Green
txtred=$(tput setaf 9) # red
echo ${txtyel}copying data-dollection-api src
cp -R data-collection-api/ data-collection-api-dev-docs/
echo ${txtyel}copying data-dollection-api-v1 src
cp -R data-collection-api/ data-collection-api-dev-docs-v1/
echo ${txtyel}Finished copying src files
echo ${txtred}Generating API docs...
cd data-collection-api
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
cd ..
echo ${txtyel}copying data-dollection-api docs
cp -R data-collection-api-dev-docs/v2/doc/ ../BCL-developer-docs/en/video-cloud/analytics-api/references/data-collection/v2
echo ${txtyel}copying data-dollection-api-v1 docs
cp -R data-collection-api-dev-docs-v1/v1/doc/ ../BCL-developer-docs/en/video-cloud/analytics-api/references/data-collection/v1
echo ${txtgrn}Finished!
echo ${txtrst}
