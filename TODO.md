# TODO

-   passing no language to ``` is throwing
-   server option should have hot-reload
-   robots.txt
-   sitemap
-   analytics
-   ads
-   AMP pages
-   add highlight lines to code
-   youtube embeds
-   test mediaFiles
-   more themes
-   multilanguage

# DONE

-   better template structure, probably you need to use React Helmet so it's more manageable
-   ability to change css properties like color of texts
-   should be able to run bin.js from anywhere
-   preview of a blog by passing a folder
-   show file size in output
-   media files for posts (they should pass for webpack though and hashed versioned in title)
-   urls that are relative should resolve to baseUrl
-   allow mediaFiles
-   test https://marked.js.org/#/USING_ADVANCED.md (NOT GOOD ENOUGH)
-   use https://github.com/cure53/DOMPurify to sanitize html
-   try to print webpack compilation errors, for example using a \$var in a css file that doesnt exist
-   easy way to access tag page
-   header is repeated in all posts, no needed
-   create tags page
-   mobile first
-   sort posts by date
-   parse dates
-   remove <base> so you can use references in the same page with anchors<a href="#title">
-   generate a blog from a folder with md files
-   highlight syntax for code
-   use development environment using the actual production assets
-   create a module that receives a blog.json and returns a .json file structure
-   implement pagination
-   tests
-   add page # in the title for index/tag pages
-   check why there's a p after a colon in ul lists eg: /what-is-js-made-of
    -   basically if there's 2 linebreaks between the li items it automatically wraps it with a p tag
