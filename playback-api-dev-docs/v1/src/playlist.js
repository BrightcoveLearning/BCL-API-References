// get playlist by id

/**
 * @api {get} /accounts/:account_id/playlists/:playlist_id Get Playlist by ID
 * @apiName Get Playlists by ID
 * @apiGroup Playlist
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets a playlist object
 * for the account
 *
 * @apiHeader {String} Accept: application/json;pk=policy_key (there are 3 ways to authenticate &mdash; use one of these three headers) See [Policy API Overview](http://docs.brightcove.com/en/video-cloud/policy-api/getting-started/api-overview.html) or [Policy Keys](http://docs.brightcove.com/en/video-cloud/player-management/guides/policy-key.html) for information on getting policy keys
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID
 * @apiParam (Path Parameters) {Number} playlist_id Video Cloud playlist ID
 * @apiParam (URL Parameters) {Number{1-100}} [limit=20] The number of videos to return
 * @apiParam (URL Parameters) {Number} [offset=0] The number of videos to skip
 *
 * @apiParamExample {Url} Get Playlists Example:
 *     https://edge.api.brightcove.com/playback/v1/accounts/57838016001/playlists/749117323001
 *
 * @apiSuccess (Response Field) {String} account_id Video Cloud account id
 * @apiSuccess (Response Field) {DateString} created_at date/time created
 * @apiSuccess (Response Field) {String} description playlist description
 * @apiSuccess (Response Field) {String} id the playlist id
 * @apiSuccess (Response Field) {String} name the playlist name
 * @apiSuccess (Response Field) {String} reference_id the playlist reference id
 * @apiSuccess (Response Field) {String} type the playlist type: EXPLICIT or smart playlist type
 * @apiSuccess (Response Field) {DateString} updated_at date/time last modified
 * @apiSuccess (Response Field) {String[]} video_ids array of video ids (EXPLICIT playlists only)
 * @apiSuccess (Response Field) {String} search search string to retrieve the videos (smart playlists only)
 * @apiSuccess (Response Fields) {Object[]} videos array of video maps
 * @apiSuccess (Response Fields) {String} videos.id video id
 * @apiSuccess (Response Fields) {String} videos.name video title
 * @apiSuccess (Response Fields) {DateString} videos.created_at when the video was created
 * @apiSuccess (Response Fields) {Object} videos.custom_fields={} map of fieldname-value pairs
 * @apiSuccess (Response Fields) {Object} videos.cue_points array of cue point maps
 * @apiSuccess (Response Fields) {String} videos.cue_points.name cue point name
 * @apiSuccess (Response Fields) {String} videos.cue_points.type=AD cue point type
 * @apiSuccess (Response Fields) {Number} videos.cue_points.time time of the cue point in seconds; example: 10.527
 * @apiSuccess (Response Fields) {String} videos.cue_points.metadata=null optional metadata string (128 single-byte characters maximum)
 * @apiSuccess (Response Fields) {Boolean} videos.cue_points.force-stop=false whether video is force-stopped at the cue point
 * @apiSuccess (Response Fields) {String} videos.description video short description
 * @apiSuccess (Response Fields) {Number} videos.duration video duration in milliseconds
 * @apiSuccess (Response Fields) {String} videos.economics whether video is AD_SUPPORTED
 * @apiSuccess (Response Fields) {Object[]} videos.poster_sources array of poster source maps (note that in many cases there will be one source with a `src` value identical to the `poster` value, but this array is included in case there are multiple protocols available, such as `http` and `https`)
 * @apiSuccess (Response Fields) {String} videos.poster_sources.src URL for a poster source image (note that in many cases there will be one source with a `src` value identical to the `poster` value, but this array is included in case there are multiple protocols available, such as `http` and `https`)
 * @apiSuccess (Response Fields) {String} videos.poster URL for the default poster source image
 * @apiSuccess (Response Fields) {String} videos.projection The mapping projection for 360° videos, e.g. "equirectangular"
 * @apiSuccess (Response Fields) {Object[]} videos.thumbnail_sources array of thumbnail source maps (note that in many cases there will be one source with a `src` value identical to the `thumbnail` value, but this array is included in case there are multiple protocols available, such as `http` and `https`)
 * @apiSuccess (Response Fields) {String} videos.thumbnail_sources.src URL for a thumbnail source image (note that in many cases there will be one source with a `src` value identical to the `thumbnail` value, but this array is included in case there are multiple protocols available, such as `http` and `https`)
 * @apiSuccess (Response Fields) {String} videos.thumbnail URL for the default thumbnail source image
 * @apiSuccess (Response Fields) {Object} videos.link map of scheduling properties
 * @apiSuccess (Response Fields) {String} videos.link.text text for the link
 * @apiSuccess (Response Fields) {String} videos.link.url URL for the link
 * @apiSuccess (Response Fields) {String} videos.long_description video long description
 * @apiSuccess (Response Fields) {Boolean} videos.offline_enabled whether video is enabled for offline viewing
 * @apiSuccess (Response Fields) {String} videos.reference_id video reference-id (must be unique within the account)
 * @apiSuccess (Response Fields) {String[]} videos.tags array of tags
 * @apiSuccess (Response Fields) {Object[]} videos.sources array of video sources (renditions)
 * @apiSuccess (Response Fields) {Number} videos.sources.avg_bitrate average bitrate
 * @apiSuccess (Response Fields) {Number} videos.sources.width frame width in pixels
 * @apiSuccess (Response Fields) {Number} videos.sources.height frame height in pixels
 * @apiSuccess (Response Fields) {Number} videos.sources.size size in bytes
 * @apiSuccess (Response Fields) {Number} videos.sources.duration duration in milliseconds
 * @apiSuccess (Response Fields) {String} videos.sources.asset_id the asset id for the source
 * @apiSuccess (Response Fields) {String} videos.sources.stream_name the stream name for the source
 * @apiSuccess (Response Fields) {String} videos.sources.codec the video codec
 * @apiSuccess (Response Fields) {String} videos.sources.container the video container
 * @apiSuccess (Response Fields) {String} videos.sources.app_name the address for rtmp streams
 * @apiSuccess (Response Fields) {String} videos.sources.type the type (for HLS streams)
 * @apiSuccess (Response Fields) {Object} videos.text_tracks array of text track maps
 * @apiSuccess (Response Fields) {String} videos.text_tracks.src URL for the .vtt file
 * @apiSuccess (Response Fields) {Object[]} videos.text_tracks.sources array of sources for .vtt files (note that in many cases there will be one source with a `src` value identical to the `text_tracks.src` value, but this array is included in case there are multiple protocols available, such as `http` and `https`)
 * @apiSuccess (Response Fields) {String} videos.text_tracks.sources.src URL for the .vtt file (note that in many cases there will be one source with a `src` value identical to the `text_tracks.src` value, but this array is included in case there are multiple protocols available, such as `http` and `https`)
 * @apiSuccess (Response Fields) {String} videos.text_tracks.kind kind of text track
 * @apiSuccess (Response Fields) {String} videos.text_tracks.srclang 2-letter language code, such as "en" or "ko"
 * @apiSuccess (Response Fields) {String} videos.text_tracks.mime_type mime-type for the track
 * @apiSuccess (Response Fields) {String} videos.text_tracks.label label for the track
 * @apiSuccess (Response Fields) {Boolean} videos.text_tracks.default whether this is the default track
 * @apiSuccess (Response Fields) {String} videos.text_tracks.in_band_metadata_track_dispatch_type If this field is present, it means that references for this text track are available in the associated video's manifest
 * @apiSuccess (Response Fields) {DateString} videos.updated_at when the video was last modified
 * @apiSuccess (Response Fields) {Object} videos.ad_keys=null map of key/value pairs for ad requests
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *    {
 *        "videos": [
 *            {
 *                "description": "A small friendly bird...",
 *                "economics": "AD_SUPPORTED",
 *                "poster_sources": [
 *                    {
 *                        "src": "http://brightcove.vo.llnwd.net/v1/unsecured/media/57838016001/201502/1437/57838016001_4084480075001_Bird-Chickadee-vs.jpg?pubId=57838016001&videoId=4084164751001"
 *                    }
 *                ],
 *                "tags": [
 *                    "air",
 *                    "bird",
 *                    "nature"
 *                ],
 *                "cue_points": [
 *
 *                ],
 *                "custom_fields": {
 *
 *                },
 *                "account_id": "57838016001",
 *                "sources": [
 *                    {
 *                        "avg_bitrate": 1108347,
 *                        "width": 640,
 *                        "duration": 8240,
 *                        "size": 1141597,
 *                        "stream_name": "mp4:57838016001/201502/1437/57838016001_4084480003001_Bird-Chickadee.mp4&1442941200000&e7edf0ea40d24cf24f504bb34b8d6875",
 *                        "codec": "H264",
 *                        "asset_id": "4084480003001",
 *                        "container": "MP4",
 *                        "height": 344,
 *                        "app_name": "rtmp://brightcove.fcod.llnwd.net/a500/v1/uds/rtmp"
 *                    },
 *                    {
 *                        "avg_bitrate": 1108347,
 *                        "width": 640,
 *                        "src": "http://brightcove.vo.llnwd.net/v1/uds/pd/57838016001/201502/1437/57838016001_4084480003001_Bird-Chickadee.mp4?pubId=57838016001&videoId=4084164751001",
 *                        "size": 1141597,
 *                        "height": 344,
 *                        "duration": 8240,
 *                        "container": "MP4",
 *                        "codec": "H264",
 *                        "asset_id": "4084480003001"
 *                    },
 *                    {
 *                        "type": "application/x-mpegURL",
 *                        "src": "http://c.brightcove.com/services/mobile/streaming/index/master.m3u8?videoId=4084164751001&pubId=57838016001",
 *                        "container": "M2TS",
 *                        "codec": "H264"
 *                    },
 *                    {
 *                        "type": "application/x-mpegURL",
 *                        "src": "https://secure.brightcove.com/services/mobile/streaming/index/master.m3u8?videoId=4084164751001&pubId=57838016001&secure=true",
 *                        "container": "M2TS",
 *                        "codec": "H264"
 *                    }
 *                ],
 *                "name": "Chickadee",
 *                "reference_id": "Bird_Chickadee.mp4_1425064251252",
 *                "long_description": null,
 *                "duration": 8240,
 *                "economics": "AD_SUPPORTED",
 *                "published_at": "2015-02-27T19:10:55.425Z",
 *                "text_tracks": [
 *
 *                ],
 *                "updated_at": "2015-02-27T19:11:57.808Z",
 *                "thumbnail": "http://brightcove.vo.llnwd.net/v1/unsecured/media/57838016001/201502/1437/57838016001_4084480007001_Bird-Chickadee-th.jpg?pubId=57838016001&videoId=4084164751001",
 *                "poster": "http://brightcove.vo.llnwd.net/v1/unsecured/media/57838016001/201502/1437/57838016001_4084480075001_Bird-Chickadee-vs.jpg?pubId=57838016001&videoId=4084164751001",
 *                "link": null,
 *                "id": "4084164751001",
 *                "ad_keys": null,
 *                "thumbnail_sources": [
 *                    {
 *                        "src": "http://brightcove.vo.llnwd.net/v1/unsecured/media/57838016001/201502/1437/57838016001_4084480007001_Bird-Chickadee-th.jpg?pubId=57838016001&videoId=4084164751001"
 *                    }
 *                ],
 *                "created_at": "2015-02-27T19:10:55.425Z"
 *            },
 *            {
 *                "description": "Bugs-Butterfly",
 *                "poster_sources": [
 *                    {
 *                        "src": "http://brightcove.vo.llnwd.net/e1/pd/57838016001/57838016001_1530823798001_vs-4f71d15b7737b0e4346504a7.jpg?pubId=57838016001&videoId=1532562858001"
 *                    }
 *                ],
 *                "tags": [
 *                    "newtag"
 *                ],
 *                "cue_points": [
 *
 *                ],
 *                "custom_fields": {
 *                    "purpose": "Training"
 *                },
 *                "account_id": "57838016001",
 *                "sources": [
 *                    {
 *                        "avg_bitrate": 300000,
 *                        "width": 400,
 *                        "duration": 27495,
 *                        "size": 881490,
 *                        "stream_name": "mp4:57838016001/57838016001_1530823792001_Bugs-Butterfly.mp4&1442941200000&e7edf0ea40d24cf24f504bb34b8d6875",
 *                        "codec": "H264",
 *                        "asset_id": "1530823792001",
 *                        "container": "MP4",
 *                        "height": 224,
 *                        "app_name": "rtmp://brightcove.fcod.llnwd.net/a500/e1/uds/rtmp/ondemand"
 *                    },
 *                    {
 *                        "avg_bitrate": 300000,
 *                        "width": 400,
 *                        "src": "http://brightcove.vo.llnwd.net/e1/uds/pd/57838016001/57838016001_1530823792001_Bugs-Butterfly.mp4?pubId=57838016001&videoId=1532562858001",
 *                        "size": 881490,
 *                        "height": 224,
 *                        "duration": 27495,
 *                        "container": "MP4",
 *                        "codec": "H264",
 *                        "asset_id": "1530823792001"
 *                    },
 *                    {
 *                        "type": "application/x-mpegURL",
 *                        "src": "http://c.brightcove.com/services/mobile/streaming/index/master.m3u8?videoId=1532562858001&pubId=57838016001",
 *                        "container": "M2TS",
 *                        "codec": "H264"
 *                    },
 *                    {
 *                        "type": "application/x-mpegURL",
 *                        "src": "https://secure.brightcove.com/services/mobile/streaming/index/master.m3u8?videoId=1532562858001&pubId=57838016001&secure=true",
 *                        "container": "M2TS",
 *                        "codec": "H264"
 *                    }
 *                ],
 *                "name": "Bugs-Butterfly",
 *                "reference_id": "1532562858001",
 *                "long_description": null,
 *                "duration": 27495,
 *                "economics": "AD_SUPPORTED",
 *                "published_at": "2012-03-27T14:40:26.188Z",
 *                "text_tracks": [
 *
 *                ],
 *                "updated_at": "2015-09-07T06:27:58.071Z",
 *                "thumbnail": "http://brightcove.vo.llnwd.net/e1/pd/57838016001/57838016001_1530823799001_th-4f71d15b7737b0e4346504a7.jpg?pubId=57838016001&videoId=1532562858001",
 *                "poster": "http://brightcove.vo.llnwd.net/e1/pd/57838016001/57838016001_1530823798001_vs-4f71d15b7737b0e4346504a7.jpg?pubId=57838016001&videoId=1532562858001",
 *                "link": null,
 *                "id": "1532562858001",
 *                "ad_keys": null,
 *                "thumbnail_sources": [
 *                    {
 *                        "src": "http://brightcove.vo.llnwd.net/e1/pd/57838016001/57838016001_1530823799001_th-4f71d15b7737b0e4346504a7.jpg?pubId=57838016001&videoId=1532562858001"
 *                    }
 *                ],
 *                "created_at": "2012-03-27T14:40:26.188Z"
 *            }
 *        ],
 *        "updated_at": "2015-09-20T18:45:52.606Z",
 *        "type": "EXPLICIT",
 *        "reference_id": null,
 *        "name": "Manual",
 *        "id": "749117323001",
 *        "description": null,
 *        "created_at": "2011-01-13T18:46:03.883Z",
 *        "account_id": "57838016001"
 *    }
 *
 * @apiError (Error 400) BAD_REQUEST Mis-formatted request, i.e. duplicate query parameters supplied
 * @apiError (Error 401) INVALID_POLICY_KEY Must provide a BCOV-Policy header with a legal policy key
 * @apiError (Error 401) FORBIDDEN Videos cannot be played back at this location because of the domain, ip, or geo restriction policy - note that in the case of geo-restriction where some of the videos cannot be played back, you will get a success response that will include an `errors` array indicating that restricted videos are not included
 * @apiError (Error 404) PLAYLIST_NOT_FOUND The designated resource was not found
 * @apiError (Error 404) RESOURCE_NOT_FOUND The designated resource was not found
 * @apiError (Error 404) ACCOUNT_NOT_FOUND The designated resource was not found
 * @apiError (Error 405) METHOD_NOT_ALLOWED Only GET, HEAD and OPTIONS are allowed for this api
 * @apiError (Error 500) INTERNAL_SERVER_ERROR Something went wrong on our side while handling the request
 * @apiError (Error 502) BAD_GATEWAY Bad response from a backend server
 * @apiError (Error 502) ACCOUNT_RETRIEVE_FAILURE Bad response from a backend server
 * @apiError (Error 502) PLAYLIST_RETRIEVE_FAILURE Bad response from a backend server
 * @apiError (Error 503) SERVICE_UNAVAILABLE Returned this response from a backend server
 * @apiError (Error 504) GATEWAY_TIMEOUT Either a backend server or one of the servers they rely on timed out
 *
 * @apiErrorExample {json} 404 Error Response
 *     HTTP/1.1 404 Not Found
 *     [
 *         {
 *             "error_code": "PLAYLIST_NOT_FOUND"
 *         }
 *     ]
 *
 *
 */

