<template>
    <div>  
        <h2>{{nombredeporte}}</h2>
        <button @click="seleccionarFavorito()">Seleccionar favorito</button>
    </div>
</template>

<script>
    export default{
        name:"HijoDeporte",
        props:["nombredeporte"],
        mounted(){
            console.log(this.nombredeporte);
        },
        methods:{
            seleccionarFavorito(){
                console.log("Favorito seleccionado");
                //realizamos la llamada al padre
                //Tendremos la oportunidad de enviar parametros al metodo
                //paadre a continuacion de la llamada y separados por comas
                this.$emit("seleccionarFavoritoParent",this.nombredeporte);
            }
        }
    }
</script>

<style>
    h2{
        color: blue;
    }
</style>