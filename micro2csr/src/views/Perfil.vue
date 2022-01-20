<template>
  <div class="card col-12 col-md-7 mx-auto mt-5">
    <h1 class="card-header text-center">{{facultad.nombre}}</h1>
    <div class="card-body">
      <div class="card-text">
        <p>Email: {{facultad.email}}</p>
        <p>Descripción: {{facultad.descripcion}}</p>
      </div>
    </div>  
    <div class="card-footer d-flex">
      <button
        class="btn btn-danger ms-auto"
        @click="eliminar">Eliminar cuenta</button>
    </div>
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
    ...mapActions('facultadM',['eliminarCuenta']),
    async eliminar(){
      const respuesta = confirm("Estas seguro de eliminar la cuenta?")
      if(respuesta){
        await this.eliminarCuenta();
      }
    }
  },
  computed:{
    ...mapGetters('facultadM',['facultad'])
  }
}
</script>
