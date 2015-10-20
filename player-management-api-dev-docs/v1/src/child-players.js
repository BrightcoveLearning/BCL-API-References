// Get a player's embeds

/**
 * @api {get} accounts/:account_id/players/:player_id/embeds Get All Embeds
 * @apiName Get All Embeds
 * @apiGroup Player Embeds
 * @apiVersion 1.0.0
 *
 * @apiDescription Get all the embeds (child players) for a player.
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id account ID
 * @apiParam (Path Parameters) {String} player_id player ID
 *
 * @apiParamExample {curl} curl Statement:
 * curl \
 *   --header "Content-Type: application/json" \
 *   --user $EMAIL \
 *   --request GET \
 *   https://players.api.brightcove.com/v1/accounts/:account_id/players/:player_id/embeds
 *
 * @apiSuccess (Response Fields) {Object[]} items array of embed objects
 * @apiSuccess (Response Fields) {Number} item_count number of items in items array, corresponds to number of embeds, plus one for parent player
 *
 * @apiSuccess (Response Fields for Parent Player) {Object} items.branches contains objects for the preview and master (published) embed
 * @apiSuccess (Response Fields for Parent Player) {Object} items.branches.master contains master (published) embed object
 * @apiSuccess (Response Fields for Parent Player) {String} items.branches.master.updated_at time embed was updated
 * @apiSuccess (Response Fields for Parent Player) {Boolean} items.branches.master.video_cloud indicates if account is Video Cloud enabled
 * @apiSuccess (Response Fields for Parent Player) {Object} items.branches.preview contains master (published) embed object
 * @apiSuccess (Response Fields for Parent Player) {String} items.branches.preview.updated_at time embed was updated
 * @apiSuccess (Response Fields for Parent Player) {Boolean} items.branches.preview.video_cloud indicates if account is Video Cloud enabled
 * @apiSuccess (Response Fields for Parent Player) {String} items.embed_code published player iframe tag
 * @apiSuccess (Response Fields for Parent Player) {String} items.embed_in_page URL to browse to retrieve the in-page embed code for published player
 * @apiSuccess (Response Fields for Parent Player) {String} items.id for parent player value of `default`
 * @apiSuccess (Response Fields for Parent Player) {String} items.name name of player
 * @apiSuccess (Response Fields for Parent Player) {String} items.preview_embed_code preview player iframe tag
 * @apiSuccess (Response Fields for Parent Player) {String} items.preview_url URL to preview player
 * @apiSuccess (Response Fields for Parent Player) {Object} items.publish_request publish request information
 * @apiSuccess (Response Fields for Parent Player) {String} items.publish_request.author email address of person requesting embed creation
 * @apiSuccess (Response Fields for Parent Player) {String} items.publish_request.buildLog URL to build information
 * @apiSuccess (Response Fields for Parent Player) {String} items.publish_request.comment comment on action, e.g. `Player created`
 * @apiSuccess (Response Fields for Parent Player) {String} items.publish_request.elapsed_time time in milliseconds of embed creation
 * @apiSuccess (Response Fields for Parent Player) {String} items.publish_request.errorCode error code, if no error value is `null`
 * @apiSuccess (Response Fields for Parent Player) {String} items.publish_request.errorMessage error message, if no error value is `null`
 * @apiSuccess (Response Fields for Parent Player) {String} items.publish_request.queue_msg_id unique identifier of message
 * @apiSuccess (Response Fields for Parent Player) {String} items.publish_request.requested_at time of embed creation request
 * @apiSuccess (Response Fields for Parent Player) {String} items.publish_request.retries number of retries to create embed
 * @apiSuccess (Response Fields for Parent Player) {String} items.publish_request.status status of request, for e.g. `COMPLETE`
 * @apiSuccess (Response Fields for Parent Player) {String} items.repository_url URL to repository of player
 * @apiSuccess (Response Fields for Parent Player) {String} items.url URL to published player
 *
 * @apiSuccess (Response Fields for Each Embed) {Object} items.branches contains objects for the preview and master (published) embed
 * @apiSuccess (Response Fields for Each Embed) {Object} items.branches.master contains master (published) embed object
 * @apiSuccess (Response Fields for Each Embed) {Object} items.branches.master.configuration configuration of master embed
 * @apiSuccess (Response Fields for Each Embed) {Object} items.branches.master.configuration.configuration configuration repeated for embed, CONTAINS ALL CONFIGURATION OPTIONS SHOWN ...
 * @apiSuccess (Response Fields for Each Embed) {String} items.branches.master.name name of master (published) version of embed
 * @apiSuccess (Response Fields for Each Embed) {String} items.branches.master.updated_at last update time for master (published) version of embed
 * @apiSuccess (Response Fields for Each Embed) {Object} items.branches.preview contains preview embed object
 * @apiSuccess (Response Fields for Each Embed) {Object} items.branches.preview.configuration configuration of preview embed
 * @apiSuccess (Response Fields for Each Embed) {Object} items.branches.preview.configuration.configuration configuration repeated for embed, CONTAINS ALL CONFIGURATION OPTIONS SHOWN ...
 * @apiSuccess (Response Fields for Each Embed) {String} items.branches.preview.name name of preview version of the embed
 * @apiSuccess (Response Fields for Each Embed) {String} items.branches.preview.updated_at last update time of preview version of embed
 * @apiSuccess (Response Fields for Each Embed) {String} items.embed_code published embed iframe tag
 * @apiSuccess (Response Fields for Each Embed) {String} items.embed_in_page URL to browse to retrieve the in-page embed code for embed
 * @apiSuccess (Response Fields for Each Embed) {String} items.id id embed
 * @apiSuccess (Response Fields for Each Embed) {String} items.name name of embed
 * @apiSuccess (Response Fields for Each Embed) {String} items.preview_embed_code preview iframe tag for embed
 * @apiSuccess (Response Fields for Each Embed) {Object} items.publish_request publish request information
 * @apiSuccess (Response Fields for Each Embed) {String} items.publish_request.author email address of person requesting embed creation
 * @apiSuccess (Response Fields for Each Embed) {String} items.publish_request.buildLog URL to build information
 * @apiSuccess (Response Fields for Each Embed) {String} items.publish_request.comment comment on action, e.g. `Player created`
 * @apiSuccess (Response Fields for Each Embed) {String} items.publish_request.elapsed_time time in milliseconds of embed creation
 * @apiSuccess (Response Fields for Each Embed) {String} items.publish_request.errorCode error code, if no error value is `null`
 * @apiSuccess (Response Fields for Each Embed) {String} items.publish_request.errorMessage error message, if no error value is `null`
 * @apiSuccess (Response Fields for Each Embed) {String} items.publish_request.queue_msg_id unique identifier of message
 * @apiSuccess (Response Fields for Each Embed) {String} items.publish_request.requested_at time of embed creation request
 * @apiSuccess (Response Fields for Each Embed) {String} items.publish_request.retries number of retries to create embed
 * @apiSuccess (Response Fields for Each Embed) {String} items.publish_request.status status of request, for e.g. `COMPLETE`
 * @apiSuccess (Response Fields for Each Embed) {String} items.preview_url URL to preview embed
 * @apiSuccess (Response Fields for Each Embed) {String} items.repository_url URL to repository of embed
 * @apiSuccess (Response Fields for Each Embed) {String} items.url URL to embed
 *
 * @apiSuccessExample {JSON} Success Response:
 * {
 *   "items": [{
 *     "branches": {
 *       "master": {
 *         "video_cloud": true,
 *         "updated_at": "2015-10-18T19:10:44.228Z"
 *       },
 *       "preview": {
 *         "video_cloud": true,
 *         "updated_at": "2015-10-18T19:10:44.228Z"
 *       }
 *     },
 *     "publish_request": {
 *       "comment": "Player created",
 *       "author": "mboles@brightcove.com",
 *       "status": "COMPLETE",
 *       "requested_at": "2015-10-18T19:10:44.264Z",
 *       "queue_msg_id": "06339636-dacb-4dee-8af2-9101c706e2ab",
 *       "errorCode": null,
 *       "errorMessage": null,
 *       "buildLog": "http://players.brightcove.net/1507807800001/f126fe07-268c-4a20-a715-1ce1a80469ff_default/logs/06339636-dacb-4dee-8af2-9101c706e2ab.log",
 *       "retries": 0,
 *       "elapsed_time": 7
 *     },
 *     "name": "MySamplePlayer",
 *     "id": "default",
 *     "url": "http://players.brightcove.net/1507807800001/f126fe07-268c-4a20-a715-1ce1a80469ff_default/index.html",
 *     "embed_code": "<iframe src='//players.brightcove.net/1507807800001/f126fe07-268c-4a20-a715-1ce1a80469ff_default/index.html' allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>",
 *     "embed_in_page": "http://players.brightcove.net/1507807800001/f126fe07-268c-4a20-a715-1ce1a80469ff_default/in_page.embed",
 *     "repository_url": "https://repos.api.brightcove.com/v1/accounts/1507807800001/repos/f126fe07-268c-4a20-a715-1ce1a80469ff_default",
 *     "preview_url": "http://preview-players.brightcove.net/v1/accounts/1507807800001/players/f126fe07-268c-4a20-a715-1ce1a80469ff/master/embeds/default/preview/index.html",
 *     "preview_embed_code": "<iframe src='//preview-players.brightcove.net/v1/accounts/1507807800001/players/f126fe07-268c-4a20-a715-1ce1a80469ff/master/embeds/default/preview/index.html' allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>"
 *   }, {
 *     "branches": {
 *       "master": {
 *         "updated_at": "2015-10-18T19:12:56.392Z",
 *         "configuration": {
 *           "configuration": {
 *             "media": {
 *               "sources": [{
 *                 "type": "video/mp4",
 *                 "src": "http://solutions.brightcove.com/bcls/assets/videos/Tiger.mp4"
 *               }]
 *             }
 *           },
 *           "name": "MySampleEmbedPlayer1"
 *         }
 *       },
 *       "preview": {
 *         "updated_at": "2015-10-18T19:12:56.392Z",
 *         "configuration": {
 *           "configuration": {
 *             "media": {
 *               "sources": [{
 *                 "type": "video/mp4",
 *                 "src": "http://solutions.brightcove.com/bcls/assets/videos/Tiger.mp4"
 *               }]
 *             }
 *           },
 *           "name": "MySampleEmbedPlayer1"
 *         }
 *       }
 *     },
 *     "publish_request": {
 *       "comment": "Embed created",
 *       "author": "mboles@brightcove.com",
 *       "status": "COMPLETE",
 *       "requested_at": "2015-10-18T19:12:56.428Z",
 *       "queue_msg_id": "affc99b6-dd33-4364-b56b-a21577a676c6",
 *       "errorCode": null,
 *       "errorMessage": null,
 *       "buildLog": "http://players.brightcove.net/1507807800001/f126fe07-268c-4a20-a715-1ce1a80469ff_f4c97841-098a-4fb3-a857-1c9aa04bb0c8/logs/affc99b6-dd33-4364-b56b-a21577a676c6.log",
 *       "retries": 0,
 *       "elapsed_time": 5
 *     },
 *     "name": "MySamplePlayer",
 *     "id": "f4c97841-098a-4fb3-a857-1c9aa04bb0c8",
 *     "url": "http://players.brightcove.net/1507807800001/f126fe07-268c-4a20-a715-1ce1a80469ff_f4c97841-098a-4fb3-a857-1c9aa04bb0c8/index.html",
 *     "embed_code": "<iframe src='//players.brightcove.net/1507807800001/f126fe07-268c-4a20-a715-1ce1a80469ff_f4c97841-098a-4fb3-a857-1c9aa04bb0c8/index.html' allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>",
 *     "embed_in_page": "http://players.brightcove.net/1507807800001/f126fe07-268c-4a20-a715-1ce1a80469ff_f4c97841-098a-4fb3-a857-1c9aa04bb0c8/in_page.embed",
 *     "repository_url": "https://repos.api.brightcove.com/v1/accounts/1507807800001/repos/f126fe07-268c-4a20-a715-1ce1a80469ff_f4c97841-098a-4fb3-a857-1c9aa04bb0c8",
 *     "preview_url": "http://preview-players.brightcove.net/v1/accounts/1507807800001/players/f126fe07-268c-4a20-a715-1ce1a80469ff/master/embeds/f4c97841-098a-4fb3-a857-1c9aa04bb0c8/preview/index.html",
 *     "preview_embed_code": "<iframe src='//preview-players.brightcove.net/v1/accounts/1507807800001/players/f126fe07-268c-4a20-a715-1ce1a80469ff/master/embeds/f4c97841-098a-4fb3-a857-1c9aa04bb0c8/preview/index.html' allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>"
 *   }],
 *   "item_count": 2
 * }
 */

