curl --include \
     --request POST \
     --header "Authorization: Bearer {token}" \
     --header "Content-Type: application/json" \
     --data-binary "{
    \"key-data\": {
        \"account-id\": \"123456789001\",
        \"allowed-domains\": [
            \"http://www.abc.com\",
            \"https://www.abc.com\",
            \"http://www.xyz.com\",
            \"https://www.xyz.com\"
        ]
    }
}" \
'https://policy.api.brightcove.com/v1/accounts/20318290001/policy_keys'