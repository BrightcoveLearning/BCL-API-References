# APIDOC - Writing the APIDOC Comments

**Note: Since we are not running APIDOC on the actual API code files, the APIDOC comments are independent of the language used to create the API. It is recommended that you use `.js` files in all cases, but that is not required. See the [APIDOC Reference](http://apidocjs.com/) for information on the structure of comments in other languages. These instructions assume you will use JavaScript comments.**

## Files

You can use as many or as few `.js` files for the comments as you wish. You can use separate files for each API operation if you prefer. After some experimentation, I found that using a file for each operation group was most convenient.

## Groups

The groups are also arbitrary - you can have a separate group for each endpoint if you wish. I found that for some APIs, that resulted in what seemed like a confusing number of groups, so I tried to create logical groupings instead. For the CMS API, for instance, I created the following groups:

* Video
* Playlist
* Custom_Fields
* Folders
* Notifications

## API Operation Comment Blocks

Each API operation requires a comment block that starts like this:

```js
    // get videos (this kind of comment not parsed - I found it useful for finding blocks in long files)

    /**
     * @api {get} /accounts/:account_id/videos Get Videos
     * @apiName Get Videos
     * @apiGroup Video
     * @apiVersion 1.0.0
     *
     * @apiDescription Gets a page of video objects
     * ...
     * /
```

Every command to the parser begins with `@api` - below is a list of the essential parser commands, followed by a full example.

### @api

Sample:

    @api {get} /accounts/:account_id/video_fields Get Folders

"Get Folders" is the name that will appear in the sidenav

### @apiName

Should have the same value as the name of the operation you included at the end of the @api line:

    @apiName Get Folders

I think the template should be using apiName to populate the sidenav - will try to fix that at some point

### @apiGroup

The api groups make up the main headings in the sidenav. For best results, use snake_case for group names, not spaces:

    @apiGroup Custom_Fields

### @apiVersion

The version of the API that first included this operation:

    @apiVersion 1.0.0

### @apiparam

- be sure to include group by type - I'm using groups:
    - `Path Parameters`
    - `URL Parameters`
    - `Request Body Fields`
- param types:
    - {String}
    - {Number}
    - {Boolean}
    - {Array}
    - {Object}
    - {DateString}
    - {String[]} array of strings
    - {Number[]} array of numbers
    - {Object[]} array of objects

### @apisuccess

- set group (I'm using `Response Fields`)

## Gotchas

- param descriptions must not include: " - "
- for default value of [] must enclose that in "[]"
    - e.g. @apiparam (Request Body Fields) {String[]} video_ids="[]" array of video id
