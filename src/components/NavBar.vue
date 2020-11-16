<template>
    <nav>
    <!-- just structure of dropdown Notes menu-->
    <ul id="dropdown1" class="dropdown-content">
        <li> <a href="#!> About </a> </li>
        <li> <a href="#!"> Diary </a> </li>
        <li> <a href="#!"> Bibliography </a> </li>
        <li class="divider"> </li>
        <li v-show="!user">
            <router-link to="/login">Login to edit</router-link>
        </li>
        <li v-show="user">
            <router-link to="/profile">Profile</router-link>
        </li>
        <li v-show="user">
            <a @click="signoutButtonPressed">Logout</a>
        </li>
    </ul>
        <div class="nav-wrapper">
            <a href="#" class="brand-logo"> &nbsp; VLCB</a> 
            <ul id="nav-mobile" class="right">
              <li> <router-link to="/" tag="a">Home</router-link> </li>
              <li> <router-link to="/Churches">Churches</router-link> </li>
              <li> <router-link to="/Brasses">Brasses</router-link> </li>
              <li> <router-link to="/Rubbings">Rubbings</router-link> </li>
              <!-- Dropdown Trigger -->
              <li><a id="ddtrig" class="dropdown-trigger" href="#!" data-target="dropdown1">Notes
                <i class="material-icons right"></i></a>
              </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import firebase from "firebase";
export default {
    data() {
        return {
            user: null
        };
    },
    created() {
        firebase.auth().onAuthStateChanged(user => {
            this.user = user;
        });
    },
    updated() { // runs too often but trying to find time when ddtrig has been made
        document.getElementById("ddtrig").dropdown( {hover: false} ); // no error but not working
        // https://stackoverflow.com/questions/43652265/how-to-run-vuejs-code-only-after-vue-is-fully-loaded-and-initialized
    },
    methods: {
        signoutButtonPressed(e) {
            e.stopPropagation();
            firebase.auth().signOut();
            this.$router.push({ name: "Login" });
        }
    }
};
</script>

