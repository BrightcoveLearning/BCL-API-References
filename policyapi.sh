txtrst=$(tput sgr0) # Text reset
txtyel=$(tput setaf 7) # Yellow
txtgrn=$(tput setaf 6) # Green
txtred=$(tput setaf 9) # red
echo ${txtyel}copying policy-api src
cp -R policy-api/ policy-api-dev-docs/
cd policy-api
echo ${txtyel}generating docs for policy-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template
cd ../policy-api-dev-docs
echo ${txtyel}generating docs for policy-api-dev-docs
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v1
cd ..
echo ${txtyel}copying policy-api docs
cp -R policy-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/video-cloud/policy-api/references/versions/v1
echo ${txtgrn}Finished!
echo ${txtrst}
