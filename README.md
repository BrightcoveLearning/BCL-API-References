# Notes on apidoc

## Set up and run

- install: npm -g apidoc
(there is also a grunt task - I haven't tried that)

## apidoc.json

    {
        "name": "CMS API",
        "version": "1.0.0",
        "description": "Reference for the Brightcove CMS API, used to access and manage your Video Cloud media library.",
        "title": "CMS API Reference",
        "url" : "https://cms.api.brightcove.com/v1"
    }

## Run

- run command (for standard file setup):

    apidoc -i src/  -f .js -o doc/ -t ../../template

- i = input folder
- o = output folder (default is doc/ )
- f = file type to scan (include one or more -f flags; by default, .cs .dart .erl .go .java .js .php .py .rb .ts files are scanned)
- t = template folder

## @api

Sample:

    @api {get} /accounts/:account_id/video_fields Get Folders

"Get Folders" is the name that will appear in the sidenav

Also put the name in the @apiName:

    @apiName Get Folders

I think the template should be using apiName to populate the sidenav - will try to fix that at some point

## @apiGroup

The api groups make up the main headings in the sidenav

    @apiGroup Folders

## @apiVersion

The version of the API that first included this operation

    @apiVersion 1.0.0

## @apiparam

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

## Success @apisuccess

- set group (I'm using `Response Fields`)

## Gotchas

- param descriptions must not include: " - "
- for default value of [] must enclose that in "[]"
    - e.g. @apiparam (Request Body Fields) {String[]} video_ids="[]" array of video ids