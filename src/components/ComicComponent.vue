<template>
    <div>
        <h2 style="color:blue">{{comic.titulo}}</h2>
        <p>{{comic.descripcion}}</p>
        <img :src="comic.imagen"/>
        <h3 :class="{
            rojo: comic.year <= 2000,
            verde: comic.year > 2000
        }">Año: {{comic.year}}</h3>
        <br/>
        <button @click="seleccionarFavorito()">Seleccionar Favorito</button>
        <button class="rojo" @click="eliminarComic()">Eliminar</button>
    </div>
</template>

<script>
    export default{
        name:"ComicComponent",
        props:["comic","index"],
        methods:{
            seleccionarFavorito(){
                this.$emit("seleccionarFavorito",this.comic);
            },
            eliminarComic(){
                this.$emit("eliminarComic",this.index);
            }
        }
    }
</script>

<style>
    @import '../assets/css/EstiloComics.css';
</style>