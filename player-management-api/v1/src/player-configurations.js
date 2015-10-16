// Get a player configuration

/**
 * @api {get} accounts/:account_id/players/:player_id/configuration/:branch Get a Player Configuration
 * @apiName Get a Player Configuration
 * @apiGroup Player Configurations
 * @apiVersion 1.0.0
 *
 * @apiDescription Get a player configuration. Note that you specify which branch you wish to act upon, either the master (published) or preview.
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} player_id Video Cloud player ID.
 * @apiParam (Path Parameters) {String} branch Which branch to act upon, master (published) or preview.
 *
 * @apiParamExample {curl} curl Statement:
 * curl \
 *   --header "Content-Type: application/json" \
 *   --user $EMAIL \
 *   --request POST \
 *   --data '{
 *     "comment": "Comment for GitHub repo"
 *   }' \
 *   https://players.api.brightcove.com/v1/accounts/:account_id/players/:player_id/publish
 *
 * @apiSuccess (Response Fields) {Object} autoadvance autoadvance setting if using playlists: 0 for no wait; a number for seconds between advance; null to cancel autoadvance
 * @apiSuccess (Response Fields) {Object} player.template specific template details
 * @apiSuccess (Response Fields) {String} player.template.version version of player template
 * @apiSuccess (Response Fields) {String} player.template.name name of player template
 * @apiSuccess (Response Fields) {Object} video_cloud Video Cloud configuration information
 * @apiSuccess (Response Fields) {String} video_cloud.policy_key policy key for Video Cloud account
 * @apiSuccess (Response Fields) {String} video_cloud.video if using a Video Cloud video asset, that asset's ID
 * @apiSuccess (Response Fields) {Object} media media information for non-Video Cloud media
 * @apiSuccess (Response Fields) {Object[]} media.sources array of media source objects
 * @apiSuccess (Response Fields) {String} media.sources.type MIME type of the video, as specified in the HTML5 standard, for instance `video/mp4` form MP4 or `application/x-mpegURL` for HLS
 * @apiSuccess (Response Fields) {String} media.sources.src URL to media asset
 * @apiSuccess (Response Fields) {String[]} [techOrder] order that playback technologies should be used; only visible if changed from default
 *
 * @apiSuccessExample {json} Success Response:
 * {
 *   "plugins": [{
 *     "options": {
 *      //options for FreeWheel plugin
 *     },
 *     "name": "FreeWheelPlugin"
 *   }],
 *   "stylesheets": ["//players.brightcove.net/videojs-freewheel/videojs-freewheel.min.css"],
 *   "scripts": ["//players.brightcove.net/videojs-freewheel/videojs-freewheel.min.js"],
 *   "video_cloud": {
 *     "policy_key": "BCpkADawqM2hW41DM2bNvmn2LE24Lqet7lfKzRB8Tv-FYlVtVijTGqAhjCEiLZmHO84vptg3hBAFVqXI4diQ-51q7fceX- * BY0GTcRoS9pv5HaOdh6F4nrCCapgmIzDNCvdYTqIh73BnZDSWh",
 *     "video": null
 *   },
 *   "player": {
 *     "template": {
 *       "name": "single-video-template",
 *       "version": "1.14.26"
 *     }
 *   },
 *   "techOrder": ["html5", "hls", "flash"]
 * }
*/