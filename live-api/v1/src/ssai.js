// Create an Ad application_ad_configuration

/**
  * @api {post} /v1/ssai/application Create Ad Configuration
  * @apiName Create Ad Configuration
  * @apiGroup SSAI
  * @apiVersion 1.0.0
  *
  * @apiDescription Create a configuration for server-side ad application.
  *
  * @apiHeader {String} Content-Type Content-Type: application/json
  * @apiHeader {String} X-API-KEY X-API-KEY: {APIKey}
  *
  * @apiParam (Request Body Fields) {Object} application_ad_configuration The ad configuration object
  * @apiParam (Request Body Fields) {String} application_ad_configuration.ad_configuration_description Human readable description of the configuration.
  * @apiParam (Request Body Fields) {String="Dfp","Vast","SmartXML"} application_ad_configuration.ad_configuration_expected_response_type The expected response type based on your ad server
  * @apiParam (Request Body Fields) {String="SingleAdResponse","MultipleAdResponse"} application_ad_configuration.ad_configuration_strategy Specifies whether ad breaks should include single or muliple ads
  * @apiParam (Request Body Fields) {Object[]} application_ad_configuration.ad_configuration_transforms Array of ad configuration transforms.
  * @apiParam (Request Body Fields) {String} application_ad_configuration.ad_configuration_transforms.xpath xpath for the transform.
  * @apiParam (Request Body Fields) {String} application_ad_configuration.ad_configuration_transforms.xslt xslt stylesheet for the transform.
  * @apiParam (Request Body Fields) {String} ad_configuration_url_format Format for the ad tag - see (http://docs.brightcove.com/en/live/guides/ssai.html#ad_configuration_variables) for the available ad configuration variables.
  * @apiParam (Request Body Fields) {String} application_description Human readable description of the ad application.
  * @apiParam (Request Body Fields) {String} [account_id] Your account id.
  * @apiParam (Request Body Fields) {Number} application_segment_buffer The amount of ad content to buffer, in seconds.
  *
  * @apiParamExample {json} Create an ad configuration example:
  *    {
  *        "application_ad_configuration": {
  *            "ad_configuration_description": "Human readable description of the configuration",
  *            "ad_configuration_expected_response_type": "Dfp/Vast/SmartXML",
  *            "ad_configuration_strategy": "SingleAdResponse/MultipleAdResponse",
  *            "ad_configuration_transforms": [
  *            {
  *                "xpath": "/",
  *                "xslt": "<xsl:stylesheet version=\"1.0\" xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\" xmlns:Det=\"http://Det.com\"><xsl:output omit-xml-declaration=\"yes\"/><xsl:template match=\"node()|@*\"><xsl:copy><xsl:apply-templates select=\"node()|@*\"/></xsl:copy></xsl:template></xsl:stylesheet>"
  *            }],
  *            "ad_configuration_url_format": "https://ad-provider-host.com/path/to/ad-handler?ip={{client.ipaddress}}&num={{random.int32}}&ses={{session.session_id}}"
  *        },
  *        "application_description": "Human readable description of the ad application",
  *        "account_id": "USER'S ACCOUNT ID" [Optional - When omitted, Account ID of requesting user is used]
  *    }
  *
  * @apiSuccess (Response Fields) {Object} application The ad application object
  * @apiSuccess (Response Fields) {String} application.account_id The account id
  * @apiSuccess (Response Fields) {String} application.description The ad application description
  * @apiSuccess (Response Fields) {Object} application.application_ad_configuration The ad configuration object for the application
  * @apiSuccess (Response Fields) {String} application.application_ad_configuration.ad_configuration_description The ad configuration description
  * @apiSuccess (Response Fields) {String} application.application_ad_configuration.response_type The ad configuration response type (`Dfp`, `Vast`, or `SmartXML`)
  * @apiSuccess (Response Fields) {String} application.application_ad_configuration.ad_configuration_strategy The ad configuration strategy (`SingleAdResponse`, or `MultipleAdResponse`)
  * @apiSuccess (Response Fields) {Object[]} application.application_ad_configuration.ad_configuration_transforms The ad configuration transforms
  * @apiSuccess (Response Fields) {String} application.application_ad_configuration.ad_configuration_transforms.xpath The ad configuration transform xpath
  * @apiSuccess (Response Fields) {String} application.application_ad_configuration.ad_configuration_transforms.xslt The ad configuration transform xslt
  * @apiSuccess (Response Fields) {String} application.application_ad_configuration.ad_configuration_url_format The URL template for the ad server
  * @apiSuccess (Response Fields) {Object} application.application_ad_configuration.ad_configuration_variables Key/value pairs for the ad server URL template
  * @apiSuccess (Response Fields) {String} application.application_id The ad application id
  * @apiSuccess (Response Fields) {Boolean} inserted Whether the ad application was successfully inserted
  *
  * @apiSuccessExample {json} Success response for create ad application
  *    {
  *      "application": {
  *        "account_id": "USER ACCOUNT ID",
  *        "application_description": "Human readable description of the ad application",
  *        "application_ad_configuration": {
  *          "ad_configuration_description": "Human readable description of the configuration",
  *          "ad_configuration_expected_response_type": "Dfp/Vast/SmartXML,
  *          "ad_configuration_strategy": "SingleAdResponse/MultipleAdResponse",
  *          "ad_configuration_transforms": [
  *            {
  *              "xpath": "/",
  *              "xslt": "<xsl:stylesheet version=\"1.0\" xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\" xmlns:Det=\"http://Det.com\"><xsl:output omit-xml-declaration=\"yes\"/><xsl:template match=\"node()|@*\"><xsl:copy><xsl:apply-templates select=\"node()|@*\"/></xsl:copy></xsl:template></xsl:stylesheet>"
  *            }
  *          ],
  *          "ad_configuration_url_format": "https://ad-provider-host.com/path/to/ad-handler?ip={{client.ipaddress}}&num={{random.int32}}&ses={{session.session_id}}"
  *        },
  *        "application_id": "APPLICATION ID"
  *      },
  *      "inserted": true
  *    }
  *
  */

