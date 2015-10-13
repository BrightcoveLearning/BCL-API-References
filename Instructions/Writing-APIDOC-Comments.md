# APIDOC - Writing the APIDOC Comments

**Note: Since we are not running APIDOC on the actual API code files, the APIDOC comments are independent of the language used to create the API. It is recommended that you use `.js` files in all cases, but that is not required. See the [APIDOC Reference](http://apidocjs.com/) for information on the structure of comments in other languages. These instructions assume you will use JavaScript comments.**

## Files

You can use as many or as few `.js` files for the comments as you wish. You can use separate files for each API operation if you prefer. After some experimentation, I found that using a file for each operation group was most convenient.

## Groups

The groups are also arbitrary - you can have a separate group for each endpoint if you wish. I found that for some APIs, that resulted in what seemed like a confusing number of groups, so I tried to create logical groupings instead. For the CMS API, for instance, I created the following groups:

* Video
* Playlist
* Custom_Fields
* Folders
* Notifications

## API Operation Comment Blocks

Each API operation requires a comment block that starts like this:

```js
    // get videos (this kind of comment not parsed - I found it useful for finding blocks in long files)

    /**
     * @api {get} /accounts/:account_id/videos Get Videos
     * @apiName Get Videos
     * @apiGroup Video
     * @apiVersion 1.0.0
     *
     * @apiDescription Gets a page of video objects
     * ...
     * /
```

Every command to the parser begins with `@api` - below is a list of the essential parser commands, followed by a full example.

### @api

Sample:

    @api {get} /accounts/:account_id/video_fields Get Folders

"Get Folders" is the name that will appear in the sidenav

### @apiName

Should have the same value as the name of the operation you included at the end of the @api line:

    @apiName Get Folders

I think the template should be using @apiName to populate the sidenav - will try to fix that at some point

### @apiGroup

The api groups make up the main headings in the sidenav. For best results, use snake_case for group names, not spaces:

    @apiGroup Custom_Fields

### @apiVersion

The version of the API that first included this operation:
```
    @apiVersion 1.0.0
```
APIDOC expects the x.x.x format.

### @apiParam

Specify a path, URL, or request body parameter:
```
    // syntax
    @apiParam (group_name) {type} param description
    // example
    @apiParam (URL Parameters) {Number} [limit=10] number of items to return
```
* be sure to include group by type - I'm using these groups:
    - `Path Parameters`
    - `URL Parameters`
    - `Request Body Fields`
* param types:
    - {String}
    - {Url}
    - {Number}
    - {Boolean}
    - {Array}
    - {Object}
    - {DateString}
    - {String[]} array of strings
    - {Number[]} array of numbers
    - {Object[]} array of objects

* For enum types, allowable values are included in the type specification like this:
```
    {String="Red","Green","Blue"}
```
* [] around the param name indicate that it is optional
* default values are added to the param name like this:
```
    limit=10
    // or
    [fields="video_view"]
```
- param descriptions must not include: `" - "` either avoid it or use `&mdash;`
- for default value of [] must enclose that in "[]"
```
    @apiParam (Request Body Fields) {String[]} video_ids="[]" array of video id
```
### @apiParamExample (one allowed per operation)

* For requests that send no data, use the type `{Url}` and just show a sample request:
```
     @apiParamExample {Url} Search Example:
         https://cms.api.brightcove.com/v1/accounts/57838016001/videos?q=tags:nature,name:nature
```

* For requests that include data, show a sample request body:
```
     @apiParamExample {json} Create Video Example:
         {
             "name": "Moose Herd",
             "description": "Herd of moose grazing",
             "reference_id": "moose_2015_09_17",
             "tags": [
                 "nature",
                 "animals"
             ],
             "custom_fields": {
                 "topic": "wildlife",
                 "subtopic": "mammals"
             }
         }
```

### @apisuccess

Use to document response fields:

```
    // syntax
    @apiSuccess (group) {type} field description
    // example
    @apiSuccess (Response Fields) {String} id video id
```
* The only group I use is `Response Fields`
* Types are the same as for params
* enum values and default may *not* be included

### @apiSuccessExample (only one allowed per operation)


Use to show a real response:
```
    @apiSuccessExample {json} Success Response:
        HTTP/1.1 200 OK
        {
            "count": 2678
        }
```

### @apiError (optional, but use if you have info)

Syntax:
```
    @apiError (Error range) {json} MESSAGE STATUS: Detailed message or explanation.
```
Example:
```
    @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
```

### @apiErrorExample (optional, use if you have one)

Example:

```
    @apiErrorExample {json} 404 Error Response
        HTTP/1.1 404 Not Found
        [
            {
                "error_code": "RESOURCE_NOT_FOUND"
            }
        ]
```

### Full Sample

```
    // create policy

    /**
     * @api {post} /accounts/:account_id/policy_keys Create a Policy Key
     * @apiName Create a Policy Key
     * @apiGroup Policy
     * @apiVersion 1.0.0
     *
     * @apiDescription Create a new policy key to access the Playback API
     *
     * @apiHeader {String} Content-Type Content-Type: application/json
     * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
     *
     * @apiParam (Path Parameters) {String} account_id Video Cloud account ID
     * @apiParam (Request Body Fields (Concise Format)) {Object} key-data data for the policy key (used for concise format)
     * @apiParam (Request Body Fields (Concise Format)) {String} key-data.account-id Video Cloud account id
     * @apiParam (Request Body Fields (Concise Format)) {String[]} [key-data.allowed-domains] For domain restriction, the domains this key will work on (concise format)
     * @apiParam (Request Body Fields (Full Format)) {Object[]} policies an array of policy objects (required if using the full format rather than the concise format)
     * @apiParam (Request Body Fields (Full Format)) {Object} policies.pattern the logical pattern for specifying accounts or domains allowed or denied access to the Playback API with this key
     * @apiParam (Request Body Fields (Full Format)) {String} policies.pattern.logical-operator the logical operator is used to match accounts or domains; operators allowed are `=`, `!=`, `contains?`, and `not-contains?`; logical operators may be combined using `and` or `or`
     * @apiParam (Request Body Fields (Full Format)) {String="allow","deny"} policies.effect whether domains/accounts matching the pattern should be allowed or denied access to the Playback API
     *
     * @apiParamExample {json} Create Policy Request Body Examples:
     *     // concise format
     *     {
     *         "account-id": "8523",
     *         "allowed-domains": [
     *             "http://www.mysite.com",
     *             "https://secure.mysite.com"
     *         ]
     *     }
     *     // full format
     *     {
     *          "policies": [
     *              {
     *                  "pattern": {
     *                      "!=": [
     *                          "1752604059001"
     *                      ]
     *                  },
     *                  "effect": "deny"
     *              },
     *              {
     *                  "pattern": {
     *                      "not-contains?": [
     *                          [
     *                              "http://www.mysite.com",
     *                              "https://secure.mysite.com"
     *                          ],
     *                          "[request.domain]"
     *                      ]
     *                  },
     *                  "effect": "deny"
     *              }
     *          ]
     *      }
     *
     * @apiSuccess (Response Fields) {String} key_string the policy key string
     * @apiSuccess (Response Fields) {Object[]} policies array of policy maps
     * @apiSuccess (Response Fields) {Object} policies.pattern the logical pattern for specifying accounts or domains allowed or denied access to the Playback API with this key
     * @apiSuccess (Response Fields) {String} policies.pattern.logical-operator the logical operator is used to match accounts or domains; operators allowed are `=`, `!=`, `contains?`, and `not-contains?`; logical operators may be combined using `and` or `or`
     * @apiSuccess (Response Fields) {String} policies.effect whether domains/accounts matching the pattern should be allowed or denied access to the Playback API
     *
     * @apiSuccessExample {json} Success Response:
     *    HTTP/1.1 200 OK
     *    {
     *        "key-string": "BCpkADawqM0tR9WJhqqyg4t8NgSulRVnfHyh6cL_U0m7RaoIq19WWR-8EPiWY1ift8zHF6Z3sfTyuXv6LY8bfTAfvzVLb1TrwGTOBJGPwWJ9dJUkny7lUoN1ygk",
     *        "policies": [
     *            {
     *                "effect": "deny",
     *                "pattern": {
     *                    "!=": [
     *                        "[request.params.account-id],
     *                        "57838016001"
     *                    ]
     *                }
     *            }
     *        ]
     *    }
     *
     * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your policy key is correct
     * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
     * @apiError (Error 4xx) {json} NOT_AVAILABLE 400: The resource you are requesting is temporarily unavailable
     * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
     * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
     *
     * @apiErrorExample {json} 404 Error Response
     *     HTTP/1.1 404 Not Found
     *     [
     *         {
     *             "error_code": "RESOURCE_NOT_FOUND"
     *         }
     *     ]
     *
     *
     */

```

