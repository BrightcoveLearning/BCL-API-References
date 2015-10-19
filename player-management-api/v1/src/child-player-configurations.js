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
 * @apiParam (Path Parameters) {String} account_id account ID
 * @apiParam (Path Parameters) {String} player_id player ID
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