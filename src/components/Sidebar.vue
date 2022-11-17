<template>
  <v-navigation-drawer v-model="showDrawer" v-click-outside="clickOutside" app>
    <!-- <v-img class="pa-4" src="../assets/Presentacion-azul.png"> -->
      <v-img class="pa-4" src="https://nordicapis.com/wp-content/uploads/10-Cloud-Storage-APIs-Compared.png">
      <div class="text-center mt-4">
        <!-- <v-avatar class="mb-4" color="grey darken-1" size="75">
          <v-img
            aspect-ratio="30"
            src="https://www.labsaenzrenauld.com/wp-content/uploads/2020/10/Perfil-hombre-ba%CC%81sico_738242395.jpg"
          />
        </v-avatar> -->

        <!-- <h2 class="white--text">Leonardo Esquivel</h2> -->
      </div>
    </v-img>

    <v-divider></v-divider>

    <v-list>
      <v-list-item-group v-model="group">
        <v-list-item v-for="[icon, text] in links" :key="icon" link>
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {},
  name: "Sidebar",
  data() {
    return {
      links: [
        ["mdi-inbox-arrow-down", "Administracion"],
        ["mdi-account-multiple", "Usuarios"],
        // ["mdi-forklift", "Deposito"],
        // ["mdi-checkbox-multiple-marked-outline", "Ventas"],
      ],
      group: null,
      valorDrawer: null,
    };
  },
  created() {
    this.valorDrawer = this.showDrawer;
  },
  methods: {
    clickOutside(e) {
      if (
        e.target.className === "v-overlay__scrim" &&
        this.showDrawer == true
      ) {
        this.$store.dispatch("mostrarDrawer", !this.showDrawer);
      }
    },
  },
  computed: {
    // ...mapGetters(["showDrawer"]),
    ...mapGetters({
      ShowDrawer: "showDrawer",
    }),
    showDrawer: {
      get() {
        return this.ShowDrawer;
      },
      set(newName) {
        return newName;
      },
    },
  },

  watch: {
    valorDrawer(newValorDrawer) {
      this.$store.dispatch("mostrarDrawer", newValorDrawer);
      this.valorDrawer = this.showDrawer;
    },
  },
};
</script>

<style>
</style>