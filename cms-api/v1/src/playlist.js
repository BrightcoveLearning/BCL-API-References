// get playlists

/**
 * @api {get} /accounts/:account_id/playlists Get Playlists
 * @apiName Get Playlists
 * @apiGroup Playlist
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets a page of playlist objects
 * for the account
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {Number} account_id Video Cloud account ID.
 *
 * @apiparam (URL Parameters) {Number} [limit=10] number of videos to return
 * @apiparam (URL Parameters) {Number} [offset=0] number of videos to skip in the response
 * @apiparam (URL Parameters) {String} [q] search string - see [search guide](http://docs.brightcove.com/en/video-cloud/cms-api/guides/search-videos.html#combinesearchcriteria) for details. Only _search by tags_ is available for playlists.
 * @apiparam (URL Parameters) {String} [sort] field to sort results by; if absent and there is a search string, results are sorted by relevance or if there is no search string, results are sorted by updated_at descending
 *
 * @apiParamExample {String} Search for Playlists Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/playlists?q=tags:nature
 *
 * @apiSuccess (Response Field) {String} account_id Video Cloud account id
 * @apiSuccess (Response Field) {DateString} created_at date/time created
 * @apiSuccess (Response Field) {String} description playlist description
 * @apiSuccess (Response Field) {Boolean} favorite whether playlist is in favorites list
 * @apiSuccess (Response Field) {String} id the playlist id
 * @apiSuccess (Response Field) {String} name the playlist name
 * @apiSuccess (Response Field) {String} reference_id the playlist reference id
 * @apiSuccess (Response Field) {String} type the playlist type: EXPLICIT or smart playlist type
 * @apiSuccess (Response Field) {DateString} updated_at date/time last modified
 * @apiSuccess (Response Field) {String[]} video_ids array of video ids (EXPLICIT playlists only)
 * @apiSuccess (Response Field) {String} search search string to retrieve the videos (smart playlists only)
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *    [
 *        {
 *            "account_id": "1752604059001",
 *            "created_at": "2015-08-31T15:57:34.885Z",
 *            "description": null,
 *            "favorite": true,
 *            "id": "4452341376001",
 *            "name": "OutLearn Demo Playlist",
 *            "reference_id": null,
 *            "type": "EXPLICIT",
 *            "updated_at": "2015-08-31T15:57:52.437Z",
 *            "video_ids": [
 *                "4454723119001",
 *                "4454629913001",
 *                "4454629914001",
 *                "4454620115001",
 *                "4454620114001",
 *                "4454620113001",
 *                "4454620112001"
 *            ]
 *        },
 *        {
 *            "account_id": "1752604059001",
 *            "created_at": "2012-12-10T19:58:26.710Z",
 *            "description": null,
 *            "favorite": false,
 *            "id": "2025881886001",
 *            "limit": 30,
 *            "name": "node7707 Playlist",
 *            "reference_id": null,
 *            "search": "+tags:\"node7704\"",
 *            "type": "ACTIVATED_NEWEST_TO_OLDEST",
 *            "updated_at": "2012-12-10T19:58:26.738Z"
 *        }
 *    ] *
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

// get playlist by id

/**
 * @api {get} /accounts/:account_id/playlists/:playlist_id Get Playlist by ID
 * @apiName Get Playlists by ID
 * @apiGroup Playlist
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets a page of playlist objects
 * for the account
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {Number} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {Number} playlist_id Video Cloud playlist ID.
 *
 * @apiparam (URL Parameters) {Number} [limit=10] number of videos to return
 * @apiparam (URL Parameters) {Number} [offset=0] number of videos to skip in the response
 * @apiparam (URL Parameters) {String} [q] search string - see [search guide](http://docs.brightcove.com/en/video-cloud/cms-api/guides/search-videos.html#combinesearchcriteria) for details. Only _search by tags_ is available for playlists.
 * @apiparam (URL Parameters) {String} [sort] field to sort results by; if absent and there is a search string, results are sorted by relevance or if there is no search string, results are sorted by updated_at descending
 *
 * @apiParamExample {String} Search for Playlists Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/playlists?q=tags:nature
 *
 * @apiSuccess (Response Field) {String} account_id Video Cloud account id
 * @apiSuccess (Response Field) {DateString} created_at date/time created
 * @apiSuccess (Response Field) {String} description playlist description
 * @apiSuccess (Response Field) {Boolean} favorite whether playlist is in favorites list
 * @apiSuccess (Response Field) {String} id the playlist id
 * @apiSuccess (Response Field) {String} name the playlist name
 * @apiSuccess (Response Field) {String} reference_id the playlist reference id
 * @apiSuccess (Response Field) {String} type the playlist type: EXPLICIT or smart playlist type
 * @apiSuccess (Response Field) {DateString} updated_at date/time last modified
 * @apiSuccess (Response Field) {String[]} video_ids array of video ids (EXPLICIT playlists only)
 * @apiSuccess (Response Field) {String} search search string to retrieve the videos (smart playlists only)
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *    [
 *        {
 *            "account_id": "1752604059001",
 *            "created_at": "2015-08-31T15:57:34.885Z",
 *            "description": null,
 *            "favorite": true,
 *            "id": "4452341376001",
 *            "name": "OutLearn Demo Playlist",
 *            "reference_id": null,
 *            "type": "EXPLICIT",
 *            "updated_at": "2015-08-31T15:57:52.437Z",
 *            "video_ids": [
 *                "4454723119001",
 *                "4454629913001",
 *                "4454629914001",
 *                "4454620115001",
 *                "4454620114001",
 *                "4454620113001",
 *                "4454620112001"
 *            ]
 *        },
 *        {
 *            "account_id": "1752604059001",
 *            "created_at": "2012-12-10T19:58:26.710Z",
 *            "description": null,
 *            "favorite": false,
 *            "id": "2025881886001",
 *            "limit": 30,
 *            "name": "node7707 Playlist",
 *            "reference_id": null,
 *            "search": "+tags:\"node7704\"",
 *            "type": "ACTIVATED_NEWEST_TO_OLDEST",
 *            "updated_at": "2012-12-10T19:58:26.738Z"
 *        }
 *    ] *
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

// get playlist count

/**
 * @api {get} /accounts/:account_id/counts/playlists Get Playlist Count
 * @apiName Get Playlist Count
 * @apiGroup Playlist
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets a page of video objects
 * for the account
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {Number} account_id Video Cloud account ID.
 *
 * @apiparam (URL Parameters) {String} [q] search string - see[search guide](http://docs.brightcove.com/en/video-cloud/cms-api/guides/search-videos.html#combinesearchcriteria) for details
 * @apiparam (URL Parameters) {String} [sort] field to sort results by; if absent and there is a search string, results are sorted by relevance or if there is no search string, results are sorted by updated_at descending
 *
 * @apiParamExample {String} Search Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos?q=tags:nature,name:nature
 *
 * @apiSuccess (Response Field) {Number} count count of playlists found
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "count": 267
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
 *
 *
 */

