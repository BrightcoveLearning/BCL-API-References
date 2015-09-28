// get engagement report by account

/**
 * @api {get} /engagement/accounts/:account_id Get Account Engagement
 * @apiName Get Account Engagement
 * @apiGroup Engagement
 * @apiVersion 1.0.0
 *
 * @apiDescription Get a summary report of engagement for the account. Note:
 * 1. Engagement reports are only available for periods within the past 32 days. Requests outside that range will return an error
 * 2. The only parameters supported for Engagement reports are `from` and `to`
 * 3. Engagement reports are available for single accounts only - reports on multiple accounts will not work
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 * @apiHeader {String} Accept-Encoding Accept-Encoding: gzip (optional)
 *
 * @apiParam (Path Parameters) {String} account_id a Video Cloud account ID
 * @apiparam (URL Parameters) {String} [from="(30 days before now)"] Start time for the period covered by the report &mdash; epoch time in milliseconds or a date in the format `yyyy-mm-dd` (such as `2013-09-26`)
 * @apiparam (URL Parameters) {String} [to="now"] End time for the period covered by the report &mdash; epoch time in milliseconds or a date in the format `yyyy-mm-dd` (such as `2013-09-26`)
 *
 * @apiParamExample {String} Video Dimension Report Example:
 *     https://analytics.api.brightcove.com/v1/engagement/accounts/20318290001
 *
 * @apiSuccess (Response Fields) {Object} timeline detailed engagement data
 * @apiSuccess (Response Fields) {String} timeline.type type of data in the `values` array
 * @apiSuccess (Response Fields) {Number[]} timeline.values array of views in each 100th part of video duration
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "timeline":{
 *            "type":"percentile",
 *            "values":[6153.16,5850.24,5581.33,5338.86,5153.62,5022.97,4912.26,4807.87,4715.83,4646.73,4603.09,4571.91,4523.94,4487.29,4445.27,4407.97,4380.57,4350.83,4305.49,4243.03,4211.5,4167.62,4124.87,4080.44,4064.16,4018.67,3985,3944.24,3916.86,3880.34,3840.7,3821.87,3795.75,3774.92,3750.34,3732.99,3703.09,3686.11,3661.87,3650.8,3610.64,3584.09,3545.07,3516.15,3491.22,3450.7,3412.2,3389.83,3387.64,3364.07,3361.53,3350.72,3337.98,3320.95,3287.75,3273.17,3241.1,3209.6,3176.8,3173.18,3138.19,3125.17,3095.23,3079.62,3058.27,3039.31,3009.82,2977.99,2964.75,2955.75,2932.5,2914.99,2902.7,2880.58,2881.75,2863.65,2849.35,2819.21,2793.2,2769.22,2773.77,2758.13,2764.13,2742.38,2736.89,2724.19,2700.26,2681.57,2653.3,2635.27,2613.04,2580.96,2551.63,2536.11,2497.8,2453.68,2399.81,2358.69,2288.65,2090.52]
 *        }
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
 */


 // get engagement report by player

/**
 * @api {get} /engagement/accounts/:account_id/players/:player_id Get Account Engagement
 * @apiName Get Account Engagement
 * @apiGroup Engagement
 * @apiVersion 1.0.0
 *
 * @apiDescription Get a summary report of engagement for a player. Note:
 * 1. Engagement reports are only available for periods within the past 32 days. Requests outside that range will return an error
 * 2. The only parameters supported for Engagement reports are `from` and `to`
 * 3. Engagement reports are available for single accounts only - reports on multiple accounts will not work
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 * @apiHeader {String} Accept-Encoding Accept-Encoding: gzip (optional)
 *
 * @apiParam (Path Parameters) {String} account_id a Video Cloud account ID
 * @apiParam (Path Parameters) {String} player_id a Video Cloud player ID
 * @apiparam (URL Parameters) {String} [from="(30 days before now)"] Start time for the period covered by the report &mdash; epoch time in milliseconds or a date in the format `yyyy-mm-dd` (such as `2013-09-26`)
 * @apiparam (URL Parameters) {String} [to="now"] End time for the period covered by the report &mdash; epoch time in milliseconds or a date in the format `yyyy-mm-dd` (such as `2013-09-26`)
 *
 * @apiParamExample {String} Video Dimension Report Example:
 *     https://analytics.api.brightcove.com/v1/engagement/accounts/20318290001
 *
 * @apiSuccess (Response Fields) {Object} timeline detailed engagement data
 * @apiSuccess (Response Fields) {String} timeline.type type of data in the `values` array
 * @apiSuccess (Response Fields) {Number[]} timeline.values array of views in each 100th part of video duration
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "timeline":{
 *            "type":"percentile",
 *            "values":[6153.16,5850.24,5581.33,5338.86,5153.62,5022.97,4912.26,4807.87,4715.83,4646.73,4603.09,4571.91,4523.94,4487.29,4445.27,4407.97,4380.57,4350.83,4305.49,4243.03,4211.5,4167.62,4124.87,4080.44,4064.16,4018.67,3985,3944.24,3916.86,3880.34,3840.7,3821.87,3795.75,3774.92,3750.34,3732.99,3703.09,3686.11,3661.87,3650.8,3610.64,3584.09,3545.07,3516.15,3491.22,3450.7,3412.2,3389.83,3387.64,3364.07,3361.53,3350.72,3337.98,3320.95,3287.75,3273.17,3241.1,3209.6,3176.8,3173.18,3138.19,3125.17,3095.23,3079.62,3058.27,3039.31,3009.82,2977.99,2964.75,2955.75,2932.5,2914.99,2902.7,2880.58,2881.75,2863.65,2849.35,2819.21,2793.2,2769.22,2773.77,2758.13,2764.13,2742.38,2736.89,2724.19,2700.26,2681.57,2653.3,2635.27,2613.04,2580.96,2551.63,2536.11,2497.8,2453.68,2399.81,2358.69,2288.65,2090.52]
 *        }
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
 */