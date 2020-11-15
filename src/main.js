// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import firebase from 'firebase'

const firebaseConfig = {
  authDomain: "vlcbt1-bd686.firebaseapp.com",
  databaseURL: "https://vlcbt1-bd686.firebaseio.com",
  projectId: "vlcbt1-bd686",
  storageBucket: "vlcbt1-bd686.appspot.com",
  messagingSenderId: "88733113811",
  appId: "1:88733113811:web:0778717c0bf88e96206326"
}
firebaseConfig.apiKey = process.env.firebaseApiKey

firebase.initializeApp( firebaseConfig )

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
