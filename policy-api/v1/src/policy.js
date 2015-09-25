// create policy

/**
 * @api {get} /accounts/:account_id/policy_keys Create a Policy Key
 * @apiName Create a Policy Key
 * @apiGroup Policy
 * @apiVersion 1.0.0
 *
 * @apiDescription Create a new policy key to access the Playback API
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {Number} account_id Video Cloud account ID
 * @apiParam (Request Body Fields (Concise Format)) {Object} key-data data for the policy key (used for concise format)
 * @apiParam (Request Body Fields (Concise Format)) {String} key-data.account-id Video Cloud account id
 * @apiParam (Request Body Fields (Concise Format)) {String[]} [key-data.allowed-domains] For domain restriction, the domains this key will work on (concise format)
 * @apiParam (Request Body Fields (Full Format)) {Object[]} policies an array of policy objects (required if using the full format rather than the concise format)
 * @apiParam (Request Body Fields (Full Format)) {Object} policies.pattern the logical pattern for specifying accounts or domains allowed or denied access to the Playback API with this key
 * @apiParam (Request Body Fields (Full Format)) {String} policies.pattern.logical-operator the logical operator is used to match accounts or domains; operators allowed are `=`, `!=`, `contains?`, and `not-contains?`; logical operators may be combined using `and` or `or`
 * @apiParam (Request Body Fields (Full Format)) {String="allow","deny"} policies.effect whether domains/accounts matching the pattern should be allowed or denied access to the Playback API
 *
 * @apiParamExample {json} Create Policy Request Body Examples:
 *     // concise format
 *     {
 *         "account-id": "8523",
 *         "allowed-domains": [
 *             "http://www.mysite.com",
 *             "https://secure.mysite.com"
 *         ]
 *     }
 *     // full format
 *     {
 *          "policies": [
 *              {
 *                  "pattern": {
 *                      "!=": [
 *                          "[request.params.account-id]"
 *                      ]
 *                  },
 *                  "effect": "deny"
 *              },
 *              {
 *                  "pattern": {
 *                      "not-contains?": [
 *                          [
 *                              "http://www.mysite.com",
 *                              "https://secure.mysite.com"
 *                          ],
 *                          "[request.domain]"
 *                      ]
 *                  },
 *                  "effect": "deny"
 *              }
 *          ]
 *      }
 *
 * @apiSuccess (Response Fields) {String} key_string the policy key
 * @apiSuccess (Response Fields) {Object[]} policies array of policy maps
 * @apiSuccess (Request Body Fields (Full Format)) {Object} policies.pattern the logical pattern for specifying accounts or domains allowed or denied access to the Playback API with this key
 * @apiSuccess (Request Body Fields (Full Format)) {String} policies.pattern.logical-operator the logical operator is used to match accounts or domains; operators allowed are `=`, `!=`, `contains?`, and `not-contains?`; logical operators may be combined using `and` or `or`
 * @apiSuccess (Request Body Fields (Full Format)) {String} policies.effect whether domains/accounts matching the pattern should be allowed or denied access to the Playback API
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "key-string": "BCpkADawqM0tR9WJhqqyg4t8NgSulRVnfHyh6cL_U0m7RaoIq19WWR-8EPiWY1ift8zHF6Z3sfTyuXv6LY8bfTAfvzVLb1TrwGTOBJGPwWJ9dJUkny7lUoN1ygk",
 *        "policies": [
 *            {
 *                "effect": "deny",
 *                "pattern": {
 *                    "!=": [
 *                        "[request.params.account-id]",
 *                        "57838016001"
 *                    ]
 *                }
 *            }
 *        ]
 *    } *
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
 *
 */

