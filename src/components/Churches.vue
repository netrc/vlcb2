<template>
  <section>
    <navigation></navigation>

      <div class='row'>
        <div class='col s4'>
          <li class="collection-item" v-for="c in churches" :key="c.id">
            <span v-on:click="selectChurch({{c}}" <b> {{c.name}} </b> <i> {{c.address}} </i>
          </li>
        </div>
        <div class='col s8'>
          <h2> {{selectedChurch.name}} </h2>
          <p> {{selectedChurch.address}} &nbsp; map: {{selectedChurch.latlon}} </p>
          <p> year: {{selectedChurch.year}} </p>
          <p> {{selectedChurch.mainNote}} </p>
        </div>
    </div>
  </section>
</template>

<script>
import navigation from "@/components/NavBar.vue"
import firebase from "firebase"

export default {
    data() {
        return {
          churches: [],
          selectedChurch: {}
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
          this.selectedChurch = this.churches[0]
        }, err => console.error(err)
        )
      },
      selectChurch( c ) {
        this.selectedChurch = c
      }
    }
}
</script>
