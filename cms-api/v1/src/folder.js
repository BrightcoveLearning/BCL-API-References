// get folders

/**
 * @api {get} /accounts/:account_id/video_fields Get Folders
 * @apiName Get Folders
 * @apiGroup Folders
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets list of folders for the account
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {Number} account_id Video Cloud account ID.
 *
 * @apiParamExample {String} Get Custom Fields Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/folders
 *
 * @apiSuccess (Response Fields) {String} account_id Video Cloud account id
 * @apiSuccess (Response Fields) {DateString} create_at date/time folder created
 * @apiSuccess (Response Fields) {String} id system id for the folder
 * @apiSuccess (Response Fields) {String} name folder name
 * @apiSuccess (Response Fields) {String} account_id Video Cloud account id
 * @apiSuccess (Response Fields) {String} account_id Video Cloud account id
 * @apiSuccess (Response Fields) {String} account_id Video Cloud account id
 * @apiSuccess (Response Fields) {String} account_id Video Cloud account id
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *    [
 *        {
 *            "account_id": "57838016001",
 *            "created_at": "2015-09-21T17:09:51.375Z",
 *            "id": "560039dfe4b0471bef470c47",
 *            "name": "birds",
 *            "sort_name": "birds",
 *            "updated_at": "2015-09-21T17:11:23.839Z",
 *            "version": 30,
 *            "video_count": 0
 *        },
 *        {
 *            "account_id": "57838016001",
 *            "created_at": "2015-09-21T17:09:57.260Z",
 *            "id": "560039e5e4b0e69e4b01cacd",
 *            "name": "fish",
 *            "sort_name": "fish",
 *            "updated_at": "2015-09-21T17:12:08.955Z",
 *            "version": 38,
 *            "video_count": 0
 *        },
 *        {
 *            "account_id": "57838016001",
 *            "created_at": "2015-09-21T17:10:09.422Z",
 *            "id": "560039f1e4b0e69e4b01cad3",
 *            "name": "water",
 *            "sort_name": "water",
 *            "updated_at": "2015-09-21T17:12:09.037Z",
 *            "version": 26,
 *            "video_count": 26
 *        }
 *    ]
 *
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
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
