// Create an Ad application_ad_configuration

/**
  * @api {post} /v1/ssai/application_ad_configuration Create Ad Configuration
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
  * @apiParam (Request Body Fields) {String} application_description Human readable description of the ad application.
  * @apiParam (Request Body Fields) {String} account_id Your account id.
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
  *            "ad_configuration_url_format": "https://ad-provider-host.com/path/to/ad-handler?ip=${ipaddress}&num=${rand32}&ses=${session}",
  *            "ad_configuration_variables": {
  *              "ipaddress": "{{client.ipaddress}}",
  *              "rand32": "{{random.int32}}",
  *              "session": "{{session.key}}"
  *            }
  *        },
  *        "application_description": "Human readable description of the ad application",
  *        "account_id": "USER'S ACCOUNT ID",
  *        "application_segment_buffer": 4
  *    }
  *
  * @apiSuccess (Response Fields) {Object} application The ad application object
  * @apiSuccess (Response Fields) {String} application.account_id The account id
  * @apiSuccess (Response Fields) {String} application.description The ad application description
  * @apiSuccess (Response Fields) {String} application.segment_buffer The amount of a segment to be buffered in seconds
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
  *        "application_segment_buffer": 4,
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
  *          "ad_configuration_url_format": "https://ad-provider-host.com/path/to/ad-handler?ip=${ipaddress}&num=${rand32}&ses=${session}",
  *          "ad_configuration_variables": {
  *            "ipaddress": "{{client.ipaddress}}",
  *            "rand32": "{{random.int32}}",
  *            "session": "{{session.key}}"
  *          }
  *        },
  *        "application_id": "APPLICATION ID"
  *      },
  *      "inserted": true
  *    }
  */

// Update an Ad application_ad_configuration

/**
  * @api {put} /v1/ssai/application_ad_configuration/:application_id Update Ad Configuration
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
  * @apiParam (Request Body Fields) {Object} application_ad_configuration The ad configuration object
  * @apiParam (Request Body Fields) {String} application_ad_configuration.ad_configuration_description Human readable description of the configuration.
  * @apiParam (Request Body Fields) {String="Dfp","Vast","SmartXML"} application_ad_configuration.ad_configuration_expected_response_type The expected response type based on your ad server
  * @apiParam (Request Body Fields) {String="SingleAdResponse","MultipleAdResponse"} application_ad_configuration.ad_configuration_strategy Specifies whether ad breaks should include single or muliple ads
  * @apiParam (Request Body Fields) {Object[]} application_ad_configuration.ad_configuration_transforms Array of ad configuration transforms.
  * @apiParam (Request Body Fields) {String} application_ad_configuration.ad_configuration_transforms.xpath xpath for the transform.
  * @apiParam (Request Body Fields) {String} application_ad_configuration.ad_configuration_transforms.xslt xslt stylesheet for the transform.
  * @apiParam (Request Body Fields) {String} application_description Human readable description of the ad application.
  * @apiParam (Request Body Fields) {String} account_id Your account id.
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
  *            "ad_configuration_url_format": "https://ad-provider-host.com/path/to/ad-handler?ip=${ipaddress}&num=${rand32}&ses=${session}",
  *            "ad_configuration_variables": {
  *              "ipaddress": "{{client.ipaddress}}",
  *              "rand32": "{{random.int32}}",
  *              "session": "{{session.key}}"
  *            }
  *        },
  *        "application_description": "Human readable description of the ad application",
  *        "account_id": "USER'S ACCOUNT ID",
  *        "application_segment_buffer": 4
  *    }
  *
  * @apiSuccess (Response Fields) {Object} application The ad application object
  * @apiSuccess (Response Fields) {String} application.account_id The account id
  * @apiSuccess (Response Fields) {String} application.description The ad application description
  * @apiSuccess (Response Fields) {String} application.segment_buffer The amount of a segment to be buffered in seconds
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
  *        "application_segment_buffer": 4,
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
  *          "ad_configuration_url_format": "https://ad-provider-host.com/path/to/ad-handler?ip=${ipaddress}&num=${rand32}&ses=${session}",
  *          "ad_configuration_variables": {
  *            "ipaddress": "{{client.ipaddress}}",
  *            "rand32": "{{random.int32}}",
  *            "session": "{{session.key}}"
  *          }
  *        },
  *        "application_id": "APPLICATION ID"
  *      },
  *      "inserted": true
  *    }
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
    * @apiSuccess (Response Fields) {String} application.segment_buffer The amount of a segment to be buffered in seconds
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
    *    {
    *      "application": {
    *        "account_id": "USER ACCOUNT ID",
    *        "application_description": "Human readable description of the ad application",
    *        "application_segment_buffer": 4,
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
    *          "ad_configuration_url_format": "https://ad-provider-host.com/path/to/ad-handler?ip=${ipaddress}&num=${rand32}&ses=${session}",
    *          "ad_configuration_variables": {
    *            "ipaddress": "{{client.ipaddress}}",
    *            "rand32": "{{random.int32}}",
    *            "session": "{{session.key}}"
    *          }
    *        },
    *        "application_id": "APPLICATION ID"
    *      },
    *      "inserted": true
    *    }
    *    ]
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
  * @apiSuccess (Response Fields) {String} TODO
  *
  * @apiSuccessExample {json} Success response for create ad application
  *    {
  *      "application": {
  *        "account_id": "USER ACCOUNT ID",
  *        "application_description": "Human readable description of the ad application",
  *        "application_segment_buffer": 4,
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
  *          "ad_configuration_url_format": "https://ad-provider-host.com/path/to/ad-handler?ip=${ipaddress}&num=${rand32}&ses=${session}",
  *          "ad_configuration_variables": {
  *            "ipaddress": "{{client.ipaddress}}",
  *            "rand32": "{{random.int32}}",
  *            "session": "{{session.key}}"
  *          }
  *        },
  *        "application_id": "APPLICATION ID"
  *      },
  *      "inserted": true
  *    }
  *
  */

 // Delete an ad application

/**
  * @api {delete} /v1/ssai/application/:application_id Create Ad Configuration
  * @apiName Create Ad Configuration
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
  *
  * @apiParamExample {json} Create an ad configuration example:
  *    {
  *        "source_url": "https://somesourceasset.com/slate-to-ingest.mp4",
  *        "account_id": "ACCOUNT_ID"
  *    }
  *
  *
  * @apiSuccess (Response Fields) {String} media_source_asset_id Id for the slate asset
  * @apiSuccess (Response Fields) {String} account_id Id for the account
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
  * @api {get} /v1/ssai/slate/:ACCOUNT_ID Get Slate Media Source Assets
  * @apiName Get Slate Media Source Assets
  * @apiGroup SSAI
  * @apiVersion 1.0.0
  *
  * @apiDescription Get Slate Media Source Assets for an accout.
  *
  * @apiHeader {String} Content-Type Content-Type: application/json
  * @apiHeader {String} X-API-KEY X-API-KEY: {APIKey}
  *
  * @apiParam (URL Parameters) {String} ACCOUNT_ID URL The account id
  *
  * @apiSuccess (Response Fields) {String} media_source_asset_id Id for the slate asset
  * @apiSuccess (Response Fields) {String} account_id Id for the account
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
  */
