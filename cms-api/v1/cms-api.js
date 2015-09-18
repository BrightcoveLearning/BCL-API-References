/**
 * @api {get} /accounts/:account_id/videos Get Videos
 * @apiName Get Videos
 * @apiGroup Video
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets a page of video objects
 * for the account
 *
 * @apiHeader {string} Content-Type Content-Type: application/json
 * @apiHeader {string} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {number} account_id Video Cloud account ID.
 *
 * @apiparam (URL Parameters) {number} [limit=10] number of videos to return
 * @apiparam (URL Parameters) {number} [offset=0] number of videos to skip in the response
 * @apiparam (URL Parameters) {string} [q] search string - see[search guide](http://docs.brightcove.com/en/video-cloud/cms-api/guides/search-videos.html#combinesearchcriteria) for details
 * @apiparam (URL Parameters) {string} [sort] field to sort results by; if absent and there is a search string, results are sorted by relevance or if there is no search string, results are sorted by updated_at descending
 *
 * @apiParamExample {string} Search Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos?q=tags:nature,name:nature
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *     [
 *         {
 *              "account_id": "1752604059001",
 *              "complete": true,
 *              "created_at": "2015-09-17T16:08:37.108Z",
 *              "cue_points": [],
 *              "custom_fields": {},
 *              "description": null,
 *              "digital_master_id": "4492154733001",
 *              "duration": 155573,
 *              "economics": "AD_SUPPORTED",
 *              "folder_id": null,
 *              "geo": null,
 *              "id": "4492075574001",
 *              "images": {
 *                  "poster": {
 *                      "asset_id": "4492153571001",
 *                      "sources": [
 *                          {
 *                              "src": "https://bcsecure01-a.akamaihd.net/6/1752604059001/201509/3164/1752604059001_4492153571001_4492075574001-vs.jpg?pubId=1752604059001&videoId=4492075574001"
 *                          }
 *                      ],
 *                      "src": "https://bcsecure01-a.akamaihd.net/6/1752604059001/201509/3164/1752604059001_4492153571001_4492075574001-vs.jpg?pubId=1752604059001&videoId=4492075574001"
 *                  },
 *                  "thumbnail": {
 *                      "asset_id": "4492154714001",
 *                      "sources": [
 *                          {
 *                              "src": "https://bcsecure01-a.akamaihd.net/6/1752604059001/201509/3164/1752604059001_4492154714001_4492075574001-th.jpg?pubId=1752604059001&videoId=4492075574001"
 *                          }
 *                      ],
 *                      "src": "https://bcsecure01-a.akamaihd.net/6/1752604059001/201509/3164/1752604059001_4492154714001_4492075574001-th.jpg?pubId=1752604059001&videoId=4492075574001"
 *                  }
 *              },
 *              "link": null,
 *              "long_description": null,
 *              "name": "sea_marvels.mp4",
 *              "reference_id": null,
 *              "schedule": null,
 *              "sharing": null,
 *              "state": "ACTIVE",
 *              "tags": [],
 *              "text_tracks": [
 *                  {
 *                      "asset_id": "0cbd3425-8e94-46e6-9a10-a0d4491d4893",
 *                      "default": true,
 *                      "id": "c9001cee-d7f9-4b67-955c-9764cfc3d1f4",
 *                      "kind": "captions",
 *                      "label": null,
 *                      "mime_type": "text/vtt",
 *                      "sources": [
 *                          {
 *                              "src": "https://bcsecure01-a.akamaihd.net/3/1752604059001/201509/3164/1752604059001_0cbd3425-8e94-46e6-9a10-a0d4491d4893_intro-vcs.vtt?pubId=1752604059001&videoId=4492075574001"
 *                          }
 *                      ],
 *                      "src": "https://bcsecure01-a.akamaihd.net/3/1752604059001/201509/3164/1752604059001_0cbd3425-8e94-46e6-9a10-a0d4491d4893_intro-vcs.vtt?pubId=1752604059001&videoId=4492075574001",
 *                      "srclang": "en"
 *                  }
 *              ],
 *              "updated_at": "2015-09-17T17:41:20.782Z"
 *          }
 *     ]
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed - check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} INVALID_SORT 400: sort parameter specified and invalid field
 * @apiError (Error 4xx) {json} INVALID_SEARCH 400: search string invalid (may not have been URI-encoded)
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


/**
 * @api {post} /accounts/:account_id/videos Create Video
 * @apiName Create Video
 * @apiGroup Video
 * @apiVersion 1.0.0
 *
 * @apiDescription Create a new video object in the account
 * this does not ingest a video file - use the [Dynamic Ingest API](http://docs.brightcove.com/en/video-cloud/di-api/getting-started/overview-di.html) for ingestion
 *
 * @apiHeader {string} Content-Type Content-Type: application/json
 * @apiHeader {string} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {number} account_id Video Cloud account ID.
 *
 * @apiParam (Request Body Fields) {string} name video title
 * @apiParam (Request Body Fields) {string} [description] video short description
 * @apiParam (Request Body Fields) {string} [long_description] video long description
 * @apiParam (Request Body Fields) {string} [reference_id] video reference-id (must be unique within the account)
 * @apiParam (Request Body Fields) {string="ACTIVE","INACTIVE"} [state=ACTIVE] state determines whether the video is playable or not
 * @apiParam (Request Body Fields) {string[]} [tags="[]"] array of tags
 * @apiParam (Request Body Fields) {object} [custom_fields={}] map of fieldname-value pairs
 * @apiParam (Request Body Fields) {object} [geo={}] map of geo-filtering properties
 * @apiParam (Request Body Fields) {string[]} [geo.countries=null] array of [ISO 3166 list of 2-letter codes](https://www.iso.org/obp/ui/)
 * @apiParam (Request Body Fields) {boolean} [geo.exclude_countries=false] if true, country array is treated as a list of countries excluded from viewing
 * @apiParam (Request Body Fields) {boolean} [geo.restricted=false] whether geo-restriction is enabled for thie video
 * @apiParam (Request Body Fields) {object} [schedule={}] map of scheduling properties
 * @apiParam (Request Body Fields) {dateString} [starts_at=null] start date-time of availability in [ISO-8601](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15) format
 * @apiParam (Request Body Fields) {dateString} [ends_at=null] end date-time of availability in [ISO-8601](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15) format
 *
 * @apiParamExample {json} Create Video Example:
 *     {
 *         "name": "Moose Herd",
 *         "description": "Herd of moose grazing",
 *         "reference_id": "moose_2015_09_17",
 *         "tags": [
 *             "nature",
 *             "animals"
 *         ],
 *         "custom_fields": {
 *             "topic": "wildlife",
 *             "subtopic": "mammals"
 *         }
 *     }
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 201 Created
 *    {
 *        "account_id": "57838016001",
 *        "complete": false,
 *        "created_at": "2015-09-18T15:59:23.756Z",
 *        "cue_points": [],
 *        "custom_fields": {},
 *        "description": "Herd of moose grazing",
 *        "digital_master_id": null,
 *        "duration": null,
 *        "economics": "AD_SUPPORTED",
 *        "folder_id": null,
 *        "geo": null,
 *        "id": "4494811891001",
 *        "images": {},
 *        "link": null,
 *        "long_description": null,
 *        "name": "Moose Herd",
 *        "reference_id": "moose_2015_09_17",
 *        "schedule": null,
 *        "sharing": null,
 *        "state": "ACTIVE",
 *        "tags": [
 *            "animals",
 *            "nature"
 *        ],
 *        "text_tracks": [],
 *        "updated_at": "2015-09-18T15:59:23.764Z"
 *    } *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed - check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} BAD_VALUE 400: The JSON could not be parsed
 * @apiError (Error 4xx) {json} REFERENCE_ID_IN_USE 409: The specified reference id is already in use
 *
 * @apiErrorExample {json} 409 Error Response
 *     HTTP/1.1 404 Not Found
 *     [
 *         {
 *            "error_code": "REFERENCE_ID_IN_USE",
 *            "message": "Reference id moose_2015_09_17 is already in use."
 *         }
 *     ]
 *
 *
 */


 /**
 * @api {get} /accounts/:account_id/videos/:video_id Get Video by ID
 * @apiName Get Video by ID
 * @apiGroup Video
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets a video objects
 * for the account
 *
 * @apiHeader {string} Content-Type Content-Type: application/json
 * @apiHeader {string} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {number} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {number} video_id Video Cloud video ID.
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "account_id": "1752604059001",
 *         "complete": true,
 *         "created_at": "2015-09-17T16:08:37.108Z",
 *         "cue_points": [],
 *         "custom_fields": {},
 *         "description": null,
 *         "digital_master_id": "4492154733001",
 *         "duration": 155573,
 *         "economics": "AD_SUPPORTED",
 *         "folder_id": null,
 *         "geo": null,
 *         "id": "4492075574001",
 *         "images": {
 *             "poster": {
 *                 "asset_id": "4492153571001",
 *                 "sources": [
 *                     {
 *                         "src": "https://bcsecure01-a.akamaihd.net/6/1752604059001/201509/3164/1752604059001_4492153571001_4492075574001-vs.jpg?pubId=1752604059001&videoId=4492075574001"
 *                     }
 *                 ],
 *                 "src": "https://bcsecure01-a.akamaihd.net/6/1752604059001/201509/3164/1752604059001_4492153571001_4492075574001-vs.jpg?pubId=1752604059001&videoId=4492075574001"
 *             },
 *             "thumbnail": {
 *                 "asset_id": "4492154714001",
 *                 "sources": [
 *                     {
 *                         "src": "https://bcsecure01-a.akamaihd.net/6/1752604059001/201509/3164/1752604059001_4492154714001_4492075574001-th.jpg?pubId=1752604059001&videoId=4492075574001"
 *                     }
 *                 ],
 *                 "src": "https://bcsecure01-a.akamaihd.net/6/1752604059001/201509/3164/1752604059001_4492154714001_4492075574001-th.jpg?pubId=1752604059001&videoId=4492075574001"
 *             }
 *         },
 *         "link": null,
 *         "long_description": null,
 *         "name": "sea_marvels.mp4",
 *         "reference_id": null,
 *         "schedule": null,
 *         "sharing": null,
 *         "state": "ACTIVE",
 *         "tags": [],
 *         "text_tracks": [
 *             {
 *                 "asset_id": "0cbd3425-8e94-46e6-9a10-a0d4491d4893",
 *                 "default": true,
 *                 "id": "c9001cee-d7f9-4b67-955c-9764cfc3d1f4",
 *                 "kind": "captions",
 *                 "label": null,
 *                 "mime_type": "text/vtt",
 *                 "sources": [
 *                     {
 *                         "src": "https://bcsecure01-a.akamaihd.net/3/1752604059001/201509/3164/1752604059001_0cbd3425-8e94-46e6-9a10-a0d4491d4893_intro-vcs.vtt?pubId=1752604059001&videoId=4492075574001"
 *                     }
 *                 ],
 *                 "src": "https://bcsecure01-a.akamaihd.net/3/1752604059001/201509/3164/1752604059001_0cbd3425-8e94-46e6-9a10-a0d4491d4893_intro-vcs.vtt?pubId=1752604059001&videoId=4492075574001",
 *                 "srclang": "en"
 *             }
 *         ],
 *         "updated_at": "2015-09-17T17:41:20.782Z"
 *     }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed - check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} INVALID_SORT 400: sort parameter specified and invalid field
 * @apiError (Error 4xx) {json} INVALID_SEARCH 400: search string invalid (may not have been URI-encoded)
 *
 * @apiErrorExample {json} 404 Error Response
 *     HTTP/1.1 404 Not Found
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 */


