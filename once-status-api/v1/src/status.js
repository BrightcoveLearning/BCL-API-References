// get status by request id

/**
 * @api {get} /statuses/:request_id Get Status by Request ID
 * @apiName Get Status by request ID
 * @apiGroup Status
 * @apiVersion 1.0.0
 *
 * @apiDescription Get the status of a request job
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} request_id The request ID for the job generated by the Once system
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
 * @apiSuccess (Response Fields) {Object} steps.ingest.input The request inputs
 * @apiSuccess (Response Fields) {String} steps.ingest.input.foreign_key The unique identifier for the asset
 * @apiSuccess (Response Fields) {String} steps.ingest.input.domainId The domain id
 * @apiSuccess (Response Fields) {String} steps.ingest.input.catalog_id The catalog id
 * @apiSuccess (Response Fields) {String[]} steps.ingest.input.keywords The keyword array for the asset
 * @apiSuccess (Response Fields) {Object} steps.ingest.input.metadata The metadata map for the asset
 * @apiSuccess (Response Fields) {Object} steps.ingest.input.media The media input
 * @apiSuccess (Response Fields) {String} steps.ingest.input.media.sourceURL The media source URL
 * @apiSuccess (Response Fields) {Object[]} steps.ingest.input.notifications Array of notification maps
 * @apiSuccess (Response Fields) {Object[]} steps.ingest.input.publicationRules Array of publication rule maps
 * @apiSuccess (Response Fields) {Object[]} steps.ingest.input.cuePoints Array of cur point maps
 * @apiSuccess (Response Fields) {Object} steps.ingest.output The job output
 * @apiSuccess (Response Fields) {String} steps.ingest.output.mediaItemId The media item id
 * @apiSuccess (Response Fields) {Boolean} steps.ingest.output.hasChanged Whether the media item has been modified
 * @apiSuccess (Response Fields) {Object} steps.ingest.output.description Description object for the media item
 * @apiSuccess (Response Fields) {String} steps.ingest.output.description.url URL for the media item
 * @apiSuccess (Response Fields) {DateString} steps.ingest.output.description.lastModified Date/time the media item was last modified
 * @apiSuccess (Response Fields) {String} steps.ingest.output.description.etag Date/time the media item etag
 * @apiSuccess (Response Fields) {Number} steps.ingest.output.description.fileSize size of the output media item in bytes
 * @apiSuccess (Response Fields) {Object} steps.transcode The transcode step
 * @apiSuccess (Response Fields) {String} steps.transcode.name The name of the step
 * @apiSuccess (Response Fields) {String} steps.transcode.status The status of transcode step: COMPLETE, PENDING, PROCESSING, SKIPPED, or ERROR
 * @apiSuccess (Response Fields) {Number} steps.transcode.startTime The time when the transcode began in epoch time (milliseconds)
 * @apiSuccess (Response Fields) {Number} steps.transcode.completeTime The time when the transcode finished in epoch time (milliseconds)
 * @apiSuccess (Response Fields) {Object} steps.transcode.output map of the transcode output
 * @apiSuccess (Response Fields) {String[]} steps.transcode.output.renditions array of rendition ids
 * @apiSuccess (Response Fields) {Object} steps.notification The notification step
 * @apiSuccess (Response Fields) {String} steps.notification.name The name of the step
 * @apiSuccess (Response Fields) {String} steps.notification.status The status of notification step: COMPLETE, PENDING, PROCESSING, SKIPPED, or ERROR
 * @apiSuccess (Response Fields) {Number} steps.notification.startTime The time when the notification began in epoch time (milliseconds)
 * @apiSuccess (Response Fields) {Number} steps.notification.completeTime The time when the notification finished in epoch time (milliseconds)
 * @apiSuccess (Response Fields) {Object} steps.notification.input map of the notification inputs
 * @apiSuccess (Response Fields) {String} steps.notification.input.mediaItemId The media item id
 * @apiSuccess (Response Fields) {String} steps.notification.input.domainId The domain id
 * @apiSuccess (Response Fields) {String} steps.notification.input.catalog_id The catalog id
 * @apiSuccess (Response Fields) {Number} steps.notification.input.version The media item version
 * @apiSuccess (Response Fields) {Number} steps.notification.input.durationMS Duration of the media item in milliseconds
 * @apiSuccess (Response Fields) {Object[]} steps.notification.input.notificationOverrides Array of notification overrides, if any
 * @apiSuccess (Response Fields) {Object} steps.notification.output map of the notification outputs
 * @apiSuccess (Response Fields) {Boolean} steps.notification.output.sentNotification whether notification was sent
 * @apiSuccess (Response Fields) {Object} steps.publish The publish step
 * @apiSuccess (Response Fields) {String} steps.publish.name The name of the step
 * @apiSuccess (Response Fields) {String} steps.publish.status The status of publish step: COMPLETE, PENDING, PROCESSING, SKIPPED, or ERROR
 * @apiSuccess (Response Fields) {Number} steps.publish.startTime The time when the publish began in epoch time (milliseconds)
 * @apiSuccess (Response Fields) {Number} steps.publish.completeTime The time when the publish finished in epoch time (milliseconds)
 * @apiSuccess (Response Fields) {Object} steps.publish.output map of the publish output
 * @apiSuccess (Response Fields) {Number} steps.publish.output.version Version of the media item
 * @apiSuccess (Response Fields) {Number} steps.publish.output.duration Duration of the media item in milliseconds
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "status": "COMPLETE",
 *        "startTime": 1415648939000,
 *        "completeTime": 1415649217000,
 *        "steps": {
 *            "ingest": {
 *                "name": "ingest",
 *                "status": "COMPLETE",
 *                "startTime": 1415648939000,
 *                "completeTime": 1415648942000,
 *                "input": {
 *                    "foreign_key": "brightcove-once",
 *                    "domainId": "b207b479-c841-4095-8918-978be9e18dee",
 *                    "catalog_id": "bc6cb7d4-be99-471b-adf3-7c501172b317",
 *                    "keywords": {
 *                        "brightcove",
 *                        "once"
 *                    },
 *                    "metadata": {
 *                        "accoundId": "12345",
 *                        "company": "brightcove",
 *                        "product": "once",
 *                        "eventId": "321"
 *                    },
 *                    "media": {
 *                        "sourceURL": "http://mirror.cessen.com/blender.org/peach/trailer/trailer_1080p.mov"
 *                    },
 *                    "notifications": [],
 *                    "publicationRules": [],
 *                    "cuePoints": [
 *                        {
 *                          "valueIn": 10,
 *                          "unit": "Seconds"
 *                        },
 *                        {
 *                          "valueIn": 25,
 *                          "unit": "Seconds"
 *                        }
 *                    ]
 *                },
 *                "output": {
 *                    "mediaItemId": "2d1d6fe7-6924-4d1d-ba06-d49b2d9f5f4b",
 *                    "hasChanged": true,
 *                    "description": {
 *                        "url": "http://mirror.cessen.com/blender.org/peach/trailer/trailer_1080p.mov",
 *                        "lastModified": "Wed, 07 May 2014 22:21:59 GMT",
 *                        "etag": "\"b2f673c3426acf1:0\"",
 *                        "fileSize": 60047891
 *                    }
 *                }
 *            },
 *            "transcode": {
 *                "name": "transcode",
 *                "status": "COMPLETE",
 *                "startTime": 1415648968000,
 *                "completeTime": 1415649216000,
 *                "output": {
 *                    "renditions": [
 *                        "3345fa40-bbb6-11e3-87e6-005056835b09",
 *                        "45dd911d-54ac-11e4-9f45-005056835b09",
 *                        "8249c274-b49d-11e3-87e6-005056835b09",
 *                        "824d3f86-b49d-11e3-87e6-005056835b09",
 *                        "825072a0-b49d-11e3-87e6-005056835b09",
 *                        "8253a884-b49d-11e3-87e6-005056835b09",
 *                        "8256d34a-b49d-11e3-87e6-005056835b09",
 *                        "825a2774-b49d-11e3-87e6-005056835b09",
 *                        "825d7a04-b49d-11e3-87e6-005056835b09",
 *                        "8260dd62-b49d-11e3-87e6-005056835b09",
 *                        "d34d2cfb-3478-11e4-8b0b-005056835b09",
 *                        "d34d2d07-3478-11e4-8b0b-005056835b09"
 *                    ]
 *                }
 *            },
 *            "notification": {
 *                "name": "notification",
 *                "status": "COMPLETE",
 *                "startTime": 1415649020000,
 *                "completeTime": 1415649217000,
 *                "input": {
 *                    "mediaItemId": "2d1d6fe7-6924-4d1d-ba06-d49b2d9f5f4b",
 *                    "domainId": "b207b479-c841-4095-8918-978be9e18dee",
 *                    "catalog_id": "bc6cb7d4-be99-471b-adf3-7c501172b317",
 *                    "version": 0,
 *                    "durationMS": 87754,
 *                    "notificationOverrides": []
 *                },
 *                "output": {
 *                    "sentNotification": false
 *                }
 *            },
 *            "publish": {
 *                "name": "publish",
 *                "status": "COMPLETE",
 *                "startTime": 1415649217000,
 *                "completeTime": 1415649217000,
 *                "output": {
 *                    "version": 0,
 *                    "duration": 87754
 *                }
 *            }
 *        }
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your policy key is correct
 *
 *
 */

