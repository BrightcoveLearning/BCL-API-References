txtrst=$(tput sgr0) # Text reset
txtyel=$(tput setaf 7) # Yellow
txtgrn=$(tput setaf 6) # Green
txtred=$(tput setaf 9) # red
echo ${txtyel}copying playback-api src
cp -R playback-api/ playback-api-dev-docs/
cd playback-api
echo ${txtyel}generating docs for playback-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template
cd ../playback-api-dev-docs
echo ${txtyel}generating docs for playback-api-dev-docs
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v1
cd ..
echo ${txtyel}copying playback-api docs
cp -R playback-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/video-cloud/playback-api/references/versions/v1
echo ${txtgrn}Finished!
echo ${txtrst}
