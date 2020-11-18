<template>
<div>
    <p> raw is:  {{raw}} </p>
</div>
</template>

<script>
//import navigation from "@/components/NavBar.vue";

export default {
    data() {
        return {
          raw: "just the raw text"
        };
    },
    name: 'mdviewedit',
    //components: {  // none
    //    navigation
    //},
    //created() {
    //  this.getAbout()
    //},
    methods: {
        switchView() {
            console.log(`switch view`)
        }
    }
};
</script>
