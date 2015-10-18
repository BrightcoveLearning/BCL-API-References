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
 *  --header "Content-Type: application/json" \
 *  --user :email \
 *  --request GET \
 *  https://players.api.brightcove.com/v1/accounts/:account_id/players/:player_id/configuration/:branch
 *
 * @apiSuccess (Response Fields) {Boolean} autoadvance autoadvance setting if using playlists: 0 for no wait; a number for seconds between advance; null to cancel autoadvance
 * @apiSuccess (Response Fields) {Boolean} autoplay indicates player should play video immediately, on platforms that allow this
 * @apiSuccess (Response Fields) {Object} css object containing CSS color overrides
 * @apiSuccess (Response Fields) {Object} css.controlBarColor background color of control bar
 * @apiSuccess (Response Fields) {Object} css.controlColor color of buttons and text in control bar
 * @apiSuccess (Response Fields) {Object} css.progressColor color of progress bar
 * @apiSuccess (Response Fields) {Boolean} errors indicates if the error messages plugin should be excluded
 * @apiSuccess (Response Fields) {Boolean} fullscreenControl indicates whether the fullscreen control should be shown in the control bar
 * @apiSuccess (Response Fields) {String[]} languages languages (2 letter abbreviations) you wish your player to support, from the Vides.js supported list
 * @apiSuccess (Response Fields) {Object} media media information for non-Video Cloud media
 * @apiSuccess (Response Fields) {Object[]} media.sources array of media source objects
 * @apiSuccess (Response Fields) {String} media.sources.height height of the video
 * @apiSuccess (Response Fields) {String} media.sources.poster.highres URL to the poster image
 * @apiSuccess (Response Fields) {String} media.sources.src URL to media asset
 * @apiSuccess (Response Fields) {String} media.sources.title content of the &lt;title&gt; element of the page
 * @apiSuccess (Response Fields) {Object[]} media.sources.tracks array of track objects
 * @apiSuccess (Response Fields) {String} media.sources.type MIME type of the video, as specified in the HTML5 standard, for instance `video/mp4` form MP4 or `application/x-mpegURL` for HLS
 * @apiSuccess (Response Fields) {String} media.sources.width width of the video
 * @apiSuccess (Response Fields) {String} media.src URL to media asset
 * @apiSuccess (Response Fields) {Objects[]} media.tracks array of track objects
 * @apiSuccess (Response Fields) {String} media.tracks.label text label for the track, for instance `English` for an English language text track
 * @apiSuccess (Response Fields) {String} media.tracks.src URL to source of track, required in a track object
 * @apiSuccess (Response Fields) {String} media.tracks.srclang 2 letter code (valid BCP 47 language tag) for the language of the text track, for example
 * @apiSuccess (Response Fields) {Object} player player information object
 * @apiSuccess (Response Fields) {Boolean} player.inactive indicates if a player is inactive
 * @apiSuccess (Response Fields) {Object} player.template specific template details
 * @apiSuccess (Response Fields) {String} player.template.name name of player template
 * @apiSuccess (Response Fields) {String} player.template.version version of player template
 * @apiSuccess (Response Fields) {Boolean} playlist indicates if a playlist should be used
 * @apiSuccess (Response Fields) {Boolean} playlist.playOnSelect indicates if a video loaded from a playlist should play on load
 * @apiSuccess (Response Fields) {Object[]} plugins array of plugin objects
 * @apiSuccess (Response Fields) {String} plugins.name name of plugin
 * @apiSuccess (Response Fields) {JSON} plugins.options configuration options for plugin
 * @apiSuccess (Response Fields) {String[]} scripts URLs to JavaScript files that should be included with the player
 * @apiSuccess (Response Fields) {Boolean} skin indicates is the default look-and-feel will be used with the player; set to false when creating a new, highly customized skin
 * @apiSuccess (Response Fields) {Object} studio_configuration object containing playlist information normally set in Studio
 * @apiSuccess (Response Fields) {Object} studio_configuration.player object containing playlist information
 * @apiSuccess (Response Fields) {Boolean} studio_configuration.player.adjusted indicates if player dimensions should be adjusted for playlist
 * @apiSuccess (Response Fields) {String} studio_configuration.player.height player height when displayed with playlist; if the height and width are not assigned values, the sizes of the player and playlist are automatically adjusted
 * @apiSuccess (Response Fields) {String} studio_configuration.player.width player width when displayed with playlist; if the height and width are not assigned values, the sizes of the player and playlist are automatically adjusted
 * @apiSuccess (Response Fields) {String[]} stylesheets URLs to CSS files that should be included with the player
 * @apiSuccess (Response Fields) {String[]} techOrder order that playback technologies should be used; only visible if changed from default
 * @apiSuccess (Response Fields) {Object} video_cloud Video Cloud configuration information
 * @apiSuccess (Response Fields) {String} video_cloud.policy_key policy key for Video Cloud account
 * @apiSuccess (Response Fields) {String} video_cloud.video if using a Video Cloud video asset, that asset's ID
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