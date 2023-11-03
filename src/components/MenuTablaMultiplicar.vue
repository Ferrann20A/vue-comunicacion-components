<template>
    <div>
        <ul id="menu">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li v-for="numero in numeros" :key="numero">
                <router-link :to="'/tabla/' + numero">Tabla {{ numero }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      numeros: [],
    };
  },
  mounted() {
    // let numAleaotorio = Math.floor(Math.random() * 5) + 1;
    // Genera 3 números aleatorios para los enlaces
    for (let i = 0; i < 5; i++) {
      this.numeros.push(Math.floor(Math.random() * 100) + 1);
    }
  },
};
</script>

<style>
    ul#menu li{
        display: inline;
    }
    li{
        padding: 10px
    }
</style>