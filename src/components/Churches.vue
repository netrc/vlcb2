<template>
  <section>
    <navigation></navigation>

      <div class='row'>
        <div class='col s4'>
          <li class="collection-item hoverShow" v-for="c in churches" :key="c.id" v-on:click="selectChurch(c)">
            <span <b> {{c.name}} </b> <i> {{c.address}} </i>
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

<style>
li.hoverShow:hover {
  background: #CCC;
}
</style>

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
    // try using VueSimpleMarkdown npm module - https://www.npmjs.com/package/vue-simple-markdown
    // or https://www.npmjs.com/package/vue-markdown
    // then just require/import above and use. webpack does the magic
    //computed: {
    //  compiledMainNote: () => {
    //    return marked(this.selectedChurch.mainNote, { sanitize: true })
    //  }
    //},
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
