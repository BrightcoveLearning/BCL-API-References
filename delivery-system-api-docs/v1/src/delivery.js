// get repositories

/**
 * @api {get} /accounts/{accountId}/repos Get All Repositories
 * @apiName Get All Repositories
 * @apiGroup Repositories
 * @apiVersion 1.0.0
 *
 * @apiDescription This will list the details for all repositories in an account.
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} accountId Video Cloud account ID (in older versions of Studio called the Publisher ID).
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
 * @api {get} /accounts/{accountId}/repos/{repoName} Get Repository
 * @apiName Get Repository
 * @apiGroup Single Repository
 * @apiVersion 1.0.0
 *
 * @apiDescription This will retrieve the details for a single repository.
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} accountId Video Cloud account ID (in older versions of Studio called the Publisher ID).
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
 * @api {put} /accounts/{accountId}/repos/{repoName} Create Repository 
 * @apiName Create Repository
 * @apiGroup Single Repository
 * @apiVersion 1.0.0
 *
 * @apiDescription This will create a single repository, if it does not exist. A response of 200 means the repository already existed. A response of 201 means repository was successfully created.
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} accountId Video Cloud account ID (in older versions of Studio called the Publisher ID).
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
 * @api {delete} /accounts/{accountId}/repos/{repoName} Delete Repository
 * @apiName Delete Repository
 * @apiGroup Single Repository
 * @apiVersion 1.0.0
 *
 * @apiDescription This will delete a single repository.
 *
 * @apiHeader {String} Content-Type Content-Type: application/json
 * @apiHeader {String} Authorization Authorization: Bearer access_token (see [Getting Access Tokens](http://docs.brightcove.com/en/video-cloud/oauth-api/guides/get-token.html))
 *
 * @apiParam (Path Parameters) {String} accountId Video Cloud account ID (in older versions of Studio called the Publisher ID).
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