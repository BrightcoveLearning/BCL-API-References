txtrst=$(tput sgr0) # Text reset
txtyel=$(tput setaf 7) # Yellow
txtgrn=$(tput setaf 6) # Green
txtred=$(tput setaf 9) # red
echo ${txtyel}copying once-ingest-api src
cp -R once-ingest-api/ once-ingest-api-dev-docs/
cd once-ingest-api
echo ${txtyel}generating docs for once-ingest-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template
cd ../once-ingest-api-dev-docs
echo ${txtyel}generating docs for once-ingest-api-dev-docs
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v0
cd ..
echo ${txtyel}copying once-ingest-api docs
cp -R once-ingest-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/once/references/ingest-api/versions/v1
echo ${txtgrn}Finished!
echo ${txtrst}
