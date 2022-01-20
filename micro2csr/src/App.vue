<template>
  <div id="app">
    <NavBar />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import {mapActions} from 'vuex';
export default {
  components: { NavBar },
  data() {
    return{
    }
  },
  methods:{
    ...mapActions('facultadM',['inicioAutomatico'])
  },
  async created(){
    await this.inicioAutomatico();
  }
}
</script>