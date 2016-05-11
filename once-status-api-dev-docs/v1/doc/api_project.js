define({  "name": "Once Status API",  "version": "1.0.0",  "description": "Reference for the Once Status API, which allows customers to query the processing statuses of a particular Request ID (returned in the response body of an ingest request). Only the HTTP GET verb is supported and must be made over SSL. If you do not know the Request ID you can query by Foreign Key, which will return a list of all the Request IDs for that particular item. The status data returned will be summary of the major milestones along with any errors that occurred during processing.",  "title": "Once Status API Reference",  "url": "https://api.unicornmedia.com/status-api",  "order": [    "Status",    "Notifications",    "Resend"  ],  "sampleUrl": false,  "apidoc": "0.2.0",  "generator": {    "name": "apidoc",    "time": "2016-05-11T17:56:43.408Z",    "url": "http://apidocjs.com",    "version": "0.13.1"  }});