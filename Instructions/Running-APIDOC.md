# APIDOC - Running APIDOC

The run command for APIDOC, using the standard file setup described in [Project-Setup](Project-Setup.md), is:

```bash
    apidoc -i src/  -f .js -o doc/ -t ../../template
```
(Learning Services: shared Dash snippet: ``apidoccmd`)

## Notes

- i = input folder
- o = output folder (default is doc/ )
- f = file type to scan (include one or more -f flags; by default, .cs .dart .erl .go .java .js .php .py .rb .ts files are scanned)
- t = template folder

You don't need to change anything here if you use the standard file setup and put your APIDOC comments in `.js` files. If you use some other language like Java or Ruby, change the `-f` flag value accordingly.

**Note: the APIDOC comments are independent of the language used to create the actual API. It is recommended that you use `.js` files in all cases, but that is not required. See the [APIDOC Reference](http://apidocjs.com/) for information on the structure of comments in other languages. These instructions assume you will use JavaScript comments.**