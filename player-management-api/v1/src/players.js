// get single player

/**
 * @api {get} /accounts/:account_id/players/:player_id Get Single Player
 * @apiName Get Single Player
 * @apiGroup Players
 * @apiVersion 1.0.0
 *
 * @apiDescription Get a player by ID.
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} player_id Video Cloud player ID.
 * @apiParamExample {curl} curl Statement:
 * curl \
 *   --header "Content-Type: application/json" \
 *   --user :email \
 *   --request GET \
 *   https://players.api.brightcove.com/v1/accounts/:account_id/players/:player_id
 *
 * @apiParam (Response Fields) {String} accountId account ID
 * @apiParam (Response Fields) {Object} branches contains objects for the preview and master (published) player
 * @apiParam (Response Fields) {Object} branches.preview contains preview player object
 * @apiParam (Response Fields) {Object} branches.preview.configuration configuration of preview player
 * @apiParam (Response Fields) {Boolean} branches.preview.configuration.autoadvance autoadvance setting if using playlists: 0 for no wait; a number for seconds between advance; null to cancel autoadvance
 * @apiParam (Response Fields) {Boolean} branches.preview.configuration.autoplay indicates player should play video immediately, on platforms that allow this
 * @apiParam (Response Fields) {Object} branches.preview.configuration.css object containing CSS color overrides
 * @apiParam (Response Fields) {Object} branches.preview.configuration.css.controlBarColor background color of control bar
 * @apiParam (Response Fields) {Object} branches.preview.configuration.css.controlColor color of buttons and text in control bar
 * @apiParam (Response Fields) {Object} branches.preview.configuration.css.progressColor color of progress bar
 * @apiParam (Response Fields) {Boolean} branches.preview.configuration.errors indicates if the error messages plugin should be excluded
 * @apiParam (Response Fields) {Boolean} branches.preview.configuration.fullscreenControl indicates whether the fullscreen control should be shown in the control bar
 * @apiParam (Response Fields) {Object} branches.preview.configuration.media media information for non-Video Cloud media
 * @apiParam (Response Fields) {Object[]} branches.preview.configuration.media.sources array of media source objects
 * @apiParam (Response Fields) {String} branches.preview.configuration.media.sources.height height of the video
 * @apiParam (Response Fields) {String} branches.preview.configuration.media.sources.poster.highres URL to the poster image
 * @apiParam (Response Fields) {String} branches.preview.configuration.media.sources.src URL to media asset
 * @apiParam (Response Fields) {String} branches.preview.configuration.media.sources.title content of the &lt;title&gt; element of the page
 * @apiParam (Response Fields) {Object[]} branches.preview.configuration.media.sources.tracks array of track objects
 * @apiParam (Response Fields) {String} branches.preview.configuration.media.sources.type MIME type of the video, as specified in the HTML5 standard, for instance `video/mp4` form MP4 or `application/x-mpegURL` for HLS
 * @apiParam (Response Fields) {String} branches.preview.configuration.media.sources.width width of the video
 * @apiParam (Response Fields) {String} branches.preview.configuration.media.src URL to media asset
 * @apiParam (Response Fields) {Objects[]} branches.preview.configuration.media.tracks array of track objects
 * @apiParam (Response Fields) {String} branches.preview.configuration.media.tracks.label text label for the track, for instance `English` for an English language text track
 * @apiParam (Response Fields) {String} branches.preview.configuration.media.tracks.src URL to source of track, required in a track object
 * @apiParam (Response Fields) {String} branches.preview.configuration.media.tracks.srclang 2 letter code (valid BCP 47 language tag) for the language of the text track, for example
 * @apiParam (Response Fields) {Object} branches.preview.configuration.player player information object
 * @apiParam (Response Fields) {Boolean} branches.preview.configuration.player.inactive indicates if a player is inactive
 * @apiParam (Response Fields) {Object} branches.preview.configuration.player.template specific template details
 * @apiParam (Response Fields) {String} branches.preview.configuration.player.template.name name of player template
 * @apiParam (Response Fields) {String} branches.preview.configuration.player.template.version version of player template
 * @apiParam (Response Fields) {Boolean} branches.preview.configuration.playlist indicates if a playlist should be used
 * @apiParam (Response Fields) {Boolean} branches.preview.configuration.playlist.playOnSelect indicates if a video loaded from a playlist should play on load
 * @apiParam (Response Fields) {Object[]} branches.preview.configuration.plugins array of plugin objects
 * @apiParam (Response Fields) {String} branches.preview.configuration.plugins.name name of plugin
 * @apiParam (Response Fields) {JSON} branches.preview.configuration.plugins.options configuration options for plugin
 * @apiParam (Response Fields) {String[]} branches.preview.configuration.scripts URLs to JavaScript files that should be included with the player
 * @apiParam (Response Fields) {Boolean} branches.preview.configuration.skin indicates is the default look-and-feel will be used with the player; set to false when creating a new, highly customized skin
 * @apiParam (Response Fields) {Object} branches.preview.configuration.studio_configuration object containing playlist information normally set in Studio
 * @apiParam (Response Fields) {Object} branches.preview.configuration.studio_configuration.player object containing playlist information
 * @apiParam (Response Fields) {Boolean} branches.preview.configuration.studio_configuration.player.adjusted indicates if player dimensions should be adjusted for playlist
 * @apiParam (Response Fields) {String} branches.preview.configuration.studio_configuration.player.height player height when displayed with playlist; if the height and width are not assigned values, the sizes of the player and playlist are automatically adjusted
 * @apiParam (Response Fields) {String} branches.preview.configuration.studio_configuration.player.width player width when displayed with playlist; if the height and width are not assigned values, the sizes of the player and playlist are automatically adjusted
 * @apiParam (Response Fields) {String[]} branches.preview.configuration.stylesheets URLs to CSS files that should be included with the player
 * @apiParam (Response Fields) {String[]} branches.preview.configuration.techOrder order that playback technologies should be used; only visible if changed from default
 * @apiParam (Response Fields) {Object} branches.preview.configuration.video_cloud Video Cloud configuration information
 * @apiParam (Response Fields) {String} branches.preview.configuration.video_cloud.policy_key policy key for Video Cloud account
 * @apiParam (Response Fields) {String} branches.preview.configuration.video_cloud.video if using a Video Cloud video asset, that asset's ID
 * @apiParam (Response Fields) {String} branches.preview.preview_url URL of preview player
 * @apiParam (Response Fields) {String} branches.preview.template_updated_at time of last update to player template
 * @apiParam (Response Fields) {String} branches.preview.updated_at time of last update to preview player
 * @apiParam (Response Fields) {Object} branches.master contains master (published) player object
 * @apiParam (Response Fields) {Object} branches.master.configuration configuration of master player
 * @apiParam (Response Fields) {Boolean} branches.master.configuration.autoadvance autoadvance setting if using playlists: 0 for no wait; a number for seconds between advance; null to cancel autoadvance
 * @apiParam (Response Fields) {Boolean} branches.master.configuration.autoplay indicates player should play video immediately, on platforms that allow this
 * @apiParam (Response Fields) {Object} branches.master.configuration.css object containing CSS color overrides
 * @apiParam (Response Fields) {Object} branches.master.configuration.css.controlBarColor background color of control bar
 * @apiParam (Response Fields) {Object} branches.master.configuration.css.controlColor color of buttons and text in control bar
 * @apiParam (Response Fields) {Object} branches.master.configuration.css.progressColor color of progress bar
 * @apiParam (Response Fields) {Boolean} branches.master.configuration.errors indicates if the error messages plugin should be excluded
 * @apiParam (Response Fields) {Boolean} branches.master.configuration.fullscreenControl indicates whether the fullscreen control should be shown in the control bar
 * @apiParam (Response Fields) {Object} branches.master.configuration.media media information for non-Video Cloud media
 * @apiParam (Response Fields) {Object[]} branches.master.configuration.media.sources array of media source objects
 * @apiParam (Response Fields) {String} branches.master.configuration.media.sources.height height of the video
 * @apiParam (Response Fields) {String} branches.master.configuration.media.sources.poster.highres URL to the poster image
 * @apiParam (Response Fields) {String} branches.master.configuration.media.sources.src URL to media asset
 * @apiParam (Response Fields) {String} branches.master.configuration.media.sources.title content of the &lt;title&gt; element of the page
 * @apiParam (Response Fields) {Object[]} branches.master.configuration.media.sources.tracks array of track objects
 * @apiParam (Response Fields) {String} branches.master.configuration.media.sources.type MIME type of the video, as specified in the HTML5 standard, for instance `video/mp4` form MP4 or `application/x-mpegURL` for HLS
 * @apiParam (Response Fields) {String} branches.master.configuration.media.sources.width width of the video
 * @apiParam (Response Fields) {String} branches.master.configuration.media.src URL to media asset
 * @apiParam (Response Fields) {Objects[]} branches.master.configuration.media.tracks array of track objects
 * @apiParam (Response Fields) {String} branches.master.configuration.media.tracks.label text label for the track, for instance `English` for an English language text track
 * @apiParam (Response Fields) {String} branches.master.configuration.media.tracks.src URL to source of track, required in a track object
 * @apiParam (Response Fields) {String} branches.master.configuration.media.tracks.srclang 2 letter code (valid BCP 47 language tag) for the language of the text track, for example
 * @apiParam (Response Fields) {Object} branches.master.configuration.player player information object
 * @apiParam (Response Fields) {Boolean} branches.master.configuration.player.inactive indicates if a player is inactive
 * @apiParam (Response Fields) {Object} branches.master.configuration.player.template specific template details
 * @apiParam (Response Fields) {String} branches.master.configuration.player.template.name name of player template
 * @apiParam (Response Fields) {String} branches.master.configuration.player.template.version version of player template
 * @apiParam (Response Fields) {Boolean} branches.master.configuration.playlist indicates if a playlist should be used
 * @apiParam (Response Fields) {Boolean} branches.master.configuration.playlist.playOnSelect indicates if a video loaded from a playlist should play on load
 * @apiParam (Response Fields) {Object[]} branches.master.configuration.plugins array of plugin objects
 * @apiParam (Response Fields) {String} branches.master.configuration.plugins.name name of plugin
 * @apiParam (Response Fields) {JSON} branches.master.configuration.plugins.options configuration options for plugin
 * @apiParam (Response Fields) {String[]} branches.master.configuration.scripts URLs to JavaScript files that should be included with the player
 * @apiParam (Response Fields) {Boolean} branches.master.configuration.skin indicates is the default look-and-feel will be used with the player; set to false when creating a new, highly customized skin
 * @apiParam (Response Fields) {Object} branches.master.configuration.studio_configuration object containing playlist information normally set in Studio
 * @apiParam (Response Fields) {Object} branches.master.configuration.studio_configuration.player object containing playlist information
 * @apiParam (Response Fields) {Boolean} branches.master.configuration.studio_configuration.player.adjusted indicates if player dimensions should be adjusted for playlist
 * @apiParam (Response Fields) {String} branches.master.configuration.studio_configuration.player.height player height when displayed with playlist; if the height and width are not assigned values, the sizes of the player and playlist are automatically adjusted
 * @apiParam (Response Fields) {String} branches.master.configuration.studio_configuration.player.width player width when displayed with playlist; if the height and width are not assigned values, the sizes of the player and playlist are automatically adjusted
 * @apiParam (Response Fields) {String[]} branches.master.configuration.stylesheets URLs to CSS files that should be included with the player
 * @apiParam (Response Fields) {String[]} branches.master.configuration.techOrder order that playback technologies should be used; only visible if changed from default
 * @apiParam (Response Fields) {Object} branches.master.configuration.video_cloud Video Cloud configuration information
 * @apiParam (Response Fields) {String} branches.master.configuration.video_cloud.policy_key policy key for Video Cloud account
 * @apiParam (Response Fields) {String} branches.master.configuration.video_cloud.video if using a Video Cloud video asset, that asset's ID
 * @apiParam (Response Fields) {String} branches.master.master_url URL of master player
 * @apiParam (Response Fields) {String} branches.master.template_updated_at time of last update to player template
 * @apiParam (Response Fields) {String} branches.master.updated_at time of last update to master player
 * @apiParam (Response Fields) {String} created_at player creation time
 * @apiParam (Response Fields) {String} description player description
 * @apiParam (Response Fields) {String} embed_count number of embeds, will always be at least 1
 * @apiParam (Response Fields) {String} id video id
 * @apiParam (Response Fields) {String} name name give to player
 * @apiParam (Response Fields) {String} url URL to player
 *
 * @apiParamExample {json} Success Response:
 * {
 *   "accountId": "1507807800001",
 *   "id": "03b7c3de-bebf-46ee-aaac-10877e4d9c4d",
 *   "name": "API Example",
 *   "description": "Short Description for player",
 *   "branches": {
 *     "preview": {
 *       "configuration": {
 *         "player": {
 *           "template": {
 *             "version": "1.14.26",
 *             "name": "single-video-template"
 *           }
 *         },
 *         "autoadvance": 0,
 *         "video_cloud": {
 *           "policy_key": "BCpkADawqM3VxnRwHL1dkJJOatxaKL8mLCdZVbaLPAcFts6J5rREYAI1Ry3zT1q *GvmSNflrsk9jPeOLFa4dO7lREcN0HB9lBwHEGP--8OwgqR_gkCdN59Zevl2IoMNr2- *it2wvMU9jdXyYza",
 *           "video": null
 *         }
 *       },
 *       "updated_at": "2015-10-14T18:32:59.569Z",
 *       "template_updated_at": "2015-10-14T18:32:59.569Z",
 *       "preview_url": "http://preview-players.brightcove.net/v1/accounts/1507807800001/ *players/03b7c3de-bebf-46ee-aaac-10877e4d9c4d/preview/embeds/default/master/index. *html"
 *     },
 *     "master": {
 *       "configuration": {
 *         "video_cloud": {
 *           "video": null,
 *           "policy_key": "BCpkADawqM3VxnRwHL1dkJJOatxaKL8mLCdZVbaLPAcFts6J5rREYAI1Ry3zT1q *GvmSNflrsk9jPeOLFa4dO7lREcN0HB9lBwHEGP--8OwgqR_gkCdN59Zevl2IoMNr2- *it2wvMU9jdXyYza"
 *         },
 *         "autoadvance": 0,
 *         "player": {
 *           "template": {
 *             "name": "single-video-template",
 *             "version": "1.14.26"
 *           }
 *         }
 *       },
 *       "updated_at": "2015-10-14T18:32:59.575Z",
 *       "template_updated_at": "2015-10-14T18:32:59.575Z",
 *       "preview_url": "http://preview-players.brightcove.net/v1/accounts/1507807800001/ *players/03b7c3de-bebf-46ee-aaac-10877e4d9c4d/master/embeds/default/master/index. *html"
 *     }
 *   },
 *   "created_at": "2015-10-14T18:32:59.569Z",
 *   "embed_count": 1,
 *   "url": "http://players.brightcove.net/1507807800001/03b7c3de-bebf-46ee- *aaac-10877e4d9c4d_default/index.html"
 * }
 */


