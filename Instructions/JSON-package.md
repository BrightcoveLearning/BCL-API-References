# APIDOC - The JSON Package.

The configuration file is `apidoc.json`. It looks like this:

    ```json
    {
        "name": "CMS API",
        "version": "1.0.0",
        "description": "Reference for the Brightcove CMS API, used to access and manage your Video Cloud media library.",
        "title": "CMS API Reference",
        "url" : "https://cms.api.brightcove.com/v1",
        "order": [
            "Videos",
            "Get_Videos",
            "Get_Video",
            "Create_Video",
            "Delete_Video",
            "Playlists"
        ]
    }
    ```

## Notes

- `name`: the name of the API (required)
- `version`: the current version (required)
- `description`: description of the api (required)
- `title`: the title of the reference doc (required)
- `url`: the base URL for the api (required)
- `order`: how the groups and operations should be ordered (optional)

In the `order` array, you can mix and match group names and operation names. Groups are kept together automatically, and any group or operation not included will be fall to the bottom and be ordered alphabetically.

**Note: no spaces in group or operation names - replace them with underscores, as in the example above. It's probably easiest to put in the order after you have documented the groups and operations.** 