// get repositories

/**
 * @api {get} /accounts/:accountId/repos Get All Repositories
 * @apiName Get All Repositories
 * @apiGroup Repositories
 * @apiVersion 1.0.0
 *
 * @apiDescription This will list the details for all repositories in an account.
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} accountId Video Cloud account ID.
 *
 * @apiSuccess (Response Fields) {String[]} items array of items
 * @apiSuccess (Response Fields) {String} items.name repo name
 * @apiSuccess (Response Fields) {String} items.public_url URL for the public player
 * @apiSuccess (Response Fields) {String} items.repo_url URL for the repository
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200
 *    {
 *      "items": [
 *        {
 *          "name": "009bc3a8-bb3f-4f94-ae9c-8e9161dc0072_af909574-1b95-4167-8f5a-81939725e843",
 *          "public_url": "http://players.brightcove.net/1507807800001/009bc3a8-bb3f-4f94-ae9c8e9161dc0072_af909574-1b95-4167-8f5a-81939725e843",
 *          "repo_url": "https://repos.api.brightcove.com/v1/accounts/1507807800001/repos/009bc3a8-bb3f-4f94-ae9c-8e9161dc0072_af909574-1b95-4167-8f5a-81939725e843"
 *        },
 *        {
 *          "name": "009bc3a8-bb3f-4f94-ae9c-8e9161dc0072_default",
 *          "public_url": "http://players.brightcove.net/1507807800001/009bc3a8-bb3f-4f94-ae9c-8e9161dc0072_default",
 *          "repo_url": "https://repos.api.brightcove.com/v1/accounts/1507807800001/repos/009bc3a8-bb3f-4f94-ae9c-8e9161dc0072_default"
 *        }
 *      ],
 *        "item_count": 2
 *    }
 *
 */

// get single repository

/**
 * @api {get} /accounts/:accountId/repos/:repoName Get Repository
 * @apiName Get Repository
 * @apiGroup Single Repository
 * @apiVersion 1.0.0
 *
 * @apiDescription This will retrieve the details for a single repository.
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} accountId Video Cloud account ID.
 * @apiParam (Path Parameters) {String} repoName The name of the repo for which to list details.
 *
 * @apiSuccess (Response Fields) {String} name repo name
 * @apiSuccess (Response Fields) {String} public_url URL for the public player
 * @apiSuccess (Response Fields) {String} repo_url URL for the repository
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200
 *    {
 *      "name": "firstRepo",
 *      "public_url": "http://players.brightcove.net/1507807800001/firstRepo",
 *      "repo_url": "https://repos.api.brightcove.com/v1/accounts/1507807800001/repos/firstRepo"
 *    }
 *
 */

// create single repository

/**
 * @api {put} /accounts/:accountId/repos/:repoName Create Repository
 * @apiName Create Repository
 * @apiGroup Single Repository
 * @apiVersion 1.0.0
 *
 * @apiDescription This will create a single repository, if it does not exist. A response of 200 means the repository already existed. A response of 201 means repository was successfully created.
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} accountId Video Cloud account ID.
 * @apiParam (Path Parameters) {String} repoName The name of the repo for which to list details.
 *
 * @apiSuccess (Response Fields) {String} name repo name
 * @apiSuccess (Response Fields) {String} public_url URL for the public player
 * @apiSuccess (Response Fields) {String} repo_url URL for the repository
 *
 * @apiSuccessExample {json} Success Response 200:
 *     HTTP/1.1 200
 *    {
 *      "name": "existingRepo",
 *      "public_url": "http://players.brightcove.net/1507807800001/existingRepo",
 *      "repo_url": "https://repos.api.brightcove.com/v1/accounts/1507807800001/repos/existingRepo"
 *    }
 *
 *
 * @apiSuccessExample {json} Success Response 201:
 *     HTTP/1.1 201
 *    {
 *      "name": "newRepo",
 *      "public_url": "http://players.brightcove.net/1507807800001/newRepo",
 *      "repo_url": "https://repos.api.brightcove.com/v1/accounts/1507807800001/repos/newRepo"
 *    }
 *
 */

// delete single repository

