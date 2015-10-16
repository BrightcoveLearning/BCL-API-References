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
 * @apiSuccess (Response Fields) {String} id player ID
 * @apiSuccess (Response Fields) {String} url URL to published player
 * @apiSuccess (Response Fields) {String} embed_code published player iframe tag
 * @apiSuccess (Response Fields) {String} embed_in_page URL to browse to retrieve the in-page embed code for published player
 *
 * @apiSuccessExample {json} Success Response:
 * {
 *   "id": "49f70c8b-e16b-4fc9-b9ae-2cd361785e7a",
 *   "url": "http://players.brightcove.net/1507807800001/49f70c8b-e16b-4fc9-b9ae-2cd361785e7a_default/index.html",
 *   "embed_code": "<iframe src='//players.brightcove.net/1507807800001/49f70c8b-e16b-4fc9-b9ae-2cd361785e7a_default/index.html'  * allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>",
 *   "embed_in_page": "http://players.brightcove.net/1507807800001/49f70c8b-e16b-4fc9-b9ae-2cd361785e7a_default/in_page.embed"
 * }
*/