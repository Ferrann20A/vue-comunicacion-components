<template>
  <div>
    <h1>Tabla de Multiplicar del número {{ numero }}</h1>
    <table>
      <!-- Genera la tabla de multiplicar aquí -->
      <tr v-for="i in 10" :key="i">
        <td>{{ i }}</td>
        <td>x</td>
        <td>{{ numero }}</td>
        <td>=</td>
        <td>{{ i * numero }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
    name:"TablaMultiplicar",
    watch:{
        '$route.params.numero'(nextVal, oldVal){
            if(nextVal != oldVal){
                this.numero = this.$route.params.numero
            }
        }
    },
    data() {
        return {
            numero: this.$route.params.numero,
        };
    },
};
</script>


<style>

</style>