// Update an Ad application_ad_configuration

/**
  * @api {put} /v1/ssai/application/:application_id Update Ad Configuration
  * @apiName Update Ad Configuration
  * @apiGroup SSAI
  * @apiVersion 1.0.0
  *
  * @apiDescription Update a configuration for server-side ad application.
  *
  * @apiHeader {String} Content-Type Content-Type: application/json
  * @apiHeader {String} X-API-KEY X-API-KEY: {APIKey}
  *
  * @apiParam (URL Parameters) {Object} application_id The ad application id
  * @apiSuccess (Response Fields) {String} application.description The ad application description
    * @apiSuccess (Response Fields) {Object} application.application_ad_configuration The ad configuration object for the application
  * @apiSuccess (Response Fields) {String} application.application_ad_configuration.ad_configuration_description The ad configuration description
  * @apiSuccess (Response Fields) {String} application.application_ad_configuration.response_type The ad configuration response type (`Dfp`, `Vast`, or `SmartXML`)
  * @apiSuccess (Response Fields) {String} application.application_ad_configuration.ad_configuration_strategy The ad configuration strategy (`SingleAdResponse`, or `MultipleAdResponse`)
  * @apiSuccess (Response Fields) {Object[]} application.application_ad_configuration.ad_configuration_transforms The ad configuration transforms
  * @apiSuccess (Response Fields) {String} application.application_ad_configuration.ad_configuration_transforms.xpath The ad configuration transform xpath
  * @apiSuccess (Response Fields) {String} application.application_ad_configuration.ad_configuration_transforms.xslt The ad configuration transform xslt
  * @apiSuccess (Response Fields) {String} application.application_ad_configuration.ad_configuration_url_format The URL template for the ad server
  * @apiSuccess (Response Fields) {Object} application.application_ad_configuration.ad_configuration_variables Key/value pairs for the ad server URL template
  * @apiSuccess (Response Fields) {String} application.application_id The ad application id
  * @apiSuccess (Response Fields) {Boolean} inserted Whether the ad application was successfully inserted
  *
  * @apiParamExample {json} Update an ad configuration example:
  *    {
  *        "application_ad_configuration": {
  *            "ad_configuration_description": "Human readable description of the configuration",
  *            "ad_configuration_expected_response_type": "Dfp/Vast/SmartXML",
  *            "ad_configuration_strategy": "SingleAdResponse/MultipleAdResponse",
  *            "ad_configuration_transforms": [
  *            {
  *                "xpath": "/",
  *                "xslt": "<xsl:stylesheet version=\"1.0\" xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\" xmlns:Det=\"http://Det.com\"><xsl:output omit-xml-declaration=\"yes\"/><xsl:template match=\"node()|@*\"><xsl:copy><xsl:apply-templates select=\"node()|@*\"/></xsl:copy></xsl:template></xsl:stylesheet>"
  *            }],
  *            "ad_configuration_url_format": "https://ad-provider-host.com/path/to/ad-handler?ip={{client.ipaddress}}&num={{random.int32}}&ses={{session.session_id}}"
  *        },
  *        "application_description": "Human readable description of the ad application",
  *        "account_id": "USER'S ACCOUNT ID" [Optional - When omitted, Account ID of requesting user is used]
  *    }
  *
  * @apiSuccess (Response Fields) {Object} application The ad application object
  * @apiSuccess (Response Fields) {String} application.account_id The account id
  * @apiSuccess (Response Fields) {String} application.description The ad application description
  * @apiSuccess (Response Fields) {Object} application.application_ad_configuration The ad configuration object for the application
  * @apiSuccess (Response Fields) {String} application.application_ad_configuration.ad_configuration_description The ad configuration description
  * @apiSuccess (Response Fields) {String} application.application_ad_configuration.response_type The ad configuration response type (`Dfp`, `Vast`, or `SmartXML`)
  * @apiSuccess (Response Fields) {String} application.application_ad_configuration.ad_configuration_strategy The ad configuration strategy (`SingleAdResponse`, or `MultipleAdResponse`)
  * @apiSuccess (Response Fields) {Object[]} application.application_ad_configuration.ad_configuration_transforms The ad configuration transforms
  * @apiSuccess (Response Fields) {String} application.application_ad_configuration.ad_configuration_transforms.xpath The ad configuration transform xpath
  * @apiSuccess (Response Fields) {String} application.application_ad_configuration.ad_configuration_transforms.xslt The ad configuration transform xslt
  * @apiSuccess (Response Fields) {String} application.application_ad_configuration.ad_configuration_url_format The URL template for the ad server
  * @apiSuccess (Response Fields) {Object} application.application_ad_configuration.ad_configuration_variables Key/value pairs for the ad server URL template
  * @apiSuccess (Response Fields) {String} application.application_id The ad application id
  * @apiSuccess (Response Fields) {Boolean} inserted Whether the ad application was successfully inserted
  *
  * @apiSuccessExample {json} Success response for create ad application
  *    {
  *      "application": {
  *        "account_id": "USER ACCOUNT ID",
  *        "application_description": "Human readable description of the ad application",
  *        "application_ad_configuration": {
  *          "ad_configuration_description": "Human readable description of the configuration",
  *          "ad_configuration_expected_response_type": "Dfp/Vast/SmartXML,
  *          "ad_configuration_strategy": "SingleAdResponse/MultipleAdResponse",
  *          "ad_configuration_transforms": [
  *            {
  *              "xpath": "/",
  *              "xslt": "<xsl:stylesheet version=\"1.0\" xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\" xmlns:Det=\"http://Det.com\"><xsl:output omit-xml-declaration=\"yes\"/><xsl:template match=\"node()|@*\"><xsl:copy><xsl:apply-templates select=\"node()|@*\"/></xsl:copy></xsl:template></xsl:stylesheet>"
  *            }
  *          ],
  *          "ad_configuration_url_format": "https://ad-provider-host.com/path/to/ad-handler?ip={{client.ipaddress}}&num={{random.int32}}&ses={{session.session_id}}"
  *        },
  *        "application_id": "APPLICATION ID"
  *      },
  *      "inserted": true
  *    }
  *
  */

  // Get Ad application_ad_configurations

  /**
    * @api {get} /v1/ssai/applications/:account_id Get Account Ad Configurations
    * @apiName Get Account Ad Configurations
    * @apiGroup SSAI
    * @apiVersion 1.0.0
    *
    * @apiDescription Get ad applications for an account.
    *
    * @apiHeader {String} Content-Type Content-Type: application/json
    * @apiHeader {String} X-API-KEY X-API-KEY: {APIKey}
    *
    * @apiParam (Request Body Fields) {Object} account_id The account id
    *
    *
    * @apiSuccess (Response Fields) {Object} application The ad application object
    * @apiSuccess (Response Fields) {String} application.account_id The account id
    * @apiSuccess (Response Fields) {String} application.description The ad application description
    * @apiSuccess (Response Fields) {Object} application.application_ad_configuration The ad configuration object for the application
    * @apiSuccess (Response Fields) {String} application.application_ad_configuration.ad_configuration_description The ad configuration description
    * @apiSuccess (Response Fields) {String} application.application_ad_configuration.response_type The ad configuration response type (`Dfp`, `Vast`, or `SmartXML`)
    * @apiSuccess (Response Fields) {String} application.application_ad_configuration.ad_configuration_strategy The ad configuration strategy (`SingleAdResponse`, or `MultipleAdResponse`)
    * @apiSuccess (Response Fields) {Object[]} application.application_ad_configuration.ad_configuration_transforms The ad configuration transforms
    * @apiSuccess (Response Fields) {String} application.application_ad_configuration.ad_configuration_transforms.xpath The ad configuration transform xpath
    * @apiSuccess (Response Fields) {String} application.application_ad_configuration.ad_configuration_transforms.xslt The ad configuration transform xslt
    * @apiSuccess (Response Fields) {String} application.application_ad_configuration.ad_configuration_url_format The URL template for the ad server
    * @apiSuccess (Response Fields) {Object} application.application_ad_configuration.ad_configuration_variables Key/value pairs for the ad server URL template
    * @apiSuccess (Response Fields) {String} application.application_id The ad application id
    * @apiSuccess (Response Fields) {Boolean} inserted Whether the ad application was successfully inserted
    *
    * @apiSuccessExample {json} Success response for create ad application
    *    [
    *      {
    *        "application_id": "APPLICATION_ID_1",
    *        "application_description": "DFP Single Midroll",
    *        "application_ad_configuration": {
    *          "ad_configuration_description": "DFP Test Config Single Midroll",
    *          "ad_configuration_strategy": "MultipleAdResponse",
    *          "ad_configuration_transforms": [],
    *          "ad_configuration_url_format": "https://ad-provider-host.com/path/to/ad-handler",
    *          "ad_configuration_expected_response_type": "Dfp"
    *        },
    *        "account_id": "ACCOUNT_ID"
    *      },
    *      {
    *        "application_id": "APPLICATION_ID_2",
    *        "application_description": "Test DFP Single Midroll"
    *        "application_ad_configuration": {
    *          "ad_configuration_description": "DFP Test Config Single Midroll",
    *          "ad_configuration_strategy": "MultipleAdResponse",
    *          "ad_configuration_transforms": [
    *            {
    *              "xslt": "<xsl:stylesheet version=\"1.0\" xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\" xmlns:Det=\"http://Det.com\"><xsl:output omit-xml-declaration=\"yes\"/><xsl:template match=\"node()|@*\"><xsl:copy><xsl:apply-templates select=\"node()|@*\"/></xsl:copy></xsl:template></xsl:stylesheet>",
    *              "xpath": "/"
    *            }
    *          ],
    *          "ad_configuration_url_format": "https://ad-provider-host.com/path/to/ad-handler?ip={{client.ipaddress}}&num={{random.int32}}&ses={{session.session_id}}",
    *          "ad_configuration_expected_response_type": "Dfp"
    *        },
    *        "account_id": "ACCOUNT_ID"
    *      }
    *    ]
    *
    *
    */

