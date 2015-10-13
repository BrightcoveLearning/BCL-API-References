# APIDOC - Deploy Reference to Public Docs

**Note: this page applies to Learning Services only.**

Without significant modifications to the APIDOC template, API references have to be embedded in the docs via iframes. I've worked out

## Steps

1. In Finder, go to the **BCL-developer-docs/.../references/versions/v1/** folder for the API
2. Rename the existing `index.html` file: `index-apiary.html`
3. Create a new empty folder named `apidoc` in the same folder
4. In **BCL-developer-docs/en/templates**, find the appropriate template:
    * `index-for-apidoc-old-script.html` for sections using the old landing page format
    * `index-for-apidoc-new-script.html` for sections using the new landing page format
5. Copy the appropriate template to the **BCL-developer-docs/.../references/versions/v1/** folder and rename it `index.html`
6. Change the &lt;title&gt; tag to reflect the correct API
7. Sync the **BCL-API-References/.../v1/doc** folder with the **BCL-developer-docs/.../references/versions/v1/apidoc** folder (BCL-API-References should always have the latest version)