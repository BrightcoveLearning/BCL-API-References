// get digital masters

/**
 * @api {get} /accounts/:account_id/videos/:video_id/assets/digital_master Get Renditions List
 * @apiName Get Renditions List
 * @apiGroup Remote_Assets
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets a list of digital masters for a remote asset. Note that there is only one digital master per video. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
 *
 *
 * @apiParamExample {Url} Thumbnail list Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/4077874616001/thumbnail
 *
 * @apiSuccess (Response Fields) {String} account_id the Video Cloud account id
 * @apiSuccess (Response Fields) {String} id the asset id
 * @apiSuccess (Response Fields) {Boolean} audio_only whether this is only an audio track
 * @apiSuccess (Response Fields) {String} cdn_origin_id not applicable to remote assets
 * @apiSuccess (Response Fields) {Boolean} complete not applicable to remote assets
 * @apiSuccess (Response Fields) {String} controller_type not applicable to remote assets
 * @apiSuccess (Response Fields) {DateString} created_at not applicable to remote assets
 * @apiSuccess (Response Fields) {String} current_filename not applicable to remote assets
 * @apiSuccess (Response Fields) {Object} drm not applicable to remote assets
 * @apiSuccess (Response Fields) {Number} encoding_rate average encoding_rate in kbps
 * @apiSuccess (Response Fields) {Number} frame_height frame height in pixels
 * @apiSuccess (Response Fields) {Number} frame_width frame width in pixels
 * @apiSuccess (Response Fields) {String} name asset name
 * @apiSuccess (Response Fields) {Boolean} progressive_download not applicable to remote assets
 * @apiSuccess (Response Fields) {String} reference_id video reference-id (must be unique within the account)
 * @apiSuccess (Response Fields) {String} remote_url the url for the asset
 * @apiSuccess (Response Fields) {String} remote_stream_name not applicable to remote assets
 * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
 * @apiSuccess (Response Fields) {String} type the type of the asset
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
 * @apiSuccess (Response Fields) {String} video_codec not applicable to remote assets
 * @apiSuccess (Response Fields) {String} video_container not applicable to remote assets
 * @apiSuccess (Response Fields) {Number} video_duration duration in milliseconds
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "account_id": "57838016001",
 *        "audio_only": false,
 *        "cdn_origin_id": "",
 *        "complete": true,
 *        "controller_type": "DEFAULT",
 *        "created_at": null,
 *        "current_filename": "",
 *        "drm": null,
 *        "encoding_rate": 983000,
 *        "frame_height": 360,
 *        "frame_width": 640,
 *        "hds": null,
 *        "hls": null,
 *        "id": "4665726465001",
 *        "name": "RA - Great Blue Heron",
 *        "progressive_download": false,
 *        "reference_id": "",
 *        "remote_stream_name": "",
 *        "remote_url": "http://learning-services-media.brightcove.com/videos/mp4/greatblueheron.mp4",
 *        "size": 3887659,
 *        "type": "DIGITAL_MASTER",
 *        "updated_at": "2015-12-19T15:46:44.234Z",
 *        "uploaded_at": "2015-12-19T15:46:44.230Z",
 *        "video_codec": "NONE",
 *        "video_container": "UNKNOWN",
 *        "video_duration": 31487
 *    }
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

 // get digital master

 /**
  * @api {get} /accounts/:account_id/videos/:video_id/assets/digital_master/:asset_id Get Rendition
  * @apiName Get Rendition
  * @apiGroup Remote_Assets
  * @apiVersion 1.0.0
  *
  * @apiDescription Gets a digital master for a remote asset. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
  *
  * @apiHeader {String} Content-Type Content-Type: application/json
  * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
  *
  * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
  * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
  * @apiParam (Path Parameters) {String} asset_id the asset id
  *
  *
  * @apiParamExample {Url} Thumbnail Example:
  *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/4077874616001/thumbnail/77874616001
  *
  * @apiSuccess (Response Fields) {String} account_id the Video Cloud account id
  * @apiSuccess (Response Fields) {String} id the asset id
  * @apiSuccess (Response Fields) {Boolean} audio_only whether this is only an audio track
  * @apiSuccess (Response Fields) {String} cdn_origin_id not applicable to remote assets
  * @apiSuccess (Response Fields) {Boolean} complete not applicable to remote assets
  * @apiSuccess (Response Fields) {String} controller_type not applicable to remote assets
  * @apiSuccess (Response Fields) {DateString} created_at not applicable to remote assets
  * @apiSuccess (Response Fields) {String} current_filename not applicable to remote assets
  * @apiSuccess (Response Fields) {Object} drm not applicable to remote assets
  * @apiSuccess (Response Fields) {Number} encoding_rate average encoding_rate in kbps
  * @apiSuccess (Response Fields) {Number} frame_height frame height in pixels
  * @apiSuccess (Response Fields) {Number} frame_width frame width in pixels
  * @apiSuccess (Response Fields) {String} name asset name
  * @apiSuccess (Response Fields) {Boolean} progressive_download not applicable to remote assets
  * @apiSuccess (Response Fields) {String} reference_id video reference-id (must be unique within the account)
  * @apiSuccess (Response Fields) {String} remote_url the url for the asset
  * @apiSuccess (Response Fields) {String} remote_stream_name not applicable to remote assets
  * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
  * @apiSuccess (Response Fields) {String} type the type of the asset
  * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
  * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
  * @apiSuccess (Response Fields) {String} video_codec not applicable to remote assets
  * @apiSuccess (Response Fields) {String} video_container not applicable to remote assets
  * @apiSuccess (Response Fields) {Number} video_duration duration in milliseconds
  *
  * @apiSuccessExample {json} Success Response:
  *    HTTP/1.1 200 OK
  *    {
  *        "account_id": "57838016001",
  *        "audio_only": false,
  *        "cdn_origin_id": "",
  *        "complete": true,
  *        "controller_type": "DEFAULT",
  *        "created_at": null,
  *        "current_filename": "",
  *        "drm": null,
  *        "encoding_rate": 983000,
  *        "frame_height": 360,
  *        "frame_width": 640,
  *        "hds": null,
  *        "hls": null,
  *        "id": "4665726465001",
  *        "name": "RA - Great Blue Heron",
  *        "progressive_download": false,
  *        "reference_id": "",
  *        "remote_stream_name": "",
  *        "remote_url": "http://learning-services-media.brightcove.com/videos/mp4/greatblueheron.mp4",
  *        "size": 3887659,
  *        "type": "DIGITAL_MASTER",
  *        "updated_at": "2015-12-19T15:46:44.234Z",
  *        "uploaded_at": "2015-12-19T15:46:44.230Z",
  *        "video_codec": "NONE",
  *        "video_container": "UNKNOWN",
  *        "video_duration": 31487
  *    }
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

// post digital masters

/**
 * @api {post} /accounts/:account_id/videos/:video_id/assets/digital_master Add Rendition
 * @apiName Add Rendition
 * @apiGroup Remote_Assets
 * @apiVersion 1.0.0
 *
 * @apiDescription Add a digital master for a remote asset. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
 *
 * @apiParam (Request Body Fields) {Boolean} [audio_only] whether this is only an audio track
 * @apiParam (Request Body Fields) {Number} [encoding_rate] average encoding_rate in kbps
 * @apiParam (Request Body Fields) {Number} [frame_height] frame height in pixels
 * @apiParam (Request Body Fields) {Number} [frame_width] frame width in pixels
 * @apiParam (Request Body Fields) {String} [name] asset name
 * @apiParam (Request Body Fields) {String} [reference_id] video reference-id (must be unique within the account)
 * @apiParam (Request Body Fields) {String} remote_url the url for the asset
 * @apiParam (Request Body Fields) {Number} [size] the size of the asset in bytes (integer)
 * @apiParam (Request Body Fields) {Number} [video_duration] duration in milliseconds
 *
 * @apiParamExample {json} Add Rendition Request Body Example:
 *    {
 *        "video_duration": 31487,
 *        "name": "RA - Great Blue Heron",
 *        "remote_url": "http://learning-services-media.brightcove.com/videos/mp4/greatblueheron.mp4",
 *        "encoding_rate": 983000,
 *        "frame_height": 360,
 *        "size": 3887659,
 *        "frame_width": 640
 *    }
 *
 * @apiSuccess (Response Fields) {String} account_id the Video Cloud account id
 * @apiSuccess (Response Fields) {String} id the asset id
 * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to thumbnails
 * @apiSuccess (Response Fields) {String} cdn_origin_id not applicable to remote assets
 * @apiSuccess (Response Fields) {Boolean} complete not applicable to remote assets
 * @apiSuccess (Response Fields) {String} controller_type not applicable to remote assets
 * @apiSuccess (Response Fields) {DateString} created_at not applicable to remote assets
 * @apiSuccess (Response Fields) {String} current_filename not applicable to remote assets
 * @apiSuccess (Response Fields) {Object} drm not applicable to remote assets
 * @apiSuccess (Response Fields) {Number} encoding_rate average encoding_rate in kbps
 * @apiSuccess (Response Fields) {Number} frame_height frame height in pixels
 * @apiSuccess (Response Fields) {Number} frame_width frame width in pixels
 * @apiSuccess (Response Fields) {String} name asset name
 * @apiSuccess (Response Fields) {Boolean} progressive_download not applicable to remote assets
 * @apiSuccess (Response Fields) {String} reference_id video reference-id (must be unique within the account)
 * @apiSuccess (Response Fields) {String} remote_url the url for the asset
 * @apiSuccess (Response Fields) {String} remote_stream_name not applicable to remote assets
 * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
 * @apiSuccess (Response Fields) {String} type the type of the asset
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
 * @apiSuccess (Response Fields) {String} video_codec not applicable to remote assets
 * @apiSuccess (Response Fields) {String} video_container not applicable to remote assets
 * @apiSuccess (Response Fields) {Number} video_duration duration in milliseconds
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "account_id": "57838016001",
 *        "audio_only": false,
 *        "cdn_origin_id": "",
 *        "complete": true,
 *        "controller_type": "DEFAULT",
 *        "created_at": null,
 *        "current_filename": "",
 *        "drm": null,
 *        "encoding_rate": 983000,
 *        "frame_height": 360,
 *        "frame_width": 640,
 *        "hds": null,
 *        "hls": null,
 *        "id": "4665726463001",
 *        "name": "RA - Great Blue Heron",
 *        "progressive_download": false,
 *        "reference_id": "",
 *        "remote_stream_name": "",
 *        "remote_url": "http://learning-services-media.brightcove.com/videos/mp4/greatblueheron.mp4",
 *        "size": 3887659,
 *        "type": "FULL_LENGTH",
 *        "updated_at": "2015-12-18T18:02:33.808Z",
 *        "uploaded_at": "2015-12-18T18:02:33.807Z",
 *        "video_codec": "NONE",
 *        "video_container": "UNKNOWN",
 *        "video_duration": 31487
 *    }
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

// patch digital masters

/**
 * @api {patch} /accounts/:account_id/videos/:video_id/assets/digital_master/:asset_id Update Rendition
 * @apiName Update Rendition
 * @apiGroup Remote_Assets
 * @apiVersion 1.0.0
 *
 * @apiDescription Update a digital master for a remote asset. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
 * @apiParam (Path Parameters) {String} asset_id id for the asset
 *
 * @apiParam (Request Body Fields) {Boolean} [audio_only] whether this is only an audio track
 * @apiParam (Request Body Fields) {Number} [encoding_rate] average encoding_rate in kbps
 * @apiParam (Request Body Fields) {Number} [frame_height] frame height in pixels
 * @apiParam (Request Body Fields) {Number} [frame_width] frame width in pixels
 * @apiParam (Request Body Fields) {String} [name] asset name
 * @apiParam (Request Body Fields) {String} [reference_id] video reference-id (must be unique within the account)
 * @apiParam (Request Body Fields) {String} remote_url the url for the asset
 * @apiParam (Request Body Fields) {Number} [size] the size of the asset in bytes (integer)
 * @apiParam (Request Body Fields) {Number} [video_duration] duration in milliseconds
 *
 * @apiParamExample {json} Add Rendition Request Body Example:
 *    {
 *        "video_duration": 31487,
 *        "name": "RA - Great Blue Heron",
 *        "remote_url": "http://learning-services-media.brightcove.com/videos/mp4/greatblueheron.mp4",
 *        "encoding_rate": 983000,
 *        "frame_height": 360,
 *        "size": 3887659,
 *        "frame_width": 640
 *    }
 *
 * @apiSuccess (Response Fields) {String} account_id the Video Cloud account id
 * @apiSuccess (Response Fields) {String} id the asset id
 * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to thumbnails
 * @apiSuccess (Response Fields) {String} cdn_origin_id not applicable to remote assets
 * @apiSuccess (Response Fields) {Boolean} complete not applicable to remote assets
 * @apiSuccess (Response Fields) {String} controller_type not applicable to remote assets
 * @apiSuccess (Response Fields) {DateString} created_at not applicable to remote assets
 * @apiSuccess (Response Fields) {String} current_filename not applicable to remote assets
 * @apiSuccess (Response Fields) {Object} drm not applicable to remote assets
 * @apiSuccess (Response Fields) {Number} encoding_rate average encoding_rate in kbps
 * @apiSuccess (Response Fields) {Number} frame_height frame height in pixels
 * @apiSuccess (Response Fields) {Number} frame_width frame width in pixels
 * @apiSuccess (Response Fields) {String} name asset name
 * @apiSuccess (Response Fields) {Boolean} progressive_download not applicable to remote assets
 * @apiSuccess (Response Fields) {String} reference_id video reference-id (must be unique within the account)
 * @apiSuccess (Response Fields) {String} remote_url the url for the asset
 * @apiSuccess (Response Fields) {String} remote_stream_name not applicable to remote assets
 * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
 * @apiSuccess (Response Fields) {String} type the type of the asset
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
 * @apiSuccess (Response Fields) {String} video_codec not applicable to remote assets
 * @apiSuccess (Response Fields) {String} video_container not applicable to remote assets
 * @apiSuccess (Response Fields) {Number} video_duration duration in milliseconds
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "account_id": "57838016001",
 *        "audio_only": false,
 *        "cdn_origin_id": "",
 *        "complete": true,
 *        "controller_type": "DEFAULT",
 *        "created_at": null,
 *        "current_filename": "",
 *        "drm": null,
 *        "encoding_rate": 983000,
 *        "frame_height": 360,
 *        "frame_width": 640,
 *        "hds": null,
 *        "hls": null,
 *        "id": "4665726463001",
 *        "name": "RA - Great Blue Heron",
 *        "progressive_download": false,
 *        "reference_id": "",
 *        "remote_stream_name": "",
 *        "remote_url": "http://learning-services-media.brightcove.com/videos/mp4/greatblueheron.mp4",
 *        "size": 3887659,
 *        "type": "FULL_LENGTH",
 *        "updated_at": "2015-12-18T18:02:33.808Z",
 *        "uploaded_at": "2015-12-18T18:02:33.807Z",
 *        "video_codec": "NONE",
 *        "video_container": "UNKNOWN",
 *        "video_duration": 31487
 *    }
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
