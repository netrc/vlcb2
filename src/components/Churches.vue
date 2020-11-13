<template>
  <section>
    <navigation></navigation>
    <h5 class="center-align">Churches</h5>

    <li class="collection-item" v-for="c in churches" :key="c.id">
    <b> {{c.name}} </b>  <i> {{c.year}} </i>
    </li>

  </section>
</template>

<script>
import navigation from "@/components/NavBar.vue"
import firebase from "firebase"

export default {
    data() {
        return {
          churches: []
        }
    },
    components: {
        navigation
    },
    created() {
      this.getChurches()
    },
    methods: {
      async getChurches() {
        const churchesRef = await firebase.firestore().collection('churches')
        churchesRef.onSnapshot( snap => { // change this to simple get? or need updates?
          this.churches = []  // empty
          snap.forEach( d => {
            const c = d.data()
            c.id = d.id // so we have the collection id
            this.churches.push(c)
          })
        }, err => console.error(err)
        )
      }
    }
}
</script>
