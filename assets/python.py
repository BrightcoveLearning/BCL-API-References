from urllib2 import Request, urlopen

values = """
  {
    "key-data": {
      "account-id": "123456789001",
      "allowed-domains": [
        "http://www.abc.com",
        "https://www.abc.com",
        "http://www.xyz.com",
        "https://www.xyz.com"
      ]
    }
  }
"""

headers = {
  'Authorization': 'Bearer {token}',
  'Content-Type': 'application/json'
}
request = Request('https://policy.api.brightcove.com/v1/accounts/20318290001/policy_keys', data=values, headers=headers)

response_body = urlopen(request).read()
print response_body