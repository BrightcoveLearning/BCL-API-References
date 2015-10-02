var request = require('request');

request({
  method: 'POST',
  url: 'https://policy.api.brightcove.com/v1/accounts/20318290001/policy_keys',
  headers: {
    'Authorization': 'Bearer {token}',
    'Content-Type': 'application/json'
  },
  body: "{  \"key-data\": {    \"account-id\": \"123456789001\",    \"allowed-domains\": [      \"http://www.abc.com\",      \"https://www.abc.com\",      \"http://www.xyz.com\",      \"https://www.xyz.com\"    ]  }}"
}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});