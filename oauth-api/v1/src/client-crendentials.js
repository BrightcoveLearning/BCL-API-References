// create client-credentials

/**
 * @api {post} /client_credentials Create Client Credentials
 * @apiName Create Client Credentials
 * @apiGroup Credentials
 * @apiVersion 3.0.0
 *
 * @apiDescription Create client credentials to use in getting an access token for one or more APIs
 * _Note: client credentials are permanent unless revoked, but you must save the client secret when you create it - it can never be retrieved again._
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: BC_TOKEN your_BC_TOKEN (see [Get BC_TOKEN](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-client-credentials.html#steps))
 *
 * @apiParam (Request Body Fields) {String} type always equal to `credential`
 * @apiParam (Request Body Fields) {Object[]} maximum_scope array of maps specifying the accounts and API operations for the credentials
 * @apiParam (Request Body Fields) {Object} maximum_scope.identity map defining the account and operations
 * @apiParam (Request Body Fields) {String="video-cloud-account","perform-account"} maximum_scope.identity.type the type of account
 * @apiParam (Request Body Fields) {String} maximum_scope.identity.account-id the account ID
 * @apiParam (Request Body Fields) {String[]} maximum_scope.identity.operations array of operations the credentials grant access to (see [Operations](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/api-operations.html))
 * @apiParam (Request Body Fields) {String} name name for the credentials
 * @apiParam (Request Body Fields) {String} description description for the credentials
 *
 * @apiParamExample {json} Create Credentials Example:
 *    {"type":"credential",
 *        "maximum_scope":[
 *        {"identity":{
 *            "type":"video-cloud-account",
 *            "account-id":57838016001},
 *            "operations":[
 *                "video-cloud/playlist/all",
 *                "video-cloud/video/all"
 *            ],
 *        "name":"SampleClient"
 *    }
 *
 * @apiSuccess (Response Fields) {String} name credential name
 * @apiSuccess (Response Fields) {String} name_html html version of credential name
 * @apiSuccess (Response Fields) {String} description credential description
 * @apiSuccess (Response Fields) {String} description_html html version of credential description
 * @apiSuccess (Response Fields) {String} type the type - currently always equals `credential`
 * @apiSuccess (Response Fields) {String} issued_to the email address of the account user issued to
 * @apiSuccess (Response Fields) {String} issued_user system id for user issued to
 * @apiSuccess (Response Fields) {String} redirect_url currently not used
 * @apiSuccess (Response Fields) {Boolean} trusted whether the client is trusted
 * @apiSuccess (Response Fields) {Boolean} revoked whether the credential is revoked
 * @apiSuccess (Response Fields) {DateString} expires_at when the credential expires
 * @apiSuccess (Response Fields) {DateString} issued_at when the credential was issued
 * @apiSuccess (Response Fields) {Object[]} maximum_scope array of maps specifying the accounts and API operations for the credentials
 * @apiSuccess (Response Fields) {Object} maximum_scope.identity map defining the account and operations
 * @apiSuccess (Response Fields) {String} maximum_scope.identity.type the type of account
 * @apiSuccess (Response Fields) {String} maximum_scope.identity.account-id the account ID
 * @apiSuccess (Response Fields) {String[]} maximum_scope.identity.operations array of operations the credentials grant access to (see [Operations](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/api-operations.html))
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 201 Created
 *    {
 *      "redirect_url": null,
 *      "maximum_scope": [
 *        {
 *          "identity": {
 *            "type": "video-cloud-account",
 *            "account-id": 57838016001
 *          },
 *          "operations": [
 *            "video-cloud/playlist/all",
 *            "video-cloud/video/all"
 *          ]
 *        }
 *      ],
 *      "name_html": "SampleClient",
 *      "issued_to": "rcrooks@brightcove.com",
 *      "trusted": null,
 *      "expires_at": null,
 *      "issued_at": "2015-10-02T13:59:07Z",
 *      "name": "SampleClient",
 *      "description_html": null,
 *      "revoked": null,
 *      "type": "credential",
 *      "client_secret": "client_secret_removed_for_security_reasons",
 *      "description": null,
 *      "client_id": "b744071a-3dc6-4e2a-9a8a-50beca8cf53f",
 *      "issued_user": 53255203001
 *    }
 *
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; The request does not carry authentication credentials sufficient to authorize the requested access.
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} BAD_VALUE 400: The JSON could not be parsed
 * @apiError (Error 4xx) {json} REFERENCE_ID_IN_USE 409: The specified reference id is already in use
 * @apiError (Error 4xx) {json} ILLEGAL_FIELD 409: Spelling error or other use of non-existent field
 * @apiError (Error 4xx) {json} VALIDATION_ERROR 409: the JSON data was not valid; error messages vary depending on the problem
 *
 * @apiErrorExample {json} 409 Error Response
 *    HTTP/1.1 401 Unauthorized
 *    {
 *      "error": "access_denied",
 *      "error_description": "The request does not carry authentication credentials sufficient to authorize the requested access."
 *    }
 *
 *
 */

