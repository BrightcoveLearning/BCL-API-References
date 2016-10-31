// create client-credential

/**
 * @api {post} /client_credentials Create Client Credential
 * @apiName Create Client Credential
 * @apiGroup Client Credential
 * @apiVersion 3.0.0
 *
 * @apiDescription Create client credential, consisting of a `client-id` and `client_secret` used in getting an access token for one or more APIs
 * _Note: client credentials are permanent unless revoked, but you must save the client secret when you create it - it can never be retrieved again._
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: BC_TOKEN your_BC_TOKEN (see [Get BC_TOKEN](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-client-credentials.html#steps))
 *
 * @apiParam (Request Body Fields) {String} type always equal to `credential`
 * @apiParam (Request Body Fields) {Object[]} maximum_scope array of maps specifying the accounts and API operations for the credentials
 * @apiParam (Request Body Fields) {Object} maximum_scope.identity map defining the account and operations
 * @apiParam (Request Body Fields) {String="video-cloud-account","perform-account"} maximum_scope.identity.type the type of account
 * @apiParam (Request Body Fields) {String} maximum_scope.identity.account-id the account ID
 * @apiParam (Request Body Fields) {String[]} maximum_scope.identity.operations array of operations the credentials grant access to (see [Operations](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/api-operations.html))
 * @apiParam (Request Body Fields) {String} name name for the credentials
 * @apiParam (Request Body Fields) {String} description description for the credentials
 *
 * @apiParamExample {json} Create Credentials Example:
 *    {
 *    	"type": "credential",
 *    	"maximum_scope": [{
 *    		"identity": {
 *    			"type": "video-cloud-account",
 *    			"account-id": 57838016001
 *    		},
 *    		"operations": [
 *    			"video-cloud/playlist/all",
 *    			"video-cloud/video/all"
 *    		]
 *    	}],
 *    	"name": "SampleClient"
 *    }
 *
 * @apiSuccess (Response Fields) {String} name credential name
 * @apiSuccess (Response Fields) {String} name_html html version of credential name
 * @apiSuccess (Response Fields) {String} description credential description
 * @apiSuccess (Response Fields) {String} description_html html version of credential description
 * @apiSuccess (Response Fields) {String} client_id the client id
 * @apiSuccess (Response Fields) {String} client_secret client secret &mdash; note that this is the only request that will return the client secret; if you do not save it, there is no way to retrieve it again
 * @apiSuccess (Response Fields) {String} type the type - currently always equals `credential`
 * @apiSuccess (Response Fields) {String} issued_to the email address of the account user issued to
 * @apiSuccess (Response Fields) {String} issued_user system id for user issued to
 * @apiSuccess (Response Fields) {String} redirect_url currently not used
 * @apiSuccess (Response Fields) {Boolean} trusted whether the client is trusted
 * @apiSuccess (Response Fields) {Boolean} revoked whether the credential is revoked
 * @apiSuccess (Response Fields) {DateString} expires_at when the credential expires
 * @apiSuccess (Response Fields) {DateString} issued_at when the credential was issued
 * @apiSuccess (Response Fields) {Object[]} maximum_scope array of maps specifying the accounts and API operations for the credentials
 * @apiSuccess (Response Fields) {Object} maximum_scope.identity map defining the account and operations
 * @apiSuccess (Response Fields) {String} maximum_scope.identity.type the type of account
 * @apiSuccess (Response Fields) {String} maximum_scope.identity.account-id the account ID
 * @apiSuccess (Response Fields) {String[]} maximum_scope.identity.operations array of operations the credentials grant access to (see [Operations](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/api-operations.html))
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 201 Created
 *    {
 *      "redirect_url": null,
 *      "maximum_scope": [
 *        {
 *          "identity": {
 *            "type": "video-cloud-account",
 *            "account-id": 57838016001
 *          },
 *          "operations": [
 *            "video-cloud/playlist/all",
 *            "video-cloud/video/all"
 *          ]
 *        }
 *      ],
 *      "name_html": "SampleClient",
 *      "issued_to": "rcrooks@brightcove.com",
 *      "trusted": null,
 *      "expires_at": null,
 *      "issued_at": "2015-10-02T13:59:07Z",
 *      "name": "SampleClient",
 *      "description_html": null,
 *      "revoked": null,
 *      "type": "credential",
 *      "client_secret": "client_secret_removed_for_security_reasons",
 *      "description": null,
 *      "client_id": "b744071a-3dc6-4e2a-9a8a-50beca8cf53f",
 *      "issued_user": 53255203001
 *    }
 *
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; The request does not carry authentication credentials sufficient to authorize the requested access.
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 * @apiError (Error 4xx) {json} BAD_VALUE 400: The JSON could not be parsed
 * @apiError (Error 4xx) {json} REFERENCE_ID_IN_USE 409: The specified reference id is already in use
 * @apiError (Error 4xx) {json} ILLEGAL_FIELD 409: Spelling error or other use of non-existent field
 * @apiError (Error 4xx) {json} VALIDATION_ERROR 409: the JSON data was not valid; error messages vary depending on the problem
 *
 * @apiErrorExample {json} 409 Error Response
 *    HTTP/1.1 401 Unauthorized
 *    {
 *      "error": "access_denied",
 *      "error_description": "The request does not carry authentication credentials sufficient to authorize the requested access."
 *    }
 *
 *
 */