// create playlist

/**
 * @api {post} /accounts/:account_id/playlists Update a Playlist
 * @apiName Update a Playlist
 * @apiGroup Playlist
 * @apiVersion 1.0.0
 *
 * @apiDescription Update a new playlist
 * for the account
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {Number} account_id Video Cloud account ID.
 *
 * @apiparam (Request Body Fields) {String} name playlist name
 * @apiparam (Request Body Fields) {String} [description] playlist description
 * @apiparam (Request Body Fields) {String} [reference_id] playlist reference id
 * @apiparam (Request Body Fields) {String="EXPLICIT", "ACTIVATEDOLDESTTONEWEST", "ACTIVATEDNEWESTTOOLDEST", "ALPHABETICAL", "PLAYSTOTAL", "PLAYSTRAILINGWEEK", "STARTDATEOLDESTTONEWEST", "STARTDATENEWESTTO_OLDEST"} [type] of playlist
 * @apiparam (Request Body Fields) {Number} [limit] maximum number of videos to include (smart playlists only)
 * @apiparam (Request Body Fields) {Number} [offset=0] number of videos to skip in the response
 * @apiparam (Request Body Fields) {String} [q] search string - see [search guide](http://docs.brightcove.com/en/video-cloud/cms-api/guides/search-videos.html#combinesearchcriteria) for details. Only _search by tags_ is available for playlists.
 * @apiparam (Request Body Fields) {String} [sort] field to sort results by; if absent and there is a search string, results are sorted by relevance or if there is no search string, results are sorted by updated_at descending
 *
 * @apiParamExample {json} Create Playlist Example:
 *    {
 *        "description": "My new bird playlist",
 *        "name": "Bird Videos",
 *        "type": "EXPLICIT",
 *        "video_ids": [
 *            "4084164751001",
 *            "734484322001",
 *            "734462570001"
 *        ]
 *    } *
 * @apiSuccess (Response Field) {String} account_id Video Cloud account id
 * @apiSuccess (Response Field) {DateString} created_at date/time created
 * @apiSuccess (Response Field) {String} description playlist description
 * @apiSuccess (Response Field) {Boolean} favorite whether playlist is in favorites list
 * @apiSuccess (Response Field) {String} id the playlist id
 * @apiSuccess (Response Field) {String} name the playlist name
 * @apiSuccess (Response Field) {String} reference_id the playlist reference id
 * @apiSuccess (Response Field) {String} type the playlist type: EXPLICIT or smart playlist type
 * @apiSuccess (Response Field) {DateString} updated_at date/time last modified
 * @apiSuccess (Response Field) {String[]} video_ids array of video ids (EXPLICIT playlists only)
 * @apiSuccess (Response Field) {String} search search string to retrieve the videos (smart playlists only)
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *    {
 *        "account_id": "57838016001",
 *        "created_at": "2015-09-20T18:50:27.865Z",
 *        "description": "My new bird playlist",
 *        "favorite": false,
 *        "id": "4492151631001",
 *        "name": "Bird Videos",
 *        "reference_id": null,
 *        "type": "EXPLICIT",
 *        "updated_at": "2015-09-20T18:50:27.865Z",
 *        "video_ids": [
 *            "4084164751001",
 *            "734484322001",
 *            "734462570001"
 *        ]
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed - check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} BAD_VALUE 400: The JSON could not be parsed
 * @apiError (Error 4xx) {json} REFERENCE_ID_IN_USE 409: The specified reference id is already in use
 * @apiError (Error 4xx) {json} ILLEGAL_FIELD 409: Spelling error or other use of non-existent field
 * @apiError (Error 4xx) {json} VALIDATION_ERROR 409: the JSON data was not valid; error messages vary depending on the problem
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

// update playlist

/**
 * @api {patch} /accounts/:account_id/playlists/:playlist_id Update a Playlist
 * @apiName Update a Playlist
 * @apiGroup Playlist
 * @apiVersion 1.0.0
 *
 * @apiDescription Update a new playlist
 * for the account
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {Number} account_id Video Cloud account ID.
 *
 * @apiparam (Request Body Fields) {String} name playlist name
 * @apiparam (Request Body Fields) {String} [description] playlist description
 * @apiparam (Request Body Fields) {String} [reference_id] playlist reference id
 * @apiparam (Request Body Fields) {String="EXPLICIT", "ACTIVATEDOLDESTTONEWEST", "ACTIVATEDNEWESTTOOLDEST", "ALPHABETICAL", "PLAYSTOTAL", "PLAYSTRAILINGWEEK", "STARTDATEOLDESTTONEWEST", "STARTDATENEWESTTO_OLDEST"} [type] of playlist
 * @apiparam (Request Body Fields) {Number} [limit] maximum number of videos to include (smart playlists only)
 * @apiparam (Request Body Fields) {Number} [offset=0] number of videos to skip in the response
 * @apiparam (Request Body Fields) {String} [q] search string - see [search guide](http://docs.brightcove.com/en/video-cloud/cms-api/guides/search-videos.html#combinesearchcriteria) for details. Only _search by tags_ is available for playlists.
 * @apiparam (Request Body Fields) {String} [sort] field to sort results by; if absent and there is a search string, results are sorted by relevance or if there is no search string, results are sorted by updated_at descending
 *
 * @apiParamExample {json} Create Playlist Example:
 *    {
 *        "description": "My revised bird playlist",
 *        "name": "Bird Videos",
 *        "type": "EXPLICIT",
 *        "video_ids": [
 *            "4084164751001",
 *            "734484322001",
 *            "734462570001"
 *        ]
 *    } *
 * @apiSuccess (Response Field) {String} account_id Video Cloud account id
 * @apiSuccess (Response Field) {DateString} created_at date/time created
 * @apiSuccess (Response Field) {String} description playlist description
 * @apiSuccess (Response Field) {Boolean} favorite whether playlist is in favorites list
 * @apiSuccess (Response Field) {String} id the playlist id
 * @apiSuccess (Response Field) {String} name the playlist name
 * @apiSuccess (Response Field) {String} reference_id the playlist reference id
 * @apiSuccess (Response Field) {String} type the playlist type: EXPLICIT or smart playlist type
 * @apiSuccess (Response Field) {DateString} updated_at date/time last modified
 * @apiSuccess (Response Field) {String[]} video_ids array of video ids (EXPLICIT playlists only)
 * @apiSuccess (Response Field) {String} search search string to retrieve the videos (smart playlists only)
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *    {
 *        "account_id": "57838016001",
 *        "created_at": "2015-09-20T18:50:27.865Z",
 *        "description": "My revised bird playlist",
 *        "favorite": false,
 *        "id": "4492151631001",
 *        "name": "Bird Videos",
 *        "reference_id": null,
 *        "type": "EXPLICIT",
 *        "updated_at": "2015-09-20T18:50:27.865Z",
 *        "video_ids": [
 *            "4084164751001",
 *            "734484322001",
 *            "734462570001"
 *        ]
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed - check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} BAD_VALUE 400: The JSON could not be parsed
 * @apiError (Error 4xx) {json} REFERENCE_ID_IN_USE 409: The specified reference id is already in use
 * @apiError (Error 4xx) {json} ILLEGAL_FIELD 409: Spelling error or other use of non-existent field
 * @apiError (Error 4xx) {json} VALIDATION_ERROR 409: the JSON data was not valid; error messages vary depending on the problem
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

