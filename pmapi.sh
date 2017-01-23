txtrst=$(tput sgr0) # Text reset
txtyel=$(tput setaf 7) # Yellow
txtgrn=$(tput setaf 6) # Green
txtred=$(tput setaf 9) # red
echo ${txtyel}copying player-management-api src
cp -R player-management-api/ player-management-api-dev-docs/
echo ${txtyel}Finished copying src files
echo ${txtred}Generating API docs...
cd player-management-api
echo ${txtyel}generating docs for player-management-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template
cd ../player-management-api-dev-docs
echo ${txtyel}generating docs for player-management-api-dev-docs
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-v0
echo ${txtgrn}finished generating docs
echo ${txtred}copying docs to Developer Docs directories....
cd ..
echo ${txtyel}copying player-management-api docs to video cloud
cp -R player-management-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/video-cloud/player-management/reference/versions/v1
echo ${txtyel}copying player-management-api docs to perform
cp -R player-management-api-dev-docs/v1/doc/ ../BCL-developer-docs/en/perform/player-management/reference/versions/v1
echo ${txtgrn}Finished!
echo ${txtrst}