// get client-credentials

/**
 * @api {get} /client_credentials Get Client Credentials
 * @apiName Get Client Credentials
 * @apiGroup Client Credential
 * @apiVersion 3.0.0
 *
 * @apiDescription Get an array of client credentials for one or more accounts
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: BC_TOKEN your_BC_TOKEN (see [Get BC_TOKEN](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-client-credentials.html#steps))
 *
 * @apiParam (URL Parameters) {String} origin_account_ids list of account ids
 *
 * @apiParamExample {Url} Create Credentials Example:
 *    https://oauth.brightcove.com/v3/client_credentials?origin_account_ids=57838016001,20318290001
 *
 * @apiSuccess (Response Fields) {String} name credential name
 * @apiSuccess (Response Fields) {String} name_html html version of credential name
 * @apiSuccess (Response Fields) {String} description credential description
 * @apiSuccess (Response Fields) {String} description_html html version of credential description
 * @apiSuccess (Response Fields) {String} client_id the client id
 * @apiSuccess (Response Fields) {String} client_secret client secret &mdash; note that it will always be `null`; it is returned only for the `POST` request that creates the credential
 * @apiSuccess (Response Fields) {String} type the type - currently always equals `credential`
 * @apiSuccess (Response Fields) {String} issued_to the email address of the account user issued to
 * @apiSuccess (Response Fields) {String} issued_user system id for user issued to
 * @apiSuccess (Response Fields) {String} redirect_url currently not used
 * @apiSuccess (Response Fields) {Boolean} trusted whether the client is trusted
 * @apiSuccess (Response Fields) {Boolean} revoked whether the credential is revoked
 * @apiSuccess (Response Fields) {DateString} expires_at when the credential expires
 * @apiSuccess (Response Fields) {DateString} issued_at when the credential was issued
 * @apiSuccess (Response Fields) {Object[]} maximum_scope array of maps specifying the accounts and API operations for the credentials
 * @apiSuccess (Response Fields) {Object} maximum_scope.identity map defining the account and operations
 * @apiSuccess (Response Fields) {String} maximum_scope.identity.type the type of account
 * @apiSuccess (Response Fields) {String} maximum_scope.identity.account-id the account ID
 * @apiSuccess (Response Fields) {String[]} maximum_scope.identity.operations array of operations the credentials grant access to (see [Operations](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/api-operations.html))
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    [
 *        {
 *            "redirect_url": null,
 *            "maximum_scope": [
 *                {
 *                    "identity": {
 *                        "type": "video-cloud-account",
 *                        "account-id": 57838016001
 *                    },
 *                    "operations": [
 *                        "video-cloud/player/all"
 *                    ]
 *                }
 *            ],
 *            "name_html": "created_by_script",
 *            "issued_to": "mboles@brightcove.com",
 *            "trusted": null,
 *            "expires_at": null,
 *            "issued_at": "2013-07-10T17:41:43Z",
 *            "name": "created_by_script",
 *            "description_html": null,
 *            "revoked": null,
 *            "type": "credential",
 *            "client_secret": null,
 *            "description": null,
 *            "client_id": "dc1fb245-2f37-4c4a-885a-ed4ed4991e87",
 *            "issued_user": 76075641802
 *        },
 *        {
 *            "redirect_url": null,
 *            "maximum_scope": [
 *                {
 *                    "identity": {
 *                        "type": "video-cloud-account",
 *                        "account-id": 57838016001
 *                    },
 *                    "operations": [
 *                        "video-cloud/player/all"
 *                    ]
 *                }
 *            ],
 *            "name_html": "Sample-Client",
 *            "issued_to": "rcrooks@brightcove.com",
 *            "trusted": null,
 *            "expires_at": null,
 *            "issued_at": "2015-06-19T13:19:58Z",
 *            "name": "Sample-Client",
 *            "description_html": null,
 *            "revoked": null,
 *            "type": "credential",
 *            "client_secret": null,
 *            "description": null,
 *            "client_id": "1fa5f786-3418-4a69-8b78-6772f283d838",
 *            "issued_user": 53255203001
 *        }
 *    ]
 *
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; The request does not carry authentication credentials sufficient to authorize the requested access.
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 *
 * @apiErrorExample {json} 409 Error Response
 *    HTTP/1.1 401 Unauthorized
 *    {
 *      "error": "access_denied",
 *      "error_description": "The request does not carry authentication credentials sufficient to authorize the requested access."
 *    }
 *
 *
 */

