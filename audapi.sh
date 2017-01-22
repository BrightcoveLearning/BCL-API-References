txtrst=$(tput sgr0) # Text reset
txtyel=$(tput setaf 7) # Yellow
txtgrn=$(tput setaf 6) # Green
txtred=$(tput setaf 9) # red
echo ${txtyel}copying audience-api src
cp -R audience-api/ audience-api-dev-docs/
cd audience-api
echo ${txtyel}generating docs for audience-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template
cd ../audience-api-dev-docs
echo ${txtyel}generating docs for audience-api-dev-docs
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v1
cd ..
echo ${txtyel}copying audience-api docs
cp -R audience-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/video-cloud/audience-api/references/versions/v1
echo ${txtgrn}Finished!
echo ${txtrst}
