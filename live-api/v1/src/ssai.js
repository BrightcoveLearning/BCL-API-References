// Create an Ad application_ad_configuration

/**
  * @api {post} /v1/ssai/application_ad_configuration
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
  * @apiSuccess (Response Fields) {String} TODO
  *
  * @apiSuccessExample {json} Success response for create ad application
  *    {
  *      "adconfig": {
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
// Update an Ad application_ad_configuration

/**
  * @api {put} /v1/ssai/application_ad_configuration/:application_id
  * @apiName Create Ad Configuration
  * @apiGroup SSAI
  * @apiVersion 1.0.0
  *
  * @apiDescription Create a configuration for server-side ad application.
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
  * @apiSuccess (Response Fields) {String} TODO
  *
  * @apiSuccessExample {json} Success response for create ad application
  *    {
  *      "adconfig": {
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
// Get an Ad application_ad_configuration

/**
  * @api {get} /v1/ssai/application_ad_configuration/:application_id
  * @apiName Create Ad Configuration
  * @apiGroup SSAI
  * @apiVersion 1.0.0
  *
  * @apiDescription Create a configuration for server-side ad application.
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
  *      "adconfig": {
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