// ingest media asset

 /**
 * @api {post} /accounts/:account_id/videos/:video_id/ingest-requests Ingest Media Asset
 * @apiName Ingest Media Asset
 * @apiGroup Ingest
 * @apiVersion 1.0.0
 *
 * @apiDescription Uploads a video, images, and/or text track (WebVTT files) and adds them to your media library
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {Number} video_id Video Cloud video ID; if this is a new video ingest, the ID will be the one returned by the _Create Video_ request
 * @apiParam (Request Body Fields) {Object} [master] the video master to be ingested
 * @apiParam (Request Body Fields) {String} [master.url] URL for the video source; required except for re-transcoding where a digital master has been archived, or you are adding images or text tracks to an existing video
 * @apiParam (Request Body Fields) {String} [profile] ingest profile to use for transcoding; if absent, account default profile will be used
 * @apiParam (Request Body Fields) {Object[]} [text_tracks] array of text_track maps
 * @apiParam (Request Body Fields) {String} text_tracks.url URL for a WebVTT file
 * @apiParam (Request Body Fields) {String} text_tracks.srclang ISO 639 2-letter (alpha-2) language code for the text tracks
 * @apiParam (Request Body Fields) {String="captions","subtitles","descriptions","chapters","metadata"} [text_tracks.kind="captions"] how the vtt file is meant to be used
 * @apiParam (Request Body Fields) {String} [text_tracks.label] user-readable title
 * @apiParam (Request Body Fields) {Boolean} [text_tracks.default] sets the default language for captions/subtitles
 * @apiParam (Request Body Fields) {Object} [poster] the video master to be ingested
 * @apiParam (Request Body Fields) {String} poster.url URL for the video poster image
 * @apiParam (Request Body Fields) {String} [poster.height] pixel height of the image
 * @apiParam (Request Body Fields) {String} [poster.width] pixel width of the image
 * @apiParam (Request Body Fields) {Object} [thumbnail] the video master to be ingested
 * @apiParam (Request Body Fields) {String} thumbnail.url URL for the video thumbnail image
 * @apiParam (Request Body Fields) {String} [thumbnail.height] pixel height of the image
 * @apiParam (Request Body Fields) {String} [thumbnail.width] pixel width of the image
 * @apiParam (Request Body Fields) {Boolean} [capture-images] whether poster and thumbnail should be captured during transcoding; defaults to `true` if the the profile has image renditions, `false` if it does not
 * @apiParam (Request Body Fields) {String[]} [callbacks] array of URLs that [notifications](http://docs.brightcove.com/en/video-cloud/media-management/guides/notifications.html) should be sent to
 *
 * @apiParamExample {json} Ingest Request Example:
 *    {
 *      "master": {"
 *          url": "http://host/master.mp4"
 *      },
 *      "profile": "high-resolution",
 *      "capture-images": "false",
 *      "poster": {
 *            "url": "http://learning-services-media.brightcove.com/images/for_video/Water-In-Motion-poster.png"
 *            "width": "640",
 *            "height": "360"
 *        },
 *        "thumbnail": {
 *            "url": "http://learning-services-media.brightcove.com/images/for_video/Water-In-Motion-thumbnail.png"
 *            "width": "160",
 *            "height": "90"
 *        },
 *        "capture-images": false,
 *        "text_tracks": [
 *            {
 *                "url": "http://learning-services-media.brightcove.com/captions/for_video/Water-in-Motion.vtt",
 *                "srclang": "en",
 *                "kind": "captions",
 *                "label": "EN",
 *                "default": true
 *            }
 *        ],
 *        "callbacks": [
 *            "http://solutions.brightcove.com/bcls/di-api/di-callbacks.php"
 *        ]
 *    }
 *
 * @apiSuccess (Response Fields) {String} id job id for the request
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *       "id":"c6926dcf-0978-4085-8afc-e578ccfbf742"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} INVALID_REQUEST 400: The following parameters of the request are missing, syntactically incorrect, or inconsistent with one another
 * @apiError (Error 4xx) {json} ENDPOINT_NOT_ALLOWED 400: The following parameters of the request are missing, syntactically incorrect, or inconsistent with one another
 * @apiError (Error 5xx) {json} SERVER_ERROR 500: Internal error, please try again later
 *
 * @apiErrorExample {json} 404 Error Response
 *     HTTP/1.1 404 Not Found
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 */

