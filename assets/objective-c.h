NSURL *URL = [NSURL URLWithString:@"https://policy.api.brightcove.com/v1/accounts/20318290001/policy_keys"];

NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:URL];
[request setHTTPMethod:@"POST"];

[request setValue:@"Bearer {token}" forHTTPHeaderField:@"Authorization"];
[request setValue:@"application/json" forHTTPHeaderField:@"Content-Type"];

[request setHTTPBody:[@"{\n  \"key-data\": {\n    \"account-id\": \"123456789001\",\n    \"allowed-domains\": [\n      \"http://www.abc.com\",\n      \"https://www.abc.com\",\n      \"http://www.xyz.com\",\n      \"https://www.xyz.com\"\n    ]\n  }\n}" dataUsingEncoding:NSUTF8StringEncoding]];

NSURLSession *session = [NSURLSession sharedSession];
NSURLSessionDataTask *task = [session dataTaskWithRequest:request
                                        completionHandler:
                              ^(NSData *data, NSURLResponse *response, NSError *error) {

                                  if (error) {
                                      // Handle error...
                                      return;
                                  }

                                  if ([response isKindOfClass:[NSHTTPURLResponse class]]) {
                                      NSLog(@"Response HTTP Status code: %ld\n", (long)[(NSHTTPURLResponse *)response statusCode]);
                                      NSLog(@"Response HTTP Headers:\n%@\n", [(NSHTTPURLResponse *)response allHeaderFields]);
                                  }

                                  NSString* body = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
                                  NSLog(@"Response Body:\n%@\n", body);
                              }];
[task resume];