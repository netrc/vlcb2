<template>
  <section>
    <navigation></navigation>
    <h5> &nbsp; &nbsp; select login method...</h5>
    <section id="firebaseui-auth-container"></section>
  </section>
</template>

<script>
// was <h5 class="center-align">Login</h5>
import navigation from "@/components/NavBar.vue";
import firebase from "firebase";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

export default {
  name: "Login",
  data() {
    return {};
  },
  components: {
    navigation
  },
  mounted() {
    let ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }
    //const ui = (_ui) ? _ui : new firebaseui.auth.AuthUI(firebase.auth());

    var uiConfig = {
      signInSuccessUrl: "/profile",
      signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
    };
    ui.start("#firebaseui-auth-container", uiConfig);
  }
};
</script>

<style>
</style>
