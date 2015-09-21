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

// get videos in playlist

/**
 * @api {get} /accounts/:account_id/playlists/:playlist_id/videos Get Videos in a Playlist
 * @apiName Get Videos in a Playlist
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
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/playlists/749117323001/videos
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
 * @apiSuccess (Response Fields) {Boolean} geo.restricted=false whether geo-restriction is enabled for thie video
 * @apiSuccess (Response Fields) {Object} images map of image maps
 * @apiSuccess (Response Fields) {Object} images.poster map of poster properties
 * @apiSuccess (Response Fields) {String} images.poster.asset_id asset id for the poster
 * @apiSuccess (Response Fields) {Object[]} images.poster.sources array of poster source maps
 * @apiSuccess (Response Fields) {String} images.poster.sources.src URL for a poster source image
 * @apiSuccess (Response Fields) {String} images.poster.src URL for the default poster source image
 * @apiSuccess (Response Fields) {Object} images.thumbnail map of thumbnail properties
 * @apiSuccess (Response Fields) {String} images.thumbnail.asset_id asset id for the thumbnail
 * @apiSuccess (Response Fields) {Object[]} images.thumbnail.sources array of thumbnail source maps
 * @apiSuccess (Response Fields) {String} images.thumbnail.sources.src URL for a thumbnail source image
 * @apiSuccess (Response Fields) {String} images.thumbnail.src URL for the default thumbnail source image
 * @apiSuccess (Response Fields) {Object} link map of scheduling properties
 * @apiSuccess (Response Fields) {String} link.text text for the link
 * @apiSuccess (Response Fields) {String} link.url URL for the link
 * @apiSuccess (Response Fields) {String} long_description video long description
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
 * @apiSuccess (Response Fields) {String} text_tracks.src URL for the .vtt file
 * @apiSuccess (Response Fields) {String} text_tracks.kind kind of text track
 * @apiSuccess (Response Fields) {String} text_tracks.srclang 2-letter language code, such as "en" or "ko"
 * @apiSuccess (Response Fields) {String} text_tracks.mime_type mime-type for the track
 * @apiSuccess (Response Fields) {String} text_tracks.label label for the track
 * @apiSuccess (Response Fields) {Boolean} text_tracks.default whether this is the default track
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *    [
 *        {
 *            "account_id": "57838016001",
 *            "complete": true,
 *            "created_at": "2015-02-27T19:10:55.425Z",
 *            "cue_points": [],
 *            "custom_fields": {},
 *            "description": "A small friendly bird...",
 *            "digital_master_id": null,
 *            "duration": 8240,
 *            "economics": "AD_SUPPORTED",
 *            "folder_id": null,
 *            "geo": null,
 *            "id": "4084164751001",
 *            "images": {
 *                "poster": {
 *                    "asset_id": "4084480075001",
 *                    "sources": [
 *                        {
 *                            "src": "http://brightcove.vo.llnwd.net/v1/unsecured/ *    media/57838016001/201502/1437/57838016001_4084480075001_Bird- *    Chickadee-vs.jpg?pubId=57838016001&videoId=4084164751001"
 *                        }
 *                    ],
 *                    "src": "http://brightcove.vo.llnwd.net/v1/unsecured/ *    media/57838016001/201502/1437/57838016001_4084480075001_Bird-Chickadee-vs. *    jpg?pubId=57838016001&videoId=4084164751001"
 *                },
 *                "thumbnail": {
 *                    "asset_id": "4084480007001",
 *                    "sources": [
 *                        {
 *                            "src": "http://brightcove.vo.llnwd.net/v1/unsecured/ *    media/57838016001/201502/1437/57838016001_4084480007001_Bird- *    Chickadee-th.jpg?pubId=57838016001&videoId=4084164751001"
 *                        }
 *                    ],
 *                    "src": "http://brightcove.vo.llnwd.net/v1/unsecured/ *    media/57838016001/201502/1437/57838016001_4084480007001_Bird-Chickadee-th. *    jpg?pubId=57838016001&videoId=4084164751001"
 *                }
 *            },
 *            "link": null,
 *            "long_description": null,
 *            "name": "Chickadee",
 *            "reference_id": "Bird_Chickadee.mp4_1425064251252",
 *            "schedule": null,
 *            "sharing": null,
 *            "state": "ACTIVE",
 *            "tags": [
 *                "bird",
 *                "nature",
 *                "air"
 *            ],
 *            "text_tracks": [],
 *            "updated_at": "2015-02-27T19:11:57.808Z"
 *        },
 *        {
 *            "account_id": "57838016001",
 *            "complete": true,
 *            "created_at": "2012-03-27T14:40:26.188Z",
 *            "cue_points": [],
 *            "custom_fields": {
 *                "purpose": "Training"
 *            },
 *            "description": "Bugs-Butterfly",
 *            "digital_master_id": "1532634103001",
 *            "duration": 27495,
 *            "economics": "AD_SUPPORTED",
 *            "folder_id": null,
 *            "geo": null,
 *            "id": "1532562858001",
 *            "images": {
 *                "poster": {
 *                    "asset_id": "1530823798001",
 *                    "sources": [
 *                        {
 *                            "src": "http://brightcove.vo.llnwd.net/e1/ *    pd/57838016001/57838016001_1530823798001_vs-4f71d15b7737b0e4346504a7. *    jpg?pubId=57838016001&videoId=1532562858001"
 *                        }
 *                    ],
 *                    "src": "http://brightcove.vo.llnwd.net/e1/ *    pd/57838016001/57838016001_1530823798001_vs-4f71d15b7737b0e4346504a7. *    jpg?pubId=57838016001&videoId=1532562858001"
 *                },
 *                "thumbnail": {
 *                    "asset_id": "1530823799001",
 *                    "sources": [
 *                        {
 *                            "src": "http://brightcove.vo.llnwd.net/e1/ *    pd/57838016001/57838016001_1530823799001_th-4f71d15b7737b0e4346504a7. *    jpg?pubId=57838016001&videoId=1532562858001"
 *                        }
 *                    ],
 *                    "src": "http://brightcove.vo.llnwd.net/e1/ *    pd/57838016001/57838016001_1530823799001_th-4f71d15b7737b0e4346504a7. *    jpg?pubId=57838016001&videoId=1532562858001"
 *                }
 *            },
 *            "link": null,
 *            "long_description": null,
 *            "name": "Bugs-Butterfly",
 *            "reference_id": "1532562858001",
 *            "schedule": null,
 *            "sharing": null,
 *            "state": "ACTIVE",
 *            "tags": [
 *                "newtag"
 *            ],
 *            "text_tracks": [],
 *            "updated_at": "2015-09-07T06:27:58.071Z"
 *        },
 *        {
 *            "account_id": "57838016001",
 *            "complete": true,
 *            "created_at": "2010-12-31T23:27:46.011Z",
 *            "cue_points": [],
 *            "custom_fields": {
 *                "purpose": "Training",
 *                "subject": "Birds"
 *            },
 *            "description": "O sibili, si ergo. Fortibuses en ero. Nobili, demis trucs. Si vadis  *    enem? Covsendux!",
 *            "digital_master_id": null,
 *            "duration": 27960,
 *            "economics": "AD_SUPPORTED",
 *            "folder_id": null,
 *            "geo": null,
 *            "id": "734484322001",
 *            "images": {
 *                "poster": {
 *                    "asset_id": "734246768001",
 *                    "sources": [
 *                        {
 *                            "src": "http://brightcove04.o.brightcove. *    com/57838016001/57838016001_734246768001_ari-origin29- *    arc-163-1293842599685.jpg?pubId=57838016001&videoId=734484322001"
 *                        }
 *                    ],
 *                    "src": "http://brightcove04.o.brightcove. *    com/57838016001/57838016001_734246768001_ari-origin29-arc-163-1293842599685. *    jpg?pubId=57838016001&videoId=734484322001"
 *                },
 *                "thumbnail": {
 *                    "asset_id": "734246767001",
 *                    "sources": [
 *                        {
 *                            "src": "http://brightcove04.o.brightcove. *    com/57838016001/57838016001_734246767001_ari-origin29- *    arc-163-1293842599462.jpg?pubId=57838016001&videoId=734484322001"
 *                        }
 *                    ],
 *                    "src": "http://brightcove04.o.brightcove. *    com/57838016001/57838016001_734246767001_ari-origin29-arc-163-1293842599462. *    jpg?pubId=57838016001&videoId=734484322001"
 *                }
 *            },
 *            "link": {
 *                "text": "Brightcove Learning",
 *                "url": "http://support.brightcove.com/en/training-videos"
 *            },
 *            "long_description": null,
 *            "name": "Bird_Seagulls",
 *            "reference_id": "734484322001",
 *            "schedule": {
 *                "ends_at": null,
 *                "starts_at": "2011-02-01T05:00:00.000Z"
 *            },
 *            "sharing": null,
 *            "state": "ACTIVE",
 *            "tags": [
 *                "bird",
 *                "newtag"
 *            ],
 *            "text_tracks": [],
 *            "updated_at": "2015-09-07T06:27:10.189Z"
 *        },
 *        {
 *            "account_id": "57838016001",
 *            "complete": true,
 *            "created_at": "2012-03-27T14:40:22.636Z",
 *            "cue_points": [
 *                {
 *                    "force_stop": false,
 *                    "id": "1716924153001",
 *                    "metadata": null,
 *                    "name": "Pre-roll",
 *                    "time": 0.0,
 *                    "type": "AD"
 *                },
 *                {
 *                    "force_stop": false,
 *                    "id": "1716924151001",
 *                    "metadata": "cue point @ 12",
 *                    "name": "cue point!",
 *                    "time": 12.472,
 *                    "type": "CODE"
 *                },
 *                {
 *                    "force_stop": false,
 *                    "id": "1716924152001",
 *                    "metadata": "cue point 1",
 *                    "name": "Post-roll",
 *                    "time": 29.2,
 *                    "type": "AD"
 *                }
 *            ],
 *            "custom_fields": {
 *                "associated-topics": "wildlife, video, training, cuepoints",
 *                "duration": "long enough",
 *                "purpose": "Training",
 *                "rating": "perfect",
 *                "subject": "Birds",
 *                "textcolor": "#4C4D4F",
 *                "uploader-userid": "bclearning"
 *            },
 *            "description": "Seahorses range in size from 0.6 to 14 in (1.5 to 35.5 cm). They are  *    named for their equine appearance. Although they are bony fish, they do not have  *    scales but rather thin skin stretched over a series of bony plates, which are  *    arranged in rings",
 *            "digital_master_id": "1532627749001",
 *            "duration": 29200,
 *            "economics": "AD_SUPPORTED",
 *            "folder_id": null,
 *            "geo": null,
 *            "id": "1532530235001",
 *            "images": {
 *                "poster": {
 *                    "asset_id": "1530823786001",
 *                    "sources": [
 *                        {
 *                            "src": "http://brightcove.vo.llnwd.net/e1/ *    pd/57838016001/57838016001_1530823786001_vs-4f71d1585359b0e486c86693. *    jpg?pubId=57838016001&videoId=1532530235001"
 *                        }
 *                    ],
 *                    "src": "http://brightcove.vo.llnwd.net/e1/ *    pd/57838016001/57838016001_1530823786001_vs-4f71d1585359b0e486c86693. *    jpg?pubId=57838016001&videoId=1532530235001"
 *                },
 *                "thumbnail": {
 *                    "asset_id": "1530823787001",
 *                    "sources": [
 *                        {
 *                            "src": "http://brightcove.vo.llnwd.net/e1/ *    pd/57838016001/57838016001_1530823787001_th-4f71d1585359b0e486c86693. *    jpg?pubId=57838016001&videoId=1532530235001"
 *                        }
 *                    ],
 *                    "src": "http://brightcove.vo.llnwd.net/e1/ *    pd/57838016001/57838016001_1530823787001_th-4f71d1585359b0e486c86693. *    jpg?pubId=57838016001&videoId=1532530235001"
 *                }
 *            },
 *            "link": {
 *                "text": "here we go",
 *                "url": "http://espn.go.com"
 *            },
 *            "long_description": "this is a long description",
 *            "name": "Sea_SeaHorse",
 *            "reference_id": "seaHORSE",
 *            "schedule": null,
 *            "sharing": null,
 *            "state": "ACTIVE",
 *            "tags": [
 *                "demo",
 *                "stuff",
 *                "aquatic",
 *                "horse",
 *                "newtag",
 *                "wildlife",
 *                "sea",
 *                "fun",
 *                "animal"
 *            ],
 *            "text_tracks": [],
 *            "updated_at": "2015-09-07T06:27:57.046Z"
 *        },
 *        {
 *            "account_id": "57838016001",
 *            "complete": true,
 *            "created_at": "2010-12-31T23:27:49.361Z",
 *            "cue_points": [],
 *            "custom_fields": {
 *                "purpose": "Training",
 *                "subject": "wildlife"
 *            },
 *            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do  *    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  *    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  *    Duis aute irure d",
 *            "digital_master_id": null,
 *            "duration": 26960,
 *            "economics": "AD_SUPPORTED",
 *            "folder_id": null,
 *            "geo": null,
 *            "id": "734462570001",
 *            "images": {
 *                "poster": {
 *                    "asset_id": "734439525001",
 *                    "sources": [
 *                        {
 *                            "src": "http://brightcove04.o.brightcove. *    com/57838016001/57838016001_734439525001_ari-origin06- *    arc-650-1293842569701.jpg?pubId=57838016001&videoId=734462570001"
 *                        }
 *                    ],
 *                    "src": "http://brightcove04.o.brightcove. *    com/57838016001/57838016001_734439525001_ari-origin06-arc-650-1293842569701. *    jpg?pubId=57838016001&videoId=734462570001"
 *                },
 *                "thumbnail": {
 *                    "asset_id": "734439524001",
 *                    "sources": [
 *                        {
 *                            "src": "http://brightcove04.o.brightcove. *    com/57838016001/57838016001_734439524001_ari-origin06- *    arc-650-1293842569466.jpg?pubId=57838016001&videoId=734462570001"
 *                        }
 *                    ],
 *                    "src": "http://brightcove04.o.brightcove. *    com/57838016001/57838016001_734439524001_ari-origin06-arc-650-1293842569466. *    jpg?pubId=57838016001&videoId=734462570001"
 *                }
 *            },
 *            "link": {
 *                "text": "Brightcove Learning",
 *                "url": "http://support.brightcove.com/en/training-videos"
 *            },
 *            "long_description": null,
 *            "name": "Bird_Robin",
 *            "reference_id": "734462570001",
 *            "schedule": {
 *                "ends_at": null,
 *                "starts_at": "2011-02-01T05:00:00.000Z"
 *            },
 *            "sharing": null,
 *            "state": "ACTIVE",
 *            "tags": [
 *                "bird",
 *                "newtag",
 *                "wildlife"
 *            ],
 *            "text_tracks": [],
 *            "updated_at": "2015-09-07T06:27:07.805Z"
 *        },
 *        {
 *            "account_id": "57838016001",
 *            "complete": true,
 *            "created_at": "2010-12-31T23:27:40.758Z",
 *            "cue_points": [],
 *            "custom_fields": {
 *                "purpose": "Training",
 *                "subject": "Birds"
 *            },
 *            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do  *    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  *    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  *    Duis aute irure d",
 *            "digital_master_id": "734462497001",
 *            "duration": 28733,
 *            "economics": "AD_SUPPORTED",
 *            "folder_id": null,
 *            "geo": null,
 *            "id": "734462569001",
 *            "images": {
 *                "poster": {
 *                    "asset_id": "749161276001",
 *                    "sources": [
 *                        {
 *                            "src": "http://brightcove04.o.brightcove. *    com/57838016001/57838016001_749161276001_ari-origin07- *    arc-194-1294941917207.jpg?pubId=57838016001&videoId=734462569001"
 *                        }
 *                    ],
 *                    "src": "http://brightcove04.o.brightcove. *    com/57838016001/57838016001_749161276001_ari-origin07-arc-194-1294941917207. *    jpg?pubId=57838016001&videoId=734462569001"
 *                },
 *                "thumbnail": {
 *                    "asset_id": "749161275001",
 *                    "sources": [
 *                        {
 *                            "src": "http://brightcove04.o.brightcove. *    com/57838016001/57838016001_749161275001_ari-origin07- *    arc-194-1294941916323.jpg?pubId=57838016001&videoId=734462569001"
 *                        }
 *                    ],
 *                    "src": "http://brightcove04.o.brightcove. *    com/57838016001/57838016001_749161275001_ari-origin07-arc-194-1294941916323. *    jpg?pubId=57838016001&videoId=734462569001"
 *                }
 *            },
 *            "link": {
 *                "text": "Brightcove Learning",
 *                "url": "http://support.brightcove.com/en/training-videos"
 *            },
 *            "long_description": null,
 *            "name": "Bird_Peacock",
 *            "reference_id": "734462569001",
 *            "schedule": {
 *                "ends_at": null,
 *                "starts_at": "2011-02-01T05:00:00.000Z"
 *            },
 *            "sharing": null,
 *            "state": "ACTIVE",
 *            "tags": [
 *                "bird",
 *                "newtag",
 *                "wildlife"
 *            ],
 *            "text_tracks": [],
 *            "updated_at": "2015-09-07T06:27:07.022Z"
 *        },
 *        {
 *            "account_id": "57838016001",
 *            "complete": true,
 *            "created_at": "2010-12-31T23:27:58.736Z",
 *            "cue_points": [],
 *            "custom_fields": {
 *                "purpose": "Training",
 *                "subject": "wildlife"
 *            },
 *            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do  *    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  *    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  *    Duis aute irure d",
 *            "digital_master_id": null,
 *            "duration": 29991,
 *            "economics": "AD_SUPPORTED",
 *            "folder_id": null,
 *            "geo": null,
 *            "id": "734451481001",
 *            "images": {
 *                "poster": {
 *                    "asset_id": "734431747001",
 *                    "sources": [
 *                        {
 *                            "src": "http://brightcove04.o.brightcove. *    com/57838016001/57838016001_734431747001_ari-origin07- *    arc-586-1293842557782.jpg?pubId=57838016001&videoId=734451481001"
 *                        }
 *                    ],
 *                    "src": "http://brightcove04.o.brightcove. *    com/57838016001/57838016001_734431747001_ari-origin07-arc-586-1293842557782. *    jpg?pubId=57838016001&videoId=734451481001"
 *                },
 *                "thumbnail": {
 *                    "asset_id": "734431746001",
 *                    "sources": [
 *                        {
 *                            "src": "http://brightcove04.o.brightcove. *    com/57838016001/57838016001_734431746001_ari-origin07- *    arc-586-1293842557551.jpg?pubId=57838016001&videoId=734451481001"
 *                        }
 *                    ],
 *                    "src": "http://brightcove04.o.brightcove. *    com/57838016001/57838016001_734431746001_ari-origin07-arc-586-1293842557551. *    jpg?pubId=57838016001&videoId=734451481001"
 *                }
 *            },
 *            "link": {
 *                "text": "Brightcove Learning",
 *                "url": "http://support.brightcove.com/en/training-videos"
 *            },
 *            "long_description": null,
 *            "name": "Bird_CommonRedpoll",
 *            "reference_id": "734451481001",
 *            "schedule": {
 *                "ends_at": null,
 *                "starts_at": "2011-02-01T05:00:00.000Z"
 *            },
 *            "sharing": null,
 *            "state": "ACTIVE",
 *            "tags": [
 *                "bird",
 *                "newtag",
 *                "wildlife"
 *            ],
 *            "text_tracks": [],
 *            "updated_at": "2015-09-07T06:27:01.808Z"
 *        }
 *    ]
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

// get video count in playlist

/**
 * @api {get} /accounts/:account_id/counts/playlists/:playlist_id/videos Get Video Count in Playlist
 * @apiName Get Video Count in Playlist
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
 * @apiParam (Path Parameters) {Number} playlist_id Video Cloud playlist ID.
 *
 * @apiParamExample {String} Search Example:
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
 * @api {post} /accounts/:account_id/playlists Create a Playlist
 * @apiName Create a Playlist
 * @apiGroup Playlist
 * @apiVersion 1.0.0
 *
 * @apiDescription Update a new playlist
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
 */

// delete playlist

/**
 * @api {delete} /accounts/:account_id/playlists/:playlist_id Delete Playlist
 * @apiName Delete Playlists
 * @apiGroup Playlist
 * @apiVersion 1.0.0
 *
 * @apiDescription Delete a playlist
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {Number} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {Number} playlist_id Video Cloud playlist ID.
 *
 * @apiParamExample {String} Search for Playlists Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/playlists/749117323001
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 204 No Content
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