// get client-credential by ID

/**
 * @api {get} /client_credentials/:client_id Get Client Credential by ID
 * @apiName Get Client Credential By ID
 * @apiGroup Client Credential
 * @apiVersion 3.0.0
 *
 * @apiDescription Get a client credential
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: BC_TOKEN your_BC_TOKEN (see [Get BC_TOKEN](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-client-credentials.html#steps))
 *
 * @apiParam (URL Parameters) {String} origin_account_ids list of account ids
 *
 * @apiParamExample {Url} Create Credentials Example:
 *    https://oauth.brightcove.com/v3/client_credentials/1fa5f786-3418-4a69-8b78-6772f283d838
 *
 * @apiSuccess (Response Fields) {String} name credential name
 * @apiSuccess (Response Fields) {String} name_html html version of credential name
 * @apiSuccess (Response Fields) {String} description credential description
 * @apiSuccess (Response Fields) {String} description_html html version of credential description
 * @apiSuccess (Response Fields) {String} client_id the client id
 * @apiSuccess (Response Fields) {String} client_secret client secret &mdash; note that it will always be `null`; it is returned only for the `POST` request that creates the credential
 * @apiSuccess (Response Fields) {String} type the type - currently always equals `credential`
 * @apiSuccess (Response Fields) {String} issued_to the email address of the account user issued to
 * @apiSuccess (Response Fields) {String} issued_user system id for user issued to
 * @apiSuccess (Response Fields) {String} redirect_url currently not used
 * @apiSuccess (Response Fields) {Boolean} trusted whether the client is trusted
 * @apiSuccess (Response Fields) {Boolean} revoked whether the credential is revoked
 * @apiSuccess (Response Fields) {DateString} expires_at when the credential expires
 * @apiSuccess (Response Fields) {DateString} issued_at when the credential was issued
 * @apiSuccess (Response Fields) {Object[]} maximum_scope array of maps specifying the accounts and API operations for the credentials
 * @apiSuccess (Response Fields) {Object} maximum_scope.identity map defining the account and operations
 * @apiSuccess (Response Fields) {String} maximum_scope.identity.type the type of account
 * @apiSuccess (Response Fields) {String} maximum_scope.identity.account-id the account ID
 * @apiSuccess (Response Fields) {String[]} maximum_scope.identity.operations array of operations the credentials grant access to (see [Operations](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/api-operations.html))
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "redirect_url": null,
 *        "maximum_scope": [
 *            {
 *                "identity": {
 *                    "type": "video-cloud-account",
 *                    "account-id": 57838016001
 *                },
 *                "operations": [
 *                    "video-cloud/player/all"
 *                ]
 *            }
 *        ],
 *        "name_html": "Sample-Client",
 *        "issued_to": "rcrooks@brightcove.com",
 *        "trusted": null,
 *        "expires_at": null,
 *        "issued_at": "2015-06-19T13:19:58Z",
 *        "name": "Sample-Client",
 *        "description_html": null,
 *        "revoked": null,
 *        "type": "credential",
 *        "client_secret": null,
 *        "description": null,
 *        "client_id": "1fa5f786-3418-4a69-8b78-6772f283d838",
 *        "issued_user": 53255203001
 *    }
 *
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; The request does not carry authentication credentials sufficient to authorize the requested access.
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 *
 * @apiErrorExample {json} 409 Error Response
 *    HTTP/1.1 401 Unauthorized
 *    {
 *      "error": "access_denied",
 *      "error_description": "The request does not carry authentication credentials sufficient to authorize the requested access."
 *    }
 *
 *
 */

// update client-credential

