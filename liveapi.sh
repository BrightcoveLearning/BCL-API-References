txtrst=$(tput sgr0) # Text reset
txtyel=$(tput setaf 7) # Yellow
txtgrn=$(tput setaf 6) # Green
txtred=$(tput setaf 9) # red
echo ${txtyel}copying live-api src
cp -R live-api/ live-api-dev-docs/
cd live-api
echo ${txtyel}generating docs for live-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template
cd ../live-api-dev-docs
echo ${txtyel}generating docs for live-api-dev-docs
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v2
cd ..
echo ${txtyel}copying live-api docs
cp -R live-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/live/references/versions/v1
echo ${txtgrn}Finished!
echo ${txtrst}
