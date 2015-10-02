import groovyx.net.http.RESTClient
import static groovyx.net.http.ContentType.JSON
import groovy.json.JsonSlurper
import groovy.json.JsonOutput

@Grab (group = 'org.codehaus.groovy.modules.http-builder', module = 'http-builder', version = '0.5.0')
def client = new RESTClient("https://policy.api.brightcove.com/v1")

def emptyHeaders = [:]
emptyHeaders."Authorization" = "Bearer {token}"
emptyHeaders."Content-Type" = "application/json"

def jsonObj = new JsonSlurper().parseText('{
  "key-data": {
    "account-id": "123456789001",
    "allowed-domains": [
      "http://www.abc.com",
      "https://www.abc.com",
      "http://www.xyz.com",
      "https://www.xyz.com"
    ]
  }
}')
response = client.post( path : "/accounts/{account_id}/policy_keys",
                        body : jsonObj,
                        headers: emptyHeaders,
                        contentType : JSON )

println("Status:" + response.status)

if (response.data) {
  println("Content Type: " + response.contentType)
  println("Body:\n" + JsonOutput.prettyPrint(JsonOutput.toJson(response.data)))
}