// get raw status by request id

/**
 * @api {get} /statuses/:request_id/raw Get Raw Status by Request ID
 * @apiName Get Raw Status by request ID
 * @apiGroup Status
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets the raw status of a request
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} request_id The request ID for the job generated by the Once system
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
 * @apiSuccess (Response Fields) {Object} steps.ingest.input The request inputs
 * @apiSuccess (Response Fields) {String} steps.ingest.input.foreign_key The unique identifier for the asset
 * @apiSuccess (Response Fields) {String} steps.ingest.input.domainId The domain id
 * @apiSuccess (Response Fields) {String} steps.ingest.input.catalog_id The catalog id
 * @apiSuccess (Response Fields) {String[]} steps.ingest.input.keywords The keyword array for the asset
 * @apiSuccess (Response Fields) {Object} steps.ingest.input.metadata The metadata map for the asset
 * @apiSuccess (Response Fields) {Object} steps.ingest.input.media The media input
 * @apiSuccess (Response Fields) {String} steps.ingest.input.media.sourceURL The media source URL
 * @apiSuccess (Response Fields) {Object[]} steps.ingest.input.notifications Array of notification maps
 * @apiSuccess (Response Fields) {Object[]} steps.ingest.input.publicationRules Array of publication rule maps
 * @apiSuccess (Response Fields) {Object[]} steps.ingest.input.cuePoints Array of cur point maps
 * @apiSuccess (Response Fields) {Object} steps.ingest.output The job output
 * @apiSuccess (Response Fields) {String} steps.ingest.output.mediaItemId The media item id
 * @apiSuccess (Response Fields) {Boolean} steps.ingest.output.hasChanged Whether the media item has been modified
 * @apiSuccess (Response Fields) {Object} steps.ingest.output.description Description object for the media item
 * @apiSuccess (Response Fields) {String} steps.ingest.output.description.url URL for the media item
 * @apiSuccess (Response Fields) {DateString} steps.ingest.output.description.lastModified Date/time the media item was last modified
 * @apiSuccess (Response Fields) {String} steps.ingest.output.description.etag Date/time the media item etag
 * @apiSuccess (Response Fields) {Number} steps.ingest.output.description.fileSize size of the output media item in bytes
 * @apiSuccess (Response Fields) {Object} steps.transcode The transcode step
 * @apiSuccess (Response Fields) {String} steps.transcode.name The name of the step
 * @apiSuccess (Response Fields) {String} steps.transcode.status The status of transcode step: COMPLETE, PENDING, PROCESSING, SKIPPED, or ERROR
 * @apiSuccess (Response Fields) {Number} steps.transcode.startTime The time when the transcode began in epoch time (milliseconds)
 * @apiSuccess (Response Fields) {Number} steps.transcode.completeTime The time when the transcode finished in epoch time (milliseconds)
 * @apiSuccess (Response Fields) {Object} steps.transcode.output map of the transcode output
 * @apiSuccess (Response Fields) {String[]} steps.transcode.output.renditions array of rendition ids
 * @apiSuccess (Response Fields) {Object} steps.notification The notification step
 * @apiSuccess (Response Fields) {String} steps.notification.name The name of the step
 * @apiSuccess (Response Fields) {String} steps.notification.status The status of notification step: COMPLETE, PENDING, PROCESSING, SKIPPED, or ERROR
 * @apiSuccess (Response Fields) {Number} steps.notification.startTime The time when the notification began in epoch time (milliseconds)
 * @apiSuccess (Response Fields) {Number} steps.notification.completeTime The time when the notification finished in epoch time (milliseconds)
 * @apiSuccess (Response Fields) {Object} steps.notification.input map of the notification inputs
 * @apiSuccess (Response Fields) {String} steps.notification.input.mediaItemId The media item id
 * @apiSuccess (Response Fields) {String} steps.notification.input.domainId The domain id
 * @apiSuccess (Response Fields) {String} steps.notification.input.catalog_id The catalog id
 * @apiSuccess (Response Fields) {Number} steps.notification.input.version The media item version
 * @apiSuccess (Response Fields) {Number} steps.notification.input.durationMS Duration of the media item in milliseconds
 * @apiSuccess (Response Fields) {Object[]} steps.notification.input.notificationOverrides Array of notification overrides, if any
 * @apiSuccess (Response Fields) {Object} steps.notification.output map of the notification outputs
 * @apiSuccess (Response Fields) {Boolean} steps.notification.output.sentNotification whether notification was sent
 * @apiSuccess (Response Fields) {Object} steps.publish The publish step
 * @apiSuccess (Response Fields) {String} steps.publish.name The name of the step
 * @apiSuccess (Response Fields) {String} steps.publish.status The status of publish step: COMPLETE, PENDING, PROCESSING, SKIPPED, or ERROR
 * @apiSuccess (Response Fields) {Number} steps.publish.startTime The time when the publish began in epoch time (milliseconds)
 * @apiSuccess (Response Fields) {Number} steps.publish.completeTime The time when the publish finished in epoch time (milliseconds)
 * @apiSuccess (Response Fields) {Object} steps.publish.output map of the publish output
 * @apiSuccess (Response Fields) {Number} steps.publish.output.version Version of the media item
 * @apiSuccess (Response Fields) {Number} steps.publish.output.duration Duration of the media item in milliseconds
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "status": "COMPLETE",
 *        "startTime": 1415648939000,
 *        "completeTime": 1415649217000,
 *        "steps": {
 *            "ingest": {
 *                "name": "ingest",
 *                "status": "COMPLETE",
 *                "startTime": 1415648939000,
 *                "completeTime": 1415648942000,
 *                "input": {
 *                    "foreign_key": "brightcove-once",
 *                    "domainId": "b207b479-c841-4095-8918-978be9e18dee",
 *                    "catalog_id": "bc6cb7d4-be99-471b-adf3-7c501172b317",
 *                    "keywords": {
 *                        "brightcove",
 *                        "once"
 *                    },
 *                    "metadata": {
 *                        "accoundId": "12345",
 *                        "company": "brightcove",
 *                        "product": "once",
 *                        "eventId": "321"
 *                    },
 *                    "media": {
 *                        "sourceURL": "http://mirror.cessen.com/blender.org/peach/trailer/trailer_1080p.mov"
 *                    },
 *                    "notifications": [],
 *                    "publicationRules": [],
 *                    "cuePoints": [
 *                        {
 *                          "valueIn": 10,
 *                          "unit": "Seconds"
 *                        },
 *                        {
 *                          "valueIn": 25,
 *                          "unit": "Seconds"
 *                        }
 *                    ]
 *                },
 *                "output": {
 *                    "mediaItemId": "2d1d6fe7-6924-4d1d-ba06-d49b2d9f5f4b",
 *                    "hasChanged": true,
 *                    "description": {
 *                        "url": "http://mirror.cessen.com/blender.org/peach/trailer/trailer_1080p.mov",
 *                        "lastModified": "Wed, 07 May 2014 22:21:59 GMT",
 *                        "etag": "\"b2f673c3426acf1:0\"",
 *                        "fileSize": 60047891
 *                    }
 *                }
 *            },
 *            "transcode": {
 *                "name": "transcode",
 *                "status": "COMPLETE",
 *                "startTime": 1415648968000,
 *                "completeTime": 1415649216000,
 *                "output": {
 *                    "renditions": [
 *                        "3345fa40-bbb6-11e3-87e6-005056835b09",
 *                        "45dd911d-54ac-11e4-9f45-005056835b09",
 *                        "8249c274-b49d-11e3-87e6-005056835b09",
 *                        "824d3f86-b49d-11e3-87e6-005056835b09",
 *                        "825072a0-b49d-11e3-87e6-005056835b09",
 *                        "8253a884-b49d-11e3-87e6-005056835b09",
 *                        "8256d34a-b49d-11e3-87e6-005056835b09",
 *                        "825a2774-b49d-11e3-87e6-005056835b09",
 *                        "825d7a04-b49d-11e3-87e6-005056835b09",
 *                        "8260dd62-b49d-11e3-87e6-005056835b09",
 *                        "d34d2cfb-3478-11e4-8b0b-005056835b09",
 *                        "d34d2d07-3478-11e4-8b0b-005056835b09"
 *                    ]
 *                }
 *            },
 *            "notification": {
 *                "name": "notification",
 *                "status": "COMPLETE",
 *                "startTime": 1415649020000,
 *                "completeTime": 1415649217000,
 *                "input": {
 *                    "mediaItemId": "2d1d6fe7-6924-4d1d-ba06-d49b2d9f5f4b",
 *                    "domainId": "b207b479-c841-4095-8918-978be9e18dee",
 *                    "catalog_id": "bc6cb7d4-be99-471b-adf3-7c501172b317",
 *                    "version": 0,
 *                    "durationMS": 87754,
 *                    "notificationOverrides": []
 *                },
 *                "output": {
 *                    "sentNotification": false
 *                }
 *            },
 *            "publish": {
 *                "name": "publish",
 *                "status": "COMPLETE",
 *                "startTime": 1415649217000,
 *                "completeTime": 1415649217000,
 *                "output": {
 *                    "version": 0,
 *                    "duration": 87754
 *                }
 *            }
 *        }
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your policy key is correct
 *
 *
 */

