// get custom fields

/**
 * @api {get} /accounts/:account_id/video_fields Get Custom Fields
 * @apiName Get Custom Fields
 * @apiGroup Custom Fields
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets list of custom fields for the account
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {Number} account_id Video Cloud account ID.
 *
 * @apiParamExample {String} Get Custom Fields Example:
 *     https://cms.api.brightcove.com/v1/accounts/57838016001/video_fields
 *
 * @apiSuccess (Response Fields) {Object[]} custom_fields array of custom field maps
 * @apiSuccess (Response Fields) {String} custom_fields.description description (instruction for user)
 * @apiSuccess (Response Fields) {String} custom_fields.display_name display name
 * @apiSuccess (Response Fields) {String[]} custom_fields.enum_values array of string values for select type fields
 * @apiSuccess (Response Fields) {String} custom_fields.id data name for the field (used to access it in searches, etc.)
 * @apiSuccess (Response Fields) {Boolean} custom_fields.required whether field must have a value before video can be active
 * @apiSuccess (Response Fields) {String} custom_fields.type custom field type (enum or string)
 * @apiSuccess (Response Fields) {String} max_custom_fields maximum number of custom fields for the account
 * @apiSuccess (Response Fields) {Object[]} standard_fields array of standard field maps
 * @apiSuccess (Response Fields) {String} standard_fields.description description (instruction for user)
 * @apiSuccess (Response Fields) {String} standard_fields.id data name for the field (used to access it in searches, etc.)
 * @apiSuccess (Response Fields) {Boolean} standard_fields.required whether field must have a value before video can be active
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *    {
 *        "custom_fields": [
 *            {
 *                "description": "Add a topic",
 *                "display_name": "Subject",
 *                "enum_values": [
 *                    "Reptiles",
 *                    "Mammals",
 *                    "Other",
 *                    "wildlife",
 *                    "Fish",
 *                    "Birds",
 *                    "Insects"
 *                ],
 *                "id": "subject",
 *                "required": false,
 *                "type": "enum"
 *            },
 *            {
 *                "description": null,
 *                "display_name": "Uploader UserID",
 *                "id": "uploader-userid",
 *                "required": false,
 *                "type": "string"
 *            },
 *            {
 *                "description": null,
 *                "display_name": "Rating",
 *                "id": "rating",
 *                "required": false,
 *                "type": "string"
 *            },
 *            {
 *                "description": null,
 *                "display_name": "Duration",
 *                "id": "duration",
 *                "required": false,
 *                "type": "string"
 *            },
 *            {
 *                "description": null,
 *                "display_name": "Associatedtopics",
 *                "id": "associated-topics",
 *                "required": false,
 *                "type": "string"
 *            },
 *            {
 *                "description": null,
 *                "display_name": "Custom Theme Path",
 *                "enum_values": [
 *                    "http://files.brightcove.com/ *    BCL_customLabelTheme2.css",
 *                    "http://files.brightcove.com/ *    BCL_customLabelTheme.css"
 *                ],
 *                "id": "customthemepath",
 *                "required": false,
 *                "type": "enum"
 *            },
 *            {
 *                "description": null,
 *                "display_name": "Text Color",
 *                "enum_values": [
 *                    "#4C4D4F",
 *                    "#CF0050",
 *                    "#F4901E",
 *                    "#619FA8"
 *                ],
 *                "id": "textcolor",
 *                "required": false,
 *                "type": "enum"
 *            },
 *            {
 *                "description": null,
 *                "display_name": "Captions File URL",
 *                "id": "dfxppath",
 *                "required": false,
 *                "type": "string"
 *            },
 *            {
 *                "description": null,
 *                "display_name": "Purpose",
 *                "enum_values": [
 *                    "Training",
 *                    "Demo",
 *                    "Sample",
 *                    "Solution"
 *                ],
 *                "id": "purpose",
 *                "required": false,
 *                "type": "enum"
 *            },
 *            {
 *                "description": null,
 *                "display_name": "Downloadable",
 *                "enum_values": [
 *                    "yes",
 *                    "no"
 *                ],
 *                "id": "downloadable",
 *                "required": false,
 *                "type": "enum"
 *            }
 *        ],
 *        "max_custom_fields": 10,
 *        "standard_fields": [
 *            {
 *                "description": null,
 *                "id": "description",
 *                "required": false
 *            },
 *            {
 *                "description": null,
 *                "id": "tags",
 *                "required": false
 *            }
 *        ]
 *    }
 *
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; check to make sure your client credentials were correct for the access token
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} INVALID_SORT 400: sort parameter specified and invalid field
 * @apiError (Error 4xx) {json} INVALID_SEARCH 400: search string invalid (may not have been URI-encoded)
 * @apiError (Error 4xx) {json} NOT_AVAILABLE 400: The resource you are requesting is temporarily unavailable
 * @apiError (Error 5xx) {json} UNKNOWN 500: Issue in Brightcove system; try again later.
 * @apiError (Error 5xx) {json} TIMEOUT 500: Server likely too busy; try again later.
 *
 * @apiErrorExample {json} 404 Error Response
 *     HTTP/1.1 404 Not Found
 *     [
 *         {
 *             "error_code": "RESOURCE_NOT_FOUND"
 *         }
 *     ]
 *
 *
 */

