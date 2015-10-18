// Ger a player's embeds

/**
 * @api {post} accounts/:account_id/players/:player_id/embeds Get a Player's Child Players (Embeds)
 * @apiName Get a Player's Child Players (Embeds)
 * @apiGroup Child Players
 * @apiVersion 1.0.0
 *
 * @apiDescription Get all the child players (embeds) for a player.
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} player_id Video Cloud player ID.
 *
 * @apiParamExample {curl} curl Statement:
 * curl \
 *   --header "Content-Type: application/json" \
 *   --user $EMAIL \
 *   --request GET \
 *   https://players.api.brightcove.com/v1/accounts/$ACCOUNT_ID/players/$PLAYER_ID/embeds
 *
 * @apiSuccess (Response Fields) {Object[]} items array of embed objects
 * @apiSuccess (Response Fields) {Object} items.branches contains objects for the preview and master (published) embed
 * @apiSuccess (Response Fields) {Object} items.branches.master contains master (published) embed object
 * @apiSuccess (Response Fields) {Boolean} items.branches.master.video_cloud indicates if account is Video Cloud enabled
 * @apiSuccess (Response Fields) {String} items.branches.master.updated_at time embed was updated
 * @apiSuccess (Response Fields) {Object} items.branches.preview contains master (published) embed object
 * @apiSuccess (Response Fields) {Boolean} items.branches.preview.video_cloud indicates if account is Video Cloud enabled
 * @apiSuccess (Response Fields) {String} items.branches.preview.updated_at time embed was updated
 * @apiSuccess (Response Fields) {Object} items.publish_request publish request information
 * @apiSuccess (Response Fields) {String} items.publish_request.comment comment on action, e.g. `Player created`
 * @apiSuccess (Response Fields) {String} items.publish_request.author email address of person requesting embed creation
 * @apiSuccess (Response Fields) {String} items.publish_request.status status of request, for e.g. `COMPLETE`
 * @apiSuccess (Response Fields) {String} items.publish_request.requested_at time of embed creation request
 * @apiSuccess (Response Fields) {String} items.publish_request.queue_msg_id unique identifier of message
 * @apiSuccess (Response Fields) {String} items.publish_request.errorCode error code, if no error value is `null`
 * @apiSuccess (Response Fields) {String} items.publish_request.errorMessage error message, if no error value is `null`
 * @apiSuccess (Response Fields) {String} items.publish_request.buildLog URL to build information
 * @apiSuccess (Response Fields) {String} items.publish_request.retries number of retries to create embed
 * @apiSuccess (Response Fields) {String} items.publish_request.elapsed_time time in milliseconds to create embed
 * @apiSuccess (Response Fields) {String} items.id id of parent, value of `default` when embed is referring to player itself
 * @apiSuccess (Response Fields) {String} items.url URL to published player
 * @apiSuccess (Response Fields) {String} items.embed_code published player iframe tag
 * @apiSuccess (Response Fields) {String} items.embed_in_page URL to browse to retrieve the in-page embed code for published player
 *
 * @apiSuccessExample {json} Success Response:
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