/**
 * @api {patch} /accounts/:account_id/videos/:video_id Update Video
 * @apiName Update Video
 * @apiGroup Video
 * @apiVersion 1.0.0
 *
 * @apiDescription Update a new video object in the account
 * *note that this API does not ingest any media files - use the [Dynamic Ingest API](http://docs.brightcove.com/en/video-cloud/di-api/getting-started/overview-di.html) for ingestion*
 *
 * @apiHeader {string} Content-Type Content-Type: application/json
 * @apiHeader {string} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {number} account_id Video Cloud account ID.
 *
 * @apiParam (Request Body Fields) {string} name video title
 * @apiParam (Request Body Fields) {string} [description] video short description
 * @apiParam (Request Body Fields) {string} [long_description] video long description
 * @apiParam (Request Body Fields) {string} [reference_id] video reference-id (must be unique within the account)
 * @apiParam (Request Body Fields) {string="ACTIVE","INACTIVE"} [state=ACTIVE] state determines whether the video is playable or not
 * @apiParam (Request Body Fields) {string[]} [tags="[]"] array of tags
 * @apiParam (Request Body Fields) {object} [custom_fields={}] map of fieldname-value pairs
 * @apiParam (Request Body Fields) {object[]} [cue_points="[]"] array of cue point maps
 * @apiParam (Request Body Fields) {string} [cue_points.name] cue point name
 * @apiParam (Request Body Fields) {string="AD","CODE"} [cue_points.type=AD] cue point type
 * @apiParam (Request Body Fields) {number} cue_points.time time of the cue point in seconds; example: 10.527
 * @apiParam (Request Body Fields) {string} [cue_points.metadata=null] optional metadata string (128 single-byte characters maximum)
 * @apiParam (Request Body Fields) {boolean} [cue_points.force-stop=false] whether video is force-stopped at the cue point
 * @apiParam (Request Body Fields) {object} [geo={}] map of geo-filtering properties
 * @apiParam (Request Body Fields) {string[]} [geo.countries=null] array of [ISO 3166 list of 2-letter codes](https://www.iso.org/obp/ui/)
 * @apiParam (Request Body Fields) {boolean} [geo.exclude_countries=false] if true, country array is treated as a list of countries excluded from viewing
 * @apiParam (Request Body Fields) {boolean} [geo.restricted=false] whether geo-restriction is enabled for thie video
 * @apiParam (Request Body Fields) {object} [link={}] map of scheduling properties
 * @apiParam (Request Body Fields) {object} [schedule={}] map of scheduling properties
 * @apiParam (Request Body Fields) {dateString} [starts_at=null] start date-time of availability in [ISO-8601](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15) format
 * @apiParam (Request Body Fields) {dateString} [ends_at=null] end date-time of availability in [ISO-8601](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15) format
 *
 * @apiParamExample {json} Create Video Example:
 *     {
 *         "name": "Moose Herd",
 *         "description": "Herd of moose grazing",
 *         "reference_id": "moose_2015_09_17",
 *         "tags": [
 *             "nature",
 *             "animals"
 *         ],
 *         "custom_fields": {
 *             "topic": "wildlife",
 *             "subtopic": "mammals"
 *         }
 *     }
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 201 Created
 *    {
 *        "account_id": "57838016001",
 *        "complete": false,
 *        "created_at": "2015-09-18T15:59:23.756Z",
 *        "cue_points": [],
 *        "custom_fields": {},
 *        "description": "Herd of moose grazing",
 *        "digital_master_id": null,
 *        "duration": null,
 *        "economics": "AD_SUPPORTED",
 *        "folder_id": null,
 *        "geo": null,
 *        "id": "4494811891001",
 *        "images": {},
 *        "link": null,
 *        "long_description": null,
 *        "name": "Moose Herd",
 *        "reference_id": "moose_2015_09_17",
 *        "schedule": null,
 *        "sharing": null,
 *        "state": "ACTIVE",
 *        "tags": [
 *            "animals",
 *            "nature"
 *        ],
 *        "text_tracks": [],
 *        "updated_at": "2015-09-18T15:59:23.764Z"
 *    } *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed - check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} BAD_VALUE 400: The JSON could not be parsed
 * @apiError (Error 4xx) {json} REFERENCE_ID_IN_USE 409: The specified reference id is already in use
 *
 * @apiErrorExample {json} 409 Error Response
 *     HTTP/1.1 404 Not Found
 *     [
 *         {
 *            "error_code": "REFERENCE_ID_IN_USE",
 *            "message": "Reference id moose_2015_09_17 is already in use."
 *         }
 *     ]
 *
 *
 */
