# lbry_search_nodejs
**Searches LBRY using lbrynet command and saves results to a text file.**

Using the bash shell script, `lbrynet claim search --text=<search term>`
this script searches LBRY and saves the results to a file. The save file is the same name as the search term. Do not use spaces use _ between words. Example: red_herring.<br/>

For installation just run:

git clone https://github.com/JupyterJones/lbry_search_nodejs.git<br/>
cd lbry_search_nodejs<br/>
Then ` npm install`<br/>
USE: `node  node lbry_search.js`<br/>

lbry_search_nodejs$ node lbry_search.js
this results in `Search for what ? `
## example:
    $ node lbry_search.js
     Search for what ? Red_Herring
    Search for: Red_Herring!

    The search results are in: Red_Herring.txt

        "page": 1,
        "page_size": 20,
        "total_items": 22,
       "total_pages": 2
      }

"page" 1,   &nbsp;&nbsp;&nbsp;&nbsp;  Indicates this is the first page.<br/>
"page_size": 20,  &nbsp;&nbsp;&nbsp;&nbsp;  shows 20 items are on this page.<br />
"total_items": 22, A total of 22 items were found