// Get Single Embed
/**
 * @api {get} accounts/:account_id/players/:player_id/embeds/:embed_id Get Single Embed
 * @apiName Get Single Embed
 * @apiGroup Player Embeds
 * @apiVersion 1.0.0
 *
 * @apiDescription Get specific embed.
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id account ID
 * @apiParam (Path Parameters) {String} player_id player ID
 * @apiParam (Path Parameters) {String} embed_id embed ID
 *
 * @apiParam (Request Body Fields) {String} description player description
 * @apiParam (Request Body Fields) {String} name name give to player
 * @apiParam (Request Body Fields) {Object} configuration configuration of preview player REFERENCE ALL CONFIGURATION OPTIONS HERE
 *
 * @apiParamExample {curl} curl Statement:
 * //This curl statement creates an embed that uses a Video Cloud asset
 * curl \
 *   --header "Content-Type: application/json" \
 *   --user $EMAIL \
 *   --request POST \
 *   --data '{
 *       "name": "MySampleEmbedPlayer2",
 *       "configuration": {
 *         "video_cloud": {
 *           "video": "4443311217001"
 *         }
 *       }
 *     }' \
 *     https://players.api.brightcove.com/v1/accounts/:account_id/players/:player_id/embeds
 *
 * //This curl statement creates an embed that uses a video asset from a URL (Perform customer)
 * curl \
 *   --header "Content-Type: application/json" \
 *   --user $EMAIL \
 *   --request POST \
 *   --data '{
 *       "name": "MySampleEmbedPlayer3",
 *       "configuration": {
 *         "media": {
 *           "sources": [{
 *             "src":"http://solutions.brightcove.com/bcls/assets/videos/Tiger.mp4",
 *             "type":"video/mp4"
 *           }]
 *         }
 *       }
 *     }' \
 *     https://players.api.brightcove.com/v1/accounts/:account_id/players/:player_id/embeds
 *
 * @apiSuccess (Response Fields) {Object} branches contains objects for the preview and master (published) embed
 * @apiSuccess (Response Fields) {Object} branches.master contains master (published) embed object
 * @apiSuccess (Response Fields) {Object} branches.master.configuration configuration of master embed
 * @apiSuccess (Response Fields) {Object} branches.master.configuration.configuration configuration repeated for embed, CONTAINS ALL CONFIGURATION OPTIONS SHOWN ...
 * @apiSuccess (Response Fields) {String} branches.master.name name of master (published) version of embed
 * @apiSuccess (Response Fields) {String} branches.master.updated_at last update time for master (published) version of embed
 * @apiSuccess (Response Fields) {Object} branches.preview contains preview embed object
 * @apiSuccess (Response Fields) {Object} branches.preview.configuration configuration of preview embed
 * @apiSuccess (Response Fields) {Object} branches.preview.configuration.configuration configuration repeated for embed, CONTAINS ALL CONFIGURATION OPTIONS SHOWN ...
 * @apiSuccess (Response Fields) {String} branches.preview.name name of preview version of the embed
 * @apiSuccess (Response Fields) {String} branches.preview.updated_at last update time of preview version of embed
 * @apiSuccess (Response Fields) {String} embed_code published embed iframe tag
 * @apiSuccess (Response Fields) {String} embed_in_page URL to browse to retrieve the in-page embed code for embed
 * @apiSuccess (Response Fields) {String} id id embed
 * @apiSuccess (Response Fields) {String} name name of embed
 * @apiSuccess (Response Fields) {String} preview_embed_code preview iframe tag for embed
 * @apiSuccess (Response Fields) {Object} publish_request publish request information
 * @apiSuccess (Response Fields) {String} publish_request.author email address of person requesting embed creation
 * @apiSuccess (Response Fields) {String} publish_request.buildLog URL to build information
 * @apiSuccess (Response Fields) {String} publish_request.comment comment on action, e.g. `Player created`
 * @apiSuccess (Response Fields) {String} publish_request.elapsed_time time in milliseconds of embed creation
 * @apiSuccess (Response Fields) {String} publish_request.errorCode error code, if no error value is `null`
 * @apiSuccess (Response Fields) {String} publish_request.errorMessage error message, if no error value is `null`
 * @apiSuccess (Response Fields) {String} publish_request.queue_msg_id unique identifier of message
 * @apiSuccess (Response Fields) {String} publish_request.requested_at time of embed creation request
 * @apiSuccess (Response Fields) {String} publish_request.retries number of retries to create embed
 * @apiSuccess (Response Fields) {String} publish_request.status status of request, for e.g. `COMPLETE`
 * @apiSuccess (Response Fields) {String} preview_url URL to preview embed
 * @apiSuccess (Response Fields) {String} repository_url URL to repository of embed
 * @apiSuccess (Response Fields) {String} url URL to embed
 *
 * @apiSuccessExample {JSON} Success Response:
 * {
 *   "branches": {
 *     "master": {
 *       "updated_at": "2015-10-19T14:13:59.259Z",
 *       "configuration": {
 *         "configuration": {
 *           "video_cloud": {
 *             "video": "4443311217001"
 *           }
 *         },
 *         "name": "MySampleEmbedPlayer2"
 *       }
 *     },
 *     "preview": {
 *       "updated_at": "2015-10-19T14:13:59.259Z",
 *       "configuration": {
 *         "configuration": {
 *           "video_cloud": {
 *             "video": "4443311217001"
 *           }
 *         },
 *         "name": "MySampleEmbedPlayer2"
 *       }
 *     }
 *   },
 *   "publish_request": {
 *     "comment": "Embed created",
 *     "author": "mboles@brightcove.com",
 *     "status": "COMPLETE",
 *     "requested_at": "2015-10-19T14:13:59.329Z",
 *     "queue_msg_id": "0db2b8a7-d089-498f-8372-6e3872034f7c",
 *     "errorCode": null,
 *     "errorMessage": null,
 *     "buildLog": "http://players.brightcove.net/1507807800001/6d2dee37-0612-4ab9-a4ca-18ae7e39c6d5_b3588e3f-1f67-4879-802d-339deb7dc939/logs/0db2b8a7-d089-498f-8372-6e3872034f7c.log",
 *     "retries": 0,
 *     "elapsed_time": 5
 *   },
 *   "name": "MySamplePlayer",
 *   "id": "b3588e3f-1f67-4879-802d-339deb7dc939",
 *   "url": "http://players.brightcove.net/1507807800001/6d2dee37-0612-4ab9-a4ca-18ae7e39c6d5_b3588e3f-1f67-4879-802d-339deb7dc939/index.html",
 *   "embed_code": "<iframe src='//players.brightcove.net/1507807800001/6d2dee37-0612-4ab9-a4ca-18ae7e39c6d5_b3588e3f-1f67-4879-802d-339deb7dc939/index.html' allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>",
 *   "embed_in_page": "http://players.brightcove.net/1507807800001/6d2dee37-0612-4ab9-a4ca-18ae7e39c6d5_b3588e3f-1f67-4879-802d-339deb7dc939/in_page.embed",
 *   "repository_url": "https://repos.api.brightcove.com/v1/accounts/1507807800001/repos/6d2dee37-0612-4ab9-a4ca-18ae7e39c6d5_b3588e3f-1f67-4879-802d-339deb7dc939",
 *   "preview_url": "http://preview-players.brightcove.net/v1/accounts/1507807800001/players/6d2dee37-0612-4ab9-a4ca-18ae7e39c6d5/master/embeds/b3588e3f-1f67-4879-802d-339deb7dc939/preview/index.html",
 *   "preview_embed_code": "<iframe src='//preview-players.brightcove.net/v1/accounts/1507807800001/players/6d2dee37-0612-4ab9-a4ca-18ae7e39c6d5/master/embeds/b3588e3f-1f67-4879-802d-339deb7dc939/preview/index.html' allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>"
 * }
 */


