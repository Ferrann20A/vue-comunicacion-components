<template>
    <div>  
        <h1>Padre Deportes</h1>
        <h3 v-if="favorito">Deporte favorito: {{favorito}}</h3>
        <ul>
            <li v-for="d in deportes" :key="d">
                <HijoDeporte :nombredeporte="d" v-on:seleccionarFavoritoParent="seleccionarFavoritoParent"/>
            </li>
        </ul>
    </div>
</template>

<script>
    import HijoDeporte from './HijoDeporte.vue'
    export default{
        name:"PadreDeportes",
        components:{
            HijoDeporte
        },
        data(){
            return{
                deportes:["Futbol","Baloncesto","Hockey","Bolos","Tenis","Padel"],
                favorito:null
            }
        },
        methods:{
            //Vamos a crear un metodo sin recibir nada
            seleccionarFavoritoParent(nombre){
                console.log("Favorito: " + nombre);
                this.favorito = nombre;
            }
        }
    }
</script>

<style>
    h1{
        color: red;
    }
    h3{
        background-color: yellow;
    }
</style>