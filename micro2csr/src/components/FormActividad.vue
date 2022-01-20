<template>
  <div class="card mt-5  col-12 col-md-7 mx-auto">
    <div class="card-header text-center">
      <h1>{{titulo}}</h1>
    </div>
    <Error v-if="error" />
    <div 
      class="card-body">
      <div class="mb-3">
        <input 
          class="form-control"
          placeholder="Título"
          type="text"
          v-model="actividad.titulo">
      </div>
      <div class="mb-3">
        <textarea
          rows="2" 
          class="form-control"
          placeholder="Descripción"
          v-model="actividad.descripcion"></textarea>
      </div>
      <div class="mb-3">
        <input 
          class="form-control"
          placeholder="Fecha Limite"
          type="datetime-local"
          v-model="actividad.fechaLimite">
        <p class="form-text">Fecha límite</p>
      </div>
      <div class="mb-4">
        <input 
          class="form-control"
          placeholder="Cupos"
          type="number"
          v-model="actividad.cupos">
      </div>
      <button 
        class="btn btn-primary w-100 mb-2"
        @click="procesar"
      >Guardar</button>
      <button 
        class="btn btn-danger w-100"
        @click="cancelar()"
      >Cancelar</button>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import Error from './Error.vue';
export default {
  components: { Error },
  data(){
    return{
      
    }
  },
  methods:{
    ...mapActions('helpersM',['getDialogAgregar','getDialogEditar']),
    ...mapActions('actividadM',['addActividad','editActividad','getActividad']),
    async procesar(){
      if(this.dialogEditar){
        await this.editActividad(this.actividad);
      }else{
        await this.addActividad(this.actividad);
      }

      if(!this.error){
        this.getDialogAgregar(false);
        this.getDialogEditar(false);
      }
    },
    cancelar(){
      this.getActividad({
        titulo:null,
        descripcion: null,
        fechaLimite: null,
        cupos: null
      });
      this.getDialogAgregar(false);
      this.getDialogEditar(false);
    }
  },
  computed:{
    ...mapGetters('helpersM',['dialogAgregar','dialogEditar']),
    ...mapGetters('actividadM',['actividad']),
    ...mapGetters('errorM',['error']),
    titulo(){
      if(this.dialogAgregar){
        return 'Agregar actividad'
      }
      return 'Editar actividad'
    }
  }
}
</script>

<style>

</style>