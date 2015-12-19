// get renditions

/**
 * @api {get} /accounts/:account_id/videos/:video_id/assets/renditions Get Renditions List
 * @apiName Get Renditions List
 * @apiGroup Remote_Assets
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets a list of renditions for a remote asset. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
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
 *    [
 *        {
 *            "account_id": "57838016001",
 *            "audio_only": false,
 *            "cdn_origin_id": "",
 *            "complete": true,
 *            "controller_type": "DEFAULT",
 *            "created_at": null,
 *            "current_filename": "",
 *            "drm": null,
 *            "encoding_rate": 983000,
 *            "frame_height": 360,
 *            "frame_width": 640,
 *            "hds": null,
 *            "hls": null,
 *            "id": "4665726463001",
 *            "name": "RA - Great Blue Heron",
 *            "progressive_download": false,
 *            "reference_id": "",
 *            "remote_stream_name": "",
 *            "remote_url": "http://learning-services-media.brightcove.com/videos/mp4/greatblueheron.mp4",
 *            "size": 3887659,
 *            "type": "FULL_LENGTH",
 *            "updated_at": "2015-12-18T18:02:33.808Z",
 *            "uploaded_at": "2015-12-18T18:02:33.807Z",
 *            "video_codec": "NONE",
 *            "video_container": "UNKNOWN",
 *            "video_duration": 31487
 *        },
 *        {
 *            "account_id": "57838016001",
 *            "audio_only": false,
 *            "cdn_origin_id": "",
 *            "complete": true,
 *            "controller_type": "DEFAULT",
 *            "created_at": null,
 *            "current_filename": "",
 *            "drm": null,
 *            "encoding_rate": null,
 *            "frame_height": null,
 *            "frame_width": null,
 *            "hds": null,
 *            "hls": null,
 *            "id": "4665727973001",
 *            "name": "RA - Great Blue Heron",
 *            "progressive_download": false,
 *            "reference_id": "",
 *            "remote_stream_name": "",
 *            "remote_url": "http://learning-services-media.brightcove.com/videos/mp4/greatblueheron.mp4",
 *            "size": 0,
 *            "type": "FULL_LENGTH",
 *            "updated_at": "2015-12-18T14:20:46.765Z",
 *            "uploaded_at": "2015-12-18T14:20:46.763Z",
 *            "video_codec": "NONE",
 *            "video_container": "UNKNOWN",
 *            "video_duration": 0
 *        }
 *    ]
 *
// post renditions

/**
 * @api {post} /accounts/:account_id/videos/:video_id/assets/renditions Add Rendition
 * @apiName Add Rendition
 * @apiGroup Remote_Assets
 * @apiVersion 1.0.0
 *
 * @apiDescription Add a rendition for a remote asset. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
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

// patch renditions

/**
 * @api {patch} /accounts/:account_id/videos/:video_id/assets/renditions/:asset_id Update Rendition
 * @apiName Update Rendition
 * @apiGroup Remote_Assets
 * @apiVersion 1.0.0
 *
 * @apiDescription Update a rendition for a remote asset. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
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

 // get captions

 /**
  * @api {get} /accounts/:account_id/videos/:video_id/assets/caption Get Captions List
  * @apiName Get Captions List
  * @apiGroup Remote_Assets
  * @apiVersion 1.0.0
  *
  * @apiDescription Gets a list of caption files for a remote asset (DFXP captions for the Smart Player). **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
  *
  * @apiHeader {String} Content-Type Content-Type: application/json
  * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
  *
  * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
  * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
  *
  *
  * @apiParamExample {Url} Caption list Example:
  *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/4077874616001/caption
  *
  * @apiSuccess (Response Fields) {String} id the asset id
  * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to captions
  * @apiSuccess (Response Fields) {Boolean} complete not applicable to remote assets
  * @apiSuccess (Response Fields) {String} controller_type not applicable to remote assets
  * @apiSuccess (Response Fields) {DateString} created_at not applicable to remote assets
  * @apiSuccess (Response Fields) {String} current_filename not applicable to remote assets
  * @apiSuccess (Response Fields) {String} cdn_origin_id not applicable to remote assets
  * @apiSuccess (Response Fields) {String} name asset name
  * @apiSuccess (Response Fields) {Boolean} progressive_download not applicable to remote assets
  * @apiSuccess (Response Fields) {String} reference_id video reference-id (must be unique within the account)
  * @apiSuccess (Response Fields) {String} remote_url the url for the asset
  * @apiSuccess (Response Fields) {String} remote_stream_name not applicable to remote assets
  * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
  * @apiSuccess (Response Fields) {String} type the type of the asset
  * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
  * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
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
  *        "id": "4665727870001",
  *        "name": "",
  *        "progressive_download": false,
  *        "reference_id": "",
  *        "remote_stream_name": "",
  *        "remote_url": "http://learning-services-media.brightcove.com/captions/Video-Cloud.DFXP.xml",
  *        "size": 0,
  *        "type": "CAPTION",
  *        "updated_at": "2015-12-18T14:52:47.758Z",
  *        "uploaded_at": "2015-12-18T14:52:47.758Z"
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

 // post captions

 /**
  * @api {post} /accounts/:account_id/videos/:video_id/assets/caption Add Captions
  * @apiName Add Captions
  * @apiGroup Remote_Assets
  * @apiVersion 1.0.0
  *
  * @apiDescription Adds a caption file for a remote asset (DFXP captions for the Smart Player). **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
  *
  * @apiHeader {String} Content-Type Content-Type: application/json
  * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
  *
  * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
  * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
  *
  * @apiParam (Request Body Fields) {String} reference_id video reference-id (must be unique within the account)
  * @apiParam (Request Body Fields) {String} remote_url the url for the asset
  *
  * @apiParamExample {json} Add Captions Request Data Example:
  *    {
  *        "remote_url": "http://learning-services-media.brightcove.com/captions/Video-Cloud-Analytics-Performance-Report.DFXP.xml"
  *    }
  *
  * @apiSuccess (Response Fields) {String} id the asset id
  * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to captions
  * @apiSuccess (Response Fields) {Boolean} complete not applicable to remote assets
  * @apiSuccess (Response Fields) {String} controller_type not applicable to remote assets
  * @apiSuccess (Response Fields) {DateString} created_at not applicable to remote assets
  * @apiSuccess (Response Fields) {String} current_filename not applicable to remote assets
  * @apiSuccess (Response Fields) {String} cdn_origin_id not applicable to remote assets
  * @apiSuccess (Response Fields) {String} name asset name
  * @apiSuccess (Response Fields) {Boolean} progressive_download not applicable to remote assets
  * @apiSuccess (Response Fields) {String} reference_id video reference-id (must be unique within the account)
  * @apiSuccess (Response Fields) {String} remote_url the url for the asset
  * @apiSuccess (Response Fields) {String} remote_stream_name not applicable to remote assets
  * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
  * @apiSuccess (Response Fields) {String} type the type of the asset
  * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
  * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
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
  *        "id": "4665727870001",
  *        "name": "",
  *        "progressive_download": false,
  *        "reference_id": "",
  *        "remote_stream_name": "",
  *        "remote_url": "http://learning-services-media.brightcove.com/captions/Video-Cloud.DFXP.xml",
  *        "size": 0,
  *        "type": "CAPTION",
  *        "updated_at": "2015-12-18T14:52:47.758Z",
  *        "uploaded_at": "2015-12-18T14:52:47.758Z"
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

 // patch captions

 /**
  * @api {patch} /accounts/:account_id/videos/:video_id/assets/caption/:asset_id Update Captions
  * @apiName Update Captions
  * @apiGroup Remote_Assets
  * @apiVersion 1.0.0
  *
  * @apiDescription Updates a caption file for a remote asset (DFXP captions for the Smart Player). **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
  *
  * @apiHeader {String} Content-Type Content-Type: application/json
  * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
  *
  * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
  * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
  * @apiParam (Path Parameters) {String} asset_id id for the asset
  *
  * @apiParam (Request Body Fields) {String} reference_id video reference-id (must be unique within the account)
  * @apiParam (Request Body Fields) {String} remote_url the url for the asset
  *
  * @apiParamExample {json} Add Captions Request Data Example:
  *    {
  *        "remote_url": "http://learning-services-media.brightcove.com/captions/Video-Cloud-Analytics-Performance-Report.DFXP.xml"
  *    }
  *
  * @apiSuccess (Response Fields) {String} id the asset id
  * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to captions
  * @apiSuccess (Response Fields) {Boolean} complete not applicable to remote assets
  * @apiSuccess (Response Fields) {String} controller_type not applicable to remote assets
  * @apiSuccess (Response Fields) {DateString} created_at not applicable to remote assets
  * @apiSuccess (Response Fields) {String} current_filename not applicable to remote assets
  * @apiSuccess (Response Fields) {String} cdn_origin_id not applicable to remote assets
  * @apiSuccess (Response Fields) {String} name asset name
  * @apiSuccess (Response Fields) {Boolean} progressive_download not applicable to remote assets
  * @apiSuccess (Response Fields) {String} reference_id video reference-id (must be unique within the account)
  * @apiSuccess (Response Fields) {String} remote_url the url for the asset
  * @apiSuccess (Response Fields) {String} remote_stream_name not applicable to remote assets
  * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
  * @apiSuccess (Response Fields) {String} type the type of the asset
  * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
  * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
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
  *        "id": "4665727870001",
  *        "name": "",
  *        "progressive_download": false,
  *        "reference_id": "",
  *        "remote_stream_name": "",
  *        "remote_url": "http://learning-services-media.brightcove.com/captions/Video-Cloud.DFXP.xml",
  *        "size": 0,
  *        "type": "CAPTION",
  *        "updated_at": "2015-12-18T14:52:47.758Z",
  *        "uploaded_at": "2015-12-18T14:52:47.758Z"
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

  // get poster

  /**
   * @api {get} /accounts/:account_id/videos/:video_id/assets/poster Get Posters List
   * @apiName Get Posters List
   * @apiGroup Remote_Assets
   * @apiVersion 1.0.0
   *
   * @apiDescription Gets a list of poster files for a remote asset. Note that you can only add one poster for a video. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
   *
   * @apiHeader {String} Content-Type Content-Type: application/json
   * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
   *
   * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
   * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
   *
   *
   * @apiParamExample {Url} Poster list Example:
   *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/4077874616001/poster
   *
   * @apiSuccess (Response Fields) {String} id the asset id
   * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to posters
   * @apiSuccess (Response Fields) {Boolean} complete not applicable to remote assets
   * @apiSuccess (Response Fields) {String} controller_type not applicable to remote assets
   * @apiSuccess (Response Fields) {DateString} created_at not applicable to remote assets
   * @apiSuccess (Response Fields) {String} current_filename not applicable to remote assets
   * @apiSuccess (Response Fields) {String} cdn_origin_id not applicable to remote assets
   * @apiSuccess (Response Fields) {String} name asset name
   * @apiSuccess (Response Fields) {Boolean} progressive_download not applicable to remote assets
   * @apiSuccess (Response Fields) {String} reference_id video reference-id (must be unique within the account)
   * @apiSuccess (Response Fields) {String} remote_url the url for the asset
   * @apiSuccess (Response Fields) {String} remote_stream_name not applicable to remote assets
   * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
   * @apiSuccess (Response Fields) {String} type the type of the asset
   * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
   * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
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
   *        "frame_height": null,
   *        "frame_width": null,
   *        "id": "4665727869001",
   *        "name": "",
   *        "progressive_download": false,
   *        "reference_id": "",
   *        "remote_stream_name": "",
   *        "remote_url": "http://learning-services-media.brightcove.com/images/great-blue-heron-poster.png",
   *        "size": 0,
   *        "type": "VIDEO_STILL",
   *        "updated_at": "2015-12-18T14:42:22.439Z",
   *        "uploaded_at": "2015-12-18T14:42:22.436Z"
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

  // post posters

  /**
   * @api {post} /accounts/:account_id/videos/:video_id/assets/poster Add Posters
   * @apiName Add Posters
   * @apiGroup Remote_Assets
   * @apiVersion 1.0.0
   *
   * @apiDescription Adds a poster file for a remote asset (DFXP posters for the Smart Player). **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
   *
   * @apiHeader {String} Content-Type Content-Type: application/json
   * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
   *
   * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
   * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
   *
   * @apiParam (Request Body Fields) {String} reference_id video reference-id (must be unique within the account)
   * @apiParam (Request Body Fields) {String} remote_url the url for the asset
   *
   * @apiParamExample {json} Add Posters Request Data Example:
   *    {
   *        "remote_url": "http://learning-services-media.brightcove.com/images/great-blue-heron-poster.png"
   *    }
   *
   * @apiSuccess (Response Fields) {String} id the asset id
   * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to posters
   * @apiSuccess (Response Fields) {Boolean} complete not applicable to remote assets
   * @apiSuccess (Response Fields) {String} controller_type not applicable to remote assets
   * @apiSuccess (Response Fields) {DateString} created_at not applicable to remote assets
   * @apiSuccess (Response Fields) {String} current_filename not applicable to remote assets
   * @apiSuccess (Response Fields) {String} cdn_origin_id not applicable to remote assets
   * @apiSuccess (Response Fields) {String} name asset name
   * @apiSuccess (Response Fields) {Boolean} progressive_download not applicable to remote assets
   * @apiSuccess (Response Fields) {String} reference_id video reference-id (must be unique within the account)
   * @apiSuccess (Response Fields) {String} remote_url the url for the asset
   * @apiSuccess (Response Fields) {String} remote_stream_name not applicable to remote assets
   * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
   * @apiSuccess (Response Fields) {String} type the type of the asset
   * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
   * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
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
   *        "frame_height": null,
   *        "frame_width": null,
   *        "id": "4665727869001",
   *        "name": "",
   *        "progressive_download": false,
   *        "reference_id": "",
   *        "remote_stream_name": "",
   *        "remote_url": "http://learning-services-media.brightcove.com/images/great-blue-heron-poster.png",
   *        "size": 0,
   *        "type": "VIDEO_STILL",
   *        "updated_at": "2015-12-18T14:42:22.439Z",
   *        "uploaded_at": "2015-12-18T14:42:22.436Z"
   *    }
   *
   * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
   * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
   * @apiError (Error 4xx) {json} NOT_AVAILABLE 400: The resource you are requesting is temporarily unavailable
   * @apiError (Error 4xx) {json} CONFLICT 409: VIDEO_STILL already exists on Video
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
   */

  // patch posters

  /**
   * @api {patch} /accounts/:account_id/videos/:video_id/assets/poster/:asset_id Update Posters
   * @apiName Update Posters
   * @apiGroup Remote_Assets
   * @apiVersion 1.0.0
   *
   * @apiDescription Updates a poster file for a remote asset (DFXP posters for the Smart Player). **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
   *
   * @apiHeader {String} Content-Type Content-Type: application/json
   * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
   *
   * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
   * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
   * @apiParam (Path Parameters) {String} asset_id id for the asset
   *
   * @apiParam (Request Body Fields) {String} reference_id video reference-id (must be unique within the account)
   * @apiParam (Request Body Fields) {String} remote_url the url for the asset
   *
   * @apiParamExample {json} Add Posters Request Data Example:
   *    {
   *        "remote_url": "http://learning-services-media.brightcove.com/images/great-blue-heron-poster.png"
   *    }
   *
   * @apiSuccess (Response Fields) {String} id the asset id
   * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to posters
   * @apiSuccess (Response Fields) {Boolean} complete not applicable to remote assets
   * @apiSuccess (Response Fields) {String} controller_type not applicable to remote assets
   * @apiSuccess (Response Fields) {DateString} created_at not applicable to remote assets
   * @apiSuccess (Response Fields) {String} current_filename not applicable to remote assets
   * @apiSuccess (Response Fields) {String} cdn_origin_id not applicable to remote assets
   * @apiSuccess (Response Fields) {String} name asset name
   * @apiSuccess (Response Fields) {Boolean} progressive_download not applicable to remote assets
   * @apiSuccess (Response Fields) {String} reference_id video reference-id (must be unique within the account)
   * @apiSuccess (Response Fields) {String} remote_url the url for the asset
   * @apiSuccess (Response Fields) {String} remote_stream_name not applicable to remote assets
   * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
   * @apiSuccess (Response Fields) {String} type the type of the asset
   * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
   * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
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
   *        "frame_height": null,
   *        "frame_width": null,
   *        "id": "4665727869001",
   *        "name": "",
   *        "progressive_download": false,
   *        "reference_id": "",
   *        "remote_stream_name": "",
   *        "remote_url": "http://learning-services-media.brightcove.com/images/great-blue-heron-poster.png",
   *        "size": 0,
   *        "type": "VIDEO_STILL",
   *        "updated_at": "2015-12-18T14:42:22.439Z",
   *        "uploaded_at": "2015-12-18T14:42:22.436Z"
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
   */

