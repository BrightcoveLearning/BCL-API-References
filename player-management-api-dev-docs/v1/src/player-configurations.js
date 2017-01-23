// Get a player configuration

/**
 * @api {get}  /accounts/:account_id/players/:player_id/configuration/:branch Get a Player Configuration
 * @apiName Get a Player Configuration
 * @apiGroup Player Configurations
 * @apiVersion 1.0.0
 *
 * @apiDescription Get a player configuration. Note that you specify which branch you wish to act upon, either the master (published) or preview.
 *
 * @apiHeader {String}  Content-Type Content-Type: application/json
 * @apiHeader {String}  Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String}  account_id account ID
 * @apiParam (Path Parameters) {String}  player_id player ID
 * @apiParam (Path Parameters) {String}  branch Which branch to act upon, master (published) or preview.
 *
 * @apiParamExample {curl}  curl Statement:
 * curl \
 *  --header "Content-Type: application/json" \
 *  --user :email \
 *  --request GET \
 *  https://players.api.brightcove.com/v1/accounts/:account_id/players/:player_id/configuration/:branch
 *
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Boolean}  autoadvance autoadvance setting if using playlists: 0 for no wait; a number for seconds between advance; null to cancel autoadvance
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Boolean}  autoplay indicates player should play video immediately, on platforms that allow this
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Boolean}  compatibility provides compatibility with the Player 1.x.x API - you should not change this setting
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object}  css object containing CSS color overrides
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object}  css.controlBarColor background color of control bar
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object}  css.controlColor color of buttons and text in control bar
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object}  css.progressColor color of progress bar
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Boolean}  errors indicates if the error messages plugin should be excluded
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Boolean}  fullscreenControl indicates whether the fullscreen control should be shown in the control bar
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String[]}  languages languages (2 letter abbreviations) you wish your player to support, from the Vides.js supported list
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Boolean}  loop indicates if the video should play over as soon as it ends
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object}  media media information for non-Video Cloud media
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object[]}  media.sources array of media source objects
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  media.sources.height height of the video
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  media.sources.poster.highres URL to the poster image
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  media.sources.src URL to media asset
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  media.sources.title content of the &lt;title&gt; element of the page
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object[]}  media.sources.tracks array of track objects
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  media.sources.type MIME type of the video, as specified in the HTML5 standard, for instance `video/mp4` form MP4 or `application/x-mpegURL` for HLS
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  media.sources.width width of the video
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  media.src URL to media asset
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Objects[]}  media.tracks array of track objects
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  media.tracks.label text label for the track, for instance `English` for an English language text track
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  media.tracks.src URL to source of track, required in a track object
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  media.tracks.srclang 2 letter code (valid BCP 47 language tag) for the language of the text track, for example
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object}  player player information object
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Boolean}  player.inactive indicates if a player is inactive
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object}  player.template specific template details
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  player.template.name name of player template
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  player.template.version version of player template
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Boolean}  playlist indicates if a playlist should be used
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Boolean}  playlist.playOnSelect indicates if a video loaded from a playlist should play on load
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object[]}  plugins array of plugin objects
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  plugins.name name of plugin
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {JSON}  plugins.options configuration options for plugin
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  preload informs the browser whether or not the video data should begin downloading as soon as the video tag is loaded; the options are `auto`, `metadata`, and `none`
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String[]}  scripts URLs to JavaScript files that should be included with the player
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Mixed}  skin indicates is the default look-and-feel will be used with the player; set to false when creating a new, highly customized skin
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object}  studio_configuration object containing playlist information normally set in Studio
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object}  studio_configuration.player object containing playlist information
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Boolean}  studio_configuration.player.adjusted indicates if player dimensions should be adjusted for playlist
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  studio_configuration.player.height player height when displayed with playlist; if the height and width are not assigned values, the sizes of the player and playlist are automatically adjusted
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  studio_configuration.player.width player width when displayed with playlist; if the height and width are not assigned values, the sizes of the player and playlist are automatically adjusted
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String[]}  stylesheets URLs to CSS files that should be included with the player
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String[]}  techOrder order that playback technologies should be used; only visible if changed from default
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object}  video_cloud Video Cloud configuration information
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  video_cloud.policy_key policy key for Video Cloud account
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  video_cloud.video if using a Video Cloud video asset, that asset's ID
 *
 * @apiSuccessExample {JSON}  Success Response:
 * {
 *   "plugins": [{
 *     "options": {
 *      //options for FreeWheel plugin
 *     } ,
 *     "name": "FreeWheelPlugin"
 *   } ],
 *   "stylesheets": ["//players.brightcove.net/videojs-freewheel/videojs-freewheel.min.css"],
 *   "scripts": ["//players.brightcove.net/videojs-freewheel/videojs-freewheel.min.js"],
 *   "video_cloud": {
 *     "policy_key": "BCpkADawqM2hW41DM2bNvmn2LE24Lqet7lfKzRB8Tv-FYlVtVijTGqAhjCEiLZmHO84vptg3hBAFVqXI4diQ-51q7fceX- * BY0GTcRoS9pv5HaOdh6F4nrCCapgmIzDNCvdYTqIh73BnZDSWh",
 *     "video": null
 *   } ,
 *   "player": {
 *     "template": {
 *       "name": "single-video-template",
 *       "version": "1.14.26"
 *     }
 *   } ,
 *   "techOrder": ["html5", "hls", "flash"]
 * }
*/

