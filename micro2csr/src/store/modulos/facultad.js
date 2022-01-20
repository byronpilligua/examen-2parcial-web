const router = require('../../router').default;
const axios = require('axios').default;
const {API} = require('../../config');

module.exports = {
  namespaced: true,
  state: {  
    facultad: {}
  },
  mutations: {
    setFacultad(state, payload){
      state.facultad = payload;
    }
  },
  actions: {
    async signin({commit, dispatch}, objeto){
      try {
        const res = await axios({
          method: 'POST',
          url: `${API}/auth/signin-facultad`,
          data: objeto
        });
        const data = res.data;
        if(data.error){
          dispatch('errorM/getError',data.error.message,{root: true});
          return;
        }
        const facultad = data.data.facultad;
        facultad.token = data.data.token;

        commit('setFacultad',facultad);
        localStorage.setItem('facultad',JSON.stringify(facultad));
        dispatch('errorM/restablecerError',null,{root: true});

        router.push('/dashboard');
      } catch (error) {
        console.log(error);
      }
    },
    async signup({commit, dispatch}, objeto){
      try {
        const res = await axios({
          method: 'POST',
          url: `${API}/auth/signup-facultad`,
          data: {
            nombre: objeto.nombre,
            descripcion: objeto.descripcion,
            email: objeto.email,
            password: objeto.password
          }
        });
        const data = res.data;
        if(data.error){
          dispatch('errorM/getError',data.error.message,{root: true});
          return;
        }
        const facultad = data.data.facultad;
        facultad.token = data.data.token;

        commit('setFacultad',facultad);
        localStorage.setItem('facultad',JSON.stringify(facultad));
        dispatch('errorM/restablecerError',null,{root: true});

        router.push('/dashboard');
      } catch (error) {
        console.log(error);
      }
    },
    async inicioAutomatico({commit, state}){
      try {
        if(localStorage.getItem('facultad')){
          commit('setFacultad', JSON.parse(localStorage.getItem('facultad')));
          const res = await axios({
            method:'GET',
            url:`${API}/facultad/`,
            headers:{
              'x-access-token': state.facultad.token
            }
          });
          const data = res.data;

          if (data.error) {
            commit('setFacultad', {});
            localStorage.removeItem('facultad');
            return;
          }
          
        }
      } catch (error) {
        console.log(error);
      }
    },
    logout({commit}){
      if(localStorage.getItem('facultad')){
        commit('setFacultad', {});
        localStorage.removeItem('facultad');
        router.push('/')
      }
    },
    async eliminarCuenta({commit, state}){
      try {
        const res = await axios({
          method:'DELETE',
          url:`${API}/facultad/`,
          headers:{
            'x-access-token': state.facultad.token
          }
        });

        const data = res.data;

        if (data.error) {
          return;
        }

        commit('setFacultad', {});
        localStorage.removeItem('facultad');
        router.push('/');
      } catch (error) {
        console.log(error);
      }
    }
  },
  getters:{
      facultad(state){
        return state.facultad;
      }
  }
}