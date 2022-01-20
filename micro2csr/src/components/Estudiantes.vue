<template>
  <div class="mt-5 col-12 col-md-7 mx-auto">
    <div class="d-flex">
      <h2>{{actividad.titulo}}</h2>
      <button
        class="btn btn-primary ms-auto"
        @click="getDialogListar(false)">Regresar</button>
    </div>
    <h6>Estudiantes: </h6>
    <div class="list-group" v-if="actividad.estudiantes.length > 0">
      <a 
        href="#" 
        class="list-group-item list-group-item-action" 
        aria-current="true"
        v-for="i in actividad.estudiantes" :key="i._id">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{i.nombre}} {{i.apellido}}</h5>
        </div>
        <p class="mb-1">{{i.email}}</p>
        <small v-if="i._facultad">{{i._facultad.nombre}}</small>
        <small v-else>Ya no existe su facultad 😢</small>
      </a>
    </div>
    <div
      v-else>
      <p>No hay estudiantes 😢</p>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
  methods:{
    ...mapActions('helpersM',['getDialogListar']),
  },
  computed:{
    ...mapGetters('actividadM',['actividad'])
  }
}
</script>
