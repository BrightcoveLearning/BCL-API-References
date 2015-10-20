// Get notification statuses

/**
 * @api {get} /notifications/:request_id Get Notification Status
 * @apiName Get Notification Status
 * @apiGroup Notifications
 * @apiVersion 1.0.0
 *
 * @apiDescription Get the status of notifications for a request job
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} request_id The request_id for the job
 *
 * @apiParamExample {Url} Status Request Example:
 *     https://api.unicornmedia.com/status-api/statuses/bc6cb7d4-be99-471b-adf3-7c501172b317
 *
 * @apiSuccess (Response Fields) {Object[]} notifications Array of notifications objects for the request id
 * @apiSuccess (Response Fields) {Number} notifications.sentTime the time the notification was sent in epoch milliseconds
 * @apiSuccess (Response Fields) {String} notifications.event the event the notification was sent for
 * @apiSuccess (Response Fields) {String} notifications.id the id for job
 * @apiSuccess (Response Fields) {String} notifications.status the step status sent
 * @apiSuccess (Response Fields) {Object} notifications.notification details of the notification
 * @apiSuccess (Response Fields) {String} notifications.notification.notification the step type for the notification
 * @apiSuccess (Response Fields) {String} notifications.notification.request_id the job request_id
 * @apiSuccess (Response Fields) {String} notifications.notification.domain the domain for the media item
 * @apiSuccess (Response Fields) {String} notifications.notification.catalog the catalog for the media item
 * @apiSuccess (Response Fields) {String} notifications.notification.title the media item title
 * @apiSuccess (Response Fields) {Number} notifications.notification.version the media item version
 * @apiSuccess (Response Fields) {Object} notifications.notification.metadata the media item metadata
 * @apiSuccess (Response Fields) {Object} notifications.details the notification details
 * @apiSuccess (Response Fields) {String} notifications.details.message the notification message
 * @apiSuccess (Response Fields) {String[]} notifications.targets array of target URLs for the notification
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "notifications": [{
 *            "sentTime": 1416417989795,
 *            "event": "ingest",
 *            "id": "26",
 *            "status": "COMPLETE",
 *            "notification": {
 *                "notification": "ingest",
 *                "request_id": "2796350e-2125-4f04-b33a-59488aaa76c7",
 *                "mediaItem": {
 *                    "id": "2d1d6fe7-6924-4d1d-ba06-d49b2d9f5f4b",
 *                    "foreign_key": "brightcove-once",
 *                    "domain": "b207b479-c841-4095-8918-978be9e18dee",
 *                    "catalog": "bc6cb7d4-be99-471b-adf3-7c501172b317",
 *                    "title": "brightcove-once",
 *                    "version": 0,
 *                    "metadata": {}
 *                },
 *                "details": {
 *                    "message": "Media Item Ingested."
 *                }
 *            },
 *            "targets": [
 *                "http://api-endpoint.com"
 *            ]
 *        }, {
 *            "sentTime": 1416516506046,
 *            "event": "transcode",
 *            "id": "77",
 *            "status": "COMPLETE",
 *            "notification": {
 *                "notification": "transcode",
 *                "request_id": "2796350e-2125-4f04-b33a-59488aaa76c7",
 *                "mediaItem": {
 *                    "id": "2d1d6fe7-6924-4d1d-ba06-d49b2d9f5f4b",
 *                    "foreign_key": "brightcove-once",
 *                    "domain": "b207b479-c841-4095-8918-978be9e18dee",
 *                    "catalog": "bc6cb7d4-be99-471b-adf3-7c501172b317",
 *                    "title": "brightcove-once",
 *                    "version": 0,
 *                    "metadata": {}
 *                },
 *                "details": {
 *                    "message": "Profile Transcoded.",
 *                    "profile": {
 *                        "id": "3345fa40-bbb6-11e3-87e6-005056835b09",
 *                        "name": "Once 3600 MP4 ZC 1280x720 96 29.97 H3_2"
 *                    }
 *                }
 *            },
 *            "targets": [
 *                "http://api-endpoint.com"
 *            ]
 *        }, {
 *            "sentTime": 1416516513655,
 *            "event": "transcode",
 *            "id": "129",
 *            "status": "COMPLETE",
 *            "notification": {
 *                "notification": "transcode",
 *                "request_id": "2796350e-2125-4f04-b33a-59488aaa76c7",
 *                "mediaItem": {
 *                    "id": "2d1d6fe7-6924-4d1d-ba06-d49b2d9f5f4b",
 *                    "foreign_key": "brightcove-once",
 *                    "domain": "b207b479-c841-4095-8918-978be9e18dee",
 *                    "catalog": "bc6cb7d4-be99-471b-adf3-7c501172b317",
 *                    "title": "brightcove-once",
 *                    "version": 0,
 *                    "metadata": {}
 *                },
 *                "details": {
 *                    "message": "Profile Transcoded.",
 *                    "profile": {
 *                        "id": "8260dd62-b49d-11e3-87e6-005056835b09",
 *                        "name": "Once 2500 MP4 ZC 960x540 96 29.97 M3_1"
 *                    }
 *                }
 *            },
 *            "targets": [
 *                "http://api-endpoint.com"
 *            ]
 *        }, {
 *            "sentTime": 1416516503504,
 *            "event": "transcode",
 *            "id": "132",
 *            "status": "COMPLETE",
 *            "notification": {
 *                "notification": "transcode",
 *                "request_id": "2796350e-2125-4f04-b33a-59488aaa76c7",
 *                "mediaItem": {
 *                    "id": "2d1d6fe7-6924-4d1d-ba06-d49b2d9f5f4b",
 *                    "foreign_key": "brightcove-once",
 *                    "domain": "b207b479-c841-4095-8918-978be9e18dee",
 *                    "catalog": "bc6cb7d4-be99-471b-adf3-7c501172b317",
 *                    "title": "brightcove-once",
 *                    "version": 0,
 *                    "metadata": {}
 *                },
 *                "details": {
 *                    "message": "Profile Transcoded.",
 *                    "profile": {
 *                        "id": "825d7a04-b49d-11e3-87e6-005056835b09",
 *                        "name": "Once 1900 MP4 ZC 960x540 96 29.97 M3_1"
 *                    }
 *                }
 *            },
 *            "targets": [
 *                "http://api-endpoint.com"
 *            ]
 *        }, {
 *            "sentTime": 1416418159982,
 *            "event": "publish",
 *            "id": "151",
 *            "status": "COMPLETE",
 *            "notification": {
 *                "notification": "publish",
 *                "request_id": "2796350e-2125-4f04-b33a-59488aaa76c7",
 *                "mediaItem": {
 *                    "id": "2d1d6fe7-6924-4d1d-ba06-d49b2d9f5f4b",
 *                    "foreign_key": "brightcove-once",
 *                    "domain": "b207b479-c841-4095-8918-978be9e18dee",
 *                    "catalog": "bc6cb7d4-be99-471b-adf3-7c501172b317",
 *                    "title": "brightcove-once",
 *                    "version": 0,
 *                    "metadata": {}
 *                },
 *                "details": {
 *                    "message": "Media Item Published."
 *                }
 *            },
 *            "targets": [
 *                "http://api-endpoint.com"
 *            ]
 *        }]
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your policy key is correct
 *
 *
 */

