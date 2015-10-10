// get domain publication rules

/**
 * @api {get} domains/:domain_id/publicationRules Get Domain Publication Rules
 * @apiName Get Domain Publication Rules
 * @apiGroup Publication_Rules
 * @apiVersion 1.0.0
 *
 * @apiDescription Allows you to ingest a new video into the Once system
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} domain_id The domain id for your Once account
 *
 * @apiParamExample {Url} Ingest Request Body Example:
 *    https://api.unicornmedia.com/media-management-api/domains/4eca7ac5-3954-416d-bb23-e65aa511b85a/publicationRules
 *
 * @apiSuccess (Response Fields) {String[]} [publicationRuleIds] The ids for the domain publication rules
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    [
 *        "c039f7e3-5b3d-4aec-a8d9-6346ccc57dd5",
 *        "147184ae-1a51-4a63-bc10-3a9debbe03fa",
 *        "b44f0463-7c69-45a2-8dfe-aa556c333b74",
 *        "84658fcc-efe6-4dba-99e9-37601fbcf1c9",
 *        "671a090b-9cc7-4362-a3b1-4794c1f15326",
 *        "5d1d5044-05f0-4be2-9dad-323c9c6adf8f",
 *        "e202e955-6653-4f33-91f0-c004b65c8a1e",
 *        "a9ff5331-9eb8-45b3-8fc5-2a00bfb84642"
 *    ]
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your api key is correct
 * @apiError (Error 4xx) {json} Validation Errors 404: The api couldn't find the resource you requested
 *
 * @apiErrorExample {json} 400 Error Response
 *    HTTP/1.1 400 Validation Errors
 *    {
 *        "requestId": "2796350e-2125-4f04-b33a-59488aaa76c7",
 *        "error": "Validation Errors",
 *        "fieldErrors": {
 *            "publicationRule": [
 *                "Publication rule with end date 0.0 is in the past.",
 *                "Publication rule end date: 0.0 preceeds 1412025402"
 *            ]
 *        }
 *    }
 *
 *
 */

