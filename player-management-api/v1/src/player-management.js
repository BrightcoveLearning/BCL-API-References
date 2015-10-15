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
 * @apiSuccess (Response Fields) {String} accountId account ID
 * @apiSuccess (Response Fields) {String} id video id
 * @apiSuccess (Response Fields) {String} name name give to player
 * @apiSuccess (Response Fields) {Object} branches contains objects for the preview and master (published) player
 * @apiSuccess (Response Fields) {Object} branches.preview contains preview player object
 * @apiSuccess (Response Fields) {Object} branches.preview.configuration configuration of preview player
 * @apiSuccess (Response Fields) {Object} branches.preview.configuration.autoadvance autoadvance setting if using playlists: 0 for no wait; a number for seconds between advance; null to cancel autoadvance
 * @apiSuccess (Response Fields) {Object} branches.preview.configuration.player.template specific template details
 * @apiSuccess (Response Fields) {String} branches.preview.configuration.player.template.version version of player template
 * @apiSuccess (Response Fields) {String} branches.preview.configuration.player.template.name name of player template
 * @apiSuccess (Response Fields) {Object} branches.preview.configuration.video_cloud Video Cloud configuration information
 * @apiSuccess (Response Fields) {String} branches.preview.configuration.video_cloud.policy_key policy key for Video Cloud account
 * @apiSuccess (Response Fields) {String} branches.preview.configuration.video_cloud.video if using a Video Cloud video asset, that asset's ID
 * @apiSuccess (Response Fields) {Object} branches.preview.configuration.media media information for non-Video Cloud media
 * @apiSuccess (Response Fields) {Object[]} branches.preview.configuration.media.sources array of media source objects
 * @apiSuccess (Response Fields) {String} branches.preview.configuration.media.sources.type MIME type of the video, as specified in the HTML5 standard, for instance `video/mp4` form MP4 or `application/x-mpegURL` for HLS
 * @apiSuccess (Response Fields) {String} branches.preview.configuration.media.sources.src URL to media asset
 * @apiSuccess (Response Fields) {String} branches.preview.updated_at time of last update to preview player
 * @apiSuccess (Response Fields) {String} branches.preview.template_updated_at time of last update to player template
 * @apiSuccess (Response Fields) {String} branches.preview.preview_url URL of preview player
 * @apiSuccess (Response Fields) {Object} branches.master contains master (published) player object
 * @apiSuccess (Response Fields) {Object} branches.master.configuration configuration of master player
 * @apiSuccess (Response Fields) {Object} branches.preview.configuration.autoadvance autoadvance setting if using playlists: 0 for no wait; a number for seconds between advance; null to cancel autoadvance
 * @apiSuccess (Response Fields) {Object} branches.master.configuration.player player template information for master player
 * @apiSuccess (Response Fields) {Object} branches.master.configuration.player.template specific template details
 * @apiSuccess (Response Fields) {String} branches.master.configuration.player.template.version version of player template
 * @apiSuccess (Response Fields) {String} branches.master.configuration.player.template.name name of player template
 * @apiSuccess (Response Fields) {Object} branches.master.configuration.video_cloud Video Cloud configuration information
 * @apiSuccess (Response Fields) {String} branches.master.configuration.video_cloud.policy_key policy key for Video Cloud account
 * @apiSuccess (Response Fields) {String} branches.master.configuration.video_cloud.video if using a Video Cloud video asset, that asset's ID
 * @apiSuccess (Response Fields) {Object} branches.master.configuration.media media information for non-Video Cloud media
 * @apiSuccess (Response Fields) {Object[]} branches.master.configuration.media.sources array of media source objects
 * @apiSuccess (Response Fields) {String} branches.master.configuration.media.sources.type type of media assets, for instance `video/mp4` form MP4 or `application/x-mpegURL` for HLS
 * @apiSuccess (Response Fields) {String} branches.master.configuration.media.sources.src URL to media asset
 * @apiSuccess (Response Fields) {String} branches.master.updated_at time of last update to master player
 * @apiSuccess (Response Fields) {String} branches.master.template_updated_at time of last update to player template
 * @apiSuccess (Response Fields) {String} branches.master.preview_url URL of master player
 * @apiSuccess (Response Fields) {String} created_at player creation time
 * @apiSuccess (Response Fields) {String} embed_count number of embeds, will always be at least 1
 * @apiSuccess (Response Fields) {String} url URL to player
 *
 * @apiSuccessExample {json} Success Response:
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
 * @apiSuccess (Response Fields) {Object[]} items array of player objects
 * @apiSuccess (Response Fields) {Number} item_count number of player objects in array
 * @apiSuccess (Response Fields) {String} accountId account ID
 * @apiSuccess (Response Fields) {String} id video id
 * @apiSuccess (Response Fields) {String} name name give to player
 * @apiSuccess (Response Fields) {Object} branches contains objects for the preview and master (published) player
 * @apiSuccess (Response Fields) {Object} branches.preview contains preview player object
 * @apiSuccess (Response Fields) {Object} branches.preview.configuration configuration of preview player
 * @apiSuccess (Response Fields) {Object} branches.preview.configuration.autoadvance autoadvance setting if using playlists: 0 for no wait; a number for seconds between advance; null to cancel autoadvance
 * @apiSuccess (Response Fields) {Object} branches.preview.configuration.player.template specific template details
 * @apiSuccess (Response Fields) {String} branches.preview.configuration.player.template.version version of player template
 * @apiSuccess (Response Fields) {String} branches.preview.configuration.player.template.name name of player template
 * @apiSuccess (Response Fields) {Object} branches.preview.configuration.video_cloud Video Cloud configuration information
 * @apiSuccess (Response Fields) {String} branches.preview.configuration.video_cloud.policy_key policy key for Video Cloud account
 * @apiSuccess (Response Fields) {String} branches.preview.configuration.video_cloud.video if using a Video Cloud video asset, that asset's ID
 * @apiSuccess (Response Fields) {Object} branches.preview.configuration.media media information for non-Video Cloud media
 * @apiSuccess (Response Fields) {Object[]} branches.preview.configuration.media.sources array of media source objects
 * @apiSuccess (Response Fields) {String} branches.preview.configuration.media.sources.type type of media assets, for instance `video/mp4` form MP4 or `application/x-mpegURL` for HLS
 * @apiSuccess (Response Fields) {String} branches.preview.configuration.media.sources.src URL to media asset
 * @apiSuccess (Response Fields) {String} branches.preview.updated_at time of last update to preview player
 * @apiSuccess (Response Fields) {String} branches.preview.template_updated_at time of last update to player template
 * @apiSuccess (Response Fields) {String} branches.preview.preview_url URL of preview player
 * @apiSuccess (Response Fields) {Object} branches.master contains master (published) player object
 * @apiSuccess (Response Fields) {Object} branches.master.configuration configuration of master player
 * @apiSuccess (Response Fields) {Object} branches.preview.configuration.autoadvance autoadvance setting if using playlists: 0 for no wait; a number for seconds between advance; null to cancel autoadvance
 * @apiSuccess (Response Fields) {Object} branches.master.configuration.player player template information for master player
 * @apiSuccess (Response Fields) {Object} branches.master.configuration.player.template specific template details
 * @apiSuccess (Response Fields) {String} branches.master.configuration.player.template.version version of player template
 * @apiSuccess (Response Fields) {String} branches.master.configuration.player.template.name name of player template
 * @apiSuccess (Response Fields) {Object} branches.master.configuration.video_cloud Video Cloud configuration information
 * @apiSuccess (Response Fields) {String} branches.master.configuration.video_cloud.policy_key policy key for Video Cloud account
 * @apiSuccess (Response Fields) {String} branches.master.configuration.video_cloud.video if using a Video Cloud video asset, that asset's ID
 * @apiSuccess (Response Fields) {Object} branches.master.configuration.media media information for non-Video Cloud media
 * @apiSuccess (Response Fields) {Object[]} branches.master.configuration.media.sources array of media source objects
 * @apiSuccess (Response Fields) {String} branches.master.configuration.media.sources.type type of media assets, for instance `video/mp4` form MP4 or `application/x-mpegURL` for HLS
 * @apiSuccess (Response Fields) {String} branches.master.configuration.media.sources.src URL to media asset
 * @apiSuccess (Response Fields) {String} branches.master.updated_at time of last update to master player
 * @apiSuccess (Response Fields) {String} branches.master.template_updated_at time of last update to player template
 * @apiSuccess (Response Fields) {String} branches.master.preview_url URL of master player
 * @apiSuccess (Response Fields) {String} created_at player creation time
 * @apiSuccess (Response Fields) {String} embed_count number of embeds, will always be at least 1
 * @apiSuccess (Response Fields) {String} url URL to player
 *
 * @apiSuccessExample {json} Success Response:
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
 * @api {get} /accounts/:account_id/players Create a Player
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
 * @apiParam (Request Body Fields) {String} name player name
 * @apiParam (Request Body Fields) {String} [description] player description
 * @apiParam (Request Body Fields) {Boolean} [autoplay=false] indicates player should play video immediately, on platforms that allow this
 * @apiParam (Request Body Fields) {Boolean} [fullscreenControl=true]
 * @apiParam (Request Body Fields) {String} indicates whether the fullscreen control should be shown in the control bar
 * @apiParam (Request Body Fields) {String[]} [scripts] URLs to JavaScript files that should be included with the player
 * @apiParam (Request Body Fields) {String[]} [stylesheets] URLs to CSS files that should be included with the player
 * @apiParam (Request Body Fields) {String} [media] Object with media for the player
 * @apiParam (Request Body Fields) {String} [media.src] The URL of the video file to load into the player
 * @apiParam (Request Body Fields) {Object[]} [media.sources] Array of source objects, in order of preference
 * @apiParam (Request Body Fields) {String} [media.sources.src] The URL of the video file to load into the player
 * @apiParam (Request Body Fields) {String} [media.sources.type] MIME type of the video, as specified in the HTML5 standard, for instance `video/mp4` form MP4 or `application/x-mpegURL` for HLS
 * @apiParam (Request Body Fields) {String} [media.title] content of the &lt;title&gt; element of the page
 * @apiParam (Request Body Fields) {String} [media.poster.highres] file path to the poster image
 * @apiParam (Request Body Fields) {String} [media.height] height of the video
 * @apiParam (Request Body Fields) {String} [media.width] width of the video
 * @apiParam (Request Body Fields) {Object[]} [media.tracks] array of track objects
 * @apiParam (Request Body Fields) {Object} [video_cloud] Video Cloud configuration information
 * @apiParam (Request Body Fields) {String} [video_cloud.video] Video Cloud video asset ID; can use a reference ID using the syntax `ref:1234refid`
 * @apiParam (Request Body Fields) {Object[]} [plugins] array of objects
 * @apiParam (Request Body Fields) {String} [plugsin.name] name of plugin, required if using a plugin information
 * @apiParam (Request Body Fields) {String} [plugins.options] JSON object of data for corresponding plugin, optional for plugin
 * @apiParam (Request Body Fields) {Object} [css] object containing 1-3 CSS color overrides
 * @apiParam (Request Body Fields) {String} [css.controlColor] color of buttons and text in control bar
 * @apiParam (Request Body Fields) {String} [css.controlBarColor background color of control bar]
 * @apiParam (Request Body Fields) {String} [css.progressColor] color of the progress bar
 * @apiParam (Request Body Fields) {Boolean} [playlist] indicates if a playlist should be used
 * @apiParam (Request Body Fields) {Boolean} [playlist.playOnSelect] indicates if a video loaded from a playlist should play on load
 * @apiParam (Request Body Fields) {String} [autoadvance] autoadvance setting if using playlists: 0 for no wait; a number for seconds between advance; null to cancel autoadvance
 * @apiParam (Request Body Fields) {Object} [studio_configuration] object containing playlist information normally set in Studio
 * @apiParam (Request Body Fields) {Object} [studio_configuration.player] object containing playlist information
 * @apiParam (Request Body Fields) {Boolean} [studio_configuration.player.adjusted] indicates if player dimensions should be adjusted for playlist
 * @apiParam (Request Body Fields) {String} [studio_configuration.player.height] player height when displayed with playlist; if the height and width are not assigned values, the sizes of the player and playlist are automatically adjusted
 * @apiParam (Request Body Fields) {String} [studio_configuration.player.width] player width when displayed with playlist; if the height and width are not assigned values, the sizes of the player and playlist are automatically adjusted
 * @apiParam (Request Body Fields) {Boolean} [skin=true] if false, the default look-and-feel will not be applied to the player; set to false when creating a new, highly customized skin
 * @apiParam (Request Body Fields) {Boolean} [errors] indicates if the error messages plugin should be excluded
 * @apiParam (Request Body Fields) {Objects[]} [media.tracks] array of track objects
 * @apiParam (Request Body Fields) {String} [media.tracks.src] URL to source of track, required in a track object
 * @apiParam (Request Body Fields) {String} [media.tracks.srclang] 2 letter code (valid BCP 47 language tag) for the language of the text track, for example "en" for English; required in a track object
 * @apiParam (Request Body Fields) {String} [media.tracks.label] text label for the track, for instance `English` for an English languare text track
 * @apiParam (Request Body Fields) {Boolean} [hls=true] indicates whether to exclude the HLS fallback tech; making this value false will mean HLS will only be used if the browser supports the format natively
 * @apiParam (Request Body Fields) {Object} [player] object containing information on the player
 * @apiParam (Request Body Fields) {Object} [player.template] object containing information on the player template
 * @apiParam (Request Body Fields) {String} [player.template.version] version the player template to use when creating player; needed only when wishing to use an older or preview version of the current player template
 * @apiParam (Request Body Fields) {Boolean} [player.inactive=false] deactivates player
 *
 * @apiParamExample {curl} curl Statement:
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
 *     https://players.api.brightcove.com/v1/accounts/$ACCOUNT_ID/players
 *
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
 *     https://players.api.brightcove.com/v1/accounts/$ACCOUNT_ID/players
 *
 * @apiSuccess (Response Fields) {String} id player ID
 * @apiSuccess (Response Fields) {String} url URL to published player
 * @apiSuccess (Response Fields) {String} embed_code published player iframe tag
 * @apiSuccess (Response Fields) {String} embed_in_page URL to browse to retrieve the in-page embed code for published player
 * @apiSuccess (Response Fields) {String} preview_url URL to preview player
 * @apiSuccess (Response Fields) {String} preview_embed_code preview player iframe tag
 *
 * @apiSuccessExample {json} Success Response:
 * {
 *   "id": "11378869-bbbf-49bc-92df-2d3455c2d47a",
 *   "url": "http://players.brightcove.net/1507807800001/11378869-bbbf-49bc-92df-2d3455c2d47a_default/index.html",
 *   "embed_code": "<iframe src='//players.brightcove.net/1507807800001/11378869-bbbf-49bc-92df-2d3455c2d47a_default/index.html' allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>",
 *   "embed_in_page": "http://players.brightcove.net/1507807800001/11378869-bbbf-49bc-92df-2d3455c2d47a_default/in_page.embed",
 *   "preview_url": "http://preview-players.brightcove.net/v1/accounts/1507807800001/players/11378869-bbbf-49bc-92df-2d3455c2d47a/preview/embeds/default/master/index.html",
 *   "preview_embed_code": "<iframe src='//preview-players.brightcove.net/v1/accounts/1507807800001/players/11378869-bbbf-49bc-92df-2d3455c2d47a/preview/embeds/default/master/index.html' allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>"
 * }

 */