// get policy

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
 * @apiParam (Path Parameters) {Number} account_id Video Cloud account ID
 * @apiParam (Path Parameters) {Number} reference_id Video Cloud video reference ID
 *
 * @apiParamExample {String} Get Video Example:
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
 * @apiSuccess (Response Fields) {Object[]} poster.sources array of poster source maps
 * @apiSuccess (Response Fields) {String} poster.sources.src URL for a poster source image
 * @apiSuccess (Response Fields) {String} poster URL for the default poster source image
 * @apiSuccess (Response Fields) {Object[]} thumbnail.sources array of thumbnail source maps
 * @apiSuccess (Response Fields) {String} thumbnail.sources.src URL for a thumbnail source image
 * @apiSuccess (Response Fields) {String} thumbnail URL for the default thumbnail source image
 * @apiSuccess (Response Fields) {Object} link map of scheduling properties
 * @apiSuccess (Response Fields) {String} link.text text for the link
 * @apiSuccess (Response Fields) {String} link.url URL for the link
 * @apiSuccess (Response Fields) {String} long_description video long description
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
 * @apiSuccess (Response Fields) {String} text_tracks.kind kind of text track
 * @apiSuccess (Response Fields) {String} text_tracks.srclang 2-letter language code, such as "en" or "ko"
 * @apiSuccess (Response Fields) {String} text_tracks.mime_type mime-type for the track
 * @apiSuccess (Response Fields) {String} text_tracks.label label for the track
 * @apiSuccess (Response Fields) {Boolean} text_tracks.default whether this is the default track
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {Object} ad_keys=null map of key/value pairs for ad requests
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *    {
 *      "description": "A small friendly bird...",
 *      "poster_sources": [
 *        {
 *          "src": "http://brightcove.vo.llnwd.net/v1/unsecured/ *    media/57838016001/201502/1437/57838016001_4084480075001_Bird-Chickadee-vs. *    jpg?pubId=57838016001&videoId=4084164751001"
 *        }
 *      ],
 *      "tags": [
 *        "air",
 *        "bird",
 *        "nature"
 *      ],
 *      "cue_points": [],
 *      "custom_fields": {},
 *      "account_id": "57838016001",
 *      "sources": [
 *        {
 *          "avg_bitrate": 1108347,
 *          "width": 640,
 *          "duration": 8240,
 *          "size": 1141597,
 *          "stream_name": "mp4:57838016001/201502/1437/57838016001_4084480003001_Bird-Chickadee. *    mp4&1442937600000&9b6865b5469c425d6ae0e8329aee4295",
 *          "codec": "H264",
 *          "asset_id": "4084480003001",
 *          "container": "MP4",
 *          "height": 344,
 *          "app_name": "rtmp://brightcove.fcod.llnwd.net/a500/v1/uds/rtmp"
 *        },
 *        {
 *          "avg_bitrate": 1108347,
 *          "width": 640,
 *          "src": "http://brightcove.vo.llnwd.net/v1/uds/ *    pd/57838016001/201502/1437/57838016001_4084480003001_Bird-Chickadee. *    mp4?pubId=57838016001&videoId=4084164751001",
 *          "size": 1141597,
 *          "height": 344,
 *          "duration": 8240,
 *          "container": "MP4",
 *          "codec": "H264",
 *          "asset_id": "4084480003001"
 *        },
 *        {
 *          "type": "application/x-mpegURL",
 *          "src": "https://secure.brightcove.com/services/mobile/streaming/index/master. *    m3u8?videoId=4084164751001&pubId=57838016001&secure=true",
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
 *      "thumbnail": "http://brightcove.vo.llnwd.net/v1/unsecured/ *    media/57838016001/201502/1437/57838016001_4084480007001_Bird-Chickadee-th. *    jpg?pubId=57838016001&videoId=4084164751001",
 *      "poster": "http://brightcove.vo.llnwd.net/v1/unsecured/ *    media/57838016001/201502/1437/57838016001_4084480075001_Bird-Chickadee-vs. *    jpg?pubId=57838016001&videoId=4084164751001",
 *      "link": null,
 *      "id": "4084164751001",
 *      "ad_keys": null,
 *      "thumbnail_sources": [
 *        {
 *          "src": "http://brightcove.vo.llnwd.net/v1/unsecured/ *    media/57838016001/201502/1437/57838016001_4084480007001_Bird-Chickadee-th. *    jpg?pubId=57838016001&videoId=4084164751001"
 *        }
 *      ],
 *      "created_at": "2015-02-27T19:10:55.425Z"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your policy key is correct
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 400: The resource you are requesting is temporarily unavailable
 * @apiError (Error 4xx) {json} FORBIDDEN 403: The video cannot be retrieved because: 1) DOMAIN: the video is restricted from playing on the current domain; 2) CLIENT_IP: the video is restricted at the current IP address; 3) CLIENT_GEO: the video is restricted from playing in the current geo region
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

