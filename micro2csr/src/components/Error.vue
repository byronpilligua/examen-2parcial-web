<template>
  <div class="alert alert-warning alert-dismissible">
    <strong>Error: {{error}}</strong>
    <button 
      type="button" 
      class="btn-close" 
      data-bs-dismiss="alert" 
      aria-label="Close"
      @click="restablecerError(null)"></button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name:'Error',
    data(){
      return{
      }
    },
    methods:{
      ...mapActions('errorM',['restablecerError'])
    },
    computed:{
      ...mapGetters('errorM',['error'])
    }
}
</script>