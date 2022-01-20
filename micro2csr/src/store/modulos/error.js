module.exports = {
    namespaced: true,
    state: {
        error: null,    
      },
      mutations: {
        setError(state, payload){
            state.error = payload;
        }
      },
      actions: {
          getError({commit}, error){
              commit('setError', error);
          },
          restablecerError({commit}){
            commit('setError', null);
          }
      },
      getters:{
          error(state){
              return state.error;
          }
      }
}