<template>
  <SeleccionMultiple/>
</template>

<script>
import SeleccionMultiple from './components/SeleccionMultiple.vue';

export default {
  name: 'App',
  components: {
    SeleccionMultiple
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