/**
 * @api {delete} /accounts/:accountId/repos/:repoName Delete Repository
 * @apiName Delete Repository
 * @apiGroup Single Repository
 * @apiVersion 1.0.0
 *
 * @apiDescription This will delete a single repository.
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} accountId Video Cloud account ID.
 * @apiParam (Path Parameters) {String} repoName The name of the repo for which to list details.
 *
 * @apiSuccess (Response Fields) {String} name repo name
 *
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200
 *    {
 *      Successfully deleted repo MyRepoName.
 *    }
 *
 */

 /**
  * @apiDefine devsystemgroup Manipulating Files
  * There is nothing in the Manipulating Files calls to the API to display the contents of a file, but you can do so in these two ways:
  * <ul>
  *   <li>Browse the <code>public_url</code> that is part of the response in the file add/update</li>
  *   <li>Use cURL to the file: <code>curl http://players.brightcove.net/:accountId/repos/:repoName/files/:filename</code></li>
  * </ul>
  */

 // add or update file

 /**
  * @api {put} /accounts/:accountId/repos/:repoName/files/:destinationFilename Add/Update File
  * @apiName Add/Update File
  * @apiGroup devsystemgroup
  * @apiVersion 1.0.0
  *
  * @apiDescription This will add or update a file. The wanted file name is at the end of the endpoint. The <code>form contents</code> can be a file name, including relative path, or any string. If the file has a <code>.json</code> extension, it will be checked for valid JSON format.
  *
  * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
  *
  * @apiParam (Path Parameters) {String} accountId Video Cloud account ID.
  * @apiParam (Path Parameters) {String} repoName The name of the repo for which to list details.
  * @apiParam (Path Parameters) {String} destinationFilename The name of the file in the repo, it can be different than the name of locally read file.
  *
  * @apiParam (Form Contents Value - Note: The value can be a file or a JSON string; If using a file it must be proceeded with the @ sign) {String} sourceFilename Name of the file in the local folder, or a JSON string.
  *
  * @apiParamExample {curl} curl Statement:
  *    curl \
  *      --user :email \
  *      --form contents=@sourceFilename \
  *      --request PUT \
  *      https://repos.api.brightcove.com/v1/accounts/:accountId/repos/:repoName/files/:destinationFilename
  *
  * @apiSuccess (Response Fields) {String} name Destination filename
  * @apiSuccess (Response Fields) {String} public_url URL to use for referencing the file (contrasted to the repo URL)
  *
  * @apiSuccessExample {json} Success Response:
  *     HTTP/1.1 200
  *     {
  *       "name": "newname.txt",
  *       "public_url": "http://players.brightcove.net/1507807800001/testRepo1/newname.txt"
  *     {
  */

  // delete a file

  /**
   * @api {delete} /accounts/:accountId/repos/:repoName/files/:filename Delete File
   * @apiName Delete File
   * @apiGroup devsystemgroup
   * @apiVersion 1.0.0
   *
   * @apiDescription Deletes a file in a repo.
   *
   * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
   *
   * @apiParam (Path Parameters) {String} accountId Video Cloud account ID.
   * @apiParam (Path Parameters) {String} repoName The name of the repo for which to list details.
   * @apiParam (Path Parameters) {String} filename The name of the file in the repo to delete.
   *
   * @apiParamExample {curl} curl Statement:
   *    curl \
   *      --user :email \
   *      --request DELETE \
   *      https://repos.api.brightcove.com/v1/accounts/:accountId/repos/:repoName/files/:filename
   *
   * @apiSuccessExample {json} Success Response:
   *     HTTP/1.1 200
   *     {
   *       message: "The call was successful."
   *     {
   */

   // list all files

   /**
    * @api {get} /accounts/:accountId/repos/:repoName/files List Files
    * @apiName List Files
    * @apiGroup devsystemgroup
    * @apiVersion 1.0.0
    *
    * @apiDescription Lists all the files in a repo.
    *
    * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
    *
    * @apiParam (Path Parameters) {String} accountId Video Cloud account ID.
    * @apiParam (Path Parameters) {String} repoName The name of the repo for which to list details.
    *
    * @apiParamExample {curl} curl Statement:
    *    curl \
    *      --user :email \
    *      --request GET \
    *      https://repos.api.brightcove.com/v1/accounts/:accountId/repos/:repoName/files/
    *
    * @apiSuccessExample {json} Success Response:
    *     HTTP/1.1 200
    *      {
    *        "items": [{
    *          "name": "newname.txt",
    *          "public_url": "http://players.brightcove.net/1507807800001/testRepo1/newname.txt"
    *        }, {
    *          "name": "test.txt",
    *          "public_url": "http://players.brightcove.net/1507807800001/testRepo1/test.txt"
    *        }],
    *        "item_count": 2
    *      }
    */
