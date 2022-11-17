import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer:true
  },
  getters: {
    showDrawer(state){
      return state.drawer
    },
  },
  mutations: {
    modificarEstadoDrawer(state,payload){
      state.drawer=payload
           },
  },
  actions: {
     mostrarDrawer(context,payload){
      context.commit("modificarEstadoDrawer",payload)
      
     }
  },
  modules: {
  }
})
