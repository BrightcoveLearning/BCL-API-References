// Create a VOD Clip by Duration from Live

/**
  * @api {post} /v1/vods Create VOD Clip
  * @apiName Create VOD Clip
  * @apiGroup VODs
  * @apiVersion 1.0.0
  *
  * @apiDescription Create VOD clips from a Live Stream.
  *
  * @apiHeader {String} Content-Type Content-Type: application/json
  * @apiHeader {String} X-API-KEY X-API-KEY: {APIKey}
  *
  * @apiParam (Request Body Fields) {String} live_job_id The id of Live Stream job to create the VOD clip from.
  * @apiParam (Request Body Fields) {Object[]} outputs Array of VOD outputs
  * @apiParam (Request Body Fields) {String} outputs.label Label for the output
  * @apiParam (Request Body Fields) {Number} outputs.duration Duration of the clip in seconds
  * @apiParam (Request Body Fields) {String} outputs.url URL for the clip
  *
  * @apiParamExample {json} Create a VOD Clip by Duration from Live Request Body Example:
  *    {
  *        "live_job_id":"PUT-LIVE-JOB-ID-HERE",
  *        "outputs":[
  *            {
  *                "label": "last 60 secs of live job",
  *                "duration": 60,
  *                "url": "ftp://log:pass@yourftpserver.com:21/live/test_dur60.mp4"
  *            }
  *        ]
  *    }
  *
  * @apiParamExample {json} Create a VOD Clip by an Offset from the Start Request Body Example:
  *    {
  *        "live_job_id":"PUT-LIVE-JOB-ID-HERE",
  *        "outputs":[
  *            {
  *                "label": "60 secs by stream from min 2 to min 3",
  *                "stream_start_time": 120,
  *                "stream_end_time": 180,
  *                "url": "ftp://yourftpserver.com/live/test_stream_min2to3.mp4",
  *                "credentials": "YOUR_CREDENTIALS"
  *            }
  *        ]
  *    }
  *
  * @apiParamExample {json} Create a VOD Clip by Unix Timestamp Request Body Example:
  *    {
  *        "live_job_id":"PUT-LIVE-JOB-ID-HERE",
  *        "outputs":[
  *            {
  *                "label": "60 secs by timestamp”,
  *                "start_time": 1471375580,
  *                "end_time": 1471375640,
  *                "url": "ftp://yourftpserver.com/live/test_stream_timestamp.mp4",
  *                "credentials": "YOUR_CREDENTIALS"
  *            }
  *        ]
  *    }
  *
  * @apiSuccess (Response Fields) {String} TODO
  *
  */
