txtrst=$(tput sgr0) # Text reset
txtyel=$(tput setaf 7) # Yellow
txtgrn=$(tput setaf 6) # Green
txtred=$(tput setaf 9) # red
echo ${txtyel}copying oauth-api src
cp -R oauth-api/ oauth-api-dev-docs/
cd oauth-api
echo ${txtyel}generating docs for oauth-api
apidoc -i v3/src/  -f .js -o v3/doc/ -t ../template
apidoc -i v4/src/  -f .js -o v4/doc/ -t ../template
cd ../oauth-api-dev-docs
echo ${txtyel}generating docs for oauth-api-dev-docs
apidoc -i v4/src/  -f .js -o v3/doc/ -t ../template-v0
apidoc -i v4/src/  -f .js -o v4/doc/ -t ../template-v0
cd ..
echo ${txtyel}copying oauth-api docs
cp -R oauth-api-dev-docs/v3/doc/ ../BCL-developer-docs/en/video-cloud/oauth-api/reference/versions/v3
cp -R oauth-api-dev-docs/v4/doc/ ../BCL-developer-docs/en/video-cloud/oauth-api/reference/versions/v4
echo ${txtyel}copying oauth-api docs to perform
cp -R oauth-api-dev-docs/v3/doc/ ../BCL-developer-docs/en/perform/oauth-api/reference/versions/v3
cp -R oauth-api-dev-docs/v4/doc/ ../BCL-developer-docs/en/perform/oauth-api/reference/versions/v4
echo ${txtgrn}Finished!
echo ${txtrst}
