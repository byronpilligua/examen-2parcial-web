<template>
<div>
  <nav 
    class="navbar navbar-light bg-light"
    v-if="!facultad._id">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand" >Facultades</router-link>

    </div>
  </nav>
  <nav 
    class="navbar navbar-light bg-light"
    v-else>
    <div class="container-fluid">
      <router-link 
        to="/dashboard" 
        class="navbar-brand" >
        {{facultad.nombre}}</router-link>
      <div class="d-flex">
        <router-link 
          to="/perfil" 
          class="navbar-brand me-3">
          Perfil
          <i class="far fa-user"></i>
          </router-link>
        <button 
          class="btn btn-danger"
          @click="logout">Salir</button>
      </div>
    </div>
  </nav>
</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
  data(){
    return{

    }
  },
  methods:{
    ...mapActions('facultadM',['logout'])
  },
  computed:{
    ...mapGetters('facultadM',['facultad'])
  }
}
</script>
