<template>
  <div>
    <h2>Número hijo: {{ numero }}</h2>
    <button @click="sumarNumero()">Sumar {{numero}}</button>
  </div>
</template>

<script>
    export default{
        name:"HijoNumero",
        props: ["numero"],
        methods: {
            sumarNumero(){
                this.$emit("sumarNumeroPadre", this.numero);
            }
        }
    }
</script>

<style>
    h2{
        color: blue;
    }
</style>