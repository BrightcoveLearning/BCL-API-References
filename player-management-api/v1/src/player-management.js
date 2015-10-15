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
 *
 * @apiSuccess (Response Fields) {String} accountId account ID
 * @apiSuccess (Response Fields) {String} id video id
 * @apiSuccess (Response Fields) {String} name name give to player
 * @apiSuccess (Response Fields) {Object} branches contains objects for the preview and master (published) player
 * @apiSuccess (Response Fields) {Object} branches.preview contains preview player object
 * @apiSuccess (Response Fields) {Object} branches.preview.configuration configuration of preview player
 * @apiSuccess (Response Fields) {Object} branches.preview.configuration.autoadvance autoadvance setting if using playlists: 0 for no wait; a number for seconds between advnace; null to cancel autoadvance
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
 * @apiSuccess (Response Fields) {Object} branches.preview.configuration.autoadvance autoadvance setting if using playlists: 0 for no wait; a number for seconds between advnace; null to cancel autoadvance
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
 * @apiSuccess (Response Fields) {Object[]} items array of player objects
 * @apiSuccess (Response Fields) {Number} item_count number of player objects in array
 * @apiSuccess (Response Fields) {String} accountId account ID
 * @apiSuccess (Response Fields) {String} id video id
 * @apiSuccess (Response Fields) {String} name name give to player
 * @apiSuccess (Response Fields) {Object} branches contains objects for the preview and master (published) player
 * @apiSuccess (Response Fields) {Object} branches.preview contains preview player object
 * @apiSuccess (Response Fields) {Object} branches.preview.configuration configuration of preview player
 * @apiSuccess (Response Fields) {Object} branches.preview.configuration.autoadvance autoadvance setting if using playlists: 0 for no wait; a number for seconds between advnace; null to cancel autoadvance
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
 * @apiSuccess (Response Fields) {Object} branches.preview.configuration.autoadvance autoadvance setting if using playlists: 0 for no wait; a number for seconds between advnace; null to cancel autoadvance
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
 * @apiParam (Request Body Fields) {String}
 * @apiParam (Request Body Fields) {String}
 * @apiParam (Request Body Fields) {String}
 * @apiParam (Request Body Fields) {String}
 * @apiParam (Request Body Fields) {String}
 * @apiParam (Request Body Fields) {String}
 * @apiParam (Request Body Fields) {String}
 * @apiParam (Request Body Fields) {String}
 * @apiParam (Request Body Fields) {String}
 * @apiParam (Request Body Fields) {String}
 * @apiParam (Request Body Fields) {String}
 * @apiParam (Request Body Fields) {String}
 * @apiParam (Request Body Fields) {String}
 */