// Get status by foreign key and catalog

/**
 * @api {get} /statuses Status by Foreign Key/Catalog
 * @apiName Status by Foreign Key/Catalog
 * @apiGroup Status
 * @apiVersion 1.0.0
 *
 * @apiDescription Provides a summary of notifications for the medium item
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (URL Parameters) {String} foreign_key The foreign key you created for a media item
 * @apiParam (URL Parameters) {String} catalog The catalog ID generated by the Once system
 *
 * @apiParamExample {String} Status Request Example:
 *     https://api.unicornmedia.com/status-api/statuses?foreignKey=wildlife07&catalog=bc6cb7d4-be99-471b-adf3-7c501172b317
 *
 * @apiSuccess (Response Fields) {Object[]} requests Array of request objects for that foreign key / catalog
 * @apiSuccess (Response Fields) {String} requests.request_id the request id
 * @apiSuccess (Response Fields) {Number} requests.startTime the job start time in epoch milliseconds
 * @apiSuccess (Response Fields) {String} requests.href the url to get the full status of the request
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "requests": [
 *            {
 *                "request_id": "2796350e-2125-4f04-b33a-59488aaa76c7",
 *                "startTime": 1412214761091,
 *                "href": "https://api.unicornmedia.com/status-api/statuses/2796350e-2125-4f04-b33a-59488aaa76c7"
 *            },
 *            {
 *                "request_id": "afa0b15e-1354-4348-8917-8185ef11c2cb",
 *                "startTime": 1412116933401,
 *                "href": "https://api.unicornmedia.com/status-api/statuses/afa0b15e-1354-4348-8917-8185ef11c2cb"
 *            }
 *        ]
 *    }
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your policy key is correct
 *
 *
 */