/**
 * @api {put} /client_credentials/:client_id Update Client Credential
 * @apiName Update Client Credential
 * @apiGroup Client Credential
 * @apiVersion 3.0.0
 *
 * @apiDescription Update a client credential
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: BC_TOKEN your_BC_TOKEN (see [Get BC_TOKEN](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-client-credentials.html#steps))
 *
 * @apiParam (Path Parameters) {String} client_id client id for the credential
 *
 * @apiParamExample {json} Create Credentials Example:
 *    {"type":"credential",
 *        "maximum_scope":[
 *        {"identity":{
 *            "type":"video-cloud-account",
 *            "account-id":57838016001},
 *            "operations":[
 *                "video-cloud/playlist/all",
 *                "video-cloud/video/all",
 *                "video-cloud/player/all"
 *            ]
 *        }],
 *        "name":"SampleClient"
 *    }
 *
 * @apiSuccess (Response Fields) {String} name credential name
 * @apiSuccess (Response Fields) {String} name_html html version of credential name
 * @apiSuccess (Response Fields) {String} description credential description
 * @apiSuccess (Response Fields) {String} description_html html version of credential description
 * @apiSuccess (Response Fields) {String} client_id the client id
 * @apiSuccess (Response Fields) {String} client_secret client secret &mdash; note that it will always be `null`; it is returned only for the `POST` request that creates the credential
 * @apiSuccess (Response Fields) {String} type the type - currently always equals `credential`
 * @apiSuccess (Response Fields) {String} issued_to the email address of the account user issued to
 * @apiSuccess (Response Fields) {String} issued_user system id for user issued to
 * @apiSuccess (Response Fields) {String} redirect_url currently not used
 * @apiSuccess (Response Fields) {Boolean} trusted whether the client is trusted
 * @apiSuccess (Response Fields) {Boolean} revoked whether the credential is revoked
 * @apiSuccess (Response Fields) {DateString} expires_at when the credential expires
 * @apiSuccess (Response Fields) {DateString} issued_at when the credential was issued
 * @apiSuccess (Response Fields) {Object[]} maximum_scope array of maps specifying the accounts and API operations for the credentials
 * @apiSuccess (Response Fields) {Object} maximum_scope.identity map defining the account and operations
 * @apiSuccess (Response Fields) {String} maximum_scope.identity.type the type of account
 * @apiSuccess (Response Fields) {String} maximum_scope.identity.account-id the account ID
 * @apiSuccess (Response Fields) {String[]} maximum_scope.identity.operations array of operations the credentials grant access to (see [Operations](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/api-operations.html))
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "redirect_url": null,
 *        "maximum_scope": [
 *            {
 *                "identity": {
 *                    "type": "video-cloud-account",
 *                    "account-id": 57838016001
 *                },
 *                "operations": [
 *                    "video-cloud/playlist/all",
 *                    "video-cloud/video/all",
 *                    "video-cloud/player/all"
 *                ]
 *            }
 *        ],
 *        "name_html": "SampleClient",
 *        "issued_to": "rcrooks@brightcove.com",
 *        "trusted": null,
 *        "expires_at": null,
 *        "issued_at": "2015-10-02T13:59:07Z",
 *        "name": "SampleClient",
 *        "description_html": null,
 *        "revoked": null,
 *        "type": "credential",
 *        "client_secret": null,
 *        "description": null,
 *        "client_id": "b744071a-3dc6-4e2a-9a8a-50beca8cf53f",
 *        "issued_user": 53255203001
 *    }
 *
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; The request does not carry authentication credentials sufficient to authorize the requested access.
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 *
 * @apiErrorExample {json} 409 Error Response
 *    HTTP/1.1 401 Unauthorized
 *    {
 *      "error": "access_denied",
 *      "error_description": "The request does not carry authentication credentials sufficient to authorize the requested access."
 *    }
 *
 *
 */

// delete client-credential

/**
 * @api {delete} /client_credentials/:client_id Delete Client Credential
 * @apiName Delete Client Credential
 * @apiGroup Client Credential
 * @apiVersion 3.0.0
 *
 * @apiDescription Update a client credential
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: BC_TOKEN your_BC_TOKEN (see [Get BC_TOKEN](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-client-credentials.html#steps))
 *
 * @apiParam (Path Parameters) {String} client_id client id for the credential
 *
 * @apiParamExample {Url} Create Credentials Example:
 *    https://oauth.brightcove.com/v3/client_credentials/b744071a-3dc6-4e2a-9a8a-50beca8cf53f
 *
 *
 * @apiSuccessExample {json} Success Response:
 *    HTTP/1.1 204 NO CONTENT
 *
 *
 * @apiError (Error 4xx) {json} UNAUTHORIZED 401: Authentication failed; The request does not carry authentication credentials sufficient to authorize the requested access.
 * @apiError (Error 4xx) {json} RESOURCE_NOT_FOUND 404: The api couldn't find the resource you requested
 *
 * @apiErrorExample {json} 409 Error Response
 *    HTTP/1.1 401 Unauthorized
 *    {
 *      "error": "access_denied",
 *      "error_description": "The request does not carry authentication credentials sufficient to authorize the requested access."
 *    }
 *
 *
 */
