<template>
  <tr>
    <td>{{actividad.titulo}}</td>
    <td>{{actividad.descripcion}}</td>
    <td>{{formatearFecha(actividad.fechaRegistro)}}</td>
    <td>{{formatearFecha(actividad.fechaLimite)}}</td>
    <td>{{actividad.cupos}}</td>
    <td>
      <a
        v-if="actividad.estado"
        title="Activa"
        class="text-success ">
        <i class="fas fa-circle"></i>
      </a>
      <a
        v-else
        title="Inactiva"
        class="text-danger ">
        <i class="fas fa-circle"></i>
      </a>
    </td>
    <td>
      <a 
        title="Editar"
        class="text-success me-2"
        @click="editar(actividad)"
        type="button">
        <i class="fas fa-edit"></i>
      </a>
      <a
        title="Eliminar"
        class="text-danger me-2"
        @click="eliminar(actividad)"
        type="button">
        <i class="fas fa-trash"></i>
      </a>
      <a
        title="Estudiantes"
        class="text-dark"
        @click="listar(actividad)"
        type="button">
        <i class="fas fa-list"></i>
      </a>
    </td>
  </tr>
  
</template>

<script>
import {mapActions} from 'vuex';
const moment = require('moment');
export default {
  props:{
    actividad: Object
  },
  data(){
    return{

    }
  },
  methods:{
    ...mapActions('helpersM',['getDialogEditar','getDialogListar']),
    ...mapActions('actividadM',['getActividad','deleteActividad']),
    formatearFecha(fecha){
      return new Date(fecha).toLocaleString()
    },
    editar(item){
      item.fechaLimite = moment(item.fechaLimite).format("YYYY-MM-DDTHH:mm");
      this.getActividad(item);
      this.getDialogEditar(true);
    },
    async eliminar(item){
      const respuesta =  confirm(`Seguro de eliminar a ${item.titulo}`)
      if(respuesta){
        await this.deleteActividad(item._id);
      }
    },
    listar(item){
      this.getActividad(item);
      this.getDialogListar(true);
    }
  }
}
</script>

<style>

</style>