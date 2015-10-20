// create access token

/**
 * @api {post} /access_token Create Access Token
 * @apiName Create Access Token
 * @apiGroup Access Token
 * @apiVersion 1.0.0
 *
 * @apiDescription create a temporary access token for an API request
 *
 * @apiHeader {String} Content-Type Content-Type: application/x-www-form-urlencoded
 * @apiHeader {String} Authorization Authorization: Basic client_id:client_secret (the "client_id:client_secret" string must be BASE64-encoded; see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (URL Parameters) {String="client_credentials"} grant_type always equal to "client_credentials"
 *
 * @apiParamExample {Url} Create Access Token Example:
 *     https://oauth.brightcove.com/v3/access_token?grant_type=client_credentials
 *
 * @apiSuccess (Response Fields) {String} access_token the access token
 * @apiSuccess (Response Fields) {Number} expires_in how long before the token expires (seconds)
 * @apiSuccess (Response Fields) {String} type the token type - always "Bearer"
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 201 Created
 *    {
 *        access_token: "AM_b5kQ7QSXyFHzuYhBNuKGcQ6ZIoEgD8NCUBz7KQMUigIGqXi4hiTnHSe_CDUh2Lxj1V9kvGrJL9QQivwoAwvJo6DUMHiaT86noZ7uqUmAJt3WlmKsk38gjcodR9wMlVTZCrhZ9n0OWTB5Fl5eWqyaFvHEik74Aflc-STmLUBYMXWr9WHCUDUwLwfqMgAbdJQOeYZUEw-BdzlO6rtyivjJw2sXaL7tNdbnlCIuoNpMcszIB6RX_QYQB5JLEh06hdztMcv6FyDl16mDcgqoquRcWTFkvgvW-46l9Vle3lxrjVuFxU-GdSWRt48Nwh2foGpYgusqgG4QRkQP-CWN3LUSCFn41P_WuR37W1p3QxcR4NaIwmzuOanhbQBhXU6mtLbEOcccN6NeMpKrytg45oG0Sf8hQzqAvSM57qaZcQc5rQjVmue53IXY_Zdvz-Fx74Mt9BDNki-IzO-Wi9VT7OK5mg3ZEAKOIR1nCZeWsJdt8Sf3u1P6iHHIq0iyJgcpRwswbm9acZu3GCb2DkZArUrViAwvOpYgvIHA7eqK-RLb3iaY3ia9rzNtlsG6pJFJ8XkD2c-51XIgl25pMOXtHUx0Q6aFbt3u58g",
 *        expires_in: 300
 *        token_type: "Bearer"
 *    }
 *
 * @apiError (Error 4xx) {json} invalid_client 400: credential is not valid
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 *
 * @apiErrorExample {json} 400 Error Response
 *    HTTP/1.1 400 Not Found
 *    {
 *        "error": "invalid_client",
 *        "error_description": "The &quot;client_id&quot; parameter is missing, does not name a client registration that is applicable for the requested call, or is not properly authenticated."
 *    }
 *
 *
 */

