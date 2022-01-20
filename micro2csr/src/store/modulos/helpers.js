module.exports = {
  namespaced: true,
  state: {
      dialogAgregar: false, 
      dialogEditar:false,
      dialogListar: false
    },
    mutations: {
      setDialogAgregar(state, payload){
          state.dialogAgregar = payload;
      },
      setDialogEditar(state, payload){
        state.dialogEditar = payload;
      },
      setDialogListar(state, payload){
        state.dialogListar = payload;
      }      
    },
    actions: {
      getDialogAgregar({commit}, estado){
          commit('setDialogAgregar', estado);
      },
      getDialogEditar({commit}, estado){
        commit('setDialogEditar', estado);
      },
      getDialogListar({commit}, estado){
        commit('setDialogListar', estado);
      },
    },
    getters:{
      dialogAgregar(state){
        return state.dialogAgregar;
      },
      dialogEditar(state){
        return state.dialogEditar;
      },
      dialogListar(state){
        return state.dialogListar;
      }
    }
}