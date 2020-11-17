# Notes

## Run notes

* browser app - apiKey is from firebase settings, General, 'app' section. The apiKey is not a secret, but google/github scanners pick it up. So it's arbitrarily split up in the code
* fst.js tool - needs a service key generated from project settings, service key. the file is stored in a directory outside of the source control (~/lsrc/vue1) and SERVICE_KEY_FILE is set to full path

## Development notes

* fst tooling
  * DONE simple output works for churches, roles
  * DONE brasses, rubbings, notes, pics
  * ignoring logs
  * DONE: dump json  - fst.js -dump .... 
  * todo: general run script
  * todo: import json

* vlcb main.js config
  * DONE - retrieved from firebase vlcb2 settings, app 'config'
  * DONE - need to keep config (just apiKey) in environment (outside of src)
* Styling
  * Navbar background
  * page background
  * scroll left hand nav section
  * Add nav bar dropdown for Notes -  About/Diary/Bibliography/Login
  * DONE - favicon, title
* vlcb component/Login.js
  * ? add email login too?  // not really; only 'role' is editor == me
  * DONE - using google id login ok
  * what's with 'PROVIDER_ID' in the signInOptions - https://firebase.google.com/docs/projects/pwa
  * show Role in Profile (if logged in)
* churches
  * DONE basic data list works;  DONE basic view of data
  * change background on selection
  * need markdown for mainNote
    * show compiled markdown
  * inline editing
    * https://www.npmjs.com/package/vue-inline-text-editor
    * https://tiptap.dev/
    * when clicked, replace with raw markdown
    * when saved, put data in firestore, show new compiled markdown
  * inline editing for year - !! if editor
  * inline editing for address - !! if editor
  * inline editing for mainNote - !! if editor
  * inline editing for latlon - !! if editor
  * geoLink
  * "add Church" button !! if editor - just add dummy church
  * // no 'delete' button, use firestore console
* brasses
  * DONE - upload data, and basic page view
* rubbings
  * DONE - upload data, and basic page view
* pics
  * DONE - upload data - merged into church/brass/rubbing objects in DB
* other pages
  * map
  * blog
  * stats
  * DONE - notes/about
  * notes/diary
  * notes/bibliography
  * logs (w/ pagination!) (or autoscroll!)

* hosting
  * does this work as github hosted page?
  * and/or work as firebase hosted?
    * https://vlcbt1-bd686.web.app/
    * firebase deploy   // dist dir name in f.json
      * had to get rid of functions directory; some errors when deploying helloworld func

Firestore
* indexer function ?
  * any update/insert to brasses d,  go through all brasses and reset index in church[x].brasses = [ a,b,c,d ]
  * any update/insert to rubbings d,  go through all rubbings and reset index in brasses[x].rubbings = [ a,b,c,d ]
  * any update/insert to churches d,  go through all churches and reset ? cache value of geoMarks ?
  * put indexes, cache in 'cache' collection ?
* need better Firestore Rules
  * need roles document; maybe just roles: { editors: richard }
  * write is allowed to editors
  * so far haven't needed 'list' rule

* not sure if need to make REST functions apis; maybe just as an exercise
  * but then lose updates on changes ?




* Thanks to https://softauthor.com/vue-firestore-crud-app-authentication/
* note that for development, local browser turn off add blocking and allow blocked 3rd party cookies -- localhost

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