// get thumbnail

/**
 * @api {get} /accounts/:account_id/videos/:video_id/assets/thumbnail Get Thumbnails List
 * @apiName Get Thumbnails List
 * @apiGroup Remote_Assets
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets a list of thumbnail files for a remote asset. Note that you can only add one thumbnail for a video. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
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
 * @apiSuccess (Response Fields) {String} id the asset id
 * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to thumbnails
 * @apiSuccess (Response Fields) {Boolean} complete not applicable to remote assets
 * @apiSuccess (Response Fields) {String} controller_type not applicable to remote assets
 * @apiSuccess (Response Fields) {DateString} created_at not applicable to remote assets
 * @apiSuccess (Response Fields) {String} current_filename not applicable to remote assets
 * @apiSuccess (Response Fields) {String} cdn_origin_id not applicable to remote assets
 * @apiSuccess (Response Fields) {String} name asset name
 * @apiSuccess (Response Fields) {Boolean} progressive_download not applicable to remote assets
 * @apiSuccess (Response Fields) {String} reference_id video reference-id (must be unique within the account)
 * @apiSuccess (Response Fields) {String} remote_url the url for the asset
 * @apiSuccess (Response Fields) {String} remote_stream_name not applicable to remote assets
 * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
 * @apiSuccess (Response Fields) {String} type the type of the asset
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
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
 *        "frame_height": null,
 *        "frame_width": null,
 *        "id": "4665727869001",
 *        "name": "",
 *        "progressive_download": false,
 *        "reference_id": "",
 *        "remote_stream_name": "",
 *        "remote_url": "http://learning-services-media.brightcove.com/images/great-blue-heron-thumbnail.png",
 *        "size": 0,
 *        "type": "THUMBNAIL",
 *        "updated_at": "2015-12-18T14:42:22.439Z",
 *        "uploaded_at": "2015-12-18T14:42:22.436Z"
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

// post thumbnails

/**
 * @api {post} /accounts/:account_id/videos/:video_id/assets/thumbnail Add Thumbnails
 * @apiName Add Thumbnails
 * @apiGroup Remote_Assets
 * @apiVersion 1.0.0
 *
 * @apiDescription Adds a thumbnail file for a remote asset (DFXP thumbnails for the Smart Player). **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
 *
 * @apiParam (Request Body Fields) {String} reference_id video reference-id (must be unique within the account)
 * @apiParam (Request Body Fields) {String} remote_url the url for the asset
 *
 * @apiParamExample {json} Add Thumbnails Request Data Example:
 *    {
 *        "remote_url": "http://learning-services-media.brightcove.com/images/great-blue-heron-thumbnail.png"
 *    }
 *
 * @apiSuccess (Response Fields) {String} id the asset id
 * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to thumbnails
 * @apiSuccess (Response Fields) {Boolean} complete not applicable to remote assets
 * @apiSuccess (Response Fields) {String} controller_type not applicable to remote assets
 * @apiSuccess (Response Fields) {DateString} created_at not applicable to remote assets
 * @apiSuccess (Response Fields) {String} current_filename not applicable to remote assets
 * @apiSuccess (Response Fields) {String} cdn_origin_id not applicable to remote assets
 * @apiSuccess (Response Fields) {String} name asset name
 * @apiSuccess (Response Fields) {Boolean} progressive_download not applicable to remote assets
 * @apiSuccess (Response Fields) {String} reference_id video reference-id (must be unique within the account)
 * @apiSuccess (Response Fields) {String} remote_url the url for the asset
 * @apiSuccess (Response Fields) {String} remote_stream_name not applicable to remote assets
 * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
 * @apiSuccess (Response Fields) {String} type the type of the asset
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
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
 *        "frame_height": null,
 *        "frame_width": null,
 *        "id": "4665727869001",
 *        "name": "",
 *        "progressive_download": false,
 *        "reference_id": "",
 *        "remote_stream_name": "",
 *        "remote_url": "http://learning-services-media.brightcove.com/images/great-blue-heron-thumbnail.png",
 *        "size": 0,
 *        "type": "THUMBNAIL",
 *        "updated_at": "2015-12-18T14:42:22.439Z",
 *        "uploaded_at": "2015-12-18T14:42:22.436Z"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 400: The resource you are requesting is temporarily unavailable
 * @apiError (Error 4xx) {json} CONFLICT 409: THUMBNAIL already exists on Video
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
 */

