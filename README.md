# Notes on apidoc

## Set up and run

- install: npm -g apidoc
(there is also a grunt task - I haven't tried that)

- run command (for standard file setup - see below):
apidoc -i src/  -f .js -o doc/ -t ../../template

i = input folder
o = output folder (default is doc/ )
f = file type to scan (include one or more -f flags; by default, .cs .dart .erl .go .java .js .php .py .rb .ts files are scanned)
t = template folder

## Params @apiparam

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