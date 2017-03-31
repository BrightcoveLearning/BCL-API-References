// Get an Embed Configuration

/**
 * @api {get} /accounts/:account_id/players/:player_id/players/:embed_id/:branch Get an Embed Configuration
 * @apiName Get an Embed Configuration
 * @apiGroup Embed Configurations
 * @apiVersion 1.0.0
 *
 * @apiDescription Get the configuration for an embed. You must specify the branch, either `master' or 'preview'.
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id account ID
 * @apiParam (Path Parameters) {String} player_id player ID
 * @apiParam (Path Parameters) {String} embed_id embed ID
 * @apiParam (Path Parameters) {String} branch branch to retrieve, master (published) or preview
 *
 * @apiParam (Request Body Fields) {String} [comment] parameter which will be placed in the GitHub repo of the player
 *
 * @apiParamExample {curl} curl Statement:
 *  curl \
 *   --header "Content-Type: application/json" \
 *   --user $EMAIL \
 *   --request GET \
 *   https://players.api.brightcove.com/v1/accounts/:account_id/players/:player_id/embeds/:embed_id/configuration/:branch
 *
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object} configuration configuration object, refer to the **PLAYER CONFIGURATIONS > Get a Player Configuration** above for all player options.
 *
 * @apiSuccessExample {JSON} Success Response:
 * {
 *   "configuration": {
 *     "video_cloud": {
 *       "video": "4443311217001"
 *     }
 *   },
 *   "name": "MySampleEmbedPlayer2"
 * }
*/

// Update an Embed Configuration

/**
 * @api {patch} /accounts/:account_id/players/:player_id/players/:embed_id/configuration Update an Embed Configuration
 * @apiName Update an Embed Configuration
 * @apiGroup Embed Configurations
 * @apiVersion 1.0.0
 *
 * @apiDescription Update the configuration for an embed. Note that you will need to publish the altered embed for optimization and production use.

You can also use a `PUT` HTTP method instead of the `PATCH` shown here. When using `PUT` it replaces all embed configuration information, so you must supply all embed configuration information when using `PUT`. In contrast, `PATCH` appends or modifies existing configuration information. Using `PUT` is such rare use case it is not detailed in this reference.
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id account ID
 * @apiParam (Path Parameters) {String} player_id player ID
 * @apiParam (Path Parameters) {String} embed_id embed ID
 *
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {String} name player name
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {String} description player description
 * @apiParam (Request Body Fields - Note: Fields in configuration objects need to be set only if you wish to change their values) {Object} configuration configuration object, refer to the **PLAYER CONFIGURATIONS > Update a Player Configuration** above for all player options.
 *
 * @apiParamExample {curl} curl Statement:
 * curl \
 *   --header "Content-Type: application/json" \
 *   --user $EMAIL \
 *   --request PATCH \
 *   --data '{
 *       "name": "New Patched Embed Name",
 *       "description": "New patched embed description",
 *       "configuration": {
 *         "video_cloud": {
 *           "video": "123456789"
 *         },
 *         "languages": [
 *           "de",
 *           "es"
 *         ]
 *       }
 *     }' \
 *   https://players.api.brightcove.com/v1/accounts/:account_id/players/:player_id/embeds/:embed_id/configuration
 *
 * @apiSuccess (Response Fields) {String} preview_url URL to preview embed
 * @apiSuccess (Response Fields) {String} preview_embed_code preview embed iframe tag
 *
 * @apiSuccessExample {JSON} Success Response:
 * {
 *   "preview_url": "http://preview-players.brightcove.net/v1/accounts/1507807800001/players/6afea3cd-adfd-45ac-9e47-3242a7f46754/master/embeds/53c02fa5-6344-4c39-be04-b19cdcb69665/preview/index.html",
 *   "preview_embed_code": "<iframe src='//preview-players.brightcove.net/v1/accounts/1507807800001/players/6afea3cd-adfd-45ac-9e47-3242a7f46754/master/embeds/53c02fa5-6344-4c39-be04-b19cdcb69665/preview/index.html' allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>"
 * }
*/


// View Merged configurations

/**
 * @api {get} /accounts/:account_id/players/:player_id/players/:embed_id/configuration Get Configuration Combinations
 * @apiName Get Configuration Combinations
 * @apiGroup Embed Configurations
 * @apiVersion 1.0.0
 *
 * @apiDescription Retrieve the configuration for a parent/child combination of master and preview branches.

 <strong>If you are using the second query parameter (and hence using the ampersand [&]), you MUST use quotes around the endpoint or the curl statement will fail at the ampersand.</strong> For example:

 `"https://players.api.brightcove.com/v1/accounts/$ACCOUNT_ID/players/$PLAYER_ID/embeds/$EMBED_ID/configuration/merged?playerBranch=preview&embedBranch=master"`

 Using this endpoint provides a way to view what the resulting configuration would be when combining different combinations of parent and child (also called embed) versions of players. You can fetch the resulting JSON configuration of any of these four combinations:

- published parent - published child
- published parent - preview child
- preview parent - published child
- preview parent - preview child

Using this endpoint does not change any configurations, it is only useful for seeing results of merging changes to configurations.


 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id account ID
 * @apiParam (Path Parameters) {String} player_id player ID
 * @apiParam (Path Parameters) {String} embed_id embed ID
 * @apiParam (Path Parameters) {String} playerBranch branch of the player to use, master or preview, for merged combination
 * @apiParam (Path Parameters) {String} embedBranch branch of the embed to use, master or preview, for merged combination
 *
 * @apiParamExample {curl} curl Statement:
 * curl \
 *   --header "Content-Type: application/json" \
 *   --user $EMAIL \
 *   --request GET \
 *   "https://players.api.brightcove.com/v1/accounts/:account_id/players/:player_id/embeds/:embedID/configuration/merged?playerBranch=master&embedBranch=preview"
 *
 * @apiSuccess (Response Fields - Note: Fields in configuration objects will be displayed in the response only if explicitly set) {Object} configuration configuration object, refer to the **PLAYER CONFIGURATIONS > Get a Player Configuration** above for all player options.
 *
 * @apiSuccessExample {JSON} Success Response:
 * {
 *   "media": {
 *     "sources": [{
 *       "src": "http://solutions.brightcove.com/bcls/assets/videos/Tiger.mp4",
 *       "type": "video/mp4"
 *     }]
 *   },
 *   "video_cloud": {
 *     "policy_key": "BCpkADawqM2WNV-RrwVCqJKRQNuAmQbBm9xjFmUQxex81f_1xg40em1vNbmeMR-IUYpSFTgdrf0uxs4SU0SGUv6LdVQMtVvb9JMGq7_KVhaxGqx3x14DxCm0xQyHb9_zYKIhTLNZV5SmsVpy"
 *   },
 *   "player": {
 *     "template": {
 *       "name": "single-video-template",
 *       "version": "1.14.26"
 *     }
 *   },
 *   "configuration": {
 *     "video_cloud": {
 *       "video": "123456789"
 *     },
 *     "languages": ["de", "es"]
 *   },
 *   "name": "New Patched Embed Name",
 *   "description": "New patched embed description",
 *   "account_id": "1507807800001",
 *   "player_id": "6afea3cd-adfd-45ac-9e47-3242a7f46754",
 *   "embed_id": "53c02fa5-6344-4c39-be04-b19cdcb69665",
 *   "player_name": "MySamplePlayer"
}
*/
