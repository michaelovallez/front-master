<template>
    <v-app-bar app color="white" elevate-on-scroll elevation="4">
      <v-app-bar-nav-icon @click="verDrawer()"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>

     
      <!-- <v-toolbar-title>Title</v-toolbar-title> -->
      

      <v-spacer></v-spacer>
      <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <span v-bind="attrs" v-on="on" style="cursor:pointer" class="mx-5 mr-10">
          <v-badge offset-x="10" offset-y="10" color="red" content="5">
            <v-icon>mdi-bell</v-icon>
          </v-badge>

        </span>
      </template>
      <v-list three-line width="250">
      <template v-for="(item, index) in items">
        <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
        ></v-subheader>

        <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>

        <v-list-item
          v-else
          :key="item.title"
        >
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
    </v-menu>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <span v-bind="attrs" v-on="on" style="cursor:pointer" class="mx-5 mr-10">
          <v-chip link>
            <v-badge dot bottom offset-y="10" offset-x="10" color="green">
              <v-avatar size="40">
                <v-img
            
            src="https://www.labsaenzrenauld.com/wp-content/uploads/2020/10/Perfil-hombre-ba%CC%81sico_738242395.jpg"
          />

              </v-avatar>

            </v-badge>
            <span>Leonardo</span>

          </v-chip>

        </span>

      </template>
      <v-list width="250" class="py-0">
        <v-list-item two-line>
          <v-list-item-avatar>
            <v-img
            width="50"
            src="https://www.labsaenzrenauld.com/wp-content/uploads/2020/10/Perfil-hombre-ba%CC%81sico_738242395.jpg"
          />

          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              Leonardo Esquivel
            </v-list-item-title>
            <v-list-item-subtitle>
              En Linea
            </v-list-item-subtitle>
          </v-list-item-content>
           
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item v-for="(item,i ) in menus" :key="i" link>
          <v-list-item-icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item-content>


        </v-list-item>


      </v-list>

    </v-menu>
     
    </v-app-bar>
  
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name:"Header",
    data(){
       return{
        items: [
        { header: 'Today' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
      ],
      menus:[{title:"Perfil",icon:"mdi-account"},
      {title:"Cambiar Contraseña",icon:"mdi-key"},{title:"Salir",icon:"mdi-logout"},]
       }
    },
    computed: {
    ...mapGetters(["showDrawer"]),
    
  },
    methods:{
      verDrawer(){
        this.$store.dispatch("mostrarDrawer", !this.showDrawer);
      }
    }

}
</script>

<style>

</style>