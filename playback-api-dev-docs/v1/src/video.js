// get video by id

/**
 * @api {get} /accounts/:account_id/videos/:video_id Get Video by ID
 * @apiName Get Video by ID
 * @apiGroup Video
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets a video object by video id
 *
 * @apiHeader {String} Accept: application/json;pk=policy_key (there are 3 ways to authenticate &mdash; use one of these three headers) See [Policy API Overview](http://docs.brightcove.com/en/video-cloud/policy-api/getting-started/api-overview.html) or [Policy Keys](http://docs.brightcove.com/en/video-cloud/player-management/guides/policy-key.html) for information on getting policy keys
 * @apiHeader {String} Authorization: BCOV-Policy {policy_key} (there are 3 ways to authenticate &mdash; use one of these three headers) See [Policy API Overview](http://docs.brightcove.com/en/video-cloud/policy-api/getting-started/api-overview.html) or [Policy Keys](http://docs.brightcove.com/en/video-cloud/player-management/guides/policy-key.html) for information on getting policy keys
 * @apiHeader {String} BCOV-Policy: {policy_key} (there are 3 ways to authenticate &mdash; use one of these three headers) See [Policy API Overview](http://docs.brightcove.com/en/video-cloud/policy-api/getting-started/api-overview.html) or [Policy Keys](http://docs.brightcove.com/en/video-cloud/player-management/guides/policy-key.html) for information on getting policy keys
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID
 * @apiParam (Path Parameters) {Number} video_id Video Cloud video ID
 *
 * @apiParamExample {Url} Get Video Example:
 *     https://edge.api.brightcove.com/playback/v1/accounts/57838016001/videos/38467382999
 *
 * @apiSuccess (Response Fields) {String} account_id Video Cloud account id
 * @apiSuccess (Response Fields) {String} id video id
 * @apiSuccess (Response Fields) {String} name video title
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
 * @apiSuccess (Response Fields) {String} economics whether video is AD_SUPPORTED
 * @apiSuccess (Response Fields) {Object[]} poster_sources array of poster source maps (note that in many cases there will be one source with a `src` value identical to the `poster` value, but this array is included in case there are multiple protocols available, such as `http` and `https`)
 * @apiSuccess (Response Fields) {String} poster_sources.src URL for a poster source image (note that in many cases there will be one source with a `src` value identical to the `poster` value, but this array is included in case there are multiple protocols available, such as `http` and `https`)
 * @apiSuccess (Response Fields) {String} poster URL for the default poster source image
 * @apiSuccess (Response Fields) {String} projection The mapping projection for 360° videos, e.g. "equirectangular"
 * @apiSuccess (Response Fields) {Object[]} thumbnail_sources array of thumbnail source maps (note that in many cases there will be one source with a `src` value identical to the `thumbnail` value, but this array is included in case there are multiple protocols available, such as `http` and `https`)
 * @apiSuccess (Response Fields) {String} thumbnail_sources.src URL for a thumbnail source image (note that in many cases there will be one source with a `src` value identical to the `thumbnail` value, but this array is included in case there are multiple protocols available, such as `http` and `https`)
 image
 * @apiSuccess (Response Fields) {String} thumbnail URL for the default thumbnail source image
 * @apiSuccess (Response Fields) {Object} link map of scheduling properties
 * @apiSuccess (Response Fields) {String} link.text text for the link
 * @apiSuccess (Response Fields) {String} link.url URL for the link
 * @apiSuccess (Response Fields) {String} long_description video long description
 * @apiSuccess (Response Fields) {Boolean} offline_enabled whether video is enabled for offline viewing
 * @apiSuccess (Response Fields) {String} reference_id video reference-id (must be unique within the account)
 * @apiSuccess (Response Fields) {String[]} tags array of tags
 * @apiSuccess (Response Fields) {Object[]} sources array of video sources (renditions)
 * @apiSuccess (Response Fields) {Number} sources.avg_bitrate average bitrate
 * @apiSuccess (Response Fields) {Number} sources.width frame width in pixels
 * @apiSuccess (Response Fields) {Number} sources.height frame height in pixels
 * @apiSuccess (Response Fields) {Number} sources.size size in bytes
 * @apiSuccess (Response Fields) {Number} sources.duration duration in milliseconds
 * @apiSuccess (Response Fields) {String} sources.asset_id the asset id for the source
 * @apiSuccess (Response Fields) {String} sources.stream_name the stream name for the source
 * @apiSuccess (Response Fields) {String} sources.codec the video codec
 * @apiSuccess (Response Fields) {String} sources.container the video container
 * @apiSuccess (Response Fields) {String} sources.app_name the address for rtmp streams
 * @apiSuccess (Response Fields) {String} sources.type the type (for HLS streams)
 * @apiSuccess (Response Fields) {Object} text_tracks array of text track maps
 * @apiSuccess (Response Fields) {String} text_tracks.src URL for the .vtt file
 * @apiSuccess (Response Fields) {Object[]} text_tracks.sources array of sources for .vtt files (note that in many cases there will be one source with a `src` value identical to the `text_tracks.src` value, but this array is included in case there are multiple protocols available, such as `http` and `https`)
 * @apiSuccess (Response Fields) {String} text_tracks.sources.src URL for the .vtt file (note that in many cases there will be one source with a `src` value identical to the `text_tracks.src` value, but this array is included in case there are multiple protocols available, such as `http` and `https`)
 * @apiSuccess (Response Fields) {String} text_tracks.kind kind of text track
 * @apiSuccess (Response Fields) {String} text_tracks.srclang 2-letter language code, such as "en" or "ko"
 * @apiSuccess (Response Fields) {String} text_tracks.mime_type mime-type for the track
 * @apiSuccess (Response Fields) {String} text_tracks.label label for the track
 * @apiSuccess (Response Fields) {Boolean} text_tracks.default whether this is the default track
 * @apiSuccess (Response Fields) {String} text_tracks.in_band_metadata_track_dispatch_type If this field is present, it means that references for this text track are available in the associated video's manifest
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {Object} ad_keys=null map of key/value pairs for ad requests
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *      "description": "A small friendly bird...",
 *      "poster_sources": [
 *        {
 *          "src": "http://brightcove.vo.llnwd.net/v1/unsecured/media/57838016001/201502/1437/57838016001_4084480075001_Bird-Chickadee-vs.jpg?pubId=57838016001&videoId=4084164751001"
 *        },
 *        {
 *          "src": "https://brightcove.hs.llnwd.net/v2/unsecured/media/57838016001/201502/1437/57838016001_4084480075001_Bird-Chickadee-vs.jpg?pubId=57838016001&videoId=4084164751001"
 *        }
 *      ],
 *      "tags": [
 *        "air",
 *        "bird",
 *        "nature"
 *      ],
 *      "cue_points": [],
 *      "custom_fields": {},
 *      "economics": "AD_SUPPORTED",
 *      "account_id": "57838016001",
 *      "sources": [
 *        {
 *          "avg_bitrate": 1108347,
 *          "width": 640,
 *          "duration": 8240,
 *          "size": 1141597,
 *          "stream_name": "mp4:57838016001/201502/1437/57838016001_4084480003001_Bird-Chickadee.mp4&1445382000000&5183d52cee025d9f8d0bd3730ac158ae",
 *          "codec": "H264",
 *          "asset_id": "4084480003001",
 *          "container": "MP4",
 *          "height": 344,
 *          "app_name": "rtmp://brightcove.fcod.llnwd.net/a500/v1/uds/rtmp"
 *        },
 *        {
 *          "avg_bitrate": 1108347,
 *          "width": 640,
 *          "src": "http://brightcove.vo.llnwd.net/v1/uds/pd/57838016001/201502/1437/57838016001_4084480003001_Bird-Chickadee.mp4?pubId=57838016001&videoId=4084164751001",
 *          "size": 1141597,
 *          "height": 344,
 *          "duration": 8240,
 *          "container": "MP4",
 *          "codec": "H264",
 *          "asset_id": "4084480003001"
 *        },
 *        {
 *          "avg_bitrate": 502409,
 *          "width": 400,
 *          "duration": 8240,
 *          "size": 517481,
 *          "stream_name": "mp4:57838016001/201502/1437/57838016001_4084480008001_Bird-Chickadee.mp4&1445382000000&5183d52cee025d9f8d0bd3730ac158ae",
 *          "codec": "H264",
 *          "asset_id": "4084480008001",
 *          "container": "MP4",
 *          "height": 214,
 *          "app_name": "rtmp://brightcove.fcod.llnwd.net/a500/v1/uds/rtmp"
 *        },
 *        {
 *          "avg_bitrate": 502409,
 *          "width": 400,
 *          "src": "http://brightcove.vo.llnwd.net/v1/uds/pd/57838016001/201502/1437/57838016001_4084480008001_Bird-Chickadee.mp4?pubId=57838016001&videoId=4084164751001",
 *          "size": 517481,
 *          "height": 214,
 *          "duration": 8240,
 *          "container": "MP4",
 *          "codec": "H264",
 *          "asset_id": "4084480008001"
 *        },
 *        {
 *          "avg_bitrate": 297015,
 *          "width": 320,
 *          "duration": 8240,
 *          "size": 305925,
 *          "stream_name": "mp4:57838016001/201502/1437/57838016001_4084480009001_Bird-Chickadee.mp4&1445382000000&5183d52cee025d9f8d0bd3730ac158ae",
 *          "codec": "H264",
 *          "asset_id": "4084480009001",
 *          "container": "MP4",
 *          "height": 172,
 *          "app_name": "rtmp://brightcove.fcod.llnwd.net/a500/v1/uds/rtmp"
 *        },
 *        {
 *          "avg_bitrate": 297015,
 *          "width": 320,
 *          "src": "http://brightcove.vo.llnwd.net/v1/uds/pd/57838016001/201502/1437/57838016001_4084480009001_Bird-Chickadee.mp4?pubId=57838016001&videoId=4084164751001",
 *          "size": 305925,
 *          "height": 172,
 *          "duration": 8240,
 *          "container": "MP4",
 *          "codec": "H264",
 *          "asset_id": "4084480009001"
 *        },
 *        {
 *          "avg_bitrate": 1685090,
 *          "width": 640,
 *          "duration": 8240,
 *          "size": 1735643,
 *          "stream_name": "mp4:57838016001/201502/1437/57838016001_4084480012001_Bird-Chickadee.mp4&1445382000000&5183d52cee025d9f8d0bd3730ac158ae",
 *          "codec": "H264",
 *          "asset_id": "4084480012001",
 *          "container": "MP4",
 *          "height": 344,
 *          "app_name": "rtmp://brightcove.fcod.llnwd.net/a500/v1/uds/rtmp"
 *        },
 *        {
 *          "avg_bitrate": 1685090,
 *          "width": 640,
 *          "src": "http://brightcove.vo.llnwd.net/v1/uds/pd/57838016001/201502/1437/57838016001_4084480012001_Bird-Chickadee.mp4?pubId=57838016001&videoId=4084164751001",
 *          "size": 1735643,
 *          "height": 344,
 *          "duration": 8240,
 *          "container": "MP4",
 *          "codec": "H264",
 *          "asset_id": "4084480012001"
 *        },
 *        {
 *          "avg_bitrate": 3949531,
 *          "width": 640,
 *          "duration": 8240,
 *          "size": 4068017,
 *          "stream_name": "mp4:57838016001/201502/1437/57838016001_4084480014001_Bird-Chickadee.mp4&1445382000000&5183d52cee025d9f8d0bd3730ac158ae",
 *          "codec": "H264",
 *          "asset_id": "4084480014001",
 *          "container": "MP4",
 *          "height": 344,
 *          "app_name": "rtmp://brightcove.fcod.llnwd.net/a500/v1/uds/rtmp"
 *        },
 *        {
 *          "avg_bitrate": 3949531,
 *          "width": 640,
 *          "src": "http://brightcove.vo.llnwd.net/v1/uds/pd/57838016001/201502/1437/57838016001_4084480014001_Bird-Chickadee.mp4?pubId=57838016001&videoId=4084164751001",
 *          "size": 4068017,
 *          "height": 344,
 *          "duration": 8240,
 *          "container": "MP4",
 *          "codec": "H264",
 *          "asset_id": "4084480014001"
 *        },
 *        {
 *          "avg_bitrate": 704771,
 *          "width": 480,
 *          "duration": 8240,
 *          "size": 725914,
 *          "stream_name": "mp4:57838016001/201502/1437/57838016001_4084480079001_Bird-Chickadee.mp4&1445382000000&5183d52cee025d9f8d0bd3730ac158ae",
 *          "codec": "H264",
 *          "asset_id": "4084480079001",
 *          "container": "MP4",
 *          "height": 258,
 *          "app_name": "rtmp://brightcove.fcod.llnwd.net/a500/v1/uds/rtmp"
 *        },
 *        {
 *          "avg_bitrate": 704771,
 *          "width": 480,
 *          "src": "http://brightcove.vo.llnwd.net/v1/uds/pd/57838016001/201502/1437/57838016001_4084480079001_Bird-Chickadee.mp4?pubId=57838016001&videoId=4084164751001",
 *          "size": 725914,
 *          "height": 258,
 *          "duration": 8240,
 *          "container": "MP4",
 *          "codec": "H264",
 *          "asset_id": "4084480079001"
 *        },
 *        {
 *          "avg_bitrate": 2446959,
 *          "width": 640,
 *          "duration": 8240,
 *          "size": 2520368,
 *          "stream_name": "mp4:57838016001/201502/1437/57838016001_4084480703001_Bird-Chickadee.mp4&1445382000000&5183d52cee025d9f8d0bd3730ac158ae",
 *          "codec": "H264",
 *          "asset_id": "4084480703001",
 *          "container": "MP4",
 *          "height": 344,
 *          "app_name": "rtmp://brightcove.fcod.llnwd.net/a500/v1/uds/rtmp"
 *        },
 *        {
 *          "avg_bitrate": 2446959,
 *          "width": 640,
 *          "src": "http://brightcove.vo.llnwd.net/v1/uds/pd/57838016001/201502/1437/57838016001_4084480703001_Bird-Chickadee.mp4?pubId=57838016001&videoId=4084164751001",
 *          "size": 2520368,
 *          "height": 344,
 *          "duration": 8240,
 *          "container": "MP4",
 *          "codec": "H264",
 *          "asset_id": "4084480703001"
 *        },
 *        {
 *          "type": "application/x-mpegURL",
 *          "src": "http://c.brightcove.com/services/mobile/streaming/index/master.m3u8?videoId=4084164751001&pubId=57838016001",
 *          "container": "M2TS",
 *          "codec": "H264"
 *        },
 *        {
 *          "type": "application/x-mpegURL",
 *          "src": "https://secure.brightcove.com/services/mobile/streaming/index/master.m3u8?videoId=4084164751001&pubId=57838016001&secure=true",
 *          "container": "M2TS",
 *          "codec": "H264"
 *        }
 *      ],
 *      "name": "Chickadee",
 *      "reference_id": "Bird_Chickadee.mp4_1425064251252",
 *      "long_description": null,
 *      "duration": 8240,
 *      "published_at": "2015-02-27T19:10:55.425Z",
 *      "text_tracks": [],
 *      "updated_at": "2015-02-27T19:11:57.808Z",
 *      "thumbnail": "http://brightcove.vo.llnwd.net/v1/unsecured/media/57838016001/201502/1437/57838016001_4084480007001_Bird-Chickadee-th.jpg?pubId=57838016001&videoId=4084164751001",
 *      "poster": "http://brightcove.vo.llnwd.net/v1/unsecured/media/57838016001/201502/1437/57838016001_4084480075001_Bird-Chickadee-vs.jpg?pubId=57838016001&videoId=4084164751001",
 *      "link": null,
 *      "id": "4084164751001",
 *      "ad_keys": null,
 *      "thumbnail_sources": [
 *        {
 *          "src": "http://brightcove.vo.llnwd.net/v1/unsecured/media/57838016001/201502/1437/57838016001_4084480007001_Bird-Chickadee-th.jpg?pubId=57838016001&videoId=4084164751001"
 *        },
 *        {
 *          "src": "https://brightcove.hs.llnwd.net/v2/unsecured/media/57838016001/201502/1437/57838016001_4084480007001_Bird-Chickadee-th.jpg?pubId=57838016001&videoId=4084164751001"
 *        }
 *      ],
 *      "created_at": "2015-02-27T19:10:55.425Z"
 *    }
 *
 * @apiError (Error 400) BAD_REQUEST Mis-formatted request, i.e. duplicate query parameters supplied
 * @apiError (Error 401) INVALID_POLICY_KEY Must provide a BCOV-Policy header with a legal policy key
 * @apiError (Error 401) FORBIDDEN Video cannot be played back at this location because of the domain, ip, or geo restriction policy
 * @apiError (Error 404) VIDEO_NOT_FOUND The designated resource was not found
 * @apiError (Error 404) RESOURCE_NOT_FOUND The designated resource was not found
 * @apiError (Error 404) ACCOUNT_NOT_FOUND The designated resource was not found
 * @apiError (Error 405) METHOD_NOT_ALLOWED Only GET, HEAD and OPTIONS are allowed for this api
 * @apiError (Error 500) INTERNAL_SERVER_ERROR Something went wrong on our side while handling the request
 * @apiError (Error 502) BAD_GATEWAY Bad response from a backend server
 * @apiError (Error 502) ACCOUNT_RETRIEVE_FAILURE Bad response from a backend server
 * @apiError (Error 502) VIDEO_RETRIEVE_FAILURE Bad response from a backend server
 * @apiError (Error 502) VIDEO_URLS_RETRIEVE_FAILURE Bad response from a backend server
 * @apiError (Error 503) SERVICE_UNAVAILABLE Returned this response from a backend server
 * @apiError (Error 504) GATEWAY_TIMEOUT Either a backend server or one of the servers they rely on timed out
 *
 * @apiErrorExample {json} 404 Error Response
 *     HTTP/1.1 404 Not Found
 *     [
 *         {
 *             "error_code": "VIDEO_NOT_FOUND"
 *         }
 *     ]
 *
 *
 */

