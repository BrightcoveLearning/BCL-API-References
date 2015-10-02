// NOTE: Uncommment following two lines for use in a Playground
// import XCPlayground
// XCPSetExecutionShouldContinueIndefinitely()

let url = NSURL(string: "https://policy.api.brightcove.com/v1/accounts/20318290001/policy_keys")!
let request = NSMutableURLRequest(URL: url)
request.HTTPMethod = "POST"
request.addValue("Bearer {token}", forHTTPHeaderField: "Authorization")
request.addValue("application/json", forHTTPHeaderField: "Content-Type")

request.HTTPBody = "{\n  \"key-data\": {\n    \"account-id\": \"123456789001\",\n    \"allowed-domains\": [\n      \"http://www.abc.com\",\n      \"https://www.abc.com\",\n      \"http://www.xyz.com\",\n      \"https://www.xyz.com\"\n    ]\n  }\n}".dataUsingEncoding(NSUTF8StringEncoding);

let session = NSURLSession.sharedSession()
let task = session.dataTaskWithRequest(request) { (data: NSData!, response: NSURLResponse!, error: NSError!) in

    if error != nil {
        // Handle error...
        return
    }

    println(error)
    println(response)
    println(NSString(data: data, encoding: NSUTF8StringEncoding))
}

task.resume()