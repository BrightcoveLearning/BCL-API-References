# APIDOC - API Project Setup

To set up documentation for a new API, create the file structure below under the repo root:

- api-name (e.g. cms-api)
    - apidoc.json
    - v1 (or vX for other versions)
        + doc
        + src

The simplest thing to do is copy an existing directory and edit.

Your files to parse will go in `src`.

Generated references will be in `doc`.

**Note to Learning Services only:** you need to duplicate the ...api directory and name the copy ...api-dev-docs -- but do all your src editing in the ...api directory (the deploy script will take care of syncing to the -dev-docs directory)