//Common testing requirement. If you are consuming an API in a sandbox/test region, uncomment this line of code ONLY for non production uses.
//System.Net.ServicePointManager.ServerCertificateValidationCallback = delegate { return true; };

//Be sure to run "Install-Package Microsoft.Net.Http" from your nuget command line.
using System;
using System.Net.Http;

var baseAddress = new Uri("https://policy.api.brightcove.com/v1/");

using (var httpClient = new HttpClient{ BaseAddress = baseAddress })
{

  httpClient.DefaultRequestHeaders.TryAddWithoutValidation("authorization", "Bearer {token}");


    using (var content = new StringContent("{  \"key-data\": {    \"account-id\": \"123456789001\",    \"allowed-domains\": [      \"http://www.abc.com\",      \"https://www.abc.com\",      \"http://www.xyz.com\",      \"https://www.xyz.com\"    ]  }}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PostAsync("accounts/{account_id}/policy_keys", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}