// patch thumbnails

/**
 * @api {patch} /accounts/:account_id/videos/:video_id/assets/thumbnail/:asset_id Update Thumbnails
 * @apiName Update Thumbnails
 * @apiGroup Remote_Assets
 * @apiVersion 1.0.0
 *
 * @apiDescription Updates a thumbnail file for a remote asset (DFXP thumbnails for the Smart Player). **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
 * @apiParam (Path Parameters) {String} asset_id id for the asset
 *
 * @apiParam (Request Body Fields) {String} reference_id video reference-id (must be unique within the account)
 * @apiParam (Request Body Fields) {String} remote_url the url for the asset
 *
 * @apiParamExample {json} Add Thumbnails Request Data Example:
 *    {
 *        "remote_url": "http://learning-services-media.brightcove.com/images/great-blue-heron-thumbnail.png"
 *    }
 *
 * @apiSuccess (Response Fields) {String} id the asset id
 * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to thumbnails
 * @apiSuccess (Response Fields) {Boolean} complete not applicable to remote assets
 * @apiSuccess (Response Fields) {String} controller_type not applicable to remote assets
 * @apiSuccess (Response Fields) {DateString} created_at not applicable to remote assets
 * @apiSuccess (Response Fields) {String} current_filename not applicable to remote assets
 * @apiSuccess (Response Fields) {String} cdn_origin_id not applicable to remote assets
 * @apiSuccess (Response Fields) {String} name asset name
 * @apiSuccess (Response Fields) {Boolean} progressive_download not applicable to remote assets
 * @apiSuccess (Response Fields) {String} reference_id video reference-id (must be unique within the account)
 * @apiSuccess (Response Fields) {String} remote_url the url for the asset
 * @apiSuccess (Response Fields) {String} remote_stream_name not applicable to remote assets
 * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
 * @apiSuccess (Response Fields) {String} type the type of the asset
 * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
 * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
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
 *        "frame_height": null,
 *        "frame_width": null,
 *        "id": "4665727869001",
 *        "name": "",
 *        "progressive_download": false,
 *        "reference_id": "",
 *        "remote_stream_name": "",
 *        "remote_url": "http://learning-services-media.brightcove.com/images/great-blue-heron-thumbnail.png",
 *        "size": 0,
 *        "type": "THUMBNAIL",
 *        "updated_at": "2015-12-18T14:42:22.439Z",
 *        "uploaded_at": "2015-12-18T14:42:22.436Z"
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
 */

 // get text_tracks

 /**
  * @api {get} /accounts/:account_id/videos/:video_id/assets/text_tracks Get Text Tracks List
  * @apiName Get Text Tracks List
  * @apiGroup Remote_Assets
  * @apiVersion 1.0.0
  *
  * @apiDescription Gets a list of text_tracks files for a remote asset. **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
  *
  * @apiHeader {String} Content-Type Content-Type: application/json
  * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
  *
  * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
  * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
  *
  *
  * @apiParamExample {Url} Text Tracks list Example:
  *     https://cms.api.brightcove.com/v1/accounts/57838016001/videos/4077874616001/text_tracks
  *
  * @apiSuccess (Response Fields) {String} id the asset id
  * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to text_trackss
  * @apiSuccess (Response Fields) {Boolean} complete not applicable to remote assets
  * @apiSuccess (Response Fields) {String} controller_type not applicable to remote assets
  * @apiSuccess (Response Fields) {DateString} created_at not applicable to remote assets
  * @apiSuccess (Response Fields) {String} current_filename not applicable to remote assets
  * @apiSuccess (Response Fields) {String} cdn_origin_id not applicable to remote assets
  * @apiSuccess (Response Fields) {String} name asset name
  * @apiSuccess (Response Fields) {Boolean} progressive_download not applicable to remote assets
  * @apiSuccess (Response Fields) {String} reference_id video reference-id (must be unique within the account)
  * @apiSuccess (Response Fields) {String} remote_url the url for the asset
  * @apiSuccess (Response Fields) {String} remote_stream_name not applicable to remote assets
  * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
  * @apiSuccess (Response Fields) {String} type the type of the asset
  * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
  * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
  *
  * @apiSuccessExample {json} Success Response:
  *    HTTP/1.1 200 OK
  *    [
  *        {
  *            "account_id": null,
  *            "audio_only": false,
  *            "cdn_origin_id": "",
  *            "complete": true,
  *            "controller_type": "",
  *            "created_at": null,
  *            "current_filename": "",
  *            "id": "0d664950-7efd-43b5-bba4-a9dd0d8c4a1b",
  *            "name": "",
  *            "progressive_download": false,
  *            "reference_id": null,
  *            "remote_stream_name": null,
  *            "remote_url": null,
  *            "size": null,
  *            "type": "TEXT_TRACK",
  *            "updated_at": "2015-12-18T15:11:18.990Z",
  *            "uploaded_at": "2015-12-18T15:11:18.990Z"
  *        }
  *    ]
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

 // post text_trackss

 /**
  * @api {post} /accounts/:account_id/videos/:video_id/assets/text_tracks Add Text Tracks
  * @apiName Add Text Tracks
  * @apiGroup Remote_Assets
  * @apiVersion 1.0.0
  *
  * @apiDescription Adds a text_tracks file for a remote asset. **Note that you will need to make an additional [Update Video Request](#api-Video-Update_Video) to associate the text tracks with the video, so it's more efficient just to add the text tracks via [Update Video](#api-Video-Update_Video) and skip this operation.** **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
  *
  * @apiHeader {String} Content-Type Content-Type: application/json
  * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
  *
  * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
  * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
  *
  * @apiParam (Request Body Fields) {String} reference_id video reference-id (must be unique within the account)
  * @apiParam (Request Body Fields) {String} remote_url the url for the asset
  *
  * @apiParamExample {json} Add Text Tracks Request Data Example:
  *    {
  *        "remote_url": "http://learning-services-media.brightcove.com/captions/intro-vcs.vtt"
  *    }
  *
  * @apiSuccess (Response Fields) {String} id the asset id
  * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to text_trackss
  * @apiSuccess (Response Fields) {Boolean} complete not applicable to remote assets
  * @apiSuccess (Response Fields) {String} controller_type not applicable to remote assets
  * @apiSuccess (Response Fields) {DateString} created_at not applicable to remote assets
  * @apiSuccess (Response Fields) {String} current_filename not applicable to remote assets
  * @apiSuccess (Response Fields) {String} cdn_origin_id not applicable to remote assets
  * @apiSuccess (Response Fields) {String} name asset name
  * @apiSuccess (Response Fields) {Boolean} progressive_download not applicable to remote assets
  * @apiSuccess (Response Fields) {String} reference_id video reference-id (must be unique within the account)
  * @apiSuccess (Response Fields) {String} remote_url the url for the asset
  * @apiSuccess (Response Fields) {String} remote_stream_name not applicable to remote assets
  * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
  * @apiSuccess (Response Fields) {String} type the type of the asset
  * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
  * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
  *
  * @apiSuccessExample {json} Success Response:
  *    HTTP/1.1 200 OK
  *    {
  *        "account_id": null,
  *        "audio_only": false,
  *        "cdn_origin_id": "",
  *        "complete": true,
  *        "controller_type": "",
  *        "created_at": null,
  *        "current_filename": "",
  *        "id": "0d664950-7efd-43b5-bba4-a9dd0d8c4a1b",
  *        "name": "",
  *        "progressive_download": false,
  *        "reference_id": null,
  *        "remote_stream_name": null,
  *        "remote_url": null,
  *        "size": null,
  *        "type": "TEXT_TRACK",
  *        "updated_at": "2015-12-18T15:11:18.990Z",
  *        "uploaded_at": "2015-12-18T15:11:18.990Z"
  *    }
  *
  * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
  * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
  * @apiError (Error 4xx) {json} NOT_AVAILABLE 400: The resource you are requesting is temporarily unavailable
  * @apiError (Error 4xx) {json} CONFLICT 409: TEXT_TRACK already exists on Video
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
  */

 // patch text_trackss

 /**
  * @api {patch} /accounts/:account_id/videos/:video_id/assets/text_tracks/:asset_id Update Text Tracks
  * @apiName Update Text Tracks
  * @apiGroup Remote_Assets
  * @apiVersion 1.0.0
  *
  * @apiDescription Updates a text_tracks file for a remote asset (DFXP text_trackss for the Smart Player). **Note that you can also add and update the text tracks via [Update Video](#api-Video-Update_Video) and skip this operation.** **Note**: you can use `/videos/ref:reference_id` instead of `/videos/video_id`
  *
  * @apiHeader {String} Content-Type Content-Type: application/json
  * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
  *
  * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
  * @apiParam (Path Parameters) {String} video_id Video Cloud video ID. You can also use `ref:reference_id`
  * @apiParam (Path Parameters) {String} asset_id id for the asset
  *
  * @apiParam (Request Body Fields) {String} reference_id video reference-id (must be unique within the account)
  * @apiParam (Request Body Fields) {String} remote_url the url for the asset
  *
  * @apiParamExample {json} Add Text Tracks Request Data Example:
  *    {
  *        "remote_url": "http://learning-services-media.brightcove.com/captions/intro-vcs.vtt"
  *    }
  *
  * @apiSuccess (Response Fields) {String} id the asset id
  * @apiSuccess (Response Fields) {Boolean} audio_only not applicable to text_trackss
  * @apiSuccess (Response Fields) {Boolean} complete not applicable to remote assets
  * @apiSuccess (Response Fields) {String} controller_type not applicable to remote assets
  * @apiSuccess (Response Fields) {DateString} created_at not applicable to remote assets
  * @apiSuccess (Response Fields) {String} current_filename not applicable to remote assets
  * @apiSuccess (Response Fields) {String} cdn_origin_id not applicable to remote assets
  * @apiSuccess (Response Fields) {String} name asset name
  * @apiSuccess (Response Fields) {Boolean} progressive_download not applicable to remote assets
  * @apiSuccess (Response Fields) {String} reference_id video reference-id (must be unique within the account)
  * @apiSuccess (Response Fields) {String} remote_url the url for the asset
  * @apiSuccess (Response Fields) {String} remote_stream_name not applicable to remote assets
  * @apiSuccess (Response Fields) {Number} size the size of the asset in bytes (integer)
  * @apiSuccess (Response Fields) {String} type the type of the asset
  * @apiSuccess (Response Fields) {DateString} updated_at when the video was last modified
  * @apiSuccess (Response Fields) {DateString} uploaded_at when the asset was added to the video in Video Cloud
  *
  * @apiSuccessExample {json} Success Response:
  *    HTTP/1.1 200 OK
  *    {
  *        "account_id": null,
  *        "audio_only": false,
  *        "cdn_origin_id": "",
  *        "complete": true,
  *        "controller_type": "",
  *        "created_at": null,
  *        "current_filename": "",
  *        "id": "0d664950-7efd-43b5-bba4-a9dd0d8c4a1b",
  *        "name": "",
  *        "progressive_download": false,
  *        "reference_id": null,
  *        "remote_stream_name": null,
  *        "remote_url": null,
  *        "size": null,
  *        "type": "TEXT_TRACK",
  *        "updated_at": "2015-12-18T15:11:18.990Z",
  *        "uploaded_at": "2015-12-18T15:11:18.990Z"
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
  */