// get video by reference id

/**
 * @api {get} /accounts/:account_id/videos/ref:reference_ID Get Video by Reference ID
 * @apiName Get Video by Reference ID
 * @apiGroup Video
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets a video object by video reference id
 *
 * @apiHeader {String} Accept Authorization: application/json;pk=policy_key See [Policy API Overview](http://docs.brightcove.com/en/video-cloud/policy-api/getting-started/api-overview.html) or [Policy Keys](http://docs.brightcove.com/en/video-cloud/player-management/guides/policy-key.html) for information on getting policy keys
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID
 * @apiParam (Path Parameters) {Number} reference_id Video Cloud video reference ID
 *
 * @apiParamExample {Url} Get Video Example:
 *     https://edge.api.brightcove.com/playback/v1/accounts/57838016001/videos/ref:my-reference-id
 *
 * @apiSuccess (Response Fields) {String} account_id Video Cloud account id
 * @apiSuccess (Response Fields) {String} id video id
 * @apiSuccess (Response Fields) {String} name video title
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
 * @apiSuccess (Response Fields) {String} economics whether video is AD_SUPPORTED
 * @apiSuccess (Response Fields) {Object[]} poster_sources array of poster source maps (note that in many cases there will be one source with a `src` value identical to the `poster` value, but this array is included in case there are multiple protocols available, such as `http` and `https`)
 * @apiSuccess (Response Fields) {String} poster_sources.src URL for a poster source image (note that in many cases there will be one source with a `src` value identical to the `poster` value, but this array is included in case there are multiple protocols available, such as `http` and `https`)
 * @apiSuccess (Response Fields) {String} poster URL for the default poster source image
 * @apiSuccess (Response Fields) {String} projection The mapping projection for 360° videos, e.g. "equirectangular"
 * @apiSuccess (Response Fields) {Object[]} thumbnail_sources array of thumbnail source maps
 * @apiSuccess (Response Fields) {Object[]} thumbnail_sources array of thumbnail source maps (note that in many cases there will be one source with a `src` value identical to the `thumbnail` value, but this array is included in case there are multiple protocols available, such as `http` and `https`)
 * @apiSuccess (Response Fields) {String} thumbnail_sources.src URL for a thumbnail source image (note that in many cases there will be one source with a `src` value identical to the `thumbnail` value, but this array is included in case there are multiple protocols available, such as `http` and `https`)
 * @apiSuccess (Response Fields) {Object} link map of scheduling properties
 * @apiSuccess (Response Fields) {String} link.text text for the link
 * @apiSuccess (Response Fields) {String} link.url URL for the link
 * @apiSuccess (Response Fields) {String} long_description video long description
 * @apiSuccess (Response Fields) {Boolean} offline_enabled whether video is enabled for offline viewing
 * @apiSuccess (Response Fields) {String} reference_id video reference-id (must be unique within the account)
 * @apiSuccess (Response Fields) {String[]} tags array of tags
 * @apiSuccess (Response Fields) {Object[]} sources array of video sources (renditions)
 * @apiSuccess (Response Fields) {Number} sources.avg_bitrate average bitrate
 * @apiSuccess (Response Fields) {Number} sources.width frame width in pixels
 * @apiSuccess (Response Fields) {Number} sources.height frame height in pixels
 * @apiSuccess (Response Fields) {Number} sources.size size in bytes
 * @apiSuccess (Response Fields) {Number} sources.duration duration in milliseconds
 * @apiSuccess (Response Fields) {String} sources.asset_id the asset id for the source
 * @apiSuccess (Response Fields) {String} sources.stream_name the stream name for the source
 * @apiSuccess (Response Fields) {String} sources.codec the video codec
 * @apiSuccess (Response Fields) {String} sources.container the video container
 * @apiSuccess (Response Fields) {String} sources.app_name the address for rtmp streams
 * @apiSuccess (Response Fields) {String} sources.type the type (for HLS streams)
 * @apiSuccess (Response Fields) {Object} text_tracks array of text track maps
 * @apiSuccess (Response Fields) {String} text_tracks.src URL for the .vtt file
 * @apiSuccess (Response Fields) {Object[]} text_tracks.sources array of sources for .vtt files (note that in many cases there will be one source with a `src` value identical to the `text_tracks.src` value, but this array is included in case there are multiple protocols available, such as `http` and `https`)
 * @apiSuccess (Response Fields) {String} text_tracks.sources.src URL for the .vtt file (note that in many cases there will be one source with a `src` value identical to the `text_tracks.src` value, but this array is included in case there are multiple protocols available, such as `http` and `https`)
 * @apiSuccess (Response Fields) {String} text_tracks.kind kind of text track
 * @apiSuccess (Response Fields) {String} text_tracks.srclang 2-letter language code, such as "en" or "ko"
 * @apiSuccess (Response Fields) {String} text_tracks.mime_type mime-type for the track
 * @apiSuccess (Response Fields) {String} text_tracks.label label for the track
 * @apiSuccess (Response Fields) {Boolean} text_tracks.default whether this is the default track
 * @apiSuccess (Response Fields) {String} text_tracks.in_band_metadata_track_dispatch_type If this field is present, it means that references for this text track are available in the associated video's manifest
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {Object} ad_keys=null map of key/value pairs for ad requests
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *      "description": "A small friendly bird...",
 *      "poster_sources": [
 *        {
 *          "src": "http://brightcove.vo.llnwd.net/v1/unsecured/media/57838016001/201502/1437/57838016001_4084480075001_Bird-Chickadee-vs.jpg?pubId=57838016001&videoId=4084164751001"
 *        },
 *        {
 *          "src": "https://brightcove.hs.llnwd.net/v2/unsecured/media/57838016001/201502/1437/57838016001_4084480075001_Bird-Chickadee-vs.jpg?pubId=57838016001&videoId=4084164751001"
 *        }
 *      ],
 *      "tags": [
 *        "air",
 *        "bird",
 *        "nature"
 *      ],
 *      "cue_points": [],
 *      "custom_fields": {},
 *      "economics": "AD_SUPPORTED",
 *      "account_id": "57838016001",
 *      "sources": [
 *        {
 *          "avg_bitrate": 1108347,
 *          "width": 640,
 *          "duration": 8240,
 *          "size": 1141597,
 *          "stream_name": "mp4:57838016001/201502/1437/57838016001_4084480003001_Bird-Chickadee.mp4&1445382000000&5183d52cee025d9f8d0bd3730ac158ae",
 *          "codec": "H264",
 *          "asset_id": "4084480003001",
 *          "container": "MP4",
 *          "height": 344,
 *          "app_name": "rtmp://brightcove.fcod.llnwd.net/a500/v1/uds/rtmp"
 *        },
 *        {
 *          "avg_bitrate": 1108347,
 *          "width": 640,
 *          "src": "http://brightcove.vo.llnwd.net/v1/uds/pd/57838016001/201502/1437/57838016001_4084480003001_Bird-Chickadee.mp4?pubId=57838016001&videoId=4084164751001",
 *          "size": 1141597,
 *          "height": 344,
 *          "duration": 8240,
 *          "container": "MP4",
 *          "codec": "H264",
 *          "asset_id": "4084480003001"
 *        },
 *        {
 *          "avg_bitrate": 502409,
 *          "width": 400,
 *          "duration": 8240,
 *          "size": 517481,
 *          "stream_name": "mp4:57838016001/201502/1437/57838016001_4084480008001_Bird-Chickadee.mp4&1445382000000&5183d52cee025d9f8d0bd3730ac158ae",
 *          "codec": "H264",
 *          "asset_id": "4084480008001",
 *          "container": "MP4",
 *          "height": 214,
 *          "app_name": "rtmp://brightcove.fcod.llnwd.net/a500/v1/uds/rtmp"
 *        },
 *        {
 *          "avg_bitrate": 502409,
 *          "width": 400,
 *          "src": "http://brightcove.vo.llnwd.net/v1/uds/pd/57838016001/201502/1437/57838016001_4084480008001_Bird-Chickadee.mp4?pubId=57838016001&videoId=4084164751001",
 *          "size": 517481,
 *          "height": 214,
 *          "duration": 8240,
 *          "container": "MP4",
 *          "codec": "H264",
 *          "asset_id": "4084480008001"
 *        },
 *        {
 *          "avg_bitrate": 297015,
 *          "width": 320,
 *          "duration": 8240,
 *          "size": 305925,
 *          "stream_name": "mp4:57838016001/201502/1437/57838016001_4084480009001_Bird-Chickadee.mp4&1445382000000&5183d52cee025d9f8d0bd3730ac158ae",
 *          "codec": "H264",
 *          "asset_id": "4084480009001",
 *          "container": "MP4",
 *          "height": 172,
 *          "app_name": "rtmp://brightcove.fcod.llnwd.net/a500/v1/uds/rtmp"
 *        },
 *        {
 *          "avg_bitrate": 297015,
 *          "width": 320,
 *          "src": "http://brightcove.vo.llnwd.net/v1/uds/pd/57838016001/201502/1437/57838016001_4084480009001_Bird-Chickadee.mp4?pubId=57838016001&videoId=4084164751001",
 *          "size": 305925,
 *          "height": 172,
 *          "duration": 8240,
 *          "container": "MP4",
 *          "codec": "H264",
 *          "asset_id": "4084480009001"
 *        },
 *        {
 *          "avg_bitrate": 1685090,
 *          "width": 640,
 *          "duration": 8240,
 *          "size": 1735643,
 *          "stream_name": "mp4:57838016001/201502/1437/57838016001_4084480012001_Bird-Chickadee.mp4&1445382000000&5183d52cee025d9f8d0bd3730ac158ae",
 *          "codec": "H264",
 *          "asset_id": "4084480012001",
 *          "container": "MP4",
 *          "height": 344,
 *          "app_name": "rtmp://brightcove.fcod.llnwd.net/a500/v1/uds/rtmp"
 *        },
 *        {
 *          "avg_bitrate": 1685090,
 *          "width": 640,
 *          "src": "http://brightcove.vo.llnwd.net/v1/uds/pd/57838016001/201502/1437/57838016001_4084480012001_Bird-Chickadee.mp4?pubId=57838016001&videoId=4084164751001",
 *          "size": 1735643,
 *          "height": 344,
 *          "duration": 8240,
 *          "container": "MP4",
 *          "codec": "H264",
 *          "asset_id": "4084480012001"
 *        },
 *        {
 *          "avg_bitrate": 3949531,
 *          "width": 640,
 *          "duration": 8240,
 *          "size": 4068017,
 *          "stream_name": "mp4:57838016001/201502/1437/57838016001_4084480014001_Bird-Chickadee.mp4&1445382000000&5183d52cee025d9f8d0bd3730ac158ae",
 *          "codec": "H264",
 *          "asset_id": "4084480014001",
 *          "container": "MP4",
 *          "height": 344,
 *          "app_name": "rtmp://brightcove.fcod.llnwd.net/a500/v1/uds/rtmp"
 *        },
 *        {
 *          "avg_bitrate": 3949531,
 *          "width": 640,
 *          "src": "http://brightcove.vo.llnwd.net/v1/uds/pd/57838016001/201502/1437/57838016001_4084480014001_Bird-Chickadee.mp4?pubId=57838016001&videoId=4084164751001",
 *          "size": 4068017,
 *          "height": 344,
 *          "duration": 8240,
 *          "container": "MP4",
 *          "codec": "H264",
 *          "asset_id": "4084480014001"
 *        },
 *        {
 *          "avg_bitrate": 704771,
 *          "width": 480,
 *          "duration": 8240,
 *          "size": 725914,
 *          "stream_name": "mp4:57838016001/201502/1437/57838016001_4084480079001_Bird-Chickadee.mp4&1445382000000&5183d52cee025d9f8d0bd3730ac158ae",
 *          "codec": "H264",
 *          "asset_id": "4084480079001",
 *          "container": "MP4",
 *          "height": 258,
 *          "app_name": "rtmp://brightcove.fcod.llnwd.net/a500/v1/uds/rtmp"
 *        },
 *        {
 *          "avg_bitrate": 704771,
 *          "width": 480,
 *          "src": "http://brightcove.vo.llnwd.net/v1/uds/pd/57838016001/201502/1437/57838016001_4084480079001_Bird-Chickadee.mp4?pubId=57838016001&videoId=4084164751001",
 *          "size": 725914,
 *          "height": 258,
 *          "duration": 8240,
 *          "container": "MP4",
 *          "codec": "H264",
 *          "asset_id": "4084480079001"
 *        },
 *        {
 *          "avg_bitrate": 2446959,
 *          "width": 640,
 *          "duration": 8240,
 *          "size": 2520368,
 *          "stream_name": "mp4:57838016001/201502/1437/57838016001_4084480703001_Bird-Chickadee.mp4&1445382000000&5183d52cee025d9f8d0bd3730ac158ae",
 *          "codec": "H264",
 *          "asset_id": "4084480703001",
 *          "container": "MP4",
 *          "height": 344,
 *          "app_name": "rtmp://brightcove.fcod.llnwd.net/a500/v1/uds/rtmp"
 *        },
 *        {
 *          "avg_bitrate": 2446959,
 *          "width": 640,
 *          "src": "http://brightcove.vo.llnwd.net/v1/uds/pd/57838016001/201502/1437/57838016001_4084480703001_Bird-Chickadee.mp4?pubId=57838016001&videoId=4084164751001",
 *          "size": 2520368,
 *          "height": 344,
 *          "duration": 8240,
 *          "container": "MP4",
 *          "codec": "H264",
 *          "asset_id": "4084480703001"
 *        },
 *        {
 *          "type": "application/x-mpegURL",
 *          "src": "http://c.brightcove.com/services/mobile/streaming/index/master.m3u8?videoId=4084164751001&pubId=57838016001",
 *          "container": "M2TS",
 *          "codec": "H264"
 *        },
 *        {
 *          "type": "application/x-mpegURL",
 *          "src": "https://secure.brightcove.com/services/mobile/streaming/index/master.m3u8?videoId=4084164751001&pubId=57838016001&secure=true",
 *          "container": "M2TS",
 *          "codec": "H264"
 *        }
 *      ],
 *      "name": "Chickadee",
 *      "reference_id": "Bird_Chickadee.mp4_1425064251252",
 *      "long_description": null,
 *      "duration": 8240,
 *      "published_at": "2015-02-27T19:10:55.425Z",
 *      "text_tracks": [],
 *      "updated_at": "2015-02-27T19:11:57.808Z",
 *      "thumbnail": "http://brightcove.vo.llnwd.net/v1/unsecured/media/57838016001/201502/1437/57838016001_4084480007001_Bird-Chickadee-th.jpg?pubId=57838016001&videoId=4084164751001",
 *      "poster": "http://brightcove.vo.llnwd.net/v1/unsecured/media/57838016001/201502/1437/57838016001_4084480075001_Bird-Chickadee-vs.jpg?pubId=57838016001&videoId=4084164751001",
 *      "link": null,
 *      "id": "4084164751001",
 *      "ad_keys": null,
 *      "thumbnail_sources": [
 *        {
 *          "src": "http://brightcove.vo.llnwd.net/v1/unsecured/media/57838016001/201502/1437/57838016001_4084480007001_Bird-Chickadee-th.jpg?pubId=57838016001&videoId=4084164751001"
 *        },
 *        {
 *          "src": "https://brightcove.hs.llnwd.net/v2/unsecured/media/57838016001/201502/1437/57838016001_4084480007001_Bird-Chickadee-th.jpg?pubId=57838016001&videoId=4084164751001"
 *        }
 *      ],
 *      "created_at": "2015-02-27T19:10:55.425Z"
 *    }
 *
 * @apiError (Error 400) BAD_REQUEST Mis-formatted request, i.e. duplicate query parameters supplied
 * @apiError (Error 401) INVALID_POLICY_KEY Must provide a BCOV-Policy header with a legal policy key
 * @apiError (Error 404) * @apiError (Error 401) FORBIDDEN Video cannot be played back at this location because of the domain, ip, or geo restriction policy
 VIDEO_NOT_FOUND The designated resource was not found
 * @apiError (Error 404) RESOURCE_NOT_FOUND The designated resource was not found
 * @apiError (Error 404) ACCOUNT_NOT_FOUND The designated resource was not found
 * @apiError (Error 405) METHOD_NOT_ALLOWED Only GET, HEAD and OPTIONS are allowed for this api
 * @apiError (Error 500) INTERNAL_SERVER_ERROR Something went wrong on our side while handling the request
 * @apiError (Error 502) BAD_GATEWAY Bad response from a backend server
 * @apiError (Error 502) ACCOUNT_RETRIEVE_FAILURE Bad response from a backend server
 * @apiError (Error 502) VIDEO_RETRIEVE_FAILURE Bad response from a backend server
 * @apiError (Error 502) VIDEO_URLS_RETRIEVE_FAILURE Bad response from a backend server
 * @apiError (Error 503) SERVICE_UNAVAILABLE Returned this response from a backend server
 * @apiError (Error 504) GATEWAY_TIMEOUT Either a backend server or one of the servers they rely on timed out
 *
 * @apiErrorExample {json} 404 Error Response
 *     HTTP/1.1 404 Not Found
 *     [
 *         {
 *             "error_code": "VIDEO_NOT_FOUND"
 *         }
 *     ]
 *
 *
 */
