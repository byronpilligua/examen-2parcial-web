<template>
  <div class="card mt-5  col-12 col-md-7 mx-auto">
    <div class="card-header text-center">
      <h1>Login</h1>
    </div>
    <div class="card-body">
      <Error v-if="error" />
      <form @submit.prevent="procesar">
        <div class="mb-3">
          <input 
            type="email" 
            placeholder="Email"
            class="form-control"
            v-model="facultad.email">
        </div>
        <div class="mb-4">
          <input 
            type="password" 
            placeholder="Contraseña"
            class="form-control"
            v-model="facultad.password">
        </div>
        <button 
          class="btn btn-primary w-100"
          type="submit"
          v-if="!cargando"
          :disabled="desabilitarBoton">Ingresar</button>
        <button
          class="btn btn-primary w-100"
          disabled
          v-else
          loading="true"
        >
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Ingresando...
        </button>
      </form>
    </div>
    <div class="card-footer">
      <router-link to="/registro" class="link">Registrarse</router-link>
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
        email: null,
        password: null
      },
      cargando: false
    }
  },
  methods:{
    ...mapActions('facultadM',['signin']),
    async procesar(){
      this.cargando = true;
      await this.signin(this.facultad);
      this.cargando = false;
    }
  },
  computed:{
    ...mapGetters('errorM',['error']),
    desabilitarBoton(){
      if(!this.facultad.email){
        return true;
      }
      if(!this.facultad.password){
        return true;
      }
      return false
    }
  }
}
</script>

<style>

</style>