// Get an Ad application_ad_configuration

/**
  * @api {get} /v1/ssai/application/:application_id Get Ad Configuration
  * @apiName Get Ad Configuration
  * @apiGroup SSAI
  * @apiVersion 1.0.0
  *
  * @apiDescription Get an ad application.
  *
  * @apiHeader {String} Content-Type Content-Type: application/json
  * @apiHeader {String} X-API-KEY X-API-KEY: {APIKey}
  *
  * @apiParam (URL Parameters) {Object} application_id The ad application id
  *
  *
  * @apiSuccess (Response Fields) {Object} application The ad application object
  * @apiSuccess (Response Fields) {String} application.account_id The account id
  * @apiSuccess (Response Fields) {String} application.description The ad application description
  * @apiSuccess (Response Fields) {Object} application.application_ad_configuration The ad configuration object for the application
  * @apiSuccess (Response Fields) {String} application.application_ad_configuration.ad_configuration_description The ad configuration description
  * @apiSuccess (Response Fields) {String} application.application_ad_configuration.response_type The ad configuration response type (`Dfp`, `Vast`, or `SmartXML`)
  * @apiSuccess (Response Fields) {String} application.application_ad_configuration.ad_configuration_strategy The ad configuration strategy (`SingleAdResponse`, or `MultipleAdResponse`)
  * @apiSuccess (Response Fields) {Object[]} application.application_ad_configuration.ad_configuration_transforms The ad configuration transforms
  * @apiSuccess (Response Fields) {String} application.application_ad_configuration.ad_configuration_transforms.xpath The ad configuration transform xpath
  * @apiSuccess (Response Fields) {String} application.application_ad_configuration.ad_configuration_transforms.xslt The ad configuration transform xslt
  * @apiSuccess (Response Fields) {String} application.application_ad_configuration.ad_configuration_url_format The URL template for the ad server
  * @apiSuccess (Response Fields) {Object} application.application_ad_configuration.ad_configuration_variables Key/value pairs for the ad server URL template
  * @apiSuccess (Response Fields) {String} application.application_id The ad application id
  * @apiSuccess (Response Fields) {Boolean} inserted Whether the ad application was successfully inserted
  *
  * @apiSuccessExample {json} Success response for create ad application
  *    {
  *      "application_id": "APPLICATION_ID",
  *      "application_description": "Test DFP Single Midroll",
  *      "application_ad_configuration": {
  *        "ad_configuration_description": "DFP Test Config Single Midroll",
  *        "ad_configuration_strategy": "MultipleAdResponse",
  *        "ad_configuration_transforms": [
  *          {
  *            "xslt": "<xsl:stylesheet version=\"1.0\" xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\" xmlns:Det=\"http://Det.com\"><xsl:output omit-xml-declaration=\"yes\"/><xsl:template match=\"node()|@*\"><xsl:copy><xsl:apply-templates select=\"node()|@*\"/></xsl:copy></xsl:template></xsl:stylesheet>",
  *            "xpath": "/"
  *          }
  *        ],
  *        "ad_configuration_url_format": "https://ad-provider-host.com/path/to/ad-handler?ip={{client.ipaddress}}&num={{random.int32}}&ses={{session.session_id}}",
  *        "ad_configuration_expected_response_type": "Dfp"
  *      },
  *      "account_id": "ACCOUNT_ID"
  *    }
  *
  */

 // Delete an ad application

