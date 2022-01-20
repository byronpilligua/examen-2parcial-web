const router = require('../../router').default;
const axios = require('axios').default;
const {API} = require('../../config');

module.exports = {
  namespaced: true,
  state: {  
    notas: {}
  },
  mutations: {
    setFacultad(state, payload){
      state.notas = payload;
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
        const notas = data.data.notas;
        notas.token = data.data.token;

        commit('setnotas',notas);
        localStorage.setItem('facultad',JSON.stringify(facultad));
        dispatch('errorM/restablecerError',null,{root: true});

        router.push('/dashboard');
      } catch (error) {
        console.log(error);
      }
    },
    async inicioAutomatico({commit, state}){
      try {
        if(localStorage.getItem('notas')){
          commit('setnotas', JSON.parse(localStorage.getItem('notas')));
          const res = await axios({
            method:'GET',
            url:`${API}/notas/`,
            headers:{
              'x-access-token': state.notas.token
            }
          });
          const data = res.data;

          if (data.error) {
            commit('setnotas', {});
            localStorage.removeItem('notas');
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
            'x-access-token': state.notas.token
          }
        });

        const data = res.data;

        if (data.error) {
          return;
        }

        commit('setnotas', {});
        localStorage.removeItem('notas');
        router.push('/');
      } catch (error) {
        console.log(error);
      }
    }
  },
  getters:{
      notas(state){
        return state.notas;
      }
  }
}