// get all players

/**
 * @api {get} /accounts/:account_id/players Get All Players
 * @apiName Get All Players
 * @apiGroup Players
 * @apiVersion 1.0.0
 *
 * @apiDescription Get all players in an account. The `items` array contains a player object for each player in the account.
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
 *   --user :email \
 *   --request GET \
 *   https://players.api.brightcove.com/v1/accounts/:account_id/players
 *
 * @apiParam (Response Fields) {Object[]} items array of player objects
 * @apiParam (Response Fields) {String} items.accountId account ID
 * @apiParam (Response Fields) {Object} items.branches contains objects for the preview and master (published) player
 * @apiParam (Response Fields) {Object} items.branches.preview contains preview player object
 * @apiParam (Response Fields) {Object} configuration configuration of preview player
 * @apiParam (Response Fields) {Boolean} configuration.autoadvance autoadvance setting if using playlists: 0 for no wait; a number for seconds between advance; null to cancel autoadvance
 * @apiParam (Response Fields) {Boolean} configuration.autoplay indicates player should play video immediately, on platforms that allow this
 * @apiParam (Response Fields) {Object} configuration.css object containing CSS color overrides
 * @apiParam (Response Fields) {Object} configuration.css.controlBarColor background color of control bar
 * @apiParam (Response Fields) {Object} configuration.css.controlColor color of buttons and text in control bar
 * @apiParam (Response Fields) {Object} configuration.css.progressColor color of progress bar
 * @apiParam (Response Fields) {Boolean} configuration.errors indicates if the error messages plugin should be excluded
 * @apiParam (Response Fields) {Boolean} configuration.fullscreenControl indicates whether the fullscreen control should be shown in the control bar
 * @apiParam (Response Fields) {Object} configuration.media media information for non-Video Cloud media
 * @apiParam (Response Fields) {Object[]} configuration.media.sources array of media source objects
 * @apiParam (Response Fields) {String} configuration.media.sources.height height of the video
 * @apiParam (Response Fields) {String} configuration.media.sources.poster.highres URL to the poster image
 * @apiParam (Response Fields) {String} configuration.media.sources.src URL to media asset
 * @apiParam (Response Fields) {String} configuration.media.sources.title content of the &lt;title&gt; element of the page
 * @apiParam (Response Fields) {Object[]} configuration.media.sources.tracks array of track objects
 * @apiParam (Response Fields) {String} configuration.media.sources.type MIME type of the video, as specified in the HTML5 standard, for instance `video/mp4` form MP4 or `application/x-mpegURL` for HLS
 * @apiParam (Response Fields) {String} configuration.media.sources.width width of the video
 * @apiParam (Response Fields) {String} configuration.media.src URL to media asset
 * @apiParam (Response Fields) {Objects[]} configuration.media.tracks array of track objects
 * @apiParam (Response Fields) {String} configuration.media.tracks.label text label for the track, for instance `English` for an English language text track
 * @apiParam (Response Fields) {String} configuration.media.tracks.src URL to source of track, required in a track object
 * @apiParam (Response Fields) {String} configuration.media.tracks.srclang 2 letter code (valid BCP 47 language tag) for the language of the text track, for example
 * @apiParam (Response Fields) {Object} configuration.player player information object
 * @apiParam (Response Fields) {Boolean} configuration.player.inactive indicates if a player is inactive
 * @apiParam (Response Fields) {Object} configuration.player.template specific template details
 * @apiParam (Response Fields) {String} configuration.player.template.name name of player template
 * @apiParam (Response Fields) {String} configuration.player.template.version version of player template
 * @apiParam (Response Fields) {Boolean} configuration.playlist indicates if a playlist should be used
 * @apiParam (Response Fields) {Boolean} configuration.playlist.playOnSelect indicates if a video loaded from a playlist should play on load
 * @apiParam (Response Fields) {Object[]} configuration.plugins array of plugin objects
 * @apiParam (Response Fields) {String} configuration.plugins.name name of plugin
 * @apiParam (Response Fields) {JSON} configuration.plugins.options configuration options for plugin
 * @apiParam (Response Fields) {String[]} configuration.scripts URLs to JavaScript files that should be included with the player
 * @apiParam (Response Fields) {Boolean} configuration.skin indicates is the default look-and-feel will be used with the player; set to false when creating a new, highly customized skin
 * @apiParam (Response Fields) {Object} configuration.studio_configuration object containing playlist information normally set in Studio
 * @apiParam (Response Fields) {Object} configuration.studio_configuration.player object containing playlist information
 * @apiParam (Response Fields) {Boolean} configuration.studio_configuration.player.adjusted indicates if player dimensions should be adjusted for playlist
 * @apiParam (Response Fields) {String} configuration.studio_configuration.player.height player height when displayed with playlist; if the height and width are not assigned values, the sizes of the player and playlist are automatically adjusted
 * @apiParam (Response Fields) {String} configuration.studio_configuration.player.width player width when displayed with playlist; if the height and width are not assigned values, the sizes of the player and playlist are automatically adjusted
 * @apiParam (Response Fields) {String[]} configuration.stylesheets URLs to CSS files that should be included with the player
 * @apiParam (Response Fields) {String[]} configuration.techOrder order that playback technologies should be used; only visible if changed from default
 * @apiParam (Response Fields) {Object} configuration.video_cloud Video Cloud configuration information
 * @apiParam (Response Fields) {String} configuration.video_cloud.policy_key policy key for Video Cloud account
 * @apiParam (Response Fields) {String} configuration.video_cloud.video if using a Video Cloud video asset, that asset's ID
 * @apiParam (Response Fields) {String} preview_url URL of preview player
 * @apiParam (Response Fields) {String} template_updated_at time of last update to player template
 * @apiParam (Response Fields) {String} updated_at time of last update to preview player
 * @apiParam (Response Fields) {Object} items.branches.master contains master (published) player object
 * @apiParam (Response Fields) {Object} items.branches.master.configuration configuration of master player
 * @apiParam (Response Fields) {Boolean} items.branches.master.configuration.autoadvance autoadvance setting if using playlists: 0 for no wait; a number for seconds between advance; null to cancel autoadvance
 * @apiParam (Response Fields) {Boolean} items.branches.master.configuration.autoplay indicates player should play video immediately, on platforms that allow this
 * @apiParam (Response Fields) {Object} items.branches.master.configuration.css object containing CSS color overrides
 * @apiParam (Response Fields) {Object} items.branches.master.configuration.css.controlBarColor background color of control bar
 * @apiParam (Response Fields) {Object} items.branches.master.configuration.css.controlColor color of buttons and text in control bar
 * @apiParam (Response Fields) {Object} items.branches.master.configuration.css.progressColor color of progress bar
 * @apiParam (Response Fields) {Boolean} items.branches.master.configuration.errors indicates if the error messages plugin should be excluded
 * @apiParam (Response Fields) {Boolean} items.branches.master.configuration.fullscreenControl indicates whether the fullscreen control should be shown in the control bar
 * @apiParam (Response Fields) {Object} items.branches.master.configuration.media media information for non-Video Cloud media
 * @apiParam (Response Fields) {Object[]} items.branches.master.configuration.media.sources array of media source objects
 * @apiParam (Response Fields) {String} items.branches.master.configuration.media.sources.height height of the video
 * @apiParam (Response Fields) {String} items.branches.master.configuration.media.sources.poster.highres URL to the poster image
 * @apiParam (Response Fields) {String} items.branches.master.configuration.media.sources.src URL to media asset
 * @apiParam (Response Fields) {String} items.branches.master.configuration.media.sources.title content of the &lt;title&gt; element of the page
 * @apiParam (Response Fields) {Object[]} items.branches.master.configuration.media.sources.tracks array of track objects
 * @apiParam (Response Fields) {String} items.branches.master.configuration.media.sources.type MIME type of the video, as specified in the HTML5 standard, for instance `video/mp4` form MP4 or `application/x-mpegURL` for HLS
 * @apiParam (Response Fields) {String} items.branches.master.configuration.media.sources.width width of the video
 * @apiParam (Response Fields) {String} items.branches.master.configuration.media.src URL to media asset
 * @apiParam (Response Fields) {Objects[]} items.branches.master.configuration.media.tracks array of track objects
 * @apiParam (Response Fields) {String} items.branches.master.configuration.media.tracks.label text label for the track, for instance `English` for an English language text track
 * @apiParam (Response Fields) {String} items.branches.master.configuration.media.tracks.src URL to source of track, required in a track object
 * @apiParam (Response Fields) {String} items.branches.master.configuration.media.tracks.srclang 2 letter code (valid BCP 47 language tag) for the language of the text track, for example
 * @apiParam (Response Fields) {Object} items.branches.master.configuration.player player information object
 * @apiParam (Response Fields) {Boolean} items.branches.master.configuration.player.inactive indicates if a player is inactive
 * @apiParam (Response Fields) {Object} items.branches.master.configuration.player.template specific template details
 * @apiParam (Response Fields) {String} items.branches.master.configuration.player.template.name name of player template
 * @apiParam (Response Fields) {String} items.branches.master.configuration.player.template.version version of player template
 * @apiParam (Response Fields) {Boolean} items.branches.master.configuration.playlist indicates if a playlist should be used
 * @apiParam (Response Fields) {Boolean} items.branches.master.configuration.playlist.playOnSelect indicates if a video loaded from a playlist should play on load
 * @apiParam (Response Fields) {Object[]} items.branches.master.configuration.plugins array of plugin objects
 * @apiParam (Response Fields) {String} items.branches.master.configuration.plugins.name name of plugin
 * @apiParam (Response Fields) {JSON} items.branches.master.configuration.plugins.options configuration options for plugin
 * @apiParam (Response Fields) {String[]} items.branches.master.configuration.scripts URLs to JavaScript files that should be included with the player
 * @apiParam (Response Fields) {Boolean} items.branches.master.configuration.skin indicates is the default look-and-feel will be used with the player; set to false when creating a new, highly customized skin
 * @apiParam (Response Fields) {Object} items.branches.master.configuration.studio_configuration object containing playlist information normally set in Studio
 * @apiParam (Response Fields) {Object} items.branches.master.configuration.studio_configuration.player object containing playlist information
 * @apiParam (Response Fields) {Boolean} items.branches.master.configuration.studio_configuration.player.adjusted indicates if player dimensions should be adjusted for playlist
 * @apiParam (Response Fields) {String} items.branches.master.configuration.studio_configuration.player.height player height when displayed with playlist; if the height and width are not assigned values, the sizes of the player and playlist are automatically adjusted
 * @apiParam (Response Fields) {String} items.branches.master.configuration.studio_configuration.player.width player width when displayed with playlist; if the height and width are not assigned values, the sizes of the player and playlist are automatically adjusted
 * @apiParam (Response Fields) {String[]} items.branches.master.configuration.stylesheets URLs to CSS files that should be included with the player
 * @apiParam (Response Fields) {String[]} items.branches.master.configuration.techOrder order that playback technologies should be used; only visible if changed from default
 * @apiParam (Response Fields) {Object} items.branches.master.configuration.video_cloud Video Cloud configuration information
 * @apiParam (Response Fields) {String} items.branches.master.configuration.video_cloud.policy_key policy key for Video Cloud account
 * @apiParam (Response Fields) {String} items.branches.master.configuration.video_cloud.video if using a Video Cloud video asset, that asset's ID
 * @apiParam (Response Fields) {String} items.branches.master.master_url URL of master player
 * @apiParam (Response Fields) {String} items.branches.master.template_updated_at time of last update to player template
 * @apiParam (Response Fields) {String} items.branches.master.updated_at time of last update to master player
 * @apiParam (Response Fields) {String} items.created_at player creation time
 * @apiParam (Response Fields) {String} items.description player description
 * @apiParam (Response Fields) {String} items.embed_count number of embeds, will always be at least 1
 * @apiParam (Response Fields) {String} items.id video id
 * @apiParam (Response Fields) {String} items.name name give to player
 * @apiParam (Response Fields) {String} items.url URL to player
 * @apiParam (Response Fields) {Number} item_count number of player objects in array
 *
 * @apiParamExample {json} Success Response:
 *
 * "items": [{
 *   "accountId": "1507807800001",
 *   "id": "03b7c3de-bebf-46ee-aaac-10877e4d9c4d",
 *   "name": "API Example",
 *   "description": "Short Description for player",
 *   "branches": {
 *     "preview": {
 *       "configuration": {
 *         "player": {
 *           "template": {
 *             "version": "1.14.26",
 *             "name": "single-video-template"
 *           }
 *         },
 *         "autoadvance": 0,
 *         "video_cloud": {
 *           "policy_key": "BCpkADawqM3VxnRwHL1dkJJOatxaKL8mLCdZVbaLPAcFts6J5rREYAI1Ry3zT1qGvmSNflrsk9jPeOLFa4dO7lREcN0HB9lBwHEGP--8OwgqR_gkCdN59Zevl2IoMNr2-it2wvMU9jdXyYza",
 *           "video": null
 *         }
 *       },
 *       "updated_at": "2015-10-14T18:32:59.569Z",
 *       "template_updated_at": "2015-10-14T18:32:59.569Z",
 *       "preview_url": "http://preview-players.brightcove.net/v1/accounts/1507807800001/players/03b7c3de-bebf-46ee-aaac-10877e4d9c4d/preview/embeds/default/master/index.html"
 *     },
 *     "master": {
 *       "configuration": {
 *         "video_cloud": {
 *           "video": null,
 *           "policy_key": "BCpkADawqM3VxnRwHL1dkJJOatxaKL8mLCdZVbaLPAcFts6J5rREYAI1Ry3zT1qGvmSNflrsk9jPeOLFa4dO7lREcN0HB9lBwHEGP--8OwgqR_gkCdN59Zevl2IoMNr2-it2wvMU9jdXyYza"
 *         },
 *         "autoadvance": 0,
 *         "player": {
 *           "template": {
 *             "name": "single-video-template",
 *             "version": "1.14.26"
 *           }
 *         }
 *       },
 *       "updated_at": "2015-10-14T18:32:59.575Z",
 *       "template_updated_at": "2015-10-14T18:32:59.575Z",
 *       "preview_url": "http://preview-players.brightcove.net/v1/accounts/1507807800001/players/03b7c3de-bebf-46ee-aaac-10877e4d9c4d/master/embeds/default/master/index.html"
 *     }
 *   },
 *   "created_at": "2015-10-14T18:32:59.569Z",
 *   "url": "http://players.brightcove.net/1507807800001/03b7c3de-bebf-46ee-aaac-10877e4d9c4d_default/index.html",
 *   "embed_count": 1
 * },
 * ...
 * ],
 * "item_count": 25
 *
 */

 // Create a player