/**
  * @api {delete} /v1/ssai/application/:application_id Delete Ad Configuration
  * @apiName Delete Ad Configuration
  * @apiGroup SSAI
  * @apiVersion 1.0.0
  *
  * @apiDescription Delete an ad application.
  *
  * @apiHeader {String} Content-Type Content-Type: application/json
  * @apiHeader {String} X-API-KEY X-API-KEY: {APIKey}
  *
  * @apiParam (URL Parameters) {Object} application_id The ad application id
  *
  *
  * @apiSuccess (Response Fields) {String} TODO
  *
  * @apiSuccessExample {json} Success response for create ad application
  *    {
  *      "application_id": "APPLICATION_ID",
  *      "deleted": true
  *    }
  */

  // Ingest Slate Media Source Asset

/**
  * @api {post} /v1/ssai/slate Ingest Slate Media Source Asset
  * @apiName Ingest Slate Media Source Asset
  * @apiGroup SSAI
  * @apiVersion 1.0.0
  *
  * @apiDescription Ingest Slate Media Source Asset.
  *
  * @apiHeader {String} Content-Type Content-Type: application/json
  * @apiHeader {String} X-API-KEY X-API-KEY: {APIKey}
  *
  * @apiParam (Request Body Fields) {String} source_url URL for the slate to ingest
  * @apiParam (Request Body Fields) {String} account_id The account id
  * @apiParam (Request Body Fields) {String} [source_description] User identifiable description for the slate
  *
  * @apiParamExample {json} Ingest Slate Media Source Asset example:
  *    {
  *        "source_url": "https://somesourceasset.com/slate-to-ingest.mp4",
  *        "account_id": "ACCOUNT_ID"
  *        "source_description": "User identifiable description for the slate"
  *    }
  *
  *
  * @apiSuccess (Response Fields) {String} media_source_asset_id Id for the slate asset
  * @apiSuccess (Response Fields) {String} account_id Id for the account
  * @apiSuccess (Response Fields) {String} media_source_asset_description User identifiable description for the slate
  * @apiSuccess (Response Fields) {Boolean} media_source_asset_default Whether this is the default media source asset
  * @apiSuccess (Response Fields) {String} media_source_asset_type The media asset type
  * @apiSuccess (Response Fields) {String} media_source_asset_url URL for the media asset to be ingested
  * @apiSuccess (Response Fields) {String} media_source_asset_status Current status of the ingestion of the media asset
  *
  * @apiSuccessExample {json} Success response for create slate media resource
  *    {
  *      "media_source_asset_id": "NEW_UUID",
  *      "account_id": "ACCOUNT_ID",
  *      "media_source_asset_default": false,
  *      "media_source_asset_type": "slate",
  *      "media_source_asset_url": "https://somesourceasset.com/slate-to-ingest.mp4",
  *      "media_source_asset_status": "transcoding"
  *      "media_source_asset_description": "User identifiable description for the slate"
  *    }
  */

  // Delete Slate Media Source Asset

