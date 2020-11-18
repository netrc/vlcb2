<template>
    <section>
        <navigation></navigation>
        <p> {{about}} </p>
        <br>
        <hr>
        <mdviewedit> xyz </mdviewedit>
    </section>
</template>

<script>
import navigation from "@/components/NavBar.vue";
import firebase from "firebase"
import mdviewedit from "@/components/MdViewEdit.vue"

export default {
    data() {
        return {
          about: "..."
        };
    },
    components: {
        navigation,
        mdviewedit
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