/**
 * @api {post} /accounts/:account_id/players Create a Player
 * @apiName Create a Player
 * @apiGroup Players
 * @apiVersion 1.0.0
 *
 * @apiDescription Create a player
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} player_id Video Cloud player ID.
 *


 * @apiParam (Request Body Fields) {Object} configuration configuration of preview player
 * @apiParam (Request Body Fields) {Boolean} configuration.autoadvance autoadvance setting if using playlists: 0 for no wait; a number for seconds between advance; null to cancel autoadvance
 * @apiParam (Request Body Fields) {Boolean} configuration.autoplay indicates player should play video immediately, on platforms that allow this
 * @apiParam (Request Body Fields) {Object} configuration.css object containing CSS color overrides
 * @apiParam (Request Body Fields) {Object} configuration.css.controlBarColor background color of control bar
 * @apiParam (Request Body Fields) {Object} configuration.css.controlColor color of buttons and text in control bar
 * @apiParam (Request Body Fields) {Object} configuration.css.progressColor color of progress bar
 * @apiParam (Request Body Fields) {Boolean} configuration.errors indicates if the error messages plugin should be excluded
 * @apiParam (Request Body Fields) {Boolean} configuration.fullscreenControl indicates whether the fullscreen control should be shown in the control bar
 * @apiParam (Request Body Fields) {Object} configuration.media media information for non-Video Cloud media
 * @apiParam (Request Body Fields) {Object[]} configuration.media.sources array of media source objects
 * @apiParam (Request Body Fields) {String} configuration.media.sources.height height of the video
 * @apiParam (Request Body Fields) {String} configuration.media.sources.poster.highres URL to the poster image
 * @apiParam (Request Body Fields) {String} configuration.media.sources.src URL to media asset
 * @apiParam (Request Body Fields) {String} configuration.media.sources.title content of the &lt;title&gt; element of the page
 * @apiParam (Request Body Fields) {Object[]} configuration.media.sources.tracks array of track objects
 * @apiParam (Request Body Fields) {String} configuration.media.sources.type MIME type of the video, as specified in the HTML5 standard, for instance `video/mp4` form MP4 or `application/x-mpegURL` for HLS
 * @apiParam (Request Body Fields) {String} configuration.media.sources.width width of the video
 * @apiParam (Request Body Fields) {String} configuration.media.src URL to media asset
 * @apiParam (Request Body Fields) {Objects[]} configuration.media.tracks array of track objects
 * @apiParam (Request Body Fields) {String} configuration.media.tracks.label text label for the track, for instance `English` for an English language text track
 * @apiParam (Request Body Fields) {String} configuration.media.tracks.src URL to source of track, required in a track object
 * @apiParam (Request Body Fields) {String} configuration.media.tracks.srclang 2 letter code (valid BCP 47 language tag) for the language of the text track, for example
 * @apiParam (Request Body Fields) {Object} configuration.player player information object
 * @apiParam (Request Body Fields) {Boolean} configuration.player.inactive indicates if a player is inactive
 * @apiParam (Request Body Fields) {Object} configuration.player.template specific template details
 * @apiParam (Request Body Fields) {String} configuration.player.template.name name of player template
 * @apiParam (Request Body Fields) {String} configuration.player.template.version version of player template
 * @apiParam (Request Body Fields) {Boolean} configuration.playlist indicates if a playlist should be used
 * @apiParam (Request Body Fields) {Boolean} configuration.playlist.playOnSelect indicates if a video loaded from a playlist should play on load
 * @apiParam (Request Body Fields) {Object[]} configuration.plugins array of plugin objects
 * @apiParam (Request Body Fields) {String} configuration.plugins.name name of plugin
 * @apiParam (Request Body Fields) {JSON} configuration.plugins.options configuration options for plugin
 * @apiParam (Request Body Fields) {String[]} configuration.scripts URLs to JavaScript files that should be included with the player
 * @apiParam (Request Body Fields) {Boolean} configuration.skin indicates is the default look-and-feel will be used with the player; set to false when creating a new, highly customized skin
 * @apiParam (Request Body Fields) {Object} configuration.studio_configuration object containing playlist information normally set in Studio
 * @apiParam (Request Body Fields) {Object} configuration.studio_configuration.player object containing playlist information
 * @apiParam (Request Body Fields) {Boolean} configuration.studio_configuration.player.adjusted indicates if player dimensions should be adjusted for playlist
 * @apiParam (Request Body Fields) {String} configuration.studio_configuration.player.height player height when displayed with playlist; if the height and width are not assigned values, the sizes of the player and playlist are automatically adjusted
 * @apiParam (Request Body Fields) {String} configuration.studio_configuration.player.width player width when displayed with playlist; if the height and width are not assigned values, the sizes of the player and playlist are automatically adjusted
 * @apiParam (Request Body Fields) {String[]} configuration.stylesheets URLs to CSS files that should be included with the player
 * @apiParam (Request Body Fields) {String[]} configuration.techOrder order that playback technologies should be used; only visible if changed from default
 * @apiParam (Request Body Fields) {Object} configuration.video_cloud Video Cloud configuration information
 * @apiParam (Request Body Fields) {String} configuration.video_cloud.policy_key policy key for Video Cloud account
 * @apiParam (Request Body Fields) {String} configuration.video_cloud.video if using a Video Cloud video asset, that asset's ID
 * @apiParam (Request Body Fields) {String} description player description
 * @apiParam (Request Body Fields) {String} name name give to player
 *
 * @apiParamExample {curl} curl Statement:
 * //This curl statement creates a player that uses a video asset from a URL (Perform customer)
 * curl \
 *   --header "Content-Type: application/json" \
 *   --user $EMAIL \
 *   --request POST \
 *   --data '{
 *       "name": "MySamplePlayer - URL Source",
 *       "configuration": {
 *         "media": {
 *           "sources": [{
 *             "src":"http://solutions.brightcove.com/bcls/assets/videos/Tiger.mp4",
 *             "type":"video/mp4"
 *           }]
 *         }
 *       }
 *     }' \
 *     https://players.api.brightcove.com/v1/accounts/:account_id/players
 *
 * //This curl statement creates a player that uses a Video Cloud asset
 * curl \
 *   --header "Content-Type: application/json" \
 *   --user $EMAIL \
 *   --request POST \
 *   --data '{
 *       "name": "MySamplePlayer - Video Cloud source",
 *       "configuration": {
 *         "video_cloud": {
 *           "video": "4443311217001"
 *         }
 *       }
 *     }' \
 *     https://players.api.brightcove.com/v1/accounts/:account_id/players
 *
 * @apiParam (Response Fields) {String} id player ID
 * @apiParam (Response Fields) {String} url URL to published player
 * @apiParam (Response Fields) {String} embed_code published player iframe tag
 * @apiParam (Response Fields) {String} embed_in_page URL to browse to retrieve the in-page embed code for published player
 * @apiParam (Response Fields) {String} preview_url URL to preview player
 * @apiParam (Response Fields) {String} preview_embed_code preview player iframe tag
 *
 * @apiParamExample {json} Success Response:
 * {
 *   "id": "11378869-bbbf-49bc-92df-2d3455c2d47a",
 *   "url": "http://players.brightcove.net/1507807800001/11378869-bbbf-49bc-92df-2d3455c2d47a_default/index.html",
 *   "embed_code": "<iframe src='//players.brightcove.net/1507807800001/11378869-bbbf-49bc-92df-2d3455c2d47a_default/index.html' allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>",
 *   "embed_in_page": "http://players.brightcove.net/1507807800001/11378869-bbbf-49bc-92df-2d3455c2d47a_default/in_page.embed",
 *   "preview_url": "http://preview-players.brightcove.net/v1/accounts/1507807800001/players/11378869-bbbf-49bc-92df-2d3455c2d47a/preview/embeds/default/master/index.html",
 *   "preview_embed_code": "<iframe src='//preview-players.brightcove.net/v1/accounts/1507807800001/players/11378869-bbbf-49bc-92df-2d3455c2d47a/preview/embeds/default/master/index.html' allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>"
 * }

 */

