txtrst=$(tput sgr0) # Text reset
txtyel=$(tput setaf 7) # Yellow
txtgrn=$(tput setaf 6) # Green
txtred=$(tput setaf 9) # red
echo ${txtyel}copying di-api src
cp -R di-api/ di-api-dev-docs/
cd di-api
echo ${txtyel}generating docs for di-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template
cd ../di-api-dev-docs
echo ${txtyel}generating docs for di-api-dev-docs
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v1
cd ..
echo ${txtyel}copying di-api docs
cp -R di-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/video-cloud/di-api/reference/versions/v1
echo ${txtgrn}Finished!
echo ${txtrst}
