// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDC31eu72cS5X-KahoOmORMqoXGZW7XGIg",
  authDomain: "webjournal.firebaseapp.com",
  databaseURL: "https://webjournal.firebaseio.com",
  projectId: "webjournal",
  storageBucket: "webjournal.appspot.com",
  messagingSenderId: "721905720562",
  appId: "1:721905720562:web:9e5f2fdd1690fa6d35446b",
  measurementId: "G-X3Y3HWYD1K"
};

firebase.initializeApp( firebaseConfig )

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
