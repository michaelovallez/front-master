<template>
  <v-app id="inspire">
    <!-- <Header/>
    <Sidebar/> -->
    <v-main>
      <v-container fluid>
          <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue"
import Sidebar from "./components/Sidebar.vue"
export default {
  components:{
    Header,
    Sidebar
  },
  data: () => ({
    cards: ["Today", "Yesterday"],
        
  }),
  // watch: {
  //   // whenever question changes, this function will run
  //   drawer(newDrawer, old) {
  //     this.drawer=this.drawer
  //   }
  // }
};
</script>
