txtrst=$(tput sgr0) # Text reset
txtyel=$(tput setaf 7) # Yellow
txtgrn=$(tput setaf 6) # Green
txtred=$(tput setaf 9) # red
echo ${txtyel}copying cms-api src
cp -R cms-api/ cms-api-dev-docs/
cd cms-api
echo ${txtyel}generating docs for cms-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template
cd ../cms-api-dev-docs
echo ${txtyel}generating docs for cms-api-dev-docs
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v1
cd ..
echo ${txtyel}copying cms-api docs
cp -R cms-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/video-cloud/cms-api/references/cms-api/versions/v1
echo ${txtgrn}Finished!
echo ${txtrst}
