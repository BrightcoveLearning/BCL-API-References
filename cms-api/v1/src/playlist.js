/**
 * @apiDefine playlistGroup Playlist
 * Playlist operations allow you to create, retrieve, update, and delete playlists. You can also get a count of playlists and search for playlists by tags.
 * There are also operations for getting the videos or the count of videos in the playlist, and for adding videos to and removing them from a playlist.
 */

// get playlists

/**
 * @api {get} /accounts/:account_id/playlists Get Playlists
 * @apiName Get Playlists
 * @apiGroup playlistGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets a page of playlist objects
 * for the account
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 *
 * @apiParam (URL Parameters) {Number} [limit=20] number of videos to return
 * @apiParam (URL Parameters) {Number} [offset=0] number of videos to skip in the response
 * @apiParam (URL Parameters) {String} [q] search string - see [search guide](http://docs.brightcove.com/en/video-cloud/cms-api/guides/search-playlists.html) for details. Only _search by type is currently supported for playlists &mdash; e.g. q=type:EXPLICIT.
 * @apiParam (URL Parameters) {String="name","updated_at"} [sort="updated_at"] field to sort results by; if absent and there is a search string, results are sorted by relevance or if there is no search string, results are sorted by updated_at descending - note: to sort in descending order, preface the field name with a minus (-) sign
 *
 * @apiParamExample {Url} Search for Playlists Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/playlists?q=type:EXPLICIT
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
 *    ]
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed - check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} INVALID_SORT 400: sort parameter specified and invalid field
 * @apiError (Error 4xx) {json} INVALID_SEARCH 400: search string invalid (may not have been URI-encoded)
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
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
 * @apiName Get Playlist by ID
 * @apiGroup playlistGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets a playlist object
 * for the account
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {Number} playlist_id Video Cloud playlist ID, or multiple playlist ids separated by commas.
 *
 * @apiParamExample {Url} Search for Playlists Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/playlists/749117323001
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
 *    ]
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed - check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} INVALID_SORT 400: sort parameter specified and invalid field
 * @apiError (Error 4xx) {json} INVALID_SEARCH 400: search string invalid (may not have been URI-encoded)
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
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

// get videos in playlist

/**
 * @api {get} /accounts/:account_id/playlists/:playlist_id/videos Get Videos in Playlist
 * @apiName Get Videos in Playlist
 * @apiGroup playlistGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets the video objects for videos in a playlist
 * for the account
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {Number} playlist_id Video Cloud playlist ID.
 *
 * @apiParamExample {Url} Search for Playlists Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/playlists/1403224824001/videos
 *
 * @apiSuccess (Response Fields) {String} id video id
 * @apiSuccess (Response Fields) {String} name video title
 * @apiSuccess (Response Fields) {Boolean} complete whether processing is complete
 * @apiSuccess (Response Fields) {DateString} created_at when the video was created
 * @apiSuccess (Response Fields) {Object} custom_fields={} map of fieldname-value pairs
 * @apiSuccess (Response Fields) {Object} cue_points array of cue point maps
 * @apiSuccess (Response Fields) {String} cue_points.name cue point name
 * @apiSuccess (Response Fields) {String} cue_points.type=AD cue point type
 * @apiSuccess (Response Fields) {Number} cue_points.time time of the cue point in seconds; example: 10.527
 * @apiSuccess (Response Fields) {String} cue_points.metadata=null optional metadata string (128 single-byte characters maximum)
 * @apiSuccess (Response Fields) {Boolean} cue_points.force-stop=false whether video is force-stopped at the cue point
 * @apiSuccess (Response Fields) {String} description video short description
 * @apiSuccess (Response Fields) {Number} duration video duration in milliseconds
 * @apiSuccess (Response Fields) {String} digital_master_id asset id of the digital master
 * @apiSuccess (Response Fields) {String} Economics whether video is AD_ENABLED (used by the Smart Player, not by the Brightcove Player)
 * @apiSuccess (Response Fields) {String} folder_id id for the folder the video belongs to
 * @apiSuccess (Response Fields) {Object} geo map of geo-filtering properties
 * @apiSuccess (Response Fields) {String} geo.countries=null array of ISO 3166 list of 2-letter codes(https://www.iso.org/obp/ui/)
 * @apiSuccess (Response Fields) {Boolean} geo.exclude_countries=false if true, country array is treated as a list of countries excluded from viewing
 * @apiSuccess (Response Fields) {Boolean} geo.restricted=false whether geo-restriction is enabled for this video
 * @apiSuccess (Response Fields) {Object} images map of image maps
 * @apiSuccess (Response Fields) {Object} images.poster map of poster properties
 * @apiSuccess (Response Fields) {String} images.poster.asset_id asset id for the poster
 * @apiSuccess (Response Fields) {Object[]} images.poster.sources array of poster source maps
 * @apiSuccess (Response Fields) {Url} images.poster.sources.src URL for a poster source image
 * @apiSuccess (Response Fields) {Url} images.poster.src URL for the default poster source image
 * @apiSuccess (Response Fields) {Object} images.thumbnail map of thumbnail properties
 * @apiSuccess (Response Fields) {String} images.thumbnail.asset_id asset id for the thumbnail
 * @apiSuccess (Response Fields) {Object[]} images.thumbnail.sources array of thumbnail source maps
 * @apiSuccess (Response Fields) {Url} images.thumbnail.sources.src URL for a thumbnail source image
 * @apiSuccess (Response Fields) {Url} images.thumbnail.src URL for the default thumbnail source image
 * @apiSuccess (Response Fields) {Object} link map of scheduling properties
 * @apiSuccess (Response Fields) {String} link.text text for the link
 * @apiSuccess (Response Fields) {Url} link.url URL for the link
 * @apiSuccess (Response Fields) {String} long_description video long description
 * @apiSuccess (Response Fields) {Boolean} offline_enabled whether video is enabled for offline viewing
 * @apiSuccess (Response Fields) {String} original_filename the original file name for the uploaded video
 * @apiSuccess (Response Fields) {String} reference_id video reference-id (must be unique within the account)
 * @apiSuccess (Response Fields) {Object} schedule map of scheduling properties
 * @apiSuccess (Response Fields) {DateString} starts_at start date-time of availability in ISO-8601(http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15) format
 * @apiSuccess (Response Fields) {DateString} ends_at end date-time of availability in ISO-8601(http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15) format
 * @apiSuccess (Response Fields) {String} state state determines whether the video is playable or not
 * @apiSuccess (Response Fields) {Object} sharing map of sharing properties (applicable only to multiple accounts)
 * @apiSuccess (Response Fields) {Object} sharing map of the sharing properties for the video
 * @apiSuccess (Response Fields) {Boolean} sharing.by_external_acct whether the video was shared from another account
 * @apiSuccess (Response Fields) {String} sharing.by_id id of the account that shared the video; __note that this field is populated only for the shared copy, not for the original video__
 * @apiSuccess (Response Fields) {String} sharing.source_id id of the video in its original account; __note that this field is populated only for the shared copy, not for the original video__
 * @apiSuccess (Response Fields) {Boolean} sharing.to_external_acct whether the video is shared to another account
 * @apiSuccess (Response Fields) {Boolean} sharing.by_reference whether the video is shared by reference
 * @apiSuccess (Response Fields) {String} tags array of tags
 * @apiSuccess (Response Fields) {Object} text_tracks array of text track maps
 * @apiSuccess (Response Fields) {Url} text_tracks.src URL for the .vtt file
 * @apiSuccess (Response Fields) {String} text_tracks.kind kind of text track
 * @apiSuccess (Response Fields) {String} text_tracks.srclang 2-letter language code, such as "en" or "ko"
 * @apiSuccess (Response Fields) {String} text_tracks.mime_type mime-type for the track
 * @apiSuccess (Response Fields) {String} text_tracks.label label for the track
 * @apiSuccess (Response Fields) {Boolean} text_tracks.default whether this is the default track
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    [
 *        {
 *            "account_id": "57838016001",
 *            "complete": true,
 *            "created_at": "2012-01-20T13:30:47.350Z",
 *            "cue_points": [],
 *            "custom_fields": {
 *                "dfxppath": "http://files.brightcove.com/BCL_599562691001.xml",
 *                "purpose": "Training"
 *            },
 *            "description": "BC440 Resizing Players",
 *            "digital_master_id": "1403693402001",
 *            "duration": 54591,
 *            "economics": "AD_SUPPORTED",
 *            "folder_id": null,
 *            "geo": null,
 *            "id": "1403635561001",
 *            "images": {
 *                "poster": {
 *                    "asset_id": "1403719702001",
 *                    "remote": false,
 *                    "sources": [
 *                        {
 *                            "height": null,
 *                            "src": "http://brightcove.vo.llnwd.net/e1/pd/57838016001/57838016001_1403719702001_vs-1403716501001.jpg?pubId=57838016001&videoId=1403635561001",
 *                            "width": null
 *                        },
 *                        {
 *                            "height": null,
 *                            "src": "https://brightcove.hs.llnwd.net/e1/pd/57838016001/57838016001_1403719702001_vs-1403716501001.jpg?pubId=57838016001&videoId=1403635561001",
 *                            "width": null
 *                        }
 *                    ],
 *                    "src": "http://brightcove.vo.llnwd.net/e1/pd/57838016001/57838016001_1403719702001_vs-1403716501001.jpg?pubId=57838016001&videoId=1403635561001"
 *                },
 *                "thumbnail": {
 *                    "asset_id": "1403719703001",
 *                    "remote": false,
 *                    "sources": [
 *                        {
 *                            "height": null,
 *                            "src": "http://brightcove.vo.llnwd.net/e1/pd/57838016001/57838016001_1403719703001_th-1403716501001.jpg?pubId=57838016001&videoId=1403635561001",
 *                            "width": null
 *                        },
 *                        {
 *                            "height": null,
 *                            "src": "https://brightcove.hs.llnwd.net/e1/pd/57838016001/57838016001_1403719703001_th-1403716501001.jpg?pubId=57838016001&videoId=1403635561001",
 *                            "width": null
 *                        }
 *                    ],
 *                    "src": "http://brightcove.vo.llnwd.net/e1/pd/57838016001/57838016001_1403719703001_th-1403716501001.jpg?pubId=57838016001&videoId=1403635561001"
 *                }
 *            },
 *            "link": null,
 *            "long_description": "http://files.brightcove.com/BCL_599562691001.xml",
 *            "name": "Resizing Players - captions - do not delete",
 *            "original_filename": "BC440 Resizing Players.mp4",
 *            "reference_id": "1403635561001",
 *            "schedule": null,
 *            "sharing": null,
 *            "state": "ACTIVE",
 *            "tags": [
 *                "training",
 *                "captions",
 *                "newtag"
 *            ],
 *            "text_tracks": [],
 *            "updated_at": "2015-09-07T06:27:46.477Z"
 *        },
 *        {
 *            "account_id": "57838016001",
 *            "complete": true,
 *            "created_at": "2012-01-20T13:30:57.108Z",
 *            "cue_points": [
 *                {
 *                    "force_stop": false,
 *                    "id": "1404298843001",
 *                    "metadata": null,
 *                    "name": "Pre-roll",
 *                    "time": 0.0,
 *                    "type": "AD"
 *                },
 *                {
 *                    "force_stop": false,
 *                    "id": "1404298844001",
 *                    "metadata": null,
 *                    "name": "Post-roll",
 *                    "time": 85.496,
 *                    "type": "AD"
 *                }
 *            ],
 *            "custom_fields": {
 *                "dfxppath": "http://files.brightcove.com/BCL_129226712001.xml",
 *                "purpose": "Training"
 *            },
 *            "description": "BC001 Quick Video Publishing",
 *            "digital_master_id": "1403644262001",
 *            "duration": 85496,
 *            "economics": "AD_SUPPORTED",
 *            "folder_id": null,
 *            "geo": null,
 *            "id": "1403682587001",
 *            "images": {
 *                "poster": {
 *                    "asset_id": "1403718080001",
 *                    "remote": false,
 *                    "sources": [
 *                        {
 *                            "height": null,
 *                            "src": "http://brightcove.vo.llnwd.net/e1/pd/57838016001/57838016001_1403718080001_vs-1403705347001.jpg?pubId=57838016001&videoId=1403682587001",
 *                            "width": null
 *                        },
 *                        {
 *                            "height": null,
 *                            "src": "https://brightcove.hs.llnwd.net/e1/pd/57838016001/57838016001_1403718080001_vs-1403705347001.jpg?pubId=57838016001&videoId=1403682587001",
 *                            "width": null
 *                        }
 *                    ],
 *                    "src": "http://brightcove.vo.llnwd.net/e1/pd/57838016001/57838016001_1403718080001_vs-1403705347001.jpg?pubId=57838016001&videoId=1403682587001"
 *                },
 *                "thumbnail": {
 *                    "asset_id": "1403718081001",
 *                    "remote": false,
 *                    "sources": [
 *                        {
 *                            "height": null,
 *                            "src": "http://brightcove.vo.llnwd.net/e1/pd/57838016001/57838016001_1403718081001_th-1403705347001.jpg?pubId=57838016001&videoId=1403682587001",
 *                            "width": null
 *                        },
 *                        {
 *                            "height": null,
 *                            "src": "https://brightcove.hs.llnwd.net/e1/pd/57838016001/57838016001_1403718081001_th-1403705347001.jpg?pubId=57838016001&videoId=1403682587001",
 *                            "width": null
 *                        }
 *                    ],
 *                    "src": "http://brightcove.vo.llnwd.net/e1/pd/57838016001/57838016001_1403718081001_th-1403705347001.jpg?pubId=57838016001&videoId=1403682587001"
 *                }
 *            },
 *            "link": null,
 *            "long_description": "http://files.brightcove.com/BCL_129226712001.xml",
 *            "name": "Quick Video Publishing - caption - do not delete",
 *            "original_filename": "BC001 Quick Video Publishing.mp4",
 *            "reference_id": "1403682587001",
 *            "schedule": null,
 *            "sharing": null,
 *            "state": "ACTIVE",
 *            "tags": [
 *                "training",
 *                "captions",
 *                "newtag"
 *            ],
 *            "text_tracks": [],
 *            "updated_at": "2015-09-07T06:27:47.283Z"
 *        },
 *        {
 *            "account_id": "57838016001",
 *            "complete": true,
 *            "created_at": "2012-01-20T13:30:37.798Z",
 *            "cue_points": [],
 *            "custom_fields": {
 *                "dfxppath": "http://files.brightcove.com/BCL_601401284001.xml",
 *                "purpose": "Training"
 *            },
 *            "description": "BC161 Styling Players",
 *            "digital_master_id": "1403714770001",
 *            "duration": 71541,
 *            "economics": "AD_SUPPORTED",
 *            "folder_id": null,
 *            "geo": null,
 *            "id": "1403696109001",
 *            "images": {
 *                "poster": {
 *                    "asset_id": "1403718020001",
 *                    "remote": false,
 *                    "sources": [
 *                        {
 *                            "height": null,
 *                            "src": "http://brightcove.vo.llnwd.net/e1/pd/57838016001/57838016001_1403718020001_vs-1403698401001.jpg?pubId=57838016001&videoId=1403696109001",
 *                            "width": null
 *                        },
 *                        {
 *                            "height": null,
 *                            "src": "https://brightcove.hs.llnwd.net/e1/pd/57838016001/57838016001_1403718020001_vs-1403698401001.jpg?pubId=57838016001&videoId=1403696109001",
 *                            "width": null
 *                        }
 *                    ],
 *                    "src": "http://brightcove.vo.llnwd.net/e1/pd/57838016001/57838016001_1403718020001_vs-1403698401001.jpg?pubId=57838016001&videoId=1403696109001"
 *                },
 *                "thumbnail": {
 *                    "asset_id": "1403718021001",
 *                    "remote": false,
 *                    "sources": [
 *                        {
 *                            "height": null,
 *                            "src": "http://brightcove.vo.llnwd.net/e1/pd/57838016001/57838016001_1403718021001_th-1403698401001.jpg?pubId=57838016001&videoId=1403696109001",
 *                            "width": null
 *                        },
 *                        {
 *                            "height": null,
 *                            "src": "https://brightcove.hs.llnwd.net/e1/pd/57838016001/57838016001_1403718021001_th-1403698401001.jpg?pubId=57838016001&videoId=1403696109001",
 *                            "width": null
 *                        }
 *                    ],
 *                    "src": "http://brightcove.vo.llnwd.net/e1/pd/57838016001/57838016001_1403718021001_th-1403698401001.jpg?pubId=57838016001&videoId=1403696109001"
 *                }
 *            },
 *            "link": null,
 *            "long_description": "http://files.brightcove.com/BCL_601401284001.xml",
 *            "name": "Styling Players - captions - do not delete",
 *            "original_filename": "BC161 Styling Players.mp4",
 *            "reference_id": "1403696109001",
 *            "schedule": null,
 *            "sharing": null,
 *            "state": "ACTIVE",
 *            "tags": [
 *                "training",
 *                "captions",
 *                "newtag"
 *            ],
 *            "text_tracks": [],
 *            "updated_at": "2015-09-07T06:27:48.122Z"
 *        },
 *        {
 *            "account_id": "57838016001",
 *            "complete": true,
 *            "created_at": "2012-01-20T13:30:26.559Z",
 *            "cue_points": [],
 *            "custom_fields": {
 *                "dfxppath": "http://files.brightcove.com/BCL_641005959001.xml",
 *                "purpose": "Training"
 *            },
 *            "description": "BC210 RestrictingVideoPlayback",
 *            "digital_master_id": "1859666146001",
 *            "duration": 167068,
 *            "economics": "AD_SUPPORTED",
 *            "folder_id": null,
 *            "geo": null,
 *            "id": "1403635560001",
 *            "images": {
 *                "poster": {
 *                    "asset_id": "1859675025001",
 *                    "remote": false,
 *                    "sources": [
 *                        {
 *                            "height": null,
 *                            "src": "http://brightcove.vo.llnwd.net/e1/pd/57838016001/57838016001_1859675025001_vs-506196af2144b0e405ba0c39-1471893301001.jpg?pubId=57838016001&videoId=1403635560001",
 *                            "width": null
 *                        },
 *                        {
 *                            "height": null,
 *                            "src": "https://brightcove.hs.llnwd.net/e1/pd/57838016001/57838016001_1859675025001_vs-506196af2144b0e405ba0c39-1471893301001.jpg?pubId=57838016001&videoId=1403635560001",
 *                            "width": null
 *                        }
 *                    ],
 *                    "src": "http://brightcove.vo.llnwd.net/e1/pd/57838016001/57838016001_1859675025001_vs-506196af2144b0e405ba0c39-1471893301001.jpg?pubId=57838016001&videoId=1403635560001"
 *                },
 *                "thumbnail": {
 *                    "asset_id": "1859675026001",
 *                    "remote": false,
 *                    "sources": [
 *                        {
 *                            "height": null,
 *                            "src": "http://brightcove.vo.llnwd.net/e1/pd/57838016001/57838016001_1859675026001_th-506196af2144b0e405ba0c39-1471893301001.jpg?pubId=57838016001&videoId=1403635560001",
 *                            "width": null
 *                        },
 *                        {
 *                            "height": null,
 *                            "src": "https://brightcove.hs.llnwd.net/e1/pd/57838016001/57838016001_1859675026001_th-506196af2144b0e405ba0c39-1471893301001.jpg?pubId=57838016001&videoId=1403635560001",
 *                            "width": null
 *                        }
 *                    ],
 *                    "src": "http://brightcove.vo.llnwd.net/e1/pd/57838016001/57838016001_1859675026001_th-506196af2144b0e405ba0c39-1471893301001.jpg?pubId=57838016001&videoId=1403635560001"
 *                }
 *            },
 *            "link": null,
 *            "long_description": "http://files.brightcove.com/BCL_641005959001.xml",
 *            "name": "RestrictingVideoPlayback - captions - do not delete",
 *            "original_filename": "Restricting Video Playback.mp4",
 *            "reference_id": "1403635560001",
 *            "schedule": null,
 *            "sharing": null,
 *            "state": "ACTIVE",
 *            "tags": [
 *                "training",
 *                "captions",
 *                "newtag"
 *            ],
 *            "text_tracks": [],
 *            "updated_at": "2015-09-07T06:27:45.646Z"
 *        }
 *    ]
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed - check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} INVALID_SORT 400: sort parameter specified and invalid field
 * @apiError (Error 4xx) {json} INVALID_SEARCH 400: search string invalid (may not have been URI-encoded)
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
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
 * @apiGroup playlistGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets a count of playlists in the account
 * for the account
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 *
 * @apiParam (URL Parameters) {String} [q] search string - see[search guide](http://docs.brightcove.com/en/video-cloud/cms-api/guides/search-videos.html#combinesearchcriteria) for details
 *
 * @apiParamExample {Url} Search Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/counts/playlists
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
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} INVALID_SORT 400: sort parameter specified and invalid field
 * @apiError (Error 4xx) {json} INVALID_SEARCH 400: search string invalid (may not have been URI-encoded)
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
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

// get video count in playlist

/**
 * @api {get} /accounts/:account_id/counts/playlists/:playlist_id/videos Get Video Count in Playlist
 * @apiName Get Video Count in Playlist
 * @apiGroup playlistGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets a count of the videos in a playlist
 * for the account
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {Number} playlist_id Video Cloud playlist ID.
 *
 * @apiParamExample {Url} Search Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/counts/playlists/749117323001/videos
 *
 * @apiSuccess (Response Field) {Number} count count of videos
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "count": 12
 *     }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed - check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} INVALID_SORT 400: sort parameter specified and invalid field
 * @apiError (Error 4xx) {json} INVALID_SEARCH 400: search string invalid (may not have been URI-encoded)
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
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
 * @api {post} /accounts/:account_id/playlists Create Playlist
 * @apiName Create Playlist
 * @apiGroup playlistGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Creates a new playlist
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 *
 * @apiParam (Request Body Fields) {String} name playlist name
 * @apiParam (Request Body Fields) {String} [description] playlist description
 * @apiParam (Request Body Fields) {String} [reference_id] playlist reference id
 * @apiParam (Request Body Fields) {String="EXPLICIT", "ACTIVATED_OLDEST_TO_NEWEST", "ACTIVATED_NEWEST_TO_OLDEST", "ALPHABETICAL", "PLAYS_TOTAL", "PLAYS_TRAILING_WEEK", "START_DATE_OLDEST_TO_NEWEST", "START_DATE_NEWEST_TO_OLDEST"} type of playlist
 * @apiParam (Request Body Fields) {Number} [limit] maximum number of videos to include (smart playlists only)
 * @apiParam (Request Body Fields) {String[]} [video_ids] array of video ids (EXPLICIT playlists only)
 * @apiParam (Request Body Fields) {String} [search] search string to get the videos (smart playlists only)
 *
 * @apiParamExample {json} Create Explicit Playlist Example:
 *    {
 *        "description": "My new bird playlist",
 *        "name": "Bird Videos",
 *        "type": "EXPLICIT",
 *        "video_ids": [
 *            "4084164751001",
 *            "734484322001",
 *            "734462570001"
 *        ]
 *    }
 * @apiParamExample {json} Create Smart Playlist Example:
 *    {
 *        "description": "My new sea playlist",
 *        "name": "Sea Videos",
 *        "type": "ACTIVATED_NEWEST_TO_OLDEST",
 *        "limit": 20
 *        "search": "tags:\"sealife\",\"water\""
 *    }
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
 *    HTTP/1.1 201 Created
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
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 4xx) {json} BAD_VALUE 400: The JSON could not be parsed
 * @apiError (Error 4xx) {json} REFERENCE_ID_IN_USE 409: The specified reference id is already in use
 * @apiError (Error 4xx) {json} ILLEGAL_FIELD 422: Spelling error or use of non-existent field
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
 *
 * @apiErrorExample {json} 404 RESOURCE_NOT_FOUND
 *     HTTP/1.1 404 RESOURCE_NOT_FOUND
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 *
 * @apiErrorExample {json} 409 CONFLICT
 *     HTTP/1.1 409 CONFLICT
 *     [
 *         {
 *             "error_code": "REFERENCE_ID_IN_USE",
 *             "message": "Reference id moose_2015_09_17 is already in use."
 *         }
 *     ]
 *
 * @apiErrorExample 400 Bad Request
 *    HTTP/1.1 400 Bad Request
 *    {
 *        "error_code": "BAD_VALUE",
 *        "message": "Unable to process JSON"
 *    }
 *
 * @apiErrorExample 422 ILLEGAL_FIELD
 *    HTTP/1.1 422 Unprocessable Entity
 *    [
 *        {
 *            "error_code": "VALIDATION_ERROR",
 *            "message": "foo: ILLEGAL_FIELD"
 *        }
 *    ]
 *
 */