// Get notification statuses

/**
 * @api {get} /notifications/:request_id Get Notification Status
 * @apiName Get Notification Status
 * @apiGroup Status
 * @apiVersion 1.0.0
 *
 * @apiDescription Get the status of notifications for a request job
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} request_id The request_id for the job
 *
 * @apiParamExample {String} Status Request Example:
 *     https://api.unicornmedia.com/status-api/statuses/bc6cb7d4-be99-471b-adf3-7c501172b317
 *
 * @apiSuccess (Response Fields) {Object[]} notifications Array of notifications objects for the request id
 * @apiSuccess (Response Fields) {Number} notifications.sentTime the time the notification was sent in epoch milliseconds
 * @apiSuccess (Response Fields) {String} notifications.event the event the notification was sent for
 * @apiSuccess (Response Fields) {String} notifications.id the id for the notification
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

// request notification resend

/**
 * @api {get} /notifications/:request_id Get Notification Status
 * @apiName Get Notification Status
 * @apiGroup Status
 * @apiVersion 1.0.0
 *
 * @apiDescription Get the status of notifications for a request job
 *
 * @apiHeader {String} X-BC-ONCE-API-KEY: {api_key}
 *
 * @apiParam (Path Parameters) {String} request_id The request_id for the job
 *
 * @apiParamExample {String} Status Request Example:
 *     https://api.unicornmedia.com/status-api/statuses/bc6cb7d4-be99-471b-adf3-7c501172b317
 *
 * @apiSuccess (Response Fields) {Object[]} notifications Array of notifications objects for the request id
 * @apiSuccess (Response Fields) {Number} notifications.sentTime the time the notification was sent in epoch milliseconds
 * @apiSuccess (Response Fields) {String} notifications.event the event the notification was sent for
 * @apiSuccess (Response Fields) {String} notifications.id the id for the notification
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

