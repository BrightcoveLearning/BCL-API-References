// Maven : Add these dependecies to your pom.xml (java6+)
// <dependency>
//     <groupId>org.glassfish.jersey.core</groupId>
//     <artifactId>jersey-client</artifactId>
//     <version>2.8</version>
// </dependency>
// <dependency>
//     <groupId>org.glassfish.jersey.media</groupId>
//     <artifactId>jersey-media-json-jackson</artifactId>
//     <version>2.8</version>
// </dependency>

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.MediaType;

Client client = ClientBuilder.newClient();
Entity payload = Entity.json("{  'key-data': {    'account-id': '123456789001',    'allowed-domains': [      'http://www.abc.com',      'https://www.abc.com',      'http://www.xyz.com',      'https://www.xyz.com'    ]  }}");
Response response = client.target("https://policy.api.brightcove.com/v1/accounts/{account_id}/policy_keys")
  .request(MediaType.APPLICATION_JSON_TYPE)
  .header("Authorization", "Bearer {token}")
  .post(payload);

System.out.println("status: " + response.getStatus());
System.out.println("headers: " + response.getHeaders());
System.out.println("body:" + response.readEntity(String.class));