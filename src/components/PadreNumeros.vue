<template>
  <div>
    <h1>Padre Números</h1>
    <h3>Suma total: {{ sumaTotal }}</h3>
    <button @click="generarNuevoNumero()">Nuevo Número</button>
    <div v-for="numero in numeros" :key="numero">
      <HijoNumero :numero="numero" v-on:sumarNumeroPadre="sumarNumeroTotal" />
    </div>
  </div>
</template>

<script>
import HijoNumero from './HijoNumero.vue';

    export default {
        name: "PadreNumeros",
        components: {
            HijoNumero
        },
        data() {
            return {
                numeros: [74, 19,53],
                sumaTotal: 0
            };
        },
        methods: {
            sumarNumeroTotal(numero) {
                this.sumaTotal += numero;
            },
            generarNuevoNumero() {
                let nuevoNumero = Math.floor(Math.random() * 100) + 1;
                this.numeros.push(nuevoNumero);
            }
        }
    };
</script>

<style>
    h3{
        color: red;
    }
</style>