// Get an Embed Configuration

/**
 * @api {get} accounts/:account_id/players/:player_id/players/:embed_id/:branch Get an Embed Configuration
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
 * @apiSuccess (Response Fields) {String} id embed ID
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
 * @api {patch} accounts/:account_id/players/:player_id/players/:embed_id/configuration Update an Embed Configuration
 * @apiName Update an Embed Configuration
 * @apiGroup Embed Configurations
 * @apiVersion 1.0.0
 *
 * @apiDescription Update the configuration for an embed. Note that you will need to publish the altered embed for optimization and production use.<br><br>You can also use a `PUT` HTTP Method instead of the `PATCH` shown here. When using `PUT` it replaces embed information so you must supply all embed configuration information, where as `PATCH` appends or modifies. Using `PUT` is such are rate use case it is not detailed in this reference.
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} account_id account ID
 * @apiParam (Path Parameters) {String} player_id player ID
 * @apiParam (Path Parameters) {String} embed_id embed ID
 *
 * @apiParam (Request Body Fields) {String} [name] player name
 * @apiParam (Request Body Fields) {String} [description] player description
 * @apiParam (Request Body Fields) {Object} [configuration] configuration object, refer to the **PLAYER CONFIGURATIONS > Update a Player Configuration** above for all player options.
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