// update playlist

/**
 * @api {patch} /accounts/:account_id/playlists/:playlist_id Update Playlist
 * @apiName Update Playlist
 * @apiGroup playlistGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Updates a playlist
 * for the account
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 *
 * @apiParam (Request Body Fields) {String} name playlist name
 * @apiParam (Request Body Fields) {String} [description] playlist description
 * @apiParam (Request Body Fields) {String} [reference_id] playlist reference id
 * @apiParam (Request Body Fields) {String="EXPLICIT", "ACTIVATED_OLDEST_TO_NEWEST", "ACTIVATED_NEWEST_TO_OLDEST", "ALPHABETICAL", "PLAYS_TOTAL", "PLAYS_TRAILING_WEEK", "START_DATE_OLDEST_TO_NEWEST", "START_DATE_NEWEST_TO_OLDEST"} [type] of playlist
 * @apiParam (Request Body Fields) {String[]} [video_ids] array of video ids for EXPLICIT type only &mdash; note that you must replace the whole array
 * @apiParam (Request Body Fields) {String} [search] the search string to generate the list of videos &mdash; only for smart playlist types
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
 *    }
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
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 * @apiError (Error 4xx) {json} BAD_VALUE 400: The JSON could not be parsed
 * @apiError (Error 4xx) {json} REFERENCE_ID_IN_USE 409: The specified reference id is already in use
 * @apiError (Error 4xx) {json} ILLEGAL_FIELD 422: Spelling error or use of non-existent field
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
 *
 * @apiErrorExample {json} 404 RESOURCE_NOT_FOUND
 *     HTTP/1.1 404 RESOURCE_NOT_FOUND
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 *
 * @apiErrorExample {json} 409 CONFLICT
 *     HTTP/1.1 409 CONFLICT
 *     [
 *         {
 *             "error_code": "REFERENCE_ID_IN_USE",
 *             "message": "Reference id moose_2015_09_17 is already in use."
 *         }
 *     ]
 *
 * @apiErrorExample 400 Bad Request
 *    HTTP/1.1 400 Bad Request
 *    {
 *        "error_code": "BAD_VALUE",
 *        "message": "Unable to process JSON"
 *    }
 *
 * @apiErrorExample 422 ILLEGAL_FIELD
 *    HTTP/1.1 422 Unprocessable Entity
 *    [
 *        {
 *            "error_code": "VALIDATION_ERROR",
 *            "message": "foo: ILLEGAL_FIELD"
 *        }
 *    ]
 *
 */

// delete playlist

/**
 * @api {delete} /accounts/:account_id/playlists/:playlist_id Delete Playlist
 * @apiName Delete Playlists
 * @apiGroup playlistGroup
 * @apiVersion 1.0.0
 *
 * @apiDescription Deletes a playlist
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {Number} playlist_id Video Cloud playlist ID.
 *
 * @apiParamExample {Url} Search for Playlists Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/playlists/749117323001
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 204 No Content
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed - check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} METHOD_NOT_ALLOWED 405: The HTTP method specified is not allowed for this endpoint
 * @apiError (Error 4xx) {json} INVALID_SORT 400: sort parameter specified and invalid field
 * @apiError (Error 4xx) {json} INVALID_SEARCH 400: search string invalid (may not have been URI-encoded)
 * @apiError (Error 4xx) {json} TOO_MANY_REQUESTS 429: You are submitting too many simultaneous requests or too many requests per second
 *
 * @apiErrorExample {json} 401 UNAUTHORIZED
 *     HTTP/1.1 401 UNAUTHORIZED
 *     [
 *         {
 *             "error_code": "UNAUTHORIZED",
 *             "message": "Permission denied."
 *         }
 *     ]
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
