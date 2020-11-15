<template>
  <section>
    <navigation></navigation>

      <div class='row'>
        <div class='col s4'>
          <li class="collection-item hoverShow" v-for="b in brasses" :key="b.id" v-on:click="selectBrass(b)">
            <span <b> {{b.name}} </b> 
          </li>
        </div>
        <div class='col s8'>
          <h2> {{selectedBrass.name}} </h2>
          <p> year: {{selectedBrass.year}} </p>
          <p> {{selectedBrass.mainNote}} </p>
          <div v-for="p in selectedBrass.pthumbs">
            <img v-bind:src="`${p}`">
            </div>
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
          brasses: [],
          selectedBrass: {}
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
      this.getBrasses()
    },
    methods: {
      async getBrasses() {
        const brassesRef = await firebase.firestore().collection('brasses')
        brassesRef.onSnapshot( snap => { // change this to simple get? or need updates?
          this.brasses = []  // empty
          snap.forEach( d => {
            const b = d.data()
            b.id = d.id // so we have the collection id
            this.brasses.push(b)
          })
          this.selectedBrass = this.brasses[0]
        }, err => console.error(err)
        )
      },
      selectBrass( b ) {
        this.selectedBrass = b
      }
    }
}
</script>
