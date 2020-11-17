<template>
    <section>
        <navigation></navigation>
        <p> {{about}} </p>
    </section>
</template>

<script>
import navigation from "@/components/NavBar.vue";
import firebase from "firebase"

export default {
    data() {
        return {
          about: "..."
        };
    },
    components: {
        navigation
    },
    created() {
      this.getAbout()
    },
    methods: {
      async getAbout() {
        const doc = await firebase.firestore().collection('notes').doc('about').get()
        this.about = (!doc.exists) ? 'doc dont exist' : doc.data().mdtext
      }
    }
};
</script>
