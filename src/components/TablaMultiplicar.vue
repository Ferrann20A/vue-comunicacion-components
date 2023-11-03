<template>
  <div>
    <h1>Tabla de Multiplicar del número {{ numero }}</h1>
    <ul>
        <li v-for="i in 10" :key=i>
            {{numero}} x {{i}} = {{numero * i}}
        </li>
    </ul>
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