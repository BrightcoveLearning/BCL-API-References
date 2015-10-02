require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "key-data": {
    "account-id": "123456789001",
    "allowed-domains": [
      "http://www.abc.com",
      "https://www.abc.com",
      "http://www.xyz.com",
      "https://www.xyz.com"
    ]
  }
}'

headers = {
  :authorization => 'Bearer {token}',
  :content_type => 'application/json'
}

response = RestClient.post 'https://policy.api.brightcove.com/v1/accounts/20318290001/policy_keys', values, headers
puts response