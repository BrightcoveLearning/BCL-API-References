<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://policy.api.brightcove.com/v1/accounts/20318290001/policy_keys");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_POST, TRUE);

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"key-data\": {
    \"account-id\": \"123456789001\",
    \"allowed-domains\": [
      \"http://www.abc.com\",
      \"https://www.abc.com\",
      \"http://www.xyz.com\",
      \"https://www.xyz.com\"
    ]
  }
}");

curl_setopt($ch, CURLOPT_HTTPHEADER, array(
		"Authorization: Bearer {token}",
		"Content-Type: application/json",
	));

$response = curl_exec($ch);
curl_close($ch);

var_dump($response);