/**
  * @api {delete} /v1/ssai/slate/:SLATE_MSA_ID Delete Slate Media Source Asset
  * @apiName Delete Slate Media Source Asset
  * @apiGroup SSAI
  * @apiVersion 1.0.0
  *
  * @apiDescription Ingest Slate Media Source Asset.
  *
  * @apiHeader {String} Content-Type Content-Type: application/json
  * @apiHeader {String} X-API-KEY X-API-KEY: {APIKey}
  *
  * @apiParam (URL Parameters) {String} SLATE_MSA_ID URL The id for the Slate media source asset
  *
  * @apiSuccess (Response Fields) {String} media_source_asset_id Id for the slate asset
  * @apiSuccess (Response Fields) {String} account_id Id for the account
  * @apiSuccess (Response Fields) {Boolean} media_source_asset_default Whether this is the default media source asset
  * @apiSuccess (Response Fields) {String} media_source_asset_type The media asset type
  * @apiSuccess (Response Fields) {String} media_source_asset_url URL for the media asset to be ingested
  * @apiSuccess (Response Fields) {String} media_source_asset_status Current status of the ingestion of the media asset
  *
  * @apiSuccessExample {json} Success response for delete media source asset
  *    {
  *      "media_source_asset_id": "MSA_UUID",
  *      "media_source_asset_type": "slate",
  *      "media_source_asset_url": "http://someS3urlpath/media.mp4",
  *      "media_source_asset_default": false,
  *      "media_source_asset_status": "ready",
  *      "account_id": "ACCOUNT_ID"
  *    }
  */

  // Get Slate Media Source Assets