// Create an Embed
/**
 * @api {post} accounts/:account_id/players/:player_id/embeds Create an Embed
 * @apiName Create an Embed
 * @apiGroup Player Embeds
 * @apiVersion 1.0.0
 *
 * @apiDescription Create an embed (child player) for a player. Note that the initial creation of the embed is automatically published. Any changes to the embed thereafter will need to be published.
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id account ID
 * @apiParam (Path Parameters) {String} player_id player ID
 *
 * @apiParam (Request Body Fields) {String} description player description
 * @apiParam (Request Body Fields) {String} name name give to player
 * @apiParam (Request Body Fields) {Object} configuration configuration of preview player REFERENCE ALL CONFIGURATION OPTIONS HERE
 *
 * @apiParamExample {curl} curl Statement:
 * //This curl statement creates an embed that uses a Video Cloud asset
 * curl \
 *   --header "Content-Type: application/json" \
 *   --user $EMAIL \
 *   --request POST \
 *   --data '{
 *       "name": "MySampleEmbedPlayer2",
 *       "configuration": {
 *         "video_cloud": {
 *           "video": "4443311217001"
 *         }
 *       }
 *     }' \
 *     https://players.api.brightcove.com/v1/accounts/:account_id/players/:player_id/embeds
 *
 * //This curl statement creates an embed that uses a video asset from a URL (Perform customer)
 * curl \
 *   --header "Content-Type: application/json" \
 *   --user $EMAIL \
 *   --request POST \
 *   --data '{
 *       "name": "MySampleEmbedPlayer3",
 *       "configuration": {
 *         "media": {
 *           "sources": [{
 *             "src":"http://solutions.brightcove.com/bcls/assets/videos/Tiger.mp4",
 *             "type":"video/mp4"
 *           }]
 *         }
 *       }
 *     }' \
 *     https://players.api.brightcove.com/v1/accounts/:account_id/players/:player_id/embeds
 *
 * @apiSuccess (Response Fields) {String} id embed ID
 * @apiSuccess (Response Fields) {String} url URL to published embed
 * @apiSuccess (Response Fields) {String} embed_code published embed iframe tag
 * @apiSuccess (Response Fields) {String} embed_in_page URL to browse to retrieve the in-page embed code for published embed
 * @apiSuccess (Response Fields) {String} preview_url URL to preview embed
 * @apiSuccess (Response Fields) {String} preview_embed_code preview embed iframe tag
 *
 * @apiSuccessExample {JSON} Success Response:
 * {
 *   "id": "5835c089-1eec-4360-bf3a-959b2e4fa0d5",
 *   "url": "http://players.brightcove.net/1507807800001/6d2dee37-0612-4ab9-a4ca-18ae7e39c6d5_5835c089-1eec-4360-bf3a-959b2e4fa0d5/index.html",
 *   "embed_code": "<iframe src='//players.brightcove.net/1507807800001/6d2dee37-0612-4ab9-a4ca-18ae7e39c6d5_5835c089-1eec-4360-bf3a-959b2e4fa0d5/index.html' allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>",
 *   "embed_in_page": "http://players.brightcove.net/1507807800001/6d2dee37-0612-4ab9-a4ca-18ae7e39c6d5_5835c089-1eec-4360-bf3a-959b2e4fa0d5/in_page.embed",
 *   "preview_url": "http://preview-players.brightcove.net/v1/accounts/1507807800001/players/6d2dee37-0612-4ab9-a4ca-18ae7e39c6d5/master/embeds/5835c089-1eec-4360-bf3a-959b2e4fa0d5/preview/index.html",
 *   "preview_embed_code": "<iframe src='//preview-players.brightcove.net/v1/accounts/1507807800001/players/6d2dee37-0612-4ab9-a4ca-18ae7e39c6d5/master/embeds/5835c089-1eec-4360-bf3a-959b2e4fa0d5/preview/index.html' allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>"
 * }
 */