// get playlist by reference id

/**
 * @api {get} /accounts/:account_id/playlists/ref:reference_id Get Playlist by Reference ID
 * @apiName Get Playlists by Reference ID
 * @apiGroup Playlist
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets a playlist object
 * for the account
 *
 * @apiHeader {String} Accept: application/json;pk=policy_key (there are 3 ways to authenticate &mdash; use one of these three headers) See [Policy API Overview](http://docs.brightcove.com/en/video-cloud/policy-api/getting-started/api-overview.html) or [Policy Keys](http://docs.brightcove.com/en/video-cloud/player-management/guides/policy-key.html) for information on getting policy keys
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID
 * @apiParam (Path Parameters) {Number} reference_id Video Cloud playlist reference ID
 * @apiParam (URL Parameters) {Number{1-100}} [limit=20] The number of videos to return
 * @apiParam (URL Parameters) {Number} [offset=0] The number of videos to skip
 *
 * @apiParamExample {Url} Get Playlists Example:
 *     https://edge.api.brightcove.com/playback/v1/accounts/57838016001/playlists/ref:my-playlist-refID
 *
 * @apiSuccess (Response Field) {String} account_id Video Cloud account id
 * @apiSuccess (Response Field) {DateString} created_at date/time created
 * @apiSuccess (Response Field) {String} description playlist description
 * @apiSuccess (Response Field) {String} id the playlist id
 * @apiSuccess (Response Field) {String} name the playlist name
 * @apiSuccess (Response Field) {String} reference_id the playlist reference id
 * @apiSuccess (Response Field) {String} type the playlist type: EXPLICIT or smart playlist type
 * @apiSuccess (Response Field) {DateString} updated_at date/time last modified
 * @apiSuccess (Response Field) {String[]} video_ids array of video ids (EXPLICIT playlists only)
 * @apiSuccess (Response Field) {String} search search string to retrieve the videos (smart playlists only)
 * @apiSuccess (Response Fields) {Object[]} videos array of video maps
 * @apiSuccess (Response Fields) {String} videos.id video id
 * @apiSuccess (Response Fields) {String} videos.name video title
 * @apiSuccess (Response Fields) {DateString} videos.created_at when the video was created
 * @apiSuccess (Response Fields) {Object} videos.custom_fields={} map of fieldname-value pairs
 * @apiSuccess (Response Fields) {Object} videos.cue_points array of cue point maps
 * @apiSuccess (Response Fields) {String} videos.cue_points.name cue point name
 * @apiSuccess (Response Fields) {String} videos.cue_points.type=AD cue point type
 * @apiSuccess (Response Fields) {Number} videos.cue_points.time time of the cue point in seconds; example: 10.527
 * @apiSuccess (Response Fields) {String} videos.cue_points.metadata=null optional metadata string (128 single-byte characters maximum)
 * @apiSuccess (Response Fields) {Boolean} videos.cue_points.force-stop=false whether video is force-stopped at the cue point
 * @apiSuccess (Response Fields) {String} videos.description video short description
 * @apiSuccess (Response Fields) {Number} videos.duration video duration in milliseconds
 * @apiSuccess (Response Fields) {String} videos.economics whether video is AD_SUPPORTED
 * @apiSuccess (Response Fields) {Object[]} videos.poster_sources array of poster source maps (note that in many cases there will be one source with a `src` value identical to the `poster` value, but this array is included in case there are multiple protocols available, such as `http` and `https`)
 * @apiSuccess (Response Fields) {String} videos.poster_sources.src URL for a poster source image (note that in many cases there will be one source with a `src` value identical to the `poster` value, but this array is included in case there are multiple protocols available, such as `http` and `https`)
 * @apiSuccess (Response Fields) {String} videos.poster URL for the default poster source image
 * @apiSuccess (Response Fields) {String} videos.projection The mapping projection for 360° videos, e.g. "equirectangular"
 * @apiSuccess (Response Fields) {Object[]} videos.thumbnail_sources array of thumbnail source maps (note that in many cases there will be one source with a `src` value identical to the `thumbnail` value, but this array is included in case there are multiple protocols available, such as `http` and `https`)
 * @apiSuccess (Response Fields) {String} videos.thumbnail_sources.src URL for a thumbnail source image (note that in many cases there will be one source with a `src` value identical to the `thumbnail` value, but this array is included in case there are multiple protocols available, such as `http` and `https`)
 * @apiSuccess (Response Fields) {String} videos.thumbnail URL for the default thumbnail source image
 * @apiSuccess (Response Fields) {Object} videos.link map of scheduling properties
 * @apiSuccess (Response Fields) {String} videos.link.text text for the link
 * @apiSuccess (Response Fields) {String} videos.link.url URL for the link
 * @apiSuccess (Response Fields) {String} videos.long_description video long description
 * @apiSuccess (Response Fields) {Boolean} videos.offline_enabled whether video is enabled for offline viewing
 * @apiSuccess (Response Fields) {String} videos.reference_id video reference-id (must be unique within the account)
 * @apiSuccess (Response Fields) {String[]} videos.tags array of tags
 * @apiSuccess (Response Fields) {Object[]} videos.sources array of video sources (renditions)
 * @apiSuccess (Response Fields) {Number} videos.sources.avg_bitrate average bitrate
 * @apiSuccess (Response Fields) {Number} videos.sources.width frame width in pixels
 * @apiSuccess (Response Fields) {Number} videos.sources.height frame height in pixels
 * @apiSuccess (Response Fields) {Number} videos.sources.size size in bytes
 * @apiSuccess (Response Fields) {Number} videos.sources.duration duration in milliseconds
 * @apiSuccess (Response Fields) {String} videos.sources.asset_id the asset id for the source
 * @apiSuccess (Response Fields) {String} videos.sources.stream_name the stream name for the source
 * @apiSuccess (Response Fields) {String} videos.sources.codec the video codec
 * @apiSuccess (Response Fields) {String} videos.sources.container the video container
 * @apiSuccess (Response Fields) {String} videos.sources.app_name the address for rtmp streams
 * @apiSuccess (Response Fields) {String} videos.sources.type the type (for HLS streams)
 * @apiSuccess (Response Fields) {Object} videos.text_tracks array of text track maps
 * @apiSuccess (Response Fields) {String} videos.text_tracks.src URL for the .vtt file
 * @apiSuccess (Response Fields) {Object[]} videos.text_tracks.sources array of sources for .vtt files (note that in many cases there will be one source with a `src` value identical to the `text_tracks.src` value, but this array is included in case there are multiple protocols available, such as `http` and `https`)
 * @apiSuccess (Response Fields) {String} videos.text_tracks.sources.src URL for the .vtt file (note that in many cases there will be one source with a `src` value identical to the `text_tracks.src` value, but this array is included in case there are multiple protocols available, such as `http` and `https`)
 * @apiSuccess (Response Fields) {String} videos.text_tracks.kind kind of text track
 * @apiSuccess (Response Fields) {String} videos.text_tracks.srclang 2-letter language code, such as "en" or "ko"
 * @apiSuccess (Response Fields) {String} videos.text_tracks.mime_type mime-type for the track
 * @apiSuccess (Response Fields) {String} videos.text_tracks.label label for the track
 * @apiSuccess (Response Fields) {Boolean} videos.text_tracks.default whether this is the default track
 * @apiSuccess (Response Fields) {String} videos.text_tracks.in_band_metadata_track_dispatch_type If this field is present, it means that references for this text track are available in the associated video's manifest
 * @apiSuccess (Response Fields) {DateString} videos.updated_at when the video was last modified
 * @apiSuccess (Response Fields) {Object} videos.ad_keys=null map of key/value pairs for ad requests
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *    {
 *        "videos": [
 *            {
 *                "description": "A small friendly bird...",
 *                "economics": "AD_SUPPORTED",
 *                "poster_sources": [
 *                    {
 *                        "src": "http://brightcove.vo.llnwd.net/v1/unsecured/media/57838016001/201502/1437/57838016001_4084480075001_Bird-Chickadee-vs.jpg?pubId=57838016001&videoId=4084164751001"
 *                    }
 *                ],
 *                "tags": [
 *                    "air",
 *                    "bird",
 *                    "nature"
 *                ],
 *                "cue_points": [
 *
 *                ],
 *                "custom_fields": {
 *
 *                },
 *                "account_id": "57838016001",
 *                "sources": [
 *                    {
 *                        "avg_bitrate": 1108347,
 *                        "width": 640,
 *                        "duration": 8240,
 *                        "size": 1141597,
 *                        "stream_name": "mp4:57838016001/201502/1437/57838016001_4084480003001_Bird-Chickadee.mp4&1442941200000&e7edf0ea40d24cf24f504bb34b8d6875",
 *                        "codec": "H264",
 *                        "asset_id": "4084480003001",
 *                        "container": "MP4",
 *                        "height": 344,
 *                        "app_name": "rtmp://brightcove.fcod.llnwd.net/a500/v1/uds/rtmp"
 *                    },
 *                    {
 *                        "avg_bitrate": 1108347,
 *                        "width": 640,
 *                        "src": "http://brightcove.vo.llnwd.net/v1/uds/pd/57838016001/201502/1437/57838016001_4084480003001_Bird-Chickadee.mp4?pubId=57838016001&videoId=4084164751001",
 *                        "size": 1141597,
 *                        "height": 344,
 *                        "duration": 8240,
 *                        "container": "MP4",
 *                        "codec": "H264",
 *                        "asset_id": "4084480003001"
 *                    },
 *                    {
 *                        "avg_bitrate": 502409,
 *                        "width": 400,
 *                        "duration": 8240,
 *                        "size": 517481,
 *                        "stream_name": "mp4:57838016001/201502/1437/57838016001_4084480008001_Bird-Chickadee.mp4&1442941200000&e7edf0ea40d24cf24f504bb34b8d6875",
 *                        "codec": "H264",
 *                        "asset_id": "4084480008001",
 *                        "container": "MP4",
 *                        "height": 214,
 *                        "app_name": "rtmp://brightcove.fcod.llnwd.net/a500/v1/uds/rtmp"
 *                    },
 *                    {
 *                        "avg_bitrate": 502409,
 *                        "width": 400,
 *                        "src": "http://brightcove.vo.llnwd.net/v1/uds/pd/57838016001/201502/1437/57838016001_4084480008001_Bird-Chickadee.mp4?pubId=57838016001&videoId=4084164751001",
 *                        "size": 517481,
 *                        "height": 214,
 *                        "duration": 8240,
 *                        "container": "MP4",
 *                        "codec": "H264",
 *                        "asset_id": "4084480008001"
 *                    },
 *                    {
 *                        "avg_bitrate": 297015,
 *                        "width": 320,
 *                        "duration": 8240,
 *                        "size": 305925,
 *                        "stream_name": "mp4:57838016001/201502/1437/57838016001_4084480009001_Bird-Chickadee.mp4&1442941200000&e7edf0ea40d24cf24f504bb34b8d6875",
 *                        "codec": "H264",
 *                        "asset_id": "4084480009001",
 *                        "container": "MP4",
 *                        "height": 172,
 *                        "app_name": "rtmp://brightcove.fcod.llnwd.net/a500/v1/uds/rtmp"
 *                    },
 *                    {
 *                        "avg_bitrate": 297015,
 *                        "width": 320,
 *                        "src": "http://brightcove.vo.llnwd.net/v1/uds/pd/57838016001/201502/1437/57838016001_4084480009001_Bird-Chickadee.mp4?pubId=57838016001&videoId=4084164751001",
 *                        "size": 305925,
 *                        "height": 172,
 *                        "duration": 8240,
 *                        "container": "MP4",
 *                        "codec": "H264",
 *                        "asset_id": "4084480009001"
 *                    },
 *                    {
 *                        "avg_bitrate": 1685090,
 *                        "width": 640,
 *                        "duration": 8240,
 *                        "size": 1735643,
 *                        "stream_name": "mp4:57838016001/201502/1437/57838016001_4084480012001_Bird-Chickadee.mp4&1442941200000&e7edf0ea40d24cf24f504bb34b8d6875",
 *                        "codec": "H264",
 *                        "asset_id": "4084480012001",
 *                        "container": "MP4",
 *                        "height": 344,
 *                        "app_name": "rtmp://brightcove.fcod.llnwd.net/a500/v1/uds/rtmp"
 *                    },
 *                    {
 *                        "avg_bitrate": 1685090,
 *                        "width": 640,
 *                        "src": "http://brightcove.vo.llnwd.net/v1/uds/pd/57838016001/201502/1437/57838016001_4084480012001_Bird-Chickadee.mp4?pubId=57838016001&videoId=4084164751001",
 *                        "size": 1735643,
 *                        "height": 344,
 *                        "duration": 8240,
 *                        "container": "MP4",
 *                        "codec": "H264",
 *                        "asset_id": "4084480012001"
 *                    },
 *                    {
 *                        "avg_bitrate": 3949531,
 *                        "width": 640,
 *                        "duration": 8240,
 *                        "size": 4068017,
 *                        "stream_name": "mp4:57838016001/201502/1437/57838016001_4084480014001_Bird-Chickadee.mp4&1442941200000&e7edf0ea40d24cf24f504bb34b8d6875",
 *                        "codec": "H264",
 *                        "asset_id": "4084480014001",
 *                        "container": "MP4",
 *                        "height": 344,
 *                        "app_name": "rtmp://brightcove.fcod.llnwd.net/a500/v1/uds/rtmp"
 *                    },
 *                    {
 *                        "avg_bitrate": 3949531,
 *                        "width": 640,
 *                        "src": "http://brightcove.vo.llnwd.net/v1/uds/pd/57838016001/201502/1437/57838016001_4084480014001_Bird-Chickadee.mp4?pubId=57838016001&videoId=4084164751001",
 *                        "size": 4068017,
 *                        "height": 344,
 *                        "duration": 8240,
 *                        "container": "MP4",
 *                        "codec": "H264",
 *                        "asset_id": "4084480014001"
 *                    },
 *                    {
 *                        "avg_bitrate": 704771,
 *                        "width": 480,
 *                        "duration": 8240,
 *                        "size": 725914,
 *                        "stream_name": "mp4:57838016001/201502/1437/57838016001_4084480079001_Bird-Chickadee.mp4&1442941200000&e7edf0ea40d24cf24f504bb34b8d6875",
 *                        "codec": "H264",
 *                        "asset_id": "4084480079001",
 *                        "container": "MP4",
 *                        "height": 258,
 *                        "app_name": "rtmp://brightcove.fcod.llnwd.net/a500/v1/uds/rtmp"
 *                    },
 *                    {
 *                        "avg_bitrate": 704771,
 *                        "width": 480,
 *                        "src": "http://brightcove.vo.llnwd.net/v1/uds/pd/57838016001/201502/1437/57838016001_4084480079001_Bird-Chickadee.mp4?pubId=57838016001&videoId=4084164751001",
 *                        "size": 725914,
 *                        "height": 258,
 *                        "duration": 8240,
 *                        "container": "MP4",
 *                        "codec": "H264",
 *                        "asset_id": "4084480079001"
 *                    },
 *                    {
 *                        "avg_bitrate": 2446959,
 *                        "width": 640,
 *                        "duration": 8240,
 *                        "size": 2520368,
 *                        "stream_name": "mp4:57838016001/201502/1437/57838016001_4084480703001_Bird-Chickadee.mp4&1442941200000&e7edf0ea40d24cf24f504bb34b8d6875",
 *                        "codec": "H264",
 *                        "asset_id": "4084480703001",
 *                        "container": "MP4",
 *                        "height": 344,
 *                        "app_name": "rtmp://brightcove.fcod.llnwd.net/a500/v1/uds/rtmp"
 *                    },
 *                    {
 *                        "avg_bitrate": 2446959,
 *                        "width": 640,
 *                        "src": "http://brightcove.vo.llnwd.net/v1/uds/pd/57838016001/201502/1437/57838016001_4084480703001_Bird-Chickadee.mp4?pubId=57838016001&videoId=4084164751001",
 *                        "size": 2520368,
 *                        "height": 344,
 *                        "duration": 8240,
 *                        "container": "MP4",
 *                        "codec": "H264",
 *                        "asset_id": "4084480703001"
 *                    },
 *                    {
 *                        "type": "application/x-mpegURL",
 *                        "src": "http://c.brightcove.com/services/mobile/streaming/index/master.m3u8?videoId=4084164751001&pubId=57838016001",
 *                        "container": "M2TS",
 *                        "codec": "H264"
 *                    },
 *                    {
 *                        "type": "application/x-mpegURL",
 *                        "src": "https://secure.brightcove.com/services/mobile/streaming/index/master.m3u8?videoId=4084164751001&pubId=57838016001&secure=true",
 *                        "container": "M2TS",
 *                        "codec": "H264"
 *                    }
 *                ],
 *                "name": "Chickadee",
 *                "reference_id": "Bird_Chickadee.mp4_1425064251252",
 *                "long_description": null,
 *                "duration": 8240,
 *                "economics": "AD_SUPPORTED",
 *                "published_at": "2015-02-27T19:10:55.425Z",
 *                "text_tracks": [
 *
 *                ],
 *                "updated_at": "2015-02-27T19:11:57.808Z",
 *                "thumbnail": "http://brightcove.vo.llnwd.net/v1/unsecured/media/57838016001/201502/1437/57838016001_4084480007001_Bird-Chickadee-th.jpg?pubId=57838016001&videoId=4084164751001",
 *                "poster": "http://brightcove.vo.llnwd.net/v1/unsecured/media/57838016001/201502/1437/57838016001_4084480075001_Bird-Chickadee-vs.jpg?pubId=57838016001&videoId=4084164751001",
 *                "link": null,
 *                "id": "4084164751001",
 *                "ad_keys": null,
 *                "thumbnail_sources": [
 *                    {
 *                        "src": "http://brightcove.vo.llnwd.net/v1/unsecured/media/57838016001/201502/1437/57838016001_4084480007001_Bird-Chickadee-th.jpg?pubId=57838016001&videoId=4084164751001"
 *                    }
 *                ],
 *                "created_at": "2015-02-27T19:10:55.425Z"
 *            },
 *            {
 *                "description": "Bugs-Butterfly",
 *                "poster_sources": [
 *                    {
 *                        "src": "http://brightcove.vo.llnwd.net/e1/pd/57838016001/57838016001_1530823798001_vs-4f71d15b7737b0e4346504a7.jpg?pubId=57838016001&videoId=1532562858001"
 *                    }
 *                ],
 *                "tags": [
 *                    "newtag"
 *                ],
 *                "cue_points": [
 *
 *                ],
 *                "custom_fields": {
 *                    "purpose": "Training"
 *                },
 *                "account_id": "57838016001",
 *                "sources": [
 *                    {
 *                        "avg_bitrate": 300000,
 *                        "width": 400,
 *                        "duration": 27495,
 *                        "size": 881490,
 *                        "stream_name": "mp4:57838016001/57838016001_1530823792001_Bugs-Butterfly.mp4&1442941200000&e7edf0ea40d24cf24f504bb34b8d6875",
 *                        "codec": "H264",
 *                        "asset_id": "1530823792001",
 *                        "container": "MP4",
 *                        "height": 224,
 *                        "app_name": "rtmp://brightcove.fcod.llnwd.net/a500/e1/uds/rtmp/ondemand"
 *                    },
 *                    {
 *                        "avg_bitrate": 300000,
 *                        "width": 400,
 *                        "src": "http://brightcove.vo.llnwd.net/e1/uds/pd/57838016001/57838016001_1530823792001_Bugs-Butterfly.mp4?pubId=57838016001&videoId=1532562858001",
 *                        "size": 881490,
 *                        "height": 224,
 *                        "duration": 27495,
 *                        "container": "MP4",
 *                        "codec": "H264",
 *                        "asset_id": "1530823792001"
 *                    },
 *                    {
 *                        "avg_bitrate": 139528,
 *                        "width": 400,
 *                        "duration": 27600,
 *                        "size": 345887,
 *                        "stream_name": "mp4:57838016001/57838016001_1530823795001_Bugs-Butterfly.mp4&1442941200000&e7edf0ea40d24cf24f504bb34b8d6875",
 *                        "codec": "H264",
 *                        "asset_id": "1530823795001",
 *                        "container": "MP4",
 *                        "height": 224,
 *                        "app_name": "rtmp://brightcove.fcod.llnwd.net/a500/e1/uds/rtmp/ondemand"
 *                    },
 *                    {
 *                        "avg_bitrate": 139528,
 *                        "width": 400,
 *                        "src": "http://brightcove.vo.llnwd.net/e1/uds/pd/57838016001/57838016001_1530823795001_Bugs-Butterfly.mp4?pubId=57838016001&videoId=1532562858001",
 *                        "size": 345887,
 *                        "height": 224,
 *                        "duration": 27600,
 *                        "container": "MP4",
 *                        "codec": "H264",
 *                        "asset_id": "1530823795001"
 *                    },
 *                    {
 *                        "avg_bitrate": 500000,
 *                        "width": 480,
 *                        "duration": 27495,
 *                        "size": 1480813,
 *                        "stream_name": "mp4:57838016001/57838016001_1530823797001_Bugs-Butterfly.mp4&1442941200000&e7edf0ea40d24cf24f504bb34b8d6875",
 *                        "codec": "H264",
 *                        "asset_id": "1530823797001",
 *                        "container": "MP4",
 *                        "height": 270,
 *                        "app_name": "rtmp://brightcove.fcod.llnwd.net/a500/e1/uds/rtmp/ondemand"
 *                    },
 *                    {
 *                        "avg_bitrate": 500000,
 *                        "width": 480,
 *                        "src": "http://brightcove.vo.llnwd.net/e1/uds/pd/57838016001/57838016001_1530823797001_Bugs-Butterfly.mp4?pubId=57838016001&videoId=1532562858001",
 *                        "size": 1480813,
 *                        "height": 270,
 *                        "duration": 27495,
 *                        "container": "MP4",
 *                        "codec": "H264",
 *                        "asset_id": "1530823797001"
 *                    },
 *                    {
 *                        "avg_bitrate": 460000,
 *                        "width": 480,
 *                        "duration": 27495,
 *                        "size": 1582360,
 *                        "stream_name": "mp4:57838016001/57838016001_1532634104001_Bugs-Butterfly.mp4&1442941200000&e7edf0ea40d24cf24f504bb34b8d6875",
 *                        "codec": "H264",
 *                        "asset_id": "1532634104001",
 *                        "container": "MP4",
 *                        "height": 268,
 *                        "app_name": "rtmp://brightcove.fcod.llnwd.net/a500/e1/uds/rtmp/ondemand"
 *                    },
 *                    {
 *                        "avg_bitrate": 460000,
 *                        "width": 480,
 *                        "src": "http://brightcove.vo.llnwd.net/e1/uds/pd/57838016001/57838016001_1532634104001_Bugs-Butterfly.mp4?pubId=57838016001&videoId=1532562858001",
 *                        "size": 1582360,
 *                        "height": 268,
 *                        "duration": 27495,
 *                        "container": "MP4",
 *                        "codec": "H264",
 *                        "asset_id": "1532634104001"
 *                    },
 *                    {
 *                        "type": "application/x-mpegURL",
 *                        "src": "http://c.brightcove.com/services/mobile/streaming/index/master.m3u8?videoId=1532562858001&pubId=57838016001",
 *                        "container": "M2TS",
 *                        "codec": "H264"
 *                    },
 *                    {
 *                        "type": "application/x-mpegURL",
 *                        "src": "https://secure.brightcove.com/services/mobile/streaming/index/master.m3u8?videoId=1532562858001&pubId=57838016001&secure=true",
 *                        "container": "M2TS",
 *                        "codec": "H264"
 *                    }
 *                ],
 *                "name": "Bugs-Butterfly",
 *                "reference_id": "1532562858001",
 *                "long_description": null,
 *                "duration": 27495,
 *                "economics": "AD_SUPPORTED",
 *                "published_at": "2012-03-27T14:40:26.188Z",
 *                "text_tracks": [
 *
 *                ],
 *                "updated_at": "2015-09-07T06:27:58.071Z",
 *                "thumbnail": "http://brightcove.vo.llnwd.net/e1/pd/57838016001/57838016001_1530823799001_th-4f71d15b7737b0e4346504a7.jpg?pubId=57838016001&videoId=1532562858001",
 *                "poster": "http://brightcove.vo.llnwd.net/e1/pd/57838016001/57838016001_1530823798001_vs-4f71d15b7737b0e4346504a7.jpg?pubId=57838016001&videoId=1532562858001",
 *                "link": null,
 *                "id": "1532562858001",
 *                "ad_keys": null,
 *                "thumbnail_sources": [
 *                    {
 *                        "src": "http://brightcove.vo.llnwd.net/e1/pd/57838016001/57838016001_1530823799001_th-4f71d15b7737b0e4346504a7.jpg?pubId=57838016001&videoId=1532562858001"
 *                    }
 *                ],
 *                "created_at": "2012-03-27T14:40:26.188Z"
 *            }
 *        ],
 *        "updated_at": "2015-09-20T18:45:52.606Z",
 *        "type": "EXPLICIT",
 *        "reference_id": null,
 *        "name": "Manual",
 *        "id": "749117323001",
 *        "description": null,
 *        "created_at": "2011-01-13T18:46:03.883Z",
 *        "account_id": "57838016001"
 *    }
 *
 * @apiError (Error 400) BAD_REQUEST Mis-formatted request, i.e. duplicate query parameters supplied
 * @apiError (Error 401) INVALID_POLICY_KEY Must provide a BCOV-Policy header with a legal policy key
 * @apiError (Error 401) FORBIDDEN Videos cannot be played back at this location because of the domain, ip, or geo restriction policy - note that in the case of geo-restriction where some of the videos cannot be played back, you will get a success response that will include an `errors` array indicating that restricted videos are not included
 * @apiError (Error 404) PLAYLIST_NOT_FOUND The designated resource was not found
 * @apiError (Error 404) RESOURCE_NOT_FOUND The designated resource was not found
 * @apiError (Error 404) ACCOUNT_NOT_FOUND The designated resource was not found
 * @apiError (Error 405) METHOD_NOT_ALLOWED Only GET, HEAD and OPTIONS are allowed for this api
 * @apiError (Error 500) INTERNAL_SERVER_ERROR Something went wrong on our side while handling the request
 * @apiError (Error 502) BAD_GATEWAY Bad response from a backend server
 * @apiError (Error 502) ACCOUNT_RETRIEVE_FAILURE Bad response from a backend server
 * @apiError (Error 502) PLAYLIST_RETRIEVE_FAILURE Bad response from a backend server
 * @apiError (Error 503) SERVICE_UNAVAILABLE Returned this response from a backend server
 * @apiError (Error 504) GATEWAY_TIMEOUT Either a backend server or one of the servers they rely on timed out
 *
 * @apiErrorExample {json} 404 Error Response
 *     HTTP/1.1 404 Not Found
 *     [
 *         {
 *             "error_code": "PLAYLIST_NOT_FOUND"
 *         }
 *     ]
 *
 *
 */
