<template>
  <div class="mt-5">
    <div
      v-if="!dialogAgregar && !dialogEditar && !dialogListar">
      <a 
        class="text-primary display-4"
        title="Agregar actividad"
        @click="getDialogAgregar(true)"
        type="button">
        <i class="fas fa-plus-circle"></i>
      </a>
      <table 
        class="table table-hover mt-2">
        <thead>
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Fecha Registro</th>
            <th>Fecha Límite</th>
            <th>Cupos</th>
            <th>Estado</th>
            <th>Acción</th>
          </tr>
        </thead> 
        <tbody>
          <Actividad 
            v-for="i in actividades" 
            :key="i._id" 
            :actividad="i" />
        </tbody> 
      </table>
    </div>
    <FormActividad 
      v-if="dialogAgregar || dialogEditar"/>
    <Estudiantes v-if="dialogListar" />
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import Actividad from './Actividad.vue';
import Estudiantes from './Estudiantes.vue';
import FormActividad from './FormActividad.vue';
export default {
  components: { Actividad, FormActividad, Estudiantes },
  data(){
    return{

    }
  },
  methods:{
    ...mapActions('actividadM',['cargarActividades']),
    ...mapActions('helpersM',['getDialogAgregar']),
  },
  computed:{
    ...mapGetters('actividadM',['actividades']),
    ...mapGetters('helpersM',['dialogAgregar','dialogEditar','dialogListar'])
  },
  async created(){
    await this.cargarActividades();
  }
}
</script>

<style>

</style>