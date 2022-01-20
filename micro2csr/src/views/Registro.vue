<template>
  <div class="card mt-5  col-12 col-md-7 mx-auto">
    <div class="card-header text-center">
      <h1>Registro</h1>
    </div>
    <div class="card-body">
      <Error v-if="error" />
      <form @submit.prevent="procesar">
        <div class="mb-3">
          <input 
            type="text" 
            placeholder="Nombre"
            class="form-control"
            v-model="facultad.nombre">
        </div>
        <div class="mb-3">
          <textarea 
            rows="2"
            placeholder="Descripción"
            class="form-control"
            v-model="facultad.descripcion"></textarea>
        </div>
        <div class="mb-3">
          <input 
            type="email" 
            placeholder="Email"
            class="form-control"
            v-model="facultad.email">
        </div>
        <div class="mb-3">
          <input 
            type="password" 
            placeholder="Contraseña"
            class="form-control"
            v-model="facultad.password">
        </div>
        <div class="mb-4">
          <input 
            type="password" 
            placeholder="Repetir contraseña"
            class="form-control"
            v-model="facultad.password2">
        </div>
        <button 
          class="btn btn-primary w-100"
          type="submit"
          v-if="!cargando"
          :disabled="desabilitarBoton">Registrarse</button>
        <button
          class="btn btn-primary w-100"
          disabled
          v-else
          loading="true"
        >
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Registrando...
        </button>
      </form>
    </div>
    <div class="card-footer">
      <router-link to="/" class="link">Login</router-link>
    </div>
  </div>  
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import Error from '../components/Error.vue';
export default {
  components: { Error },
  data(){
    return{
      facultad: {
        nombre: null,
        email: null,
        descripcion: null,
        password: null,
        password2: null
      },
      cargando: false
    }
  },
  methods:{
    ...mapActions('facultadM',['signup']),
    async procesar(){
      this.cargando = true;
      await this.signup(this.facultad);
      this.cargando = false;
    }
  },
  computed:{
    ...mapGetters('errorM',['error']),
    desabilitarBoton(){
      if(!this.facultad.nombre){
        return true;
      }
      if(!this.facultad.descripcion){
        return true;
      }
      if(!this.facultad.email){
        return true;
      }
      if(!this.facultad.password){
        return true;
      }
      if(this.facultad.password.length < 8){
        return true;
      }
      if(this.facultad.password != this.facultad.password2){
        return true;
      }
      return false
    }
  }
}
</script>

<style>

</style>