// Update a single player (not player configuration)

/**
 * @api {patch} accounts/:account_id/players/:player_id Update a Player
 * @apiName Update a Player
 * @apiGroup Players
 * @apiVersion 1.0.0
 *
 * @apiDescription Update a player. The PATCH method can be used on a single player to do a VERY limited update. The only fields you can update in this manner are the `name` and `description` properties. All other player configuration must be done via the configuration APIs, detailed below.
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} player_id Video Cloud player ID.
 *
 * @apiParam (Request Body Fields) {String} name player name
 * @apiParam (Request Body Fields) {String} [description] player description
 *
 * @apiParamExample {curl} curl Statement:
 * curl \
 *   --header "Content-Type: application/json" \
 *   --user :email \
 *   --request PATCH \
 *   --data '{
 *     "name": "My New Player Name",
 *     "description": "My new player description"
 *   }' \
 *   https://players.api.brightcove.com/v1/accounts/:account_id/players/:player_id
 *
 * @apiParam (Response Fields) {String} id player ID
 * @apiParam (Response Fields) {String} preview_url URL to preview player
 * @apiParam (Response Fields) {String} preview_embed_code preview player iframe tag
 *
 * @apiParamExample {json} Success Response: The response will contain links to preview player versions, so you will have to explicitly publish to get the optimized version of the player.
 * {
 *   "id": "49f70c8b-e16b-4fc9-b9ae-2cd361785e7a",
 *   "preview_url": "http://preview-players.brightcove.net/v1/accounts/1507807800001/players/49f70c8b-e16b-4fc9-b9ae-2cd361785e7a/preview/embeds/default/master/index.html",
 *   "preview_embed_code": "<iframe src='//preview-players.brightcove.net/v1/accounts/1507807800001/players/49f70c8b-e16b-4fc9-b9ae-2cd361785e7a/preview/embeds/default/master/index.html' allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>"
 * }

*/

