txtrst=$(tput sgr0) # Text reset
txtyel=$(tput setaf 7) # Yellow
txtgrn=$(tput setaf 6) # Green
txtred=$(tput setaf 9) # red
echo ${txtyel}copying once-media-management-api src
cp -R once-media-management-api/ once-media-management-api-dev-docs/
cd once-media-management-api
echo ${txtyel}generating docs for once-media-management-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template
cd ../once-media-management-api-dev-docs
echo ${txtyel}generating docs for once-media-management-api-dev-docs
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v0
cd ..
echo ${txtyel}copying once-media-management-api docs
cp -R once-media-management-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/once/references/media-management-api/versions/v1
echo ${txtgrn}Finished!
echo ${txtrst}