// Publish an Embed
/**
 * @api {post} accounts/:account_id/players/:player_id/embeds/:embed_id/publish Publish an Embed
 * @apiName Publish an Embed
 * @apiGroup Player Embeds
 * @apiVersion 1.0.0
 *
 * @apiDescription Publish an updated embed.
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id account ID
 * @apiParam (Path Parameters) {String} player_id player ID
 * @apiParam (Path Parameters) {String} embed_id embed ID
 *
 * @apiParam (Request Body Fields) {String} [comment] parameter which will be placed in the GitHub repo of the player
 *
 * @apiParamExample {curl} curl Statement:
 * curl \
 *   --header "Content-Type: application/json" \
 *   --user $EMAIL \
 *   --request POST \
 *   --data '{
 *     "comment": "Comment for GitHub repo"
 *   }' \
 *   https://players.api.brightcove.com/v1/accounts/:account_id/players/:player_id/embeds/:embed_id/publish
 *
 * @apiSuccess (Response Fields) {String} id embed ID
 * @apiSuccess (Response Fields) {String} url URL to published embed
 * @apiSuccess (Response Fields) {String} embed_code published embed iframe tag
 * @apiSuccess (Response Fields) {String} embed_in_page URL to browse to retrieve the in-page embed code for published embed
 *
 * @apiSuccessExample {JSON} Success Response:
 * {
 *   "id": "b3588e3f-1f67-4879-802d-339deb7dc939",
 *   "url": "http://players.brightcove.net/1507807800001/6d2dee37-0612-4ab9-a4ca-18ae7e39c6d5_b3588e3f-1f67-4879-802d-339deb7dc939/index.html",
 *   "embed_code": "<iframe src='//players.brightcove.net/1507807800001/6d2dee37-0612-4ab9-a4ca-18ae7e39c6d5_b3588e3f-1f67-4879-802d-339deb7dc939/index.html' allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>",
 *   "embed_in_page": "http://players.brightcove.net/1507807800001/6d2dee37-0612-4ab9-a4ca-18ae7e39c6d5_b3588e3f-1f67-4879-802d-339deb7dc939/in_page.embed"
 * }
 */

// Delete an Embed
/**
 * @api {delete} accounts/:account_id/players/:player_id/embeds/:embed_id Delete an Embed
 * @apiName Delete an Embed
 * @apiGroup Player Embeds
 * @apiVersion 1.0.0
 *
 * @apiDescription Delete an embed.
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id account ID
 * @apiParam (Path Parameters) {String} player_id player ID
 * @apiParam (Path Parameters) {String} embed_id embed ID
 *
 * @apiParamExample {curl} curl Statement:
 * curl \
 *   --header "Content-Type: application/json" \
 *   --user $EMAIL \
 *   --request DELETE \
 *   --data '{}' \
 *   https://players.api.brightcove.com/v1/accounts/:account_id/players/:player_id/embeds/:embed_id
 *
 * @apiSuccess (Response Fields) {String} message report of embed deletion
 *
 * @apiSuccessExample {JSON} Success Response:
 * {
 *   "message": "Successfully deleted embed with the id: b3588e3f-1f67-4879-802d-339deb7dc939"
 * }
 */














