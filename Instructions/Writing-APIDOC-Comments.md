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

