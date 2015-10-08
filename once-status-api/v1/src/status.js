// get status by request id

/**
 * @api {post} /statuses/:reference_id Get Status by Reference ID
 * @apiName Get Status by Reference ID
 * @apiGroup Ingest
 * @apiVersion 1.0.0
 *
 * @apiDescription Allows you to ingest a new video into the Once system
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} reference_id The Reference ID for the job generated by the Once system
 *
 * @apiParamExample {String} Status Request Example:
 *     https://api.unicornmedia.com/status-api/statuses/2796350e-2125-4f04-b33a-59488aaa76c7
 *
 * @apiSuccess (Response Fields) {String} status The overall status of the job: COMPLETE, PENDING, PROCESSING, SKIPPED, or ERROR
 * @apiSuccess (Response Fields) {Number} startTime The time when the job began in epoch time (milliseconds)
 * @apiSuccess (Response Fields) {Number} completeTime The time when the job finished in epoch time (milliseconds)
 * @apiSuccess (Response Fields) {Object} steps The steps of the job
 * @apiSuccess (Response Fields) {Object} steps.ingest The ingest step
 * @apiSuccess (Response Fields) {String} steps.ingest.name The name of the step
 * @apiSuccess (Response Fields) {String} steps.ingest.status The status of ingest step: COMPLETE, PENDING, PROCESSING, SKIPPED, or ERROR
 * @apiSuccess (Response Fields) {Number} steps.ingest.startTime The time when the ingest began in epoch time (milliseconds)
 * @apiSuccess (Response Fields) {Number} steps.ingest.completeTime The time when the ingest finished in epoch time (milliseconds)
 * @apiSuccess (Response Fields) {Object} steps.input The request inputs
 * @apiSuccess (Response Fields) {String} steps.input.foreign_key The unique identifier for the asset
 * @apiSuccess (Response Fields) {String} steps.input.domainId The domain id
 * @apiSuccess (Response Fields) {String} steps.input.catalog_id The catalog id
 * @apiSuccess (Response Fields) {String[]} steps.input.keywords The keyword array for the asset
 * @apiSuccess (Response Fields) {Object} steps.input.metadata The metadata map for the asset
 * @apiSuccess (Response Fields) {Object} steps.input.media The media input
 * @apiSuccess (Response Fields) {String} steps.input.media.sourceURL The media source URL
 * @apiSuccess (Response Fields) {Object[]} steps.input.notifications Array of notification maps
 * @apiSuccess (Response Fields) {Object[]} steps.input.publicationRules Array of publication rule maps
 * @apiSuccess (Response Fields) {Object[]} steps.input.cuePoints Array of cur point maps
 * @apiSuccess (Response Fields) {Object} steps.output The job output
 * @apiSuccess (Response Fields) {String} steps.output.mediaItemId The media item id
 * @apiSuccess (Response Fields) {Boolean} steps.output.hasChanged Whether the media item has been modified
 * @apiSuccess (Response Fields) {Object} steps.output.description Description object for the media item
 * @apiSuccess (Response Fields) {String} steps.output.description.url URL for the media item
 * @apiSuccess (Response Fields) {DateString} steps.output.description.lastModified Date/time the media item was last modified
 * @apiSuccess (Response Fields) {String} steps.output.description.etag Date/time the media item etag
 * @apiSuccess (Response Fields) {Number} steps.output.description.fileSize size of the output media item in bytes
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "requestId": "2796350e-2125-4f04-b33a-59488aaa76c7"
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your policy key is correct
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

