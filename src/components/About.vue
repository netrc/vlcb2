<template>
    <section>
        <navigation></navigation>

    </section>
</template>

<script>
import navigation from "@/components/NavBar.vue";
import firebase from "firebase"

export default {
    data() {
        return {
          user: null
        };
    },
    components: {
        navigation
    },
    created() {
      firebase.auth().onAuthStateChanged( user => {
        if (user) {
          this.user = user
        }
      })
    }
};
</script>
