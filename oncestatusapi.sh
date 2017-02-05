txtrst=$(tput sgr0) # Text reset
txtyel=$(tput setaf 7) # Yellow
txtgrn=$(tput setaf 6) # Green
txtred=$(tput setaf 9) # red
echo ${txtyel}copying once-status-api src
cp -R once-status-api/ once-status-api-dev-docs/
cd once-status-api
echo ${txtyel}generating docs for once-status-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template
cd ../once-status-api-dev-docs
echo ${txtyel}generating docs for once-status-api-dev-docs
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v0
cd ..
echo ${txtyel}copying once-status-api docs
cp -R once-status-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/once/references/status-api/versions/v1
echo ${txtgrn}Finished!
echo ${txtrst}