// Update a player configuration

/**
 * @api {patch}  /accounts/:account_id/players/:player_id/configuration Update a Player Configuration
 * @apiName Update a Player Configuration
 * @apiGroup Player Configurations
 * @apiVersion 1.0.0
 *
 * @apiDescription Update a player configuration. This operation allows you to replace, and in some cases update, any property in the JSON configuration for a player. This is the recommended way to update a player configuration, rather than the PUT operation below. The PATCH will modify the configuration whereas the PUT will replace the configuration.
 *
 * @apiHeader {String}  Content-Type Content-Type: application/json
 * @apiHeader {String}  Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String}  account_id account ID
 * @apiParam (Path Parameters) {String}  player_id player ID
 *
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {Boolean} [autoadvance] autoadvance setting if using playlists: 0 for no wait; a number for seconds between advance; null to cancel autoadvance
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {Boolean} [autoplay] indicates player should play video immediately, on platforms that allow this
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {Object} [css] object containing CSS color overrides
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {Object} [css.controlBarColor] background color of control bar
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {Object} [css.controlColor] color of buttons and text in control bar
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {Object} [css.progressColor] color of progress bar
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {Boolean} [errors] indicates if the error messages plugin should be excluded
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {Boolean} [fullscreenControl] indicates whether the fullscreen control should be shown in the control bar
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {String[]} [languages] languages (2 letter abbreviations) you wish your player to support, from the Vides.js supported list
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {Boolean} [loop] indicates if the video should play over as soon as it ends
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {Object} [media] media information for non-Video Cloud media
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {Object[]} [media.sources] array of media source objects
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {String} [media.sources.height] height of the video
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {String} [media.sources.poster.highres] URL to the poster image
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {String} [media.sources.src] URL to media asset
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {String} [media.sources.title] content of the &lt;title&gt; element of the page
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {Object[]} [media.sources.tracks] array of track objects
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {String} [media.sources.type] MIME type of the video, as specified in the HTML5 standard, for instance `video/mp4` form MP4 or `application/x-mpegURL` for HLS
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {String} [media.sources.width] width of the video
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {String} [media.src] URL to media asset
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {Objects[]} [media.tracks] array of track objects
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {String} [media.tracks.label] text label for the track, for instance `English` for an English language text track
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {String} [media.tracks.src] URL to source of track, required in a track object
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {String} [media.tracks.srclang] 2 letter code (valid BCP 47 language tag) for the language of the text track, for example
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {Object} [player] player information object
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {Boolean} [player.inactive] indicates if a player is inactive
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {Object} [player.template] specific template details
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {String} [player.template.name] name of player template
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {String} [player.template.version] version of player template
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {Boolean} [playlist] indicates if a playlist should be used
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {Boolean} [playOnSelect] indicates if a video loaded from a playlist should play on load; if using Playlists version 2 this property is set in the plugin configuration
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {Object[]} [plugins] array of plugin objects
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {String} [plugins.name] name of plugin
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {JSON} [plugins.options] configuration options for plugin
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {String} [preload] informs the browser whether or not the video data should begin downloading as soon as the video tag is loaded; the options are `auto`, `metadata`, and `none`
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {String[]} [scripts] URLs to JavaScript files that should be included with the player
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {Mixed=true,false,'graphite'} [skin=true] Can be a boolean or a string; indicates is the default look-and-feel will be used with the player; set to `false` when creating a new, highly customized skin; set to `true` or omit this field to use the default skin; set to `'graphite'` to use the player 1.x.x skin on a 5.x.x player
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {Object} [studio_configuration] object containing playlist information normally set in Studio
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {Object} [studio_configuration.player] object containing playlist information
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {Boolean} [studio_configuration.player.adjusted] indicates if player dimensions should be adjusted for playlist
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {String} [studio_configuration.player.height] player height when displayed with playlist; if the height and width are not assigned values, the sizes of the player and playlist are automatically adjusted
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {String} [studio_configuration.player.width player] width when displayed with playlist; if the height and width are not assigned values, the sizes of the player and playlist are automatically adjusted
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {String[]} [stylesheets] URLs to CSS files that should be included with the player
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {String[]} [techOrder] order that playback technologies should be used; only visible if changed from default
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {Object} [video_cloud] Video Cloud configuration information
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {String} [video_cloud.policy_key] policy key for Video Cloud account
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {String} [video_cloud.video] if using a Video Cloud video asset, that asset's ID
 *
 * @apiParamExample {curl}  curl Statement:
 * curl \
 *   --header "Content-Type: application/json" \
 *   --user $EMAIL \
 *   --request PATCH \
 *   --data '{
 *       "languages": [
 *         "de",
 *         "es"
 *       ]
 *     } ' \
 *   https://players.api.brightcove.com/v1/accounts/:account_id/players/:player_id/configuration
 *
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  accountId account ID
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object}  branches contains objects for the preview and master (published) player
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object}  branches.master contains master (published) player object
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object}  branches.master.configuration configuration of master player
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Boolean}  branches.master.configuration.autoadvance autoadvance setting if using playlists: 0 for no wait; a number for seconds between advance; null to cancel autoadvance
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Boolean}  branches.master.configuration.autoplay indicates player should play video immediately, on platforms that allow this
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object}  branches.master.configuration.css object containing CSS color overrides
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object}  branches.master.configuration.css.controlBarColor background color of control bar
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object}  branches.master.configuration.css.controlColor color of buttons and text in control bar
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object}  branches.master.configuration.css.progressColor color of progress bar
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Boolean}  branches.master.configuration.errors indicates if the error messages plugin should be excluded
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Boolean}  branches.master.configuration.fullscreenControl indicates whether the fullscreen control should be shown in the control bar
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String[]}  branches.master.configuration.languages languages (2 letter abbreviations) you wish your player to support, from the Vides.js supported list
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Boolean}  branches.master.configuration.loop indicates if the video should play over as soon as it ends
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object}  branches.master.configuration.media media information for non-Video Cloud media
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object[]}  branches.master.configuration.media.sources array of media source objects
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.master.configuration.media.sources.height height of the video
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.master.configuration.media.sources.poster.highres URL to the poster image
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.master.configuration.media.sources.src URL to media asset
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.master.configuration.media.sources.title content of the &lt;title&gt; element of the page
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object[]}  branches.master.configuration.media.sources.tracks array of track objects
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.master.configuration.media.sources.type MIME type of the video, as specified in the HTML5 standard, for instance `video/mp4` form MP4 or `application/x-mpegURL` for HLS
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.master.configuration.media.sources.width width of the video
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.master.configuration.media.src URL to media asset
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Objects[]}  branches.master.configuration.media.tracks array of track objects
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.master.configuration.media.tracks.label text label for the track, for instance `English` for an English language text track
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.master.configuration.media.tracks.src URL to source of track, required in a track object
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.master.configuration.media.tracks.srclang 2 letter code (valid BCP 47 language tag) for the language of the text track, for example
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object}  branches.master.configuration.player player information object
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Boolean}  branches.master.configuration.player.inactive indicates if a player is inactive
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object}  branches.master.configuration.player.template specific template details
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.master.configuration.player.template.name name of player template
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.master.configuration.player.template.version version of player template
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Boolean}  branches.master.configuration.playlist indicates if a playlist should be used
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Boolean}  branches.master.configuration.playlist.playOnSelect indicates if a video loaded from a playlist should play on load
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object[]}  branches.master.configuration.plugins array of plugin objects
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.master.configuration.plugins.name name of plugin
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {JSON}  branches.master.configuration.plugins.options configuration options for plugin
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.master.configuration.preload informs the browser whether or not the video data should begin downloading as soon as the video tag is loaded; the options are `auto`, `metadata`, and `none`
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String[]}  branches.master.configuration.scripts URLs to JavaScript files that should be included with the player
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Boolean}  branches.master.configuration.skin indicates is the default look-and-feel will be used with the player; set to false when creating a new, highly customized skin
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object}  branches.master.configuration.studio_configuration object containing playlist information normally set in Studio
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object}  branches.master.configuration.studio_configuration.player object containing playlist information
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Boolean}  branches.master.configuration.studio_configuration.player.adjusted indicates if player dimensions should be adjusted for playlist
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.master.configuration.studio_configuration.player.height player height when displayed with playlist; if the height and width are not assigned values, the sizes of the player and playlist are automatically adjusted
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.master.configuration.studio_configuration.player.width player width when displayed with playlist; if the height and width are not assigned values, the sizes of the player and playlist are automatically adjusted
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String[]}  branches.master.configuration.stylesheets URLs to CSS files that should be included with the player
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String[]}  branches.master.configuration.techOrder order that playback technologies should be used; only visible if changed from default
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object}  branches.master.configuration.video_cloud Video Cloud configuration information
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.master.configuration.video_cloud.policy_key policy key for Video Cloud account
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.master.configuration.video_cloud.video if using a Video Cloud video asset, that asset's ID
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.master.master_url URL of master player
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.master.template_updated_at time of last update to player template
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.master.updated_at time of last update to master player
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object}  branches.preview contains preview player object
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object}  branches.preview.configuration configuration of preview player
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Boolean}  branches.preview.configuration.autoadvance autoadvance setting if using playlists: 0 for no wait; a number for seconds between advance; null to cancel autoadvance
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Boolean}  branches.preview.configuration.autoplay indicates player should play video immediately, on platforms that allow this
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object}  branches.preview.configuration.css object containing CSS color overrides
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object}  branches.preview.configuration.css.controlBarColor background color of control bar
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object}  branches.preview.configuration.css.controlColor color of buttons and text in control bar
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object}  branches.preview.configuration.css.progressColor color of progress bar
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Boolean}  branches.preview.configuration.errors indicates if the error messages plugin should be excluded
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Boolean}  branches.preview.configuration.fullscreenControl indicates whether the fullscreen control should be shown in the control bar
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String[]}  branches.preview.configuration.languages languages (2 letter abbreviations) you wish your player to support, from the Vides.js supported list
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Boolean}  branches.preview.configuration.loop indicates if the video should play over as soon as it ends
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object}  branches.preview.configuration.media media information for non-Video Cloud media
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object[]}  branches.preview.configuration.media.sources array of media source objects
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.preview.configuration.media.sources.height height of the video
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.preview.configuration.media.sources.poster.highres URL to the poster image
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.preview.configuration.media.sources.src URL to media asset
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.preview.configuration.media.sources.title content of the &lt;title&gt; element of the page
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object[]}  branches.preview.configuration.media.sources.tracks array of track objects
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.preview.configuration.media.sources.type MIME type of the video, as specified in the HTML5 standard, for instance `video/mp4` form MP4 or `application/x-mpegURL` for HLS
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.preview.configuration.media.sources.width width of the video
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.preview.configuration.media.src URL to media asset
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Objects[]}  branches.preview.configuration.media.tracks array of track objects
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.preview.configuration.media.tracks.label text label for the track, for instance `English` for an English language text track
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.preview.configuration.media.tracks.src URL to source of track, required in a track object
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.preview.configuration.media.tracks.srclang 2 letter code (valid BCP 47 language tag) for the language of the text track, for example
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object}  branches.preview.configuration.player player information object
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Boolean}  branches.preview.configuration.player.inactive indicates if a player is inactive
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object}  branches.preview.configuration.player.template specific template details
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.preview.configuration.player.template.name name of player template
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.preview.configuration.player.template.version version of player template
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Boolean}  branches.preview.configuration.playlist indicates if a playlist should be used
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Boolean}  branches.preview.configuration.playlist.playOnSelect indicates if a video loaded from a playlist should play on load
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object[]}  branches.preview.configuration.plugins array of plugin objects
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.preview.configuration.plugins.name name of plugin
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {JSON}  branches.preview.configuration.plugins.options configuration options for plugin
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.preview.configuration.preload informs the browser whether or not the video data should begin downloading as soon as the video tag is loaded; the options are `auto`, `metadata`, and `none`
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String[]}  branches.preview.configuration.scripts URLs to JavaScript files that should be included with the player
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Boolean}  branches.preview.configuration.skin indicates is the default look-and-feel will be used with the player; set to false when creating a new, highly customized skin
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object}  branches.preview.configuration.studio_configuration object containing playlist information normally set in Studio
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object}  branches.preview.configuration.studio_configuration.player object containing playlist information
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Boolean}  branches.preview.configuration.studio_configuration.player.adjusted indicates if player dimensions should be adjusted for playlist
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.preview.configuration.studio_configuration.player.height player height when displayed with playlist; if the height and width are not assigned values, the sizes of the player and playlist are automatically adjusted
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.preview.configuration.studio_configuration.player.width player width when displayed with playlist; if the height and width are not assigned values, the sizes of the player and playlist are automatically adjusted
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String[]}  branches.preview.configuration.stylesheets URLs to CSS files that should be included with the player
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String[]}  branches.preview.configuration.techOrder order that playback technologies should be used; only visible if changed from default
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object}  branches.preview.configuration.video_cloud Video Cloud configuration information
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.preview.configuration.video_cloud.policy_key policy key for Video Cloud account
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.preview.configuration.video_cloud.video if using a Video Cloud video asset, that asset's ID
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.preview.preview_url URL of preview player
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.preview.template_updated_at time of last update to player template
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  branches.preview.updated_at time of last update to preview player
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  created_at player creation time
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  description player description
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  embed_count number of embeds, will always be at least 1
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  id video id
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  name name give to player
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {String}  url URL to player
 *
 * @apiSuccessExample {JSON}  Success Response:
 * //Note that the preview branch will contain the new/changed information. The master branch will not contain the new/changed information until the player has been published.
 * {
 *   "accountId": "1507807800001",
 *   "id": "2c4b8938-92d1-4cd1-a423-5758ed0dbbf3",
 *   "name": "MySamplePlayer",
 *   "branches": {
 *     "master": {
 *       "template_updated_at": "2015-10-18T17:39:39.217Z",
 *       "updated_at": "2015-10-18T17:39:39.217Z",
 *       "configuration": {
 *         "player": {
 *           "template": {
 *             "version": "1.14.26",
 *             "name": "single-video-template"
 *           }
 *         } ,
 *         "video_cloud": {
 *           "policy_key": "BCpkADawqM2NeH2Zbd_AJIYQZZZN-Y0ckwE8pIn3wUwEwoWegW4dQUdpcgqtd-msVbmWR3A-yipV5lR2uLwUm1YtYee7vK37jJN7403poM8ZJxxlxId1DpqsLfbTIOAsVj3O0elfJNIMZcj7"
 *         } ,
 *         "media": {
 *           "sources": [{
 *             "type": "video/mp4",
 *             "src": "http://solutions.brightcove.com/bcls/assets/videos/Tiger.mp4"
 *           } ]
 *         }
 *       } ,
 *       "preview_url": "http://preview-players.brightcove.net/v1/accounts/1507807800001/players/2c4b8938-92d1-4cd1-a423-5758ed0dbbf3/master/embeds/default/master/index.html"
 *     } ,
 *     "preview": {
 *       "template_updated_at": "2015-10-18T17:39:39.212Z",
 *       "updated_at": "2015-10-18T17:44:17.438Z",
 *       "configuration": {
 *         "player": {
 *           "template": {
 *             "version": "1.14.26",
 *             "name": "single-video-template"
 *           }
 *         } ,
 *         "video_cloud": {
 *           "policy_key": "BCpkADawqM2NeH2Zbd_AJIYQZZZN-Y0ckwE8pIn3wUwEwoWegW4dQUdpcgqtd-msVbmWR3A-yipV5lR2uLwUm1YtYee7vK37jJN7403poM8ZJxxlxId1DpqsLfbTIOAsVj3O0elfJNIMZcj7"
 *         } ,
 *         "media": {
 *           "sources": [{
 *             "type": "video/mp4",
 *             "src": "http://solutions.brightcove.com/bcls/assets/videos/Tiger.mp4"
 *           } ]
 *         } ,
 *         "languages": ["de", "es"]
 *       } ,
 *       "preview_url": "http://preview-players.brightcove.net/v1/accounts/1507807800001/players/2c4b8938-92d1-4cd1-a423-5758ed0dbbf3/preview/embeds/default/master/index.html"
 *     }
 *   } ,
 *   "created_at": "2015-10-18T17:39:39.212Z",
 *   "embed_count": 1,
 *   "url": "http://players.brightcove.net/1507807800001/2c4b8938-92d1-4cd1-a423-5758ed0dbbf3_default/index.html"
 * }
*/
