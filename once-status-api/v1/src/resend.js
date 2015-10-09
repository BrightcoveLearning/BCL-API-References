// request notification resend

/**
 * @api {get} /notifications/:request_id/:notification_type Request Notifications Resend
 * @apiName Request Notifications Resend
 * @apiGroup Resend
 * @apiVersion 1.0.0
 *
 * @apiDescription Get the status of notifications for a request job
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} request_id The request_id for the job
 * @apiParam (Path Parameters) {String="ingest","update","transcode","timedtext","error","publish"} notification_type The notification type to be resent
 * @apiParam (Path Parameters) {String} [id] The id for a single job that you want notifications resent for
 *
 * @apiParamExample {Url} Status Request Example:
 *     https://api.unicornmedia.com/status-api/notifications/bc6cb7d4-be99-471b-adf3-7c501172b317/transcode
 *
 * @apiSuccess (Response Fields) {Object[]} notication_type This will be the notification type you specified in the request &mdash; i.e. "transcode"
 * @apiSuccess (Response Fields) {String} notication_type.id The single job id
 * @apiSuccess (Response Fields) {Boolean} notication_type.submitted Whether the notification was resent
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "transcode": [
 *            {
 *                "id": "77",
 *                "submitted": true
 *            },
 *            {
 *                "id": "129",
 *                "submitted": true
 *            },
 *            {
 *                "id": "132",
 *                "submitted": true
 *            }
 *        ]
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your policy key is correct
 *
 *
 */

