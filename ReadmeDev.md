# Development notes

* fst tooling
  * works for churches
  * add brasses, rubbings, notes, pics, logs
  * roles ?
  * DONE - servicekey - retrieved from firebase vlcb2 settings, service accounts; saved in keys (not in git)
  * ? how long does servicekey last? can i make new ones?

* vlcb main.js config
  * DONE - auth - retrieved from firebase vlcb2 settings, app 'config'
* churches
  * DONE basic data list works
  * full view of data
* brasses
  * upload data
* other pages
  * map
  * blog
  * stats
  * logs (w/ pagination!) (or autoscroll!)

* hosting
  * does this work as github hosted page?
  * and/or work as firebase hosted?

* need better Firestore Rules
  * need roles document; maybe just roles: { editors: richard }
  * write is allowed to editors
  * so far haven't needed 'list' rule

* not sure if need to make REST functions apis; maybe just as an exercise
  * but then lose updates on changes ?




* Thanks to https://softauthor.com/vue-firestore-crud-app-authentication/
* note that for development, local browser turn off add blocking and allow blocked 3rd party cookies -- localhost

This is a starter project folder for FirebaseUI Auth for Vue with Facebook, Google and Email Authentications.

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
