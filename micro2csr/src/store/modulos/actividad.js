const axios = require('axios').default;
const {API} = require('../../config');

module.exports = {
  namespaced: true,
  state: {  
    actividades: [],
    actividad: {
      titulo:null,
      descripcion: null,
      fechaLimite: null,
      cupos: null
    }
  },
  mutations: {
    setActividades(state, payload){
      state.actividades = payload;
    },
    setActividad(state, payload){
      state.actividad = payload;
    },
    addActividad(state, payload){
      state.actividades.push(payload);
      state.actividad = {
        titulo:null,
        descripcion: null,
        fechaLimite: null,
        cupos: null
      };
    },
    editActividad(state, payload){
      state.actividades.map(i=> i._id === payload._id ? payload:i);
      state.actividad = {
        titulo:null,
        descripcion: null,
        fechaLimite: null,
        cupos: null
      };
    },
    deleteActividad(state, payload){
      state.actividades = state.actividades.filter(i=> i._id !== payload );
    }
  },
  actions: {
    async cargarActividades({commit, rootGetters,dispatch}){
      try {
        const facultad = rootGetters['facultadM/facultad'];
        const res = await axios({
          method: 'PUT',
          url: `${API}/actividad`,
          headers:{
            'x-access-token': facultad.token
          }
        });
        const data = res.data;

        if(data.error){
          dispatch('errorM/getError',data.error.message,{root: true});
          return;
        }
        dispatch('errorM/getError',null,{root: true});
        commit('setActividades',data.data);
      } catch (error) {
        console.log(error);
      }
    },
    getActividad({commit}, actividad){
      commit('setActividad',actividad);
    },
    async addActividad({commit, rootGetters, dispatch}, actividad){
      try {
        const facultad = rootGetters['facultadM/facultad'];
        const res = await axios({
          method: 'POST',
          url: `${API}/actividad`,
          data: actividad,
          headers:{
            'x-access-token': facultad.token
          }
        });
        const data = res.data;

        if(data.error){
          dispatch('errorM/getError',data.error.message,{root: true});
          return;
        }

        dispatch('errorM/getError',null,{root: true});
        commit('addActividad',data.data);
      } catch (error) {
        console.log(error);
      }
    },
    async editActividad({commit, rootGetters, dispatch}, actividad){
      try {
        const facultad = rootGetters['facultadM/facultad'];
        const res = await axios({
          method: 'PATCH',
          url: `${API}/actividad/${actividad._id}`,
          data: actividad,
          headers:{
            'x-access-token': facultad.token
          }
        });
        const data = res.data;
        if(data.error){
          dispatch('errorM/getError',data.error.message,{root: true});
          return;
        }

        dispatch('errorM/getError',null,{root: true});
        commit('editActividad',data.data);
      } catch (error) {
        console.log(error);
      }
    },
    async deleteActividad({commit, dispatch}, id){
      try {
        const res = await axios({
          method: 'DELETE',
          url: `${API}/actividad/${id}`
        });
        const data = res.data;
        if(data.error){
          dispatch('errorM/getError',data.error.message,{root: true});
          return;
        }

        dispatch('errorM/getError',null,{root: true});
        commit('deleteActividad',id);
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters:{
    actividades(state){
      return state.actividades;
    },
    actividad(state){
      return state.actividad;
    }
  }
}