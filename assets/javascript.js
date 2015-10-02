var request = new XMLHttpRequest();

request.open('POST', 'https://policy.api.brightcove.com/v1/accounts/20318290001/policy_keys');

request.setRequestHeader('Authorization', 'Bearer {token}');
request.setRequestHeader('Content-Type', 'application/json');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'key-data': {
    'account-id': '123456789001',
    'allowed-domains': [
      'http://www.abc.com',
      'https://www.abc.com',
      'http://www.xyz.com',
      'https://www.xyz.com'
    ]
  }
};

request.send(JSON.stringify(body));