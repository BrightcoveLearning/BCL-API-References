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
 * @apiSuccess (Response Fields) {Object} key-data map of key data prescribing the policy
 * @apiSuccess (Response Fields) {String} account-id the Video Cloud account id
 * @apiSuccess (Response Fields) {Object[]} policies array of policy maps
 * @apiSuccess (Response Fields) {Object} policies.pattern the logical pattern for specifying accounts or domains allowed or denied access to the Playback API with this key
 * @apiSuccess (Response Fields) {String} policies.pattern.logical-operator the logical operator is used to match accounts or domains; operators allowed are `=`, `!=`, `contains?`, and `not-contains?`; logical operators may be combined using `and` or `or`
 * @apiSuccess (Response Fields) {String} policies.effect whether domains/accounts matching the pattern should be allowed or denied access to the Playback API
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "key-data": {
 *            "account-id": "57838016001"
 *        },
 *        "key-string": "BCpkADawqM0NK0Rq8n6sEQyWykemrqeSmIQqqVt3XBrdpl8TYlvqN3hwKphBJRnkPgx6WAbozCW_VgTOBCNf1AQRh8KnmXSXfveQalRc5-pyNlSod5XzP99If2U",
 *        "policies": [
 *            {
 *                "effect": "deny",
 *                "pattern": {
 *                    "!=": [
 *                        "[request.params.account-id]",
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

// get policy

/**
 * @api {get} /accounts/:account_id/policy_keys/:key_string Get Policy
 * @apiName Get Policy
 * @apiGroup Policy
 * @apiVersion 1.0.0
 *
 * @apiDescription Get a policy key associated with a policy key string
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID
 * @apiParam (Path Parameters) {String} key_string the key string for the policy
 *
 * @apiParamExample {Url} Get Policy Example:
 *    https://policy.api.brightcove.com/v1/accounts/57838016001/policy_keys/BCpkADawqM0tR9WJhqqyg4t8NgSulRVnfHyh6cL_U0m7RaoIq19WWR-8EPiWY1ift8zHF6Z3sfTyuXv6LY8bfTAfvzVLb1TrwGTOBJGPwWJ9dJUkny7lUoN1ygk
 *
 * @apiSuccess (Response Fields) {String} key_string the policy key
 * @apiSuccess (Response Fields) {Object} key-data map of key data prescribing the policy
 * @apiSuccess (Response Fields) {String} account-id the Video Cloud account id
 * @apiSuccess (Response Fields) {Object[]} policies array of policy maps
 * @apiSuccess (Response Fields)) {Object} policies.pattern the logical pattern for specifying accounts or domains allowed or denied access to the Playback API with this key
 * @apiSuccess (Response Fields)) {String} policies.pattern.logical-operator the logical operator is used to match accounts or domains; operators allowed are `=`, `!=`, `contains?`, and `not-contains?`; logical operators may be combined using `and` or `or`
 * @apiSuccess (Response Fields)) {String} policies.effect whether domains/accounts matching the pattern should be allowed or denied access to the Playback API
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "key-data": {
 *            "account-id": "57838016001"
 *        },
 *        "key-string": "BCpkADawqM0NK0Rq8n6sEQyWykemrqeSmIQqqVt3XBrdpl8TYlvqN3hwKphBJRnkPgx6WAbozCW_VgTOBCNf1AQRh8KnmXSXfveQalRc5-pyNlSod5XzP99If2U",
 *        "policies": [
 *            {
 *                "effect": "deny",
 *                "pattern": {
 *                    "!=": [
 *                        "[request.params.account-id]",
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
