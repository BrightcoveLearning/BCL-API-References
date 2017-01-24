txtrst=$(tput sgr0) # Text reset
txtyel=$(tput setaf 7) # Yellow
txtgrn=$(tput setaf 6) # Green
txtred=$(tput setaf 9) # red
echo ${txtyel}copying delivery-system-api src
cp -R delivery-system-api/ delivery-system-api-dev-docs/
cd delivery-system-api
echo ${txtyel}generating docs for delivery-system-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template
cd ../delivery-system-api-dev-docs
echo ${txtyel}generating docs for delivery-system-api-dev-docs
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v0
cd ..
echo ${txtyel}copying delivery-system-api docs
cp -R delivery-system-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/video-cloud/concepts/delivery-system-api/references/v1
echo ${txtyel}copying delivery-system-api docs to perform
cp -R delivery-system-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/perform/concepts/delivery-system-api/references/v1
echo ${txtgrn}Finished!
echo ${txtrst}
