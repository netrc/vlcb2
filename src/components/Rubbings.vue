<template>
  <section>
    <navigation></navigation>

      <div class='row'>
        <div class='col s4'>
          <li class="collection-item hoverShow" v-for="r in rubbings" :key="r.id" v-on:click="selectRubbing(r)">
            <span <b> {{r.name}} </b>
          </li>
        </div>
        <div class='col s8'>
          <i> vlcn# {{selectedRubbing.vlcn}} </i>
          <h2> {{selectedRubbing.name}} </h2> 
          <p> {{selectedRubbing.desc}} </p>
          <p> {{selectedRubbing.location}} </p>
          <p>  </p>
          <div v-for="p in selectedRubbing.pthumbs">
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
          rubbings: [],
          selectedRubbing: {}
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
      this.getRubbings()
    },
    methods: {
      async getRubbings() {
        const rubbingsRef = await firebase.firestore().collection('rubbings')
        rubbingsRef.onSnapshot( snap => { // change this to simple get? or need updates?
          this.rubbings = []  // empty
          snap.forEach( d => {
            const r = d.data()
            r.id = d.id // so we have the collection id
            this.rubbings.push(r)
          })
          this.selectedRubbing = this.rubbings[0]
        }, err => console.error(err)
        )
      },
      selectRubbing( r ) {
        this.selectedRubbing = r
      }
    }
}
</script>
