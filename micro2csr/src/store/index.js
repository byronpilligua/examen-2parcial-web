import Vue from 'vue'
import Vuex from 'vuex'
const {facultadM, 
       errorM, 
       actividadM,
       helpersM} = require('./modulos');

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    facultadM,
    errorM,
    actividadM,
    helpersM
  }
})