/**
  * @api {get} /v1/ssai/slates/:ACCOUNT_ID Get Slate Media Source Assets
  * @apiName Get Slate Media Source Assets
  * @apiGroup SSAI
  * @apiVersion 1.0.0
  *
  * @apiDescription Get Slate Media Source Assets for an account.
  *
  * @apiHeader {String} Content-Type Content-Type: application/json
  * @apiHeader {String} X-API-KEY X-API-KEY: {APIKey}
  *
  * @apiParam (URL Parameters) {String} ACCOUNT_ID URL The account id
  *
  * @apiSuccess (Response Fields) {String} media_source_asset_id Id for the slate asset
  * @apiSuccess (Response Fields) {String} account_id Id for the account
  * @apiSuccess (Response Fields) {String} media_source_asset_description User identifiable description for the slate
  * @apiSuccess (Response Fields) {Boolean} media_source_asset_default Whether this is the default media source asset
  * @apiSuccess (Response Fields) {String} media_source_asset_type The media asset type
  * @apiSuccess (Response Fields) {String} media_source_asset_url URL for the media asset to be ingested
  * @apiSuccess (Response Fields) {String} media_source_asset_status Current status of the ingestion of the media asset
  *
  * @apiSuccessExample {json} Success response for Get Slate Media Source Assets
  *    [
  *      {
  *        "media_source_asset_id": "MSA_UUID_1",
  *        "media_source_asset_type": "slate",
  *        "media_source_asset_default": false,
  *        "media_source_asset_url": "http://someS3urlpath.com/media.mp4",
  *        "account_id": "ACCOUNT_ID",
  *        "media_source_asset_status": "ready"
  *      },
  *      {
  *        "media_source_asset_id": "MSA_UUID_2",
  *        "media_source_asset_type": "slate",
  *        "media_source_asset_default": true,
  *        "media_source_asset_url": "http://someS3urlpath.com/media.mp4",
  *        "account_id": "ACCOUNT_ID",
  *        "media_source_asset_status": "ready"
  *      }
  *    ]
  *
  */

 // Create a beacon set

 /**
   * @api {post} /v1/ssai/beaconset Create beacon set
   * @apiName Create beacon set
   * @apiGroup SSAI
   * @apiVersion 1.0.0
   *
   * @apiDescription Beacons are data points on playback sent to ad servers to track whether and how much of ads were played. Creates a beacon set.
   *
   * @apiHeader {String} Content-Type Content-Type: application/json
   * @apiHeader {String} X-API-KEY X-API-KEY: {APIKey}
   *
   * @apiParam (Request Body Fields) {String} [account_id] URL for the slate to ingest
   * @apiParam (Request Body Fields) {Object[]} beacon_urls Array of beacon URLs
   * @apiParam (Request Body Fields) {String} beacon_urls.beacon_url URL format for the beacon - see (http://docs.brightcove.com/en/live/guides/ssai.html#Beacons) for the valid beacon variables
   * @apiParam (Request Body Fields) {String} beacon_urls.beacon_type the beacon type - see (http://docs.brightcove.com/en/live/guides/ssai.html#Beacons) for the valid beacon types
   *
   * @apiParamExample {json} Ingest Slate Media Source Asset example:
   *    {
   *        "account_id": "USER's ACCOUNT ID", [Optional - If omitted, the Account ID of the requesting user is used.]
   *        "beacon_urls": [
   *            {
   *                "beacon_url": "https://myserver.com/beaconRX/{{job.job_id}}/load?position=load&sid={{session.session_id}}&jid={{job.job_id}}&app={{application_ad_configuration.description}}&rnd32={{random.int32}}&rnd64={{random.int64}}&bid={{random.uuid}}&t={{server.timestamputc}}&ua={{client.useragent}}&ip={{client.ipaddress}}&ref={{client.referrer}}&ref={{client.referer}}&ab={{live.adbreak}}&abd={{live.adbreakduration}}&abdi={{live.adbreakdurationint}}",
   *                "beacon_type": "Load"
   *            },
   *            {
   *                "beacon_url": "https://myserver.com/beaconRX/{{job.job_id}}/play?position=play&sid={{session.session_id}}&jid={{job.job_id}}&app={{application_ad_configuration.description}}&rnd32={{random.int32}}&rnd64={{random.int64}}&bid={{random.uuid}}&t={{server.timestamputc}}&ua={{client.useragent}}&ip={{client.ipaddress}}&ref={{client.referrer}}&ref={{client.referer}}&ab={{live.adbreak}}&abd={{live.adbreakduration}}&abdi={{live.adbreakdurationint}}",
   *                "beacon_type": "Play"
   *            }
   *        ]
   *    }
   *
   *
   * @apiSuccess (Response Fields) {Object} beacon_set The beacon set object
   * @apiSuccess (Response Fields) {Object[]} beacon_set.beacon_urls Array of beacon URLs
   * @apiSuccess (Response Fields) {String} beacon_set.beacon_urls.beacon_url Beacon URL
   * @apiSuccess (Response Fields) {String} beacon_set.beacon_urls.beacon_type Beacon type
   * @apiSuccess (Response Fields) {String} beacon_sets.beacon_set_id Id for the beacon set
   * @apiSuccess (Response Fields) {String} beacon_sets.account_id Id for the account
   * @apiSuccess (Response Fields) {Boolean} inserted Whether the beacon set was added successfully
   *
   * @apiSuccessExample {json} Success response for Get Slate Media Source Assets
   *    {
   *        "beacon_set": {
   *            "beacon_urls": [{
   *                "beacon_url": "https://myserver.com/beaconRX/{{job.job_id}}/load?position=load&sid={{session.session_id}}&jid={{job.job_id}}&app={{application_ad_configuration.description}}&rnd32={{random.int32}}&rnd64={{random.int64}}&bid={{random.uuid}}&t={{server.timestamputc}}&ua={{client.useragent}}&ip={{client.ipaddress}}&ref={{client.referrer}}&ref={{client.referer}}&ab={{live.adbreak}}&abd={{live.adbreakduration}}&abdi={{live.adbreakdurationint}}",
   *                "beacon_type": "Load"
   *            },
   *            {
   *                "beacon_url": "https://myserver.com/beaconRX/{{job.job_id}}/play?position=play&sid={{session.session_id}}&jid={{job.job_id}}&app={{application_ad_configuration.description}}&rnd32={{random.int32}}&rnd64={{random.int64}}&bid={{random.uuid}}&t={{server.timestamputc}}&ua={{client.useragent}}&ip={{client.ipaddress}}&ref={{client.referrer}}&ref={{client.referer}}&ab={{live.adbreak}}&abd={{live.adbreakduration}}&abdi={{live.adbreakdurationint}}",
   *                "beacon_type": "Play"
   *            }],
   *            "beacon_set_id": "Inserted Beacon Set ID",
   *            "account_id": "USER's ACCOUNT ID"
   *        }
   *        "inserted": true
   *    }
   *
   */

 // Update a beacon set

 /**
   * @api {put} /v1/ssai/beaconset/BEACON_SET_ID Update beacon set
   * @apiName Update beacon set
   * @apiGroup SSAI
   * @apiVersion 1.0.0
   *
   * @apiDescription Updates a beacon set.
   *
   * @apiHeader {String} Content-Type Content-Type: application/json
   * @apiHeader {String} X-API-KEY X-API-KEY: {APIKey}
   *
   * @apiParam (URL Parameters) {String} BEACON_SET_ID URL The id for the beacon set
   * @apiParam (Request Body Fields) {String} [account_id] URL for the slate to ingest
   * @apiParam (Request Body Fields) {Object[]} beacon_urls Array of beacon URLs
   * @apiParam (Request Body Fields) {String} beacon_urls.beacon_url URL format for the beacon - see (http://docs.brightcove.com/en/live/guides/ssai.html#Beacons) for the valid beacon variables
   * @apiParam (Request Body Fields) {String} beacon_urls.beacon_type the beacon type - see (http://docs.brightcove.com/en/live/guides/ssai.html#Beacons) for the valid beacon types
   *
   * @apiParamExample {json} Ingest Slate Media Source Asset example:
   *    {
   *        "account_id": "USER's ACCOUNT ID", [Optional - If omitted, the Account ID of the requesting user is used.]
   *        "beacon_urls": [
   *            {
   *                "beacon_url": "https://myserver.com/beaconRX/{{job.job_id}}/load?position=load&sid={{session.session_id}}&jid={{job.job_id}}&app={{application_ad_configuration.description}}&rnd32={{random.int32}}&rnd64={{random.int64}}&bid={{random.uuid}}&t={{server.timestamputc}}&ua={{client.useragent}}&ip={{client.ipaddress}}&ref={{client.referrer}}&ref={{client.referer}}&ab={{live.adbreak}}&abd={{live.adbreakduration}}&abdi={{live.adbreakdurationint}}",
   *                "beacon_type": "Load"
   *            },
   *            {
   *                "beacon_url": "https://myserver.com/beaconRX/{{job.job_id}}/play?position=play&sid={{session.session_id}}&jid={{job.job_id}}&app={{application_ad_configuration.description}}&rnd32={{random.int32}}&rnd64={{random.int64}}&bid={{random.uuid}}&t={{server.timestamputc}}&ua={{client.useragent}}&ip={{client.ipaddress}}&ref={{client.referrer}}&ref={{client.referer}}&ab={{live.adbreak}}&abd={{live.adbreakduration}}&abdi={{live.adbreakdurationint}}",
   *                "beacon_type": "Play"
   *            }
   *        ]
   *    }
   *
   *
   * @apiSuccess (Response Fields) {Object} beacon_set The beacon set object
   * @apiSuccess (Response Fields) {Object[]} beacon_set.beacon_urls Array of beacon URLs
   * @apiSuccess (Response Fields) {String} beacon_set.beacon_urls.beacon_url Beacon URL
   * @apiSuccess (Response Fields) {String} beacon_set.beacon_urls.beacon_type Beacon type
   * @apiSuccess (Response Fields) {String} beacon_sets.beacon_set_id Id for the beacon set
   * @apiSuccess (Response Fields) {String} beacon_sets.account_id Id for the account
   * @apiSuccess (Response Fields) {Boolean} inserted Whether the beacon set was added successfully
   *
   * @apiSuccessExample {json} Success response for Get Slate Media Source Assets
   *    {
   *        "beacon_set": {
   *            "account_id": "USER's ACCOUNT ID",
   *            "beacon_set_id": "BEACON_SET_ID",
   *            "beacon_urls": [{
   *                "beacon_url": "https://myserver.com/beaconRX/load",
   *                "beacon_type": "Load"
   *            },
   *            {
   *                "beacon_url": "https://myserver.com/beaconRX/play",
   *                "beacon_type": "Play"
   *            }],
   *            "updated_beacon_set": {
   *                "beacon_set_id": "BEACON_SET_ID",
   *                "beacon_urls": [{
   *                    "beacon_url": "https://myserver.com/beaconRX/load",
   *                    "beacon_type": "Load"
   *                },
   *                {
   *                    "beacon_url": "https://myserver.com/beaconRX/play",
   *                    "beacon_type": "Play"
   *                }],
   *                "account_id": "USER's ACCOUNT ID"
   *            }
   *        }
   *    }
   *
   */

   // Get beacon sets

   /**
     * @api {get} /v1/ssai/beaconsets/:account_id Get beacon sets
     * @apiName Get beacon sets
     * @apiGroup SSAI
     * @apiVersion 1.0.0
     *
     * @apiDescription Get all beacon sets for an account.
     *
     * @apiHeader {String} Content-Type Content-Type: application/json
     * @apiHeader {String} X-API-KEY X-API-KEY: {APIKey}
     *
     * @apiParam (URL Parameters) {String} BEACON_SET_ID URL The id for the beacon set
     *
     *
     * @apiSuccess (Response Fields) {Object} beacon_set The beacon set object
     * @apiSuccess (Response Fields) {Object[]} beacon_set.beacon_urls Array of beacon URLs
     * @apiSuccess (Response Fields) {String} beacon_set.beacon_urls.beacon_url Beacon URL
     * @apiSuccess (Response Fields) {String} beacon_set.beacon_urls.beacon_type Beacon type
     * @apiSuccess (Response Fields) {String} beacon_sets.beacon_set_id Id for the beacon set
     * @apiSuccess (Response Fields) {String} beacon_sets.account_id Id for the account
     * @apiSuccess (Response Fields) {Boolean} inserted Whether the beacon set was added successfully
     *
     * @apiSuccessExample {json} Success response for Get Slate Media Source Assets
     *    [{
     *        "account_id": "USER's ACCOUNT ID",
     *        "beacon_set_id": "BEACON_SET_ID_1",
     *        "beacon_urls": [{
     *            "beacon_url": "https://myserver.com/beaconRX/load",
     *            "beacon_type": "Load"
     *        }]
     *    },
     *    {
     *        "account_id": "USER's ACCOUNT ID",
     *        "beacon_set_id": "BEACON_SET_ID_2",
     *        "beacon_urls": [{
     *           "beacon_url": "https://myserver.com/beaconRX2/load",
     *           "beacon_type": "Load"
     *        },
     *        {
     *           "beacon_url": "https://myserver.com/beaconRX2/play",
     *           "beacon_type": "Play"
     *        }]
     *    }]
     *
     */


   // Get beacon sets for user

   /**
     * @api {get} /v1/ssai/beaconsets Get beacon sets for user
     * @apiName Get beacon sets for user
     * @apiGroup SSAI
     * @apiVersion 1.0.0
     *
     * @apiDescription Get all beacon sets for the requesting user.
     *
     * @apiHeader {String} Content-Type Content-Type: application/json
     * @apiHeader {String} X-API-KEY X-API-KEY: {APIKey}
     *
     *
     *
     * @apiSuccess (Response Fields) {Object} beacon_set The beacon set object
     * @apiSuccess (Response Fields) {Object[]} beacon_set.beacon_urls Array of beacon URLs
     * @apiSuccess (Response Fields) {String} beacon_set.beacon_urls.beacon_url Beacon URL
     * @apiSuccess (Response Fields) {String} beacon_set.beacon_urls.beacon_type Beacon type
     * @apiSuccess (Response Fields) {String} beacon_sets.beacon_set_id Id for the beacon set
     * @apiSuccess (Response Fields) {String} beacon_sets.account_id Id for the account
     * @apiSuccess (Response Fields) {Boolean} inserted Whether the beacon set was added successfully
     *
     * @apiSuccessExample {json} Success response for Get Slate Media Source Assets
     *    [{
     *        "account_id": "USER's ACCOUNT ID",
     *        "beacon_set_id": "BEACON_SET_ID_1",
     *        "beacon_urls": [{
     *            "beacon_url": "https://myserver.com/beaconRX/load",
     *            "beacon_type": "Load"
     *        }]
     *    },
     *    {
     *        "account_id": "USER's ACCOUNT ID",
     *        "beacon_set_id": "BEACON_SET_ID_2",
     *        "beacon_urls": [{
     *           "beacon_url": "https://myserver.com/beaconRX2/load",
     *           "beacon_type": "Load"
     *        },
     *        {
     *           "beacon_url": "https://myserver.com/beaconRX2/play",
     *           "beacon_type": "Play"
     *        }]
     *    }]
     *
     */



 // Delete a beacon set

 /**
   * @api {delete} /v1/ssai/beaconset/BEACON_SET_ID Delete beacon set
   * @apiName Delete beacon set
   * @apiGroup SSAI
   * @apiVersion 1.0.0
   *
   * @apiDescription Deletes a beacon set.
   *
   * @apiHeader {String} Content-Type Content-Type: application/json
   * @apiHeader {String} X-API-KEY X-API-KEY: {APIKey}
   *
   * @apiParam (URL Parameters) {String} BEACON_SET_ID URL The id for the beacon set
   *
   * @apiSuccess (Response Fields) {String} beacon_set_id The beacon set id
   * @apiSuccess (Response Fields) {Boolean} deleted Whether the beacon set was deleted successfully
   *
   * @apiSuccessExample {json} Success response for Get Slate Media Source Assets
   *    {
   *        "beacon_set": {
   *            "account_id": "USER's ACCOUNT ID",
   *            "beacon_set_id": "BEACON_SET_ID",
   *            "beacon_urls": [{
   *                "beacon_url": "https://myserver.com/beaconRX/load",
   *                "beacon_type": "Load"
   *            },
   *            {
   *                "beacon_url": "https://myserver.com/beaconRX/play",
   *                "beacon_type": "Play"
   *            }],
   *            "updated_beacon_set": {
   *                "beacon_set_id": "BEACON_SET_ID",
   *                "beacon_urls": [{
   *                    "beacon_url": "https://myserver.com/beaconRX/load",
   *                    "beacon_type": "Load"
   *                },
   *                {
   *                    "beacon_url": "https://myserver.com/beaconRX/play",
   *                    "beacon_type": "Play"
   *                }],
   *                "account_id": "USER's ACCOUNT ID"
   *            }
   *        }
   *    }
   *
   */
