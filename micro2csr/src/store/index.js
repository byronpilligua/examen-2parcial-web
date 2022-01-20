import Vue from 'vue'
import Vuex from 'vuex'
const {notasdM, 
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
    notasdM,
    errorM,
    actividadM,
    helpersM
  }
})
