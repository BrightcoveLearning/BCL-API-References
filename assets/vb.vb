Dim request = TryCast(System.Net.WebRequest.Create("https://policy.api.brightcove.com/v1/accounts/20318290001/policy_keys"), System.Net.HttpWebRequest)

request.Method = "POST"

request.Headers.Add("authorization", "Bearer {token}")
request.ContentType = "application/json"

Using writer = New System.IO.StreamWriter(request.GetRequestStream())
  Dim byteArray As Byte() = System.Text.Encoding.UTF8.GetBytes("{
  \""key-data\"": {
    \""account-id\"": \""123456789001\"",
    \""allowed-domains\"": [
      \""http://www.abc.com\"",
      \""https://www.abc.com\"",
      \""http://www.xyz.com\"",
      \""https://www.xyz.com\""
    ]
  }
}")
  request.ContentLength = byteArray.Length
  writer.Write(byteArray)
  writer.Close()
End Using
Dim responseContent As String
Using response = TryCast(request.GetResponse(), System.Net.HttpWebResponse)
  Using reader = New System.IO.StreamReader(response.GetResponseStream())
    responseContent = reader.ReadToEnd()
  End Using
End Using