// Publish a player

/**
 * @api {post} accounts/:account_id/players/:player_id/publish Publish a Player
 * @apiName Publish a Player
 * @apiGroup Players
 * @apiVersion 1.0.0
 *
 * @apiDescription Publish a player for optimization and production use.
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id Video Cloud account ID.
 * @apiParam (Path Parameters) {String} player_id Video Cloud player ID.
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
 *   https://players.api.brightcove.com/v1/accounts/:account_id/players/:player_id/publish
 *
 * @apiParam (Response Fields) {String} id player ID
 * @apiParam (Response Fields) {String} url URL to published player
 * @apiParam (Response Fields) {String} embed_code published player iframe tag
 * @apiParam (Response Fields) {String} embed_in_page URL to browse to retrieve the in-page embed code for published player
 *
 * @apiParamExample {json} Success Response:
 * {
 *   "id": "49f70c8b-e16b-4fc9-b9ae-2cd361785e7a",
 *   "url": "http://players.brightcove.net/1507807800001/49f70c8b-e16b-4fc9-b9ae-2cd361785e7a_default/index.html",
 *   "embed_code": "<iframe src='//players.brightcove.net/1507807800001/49f70c8b-e16b-4fc9-b9ae-2cd361785e7a_default/index.html'  * allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>",
 *   "embed_in_page": "http://players.brightcove.net/1507807800001/49f70c8b-e16b-4fc9-b9ae-2cd361785e7a_default/in_page.embed"
 * }
*/

// Delete a player

/**
 * @api {delete} accounts/:account_id/players/:player_id Delete a Player
 * @apiName Delete a Player
 * @apiGroup Players
 * @apiVersion 1.0.0
 *
 * @apiDescription Delete a player
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
 *   --request DELETE \
 *   --data '{}' \
 *   https://players.api.brightcove.com/v1/accounts/:account_id/players/:player_id
 *
 * @apiParam (Response Fields) {String} message report of player deletion
 *
 * @apiParamExample {json} Success Response:
 * {
 *   "message": "Successfully deleted player with the id: 49f70c8b-e16b-4fc9-b9ae-2cd361785e7a"
 * }
*/
