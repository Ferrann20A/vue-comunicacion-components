<template>
    <div>
        <h1>Numero Doble Router</h1>
        <button @click="redirectToHome()">Go Home</button>
        <p style="color:red" v-if="mensaje">{{mensaje}}</p>
        <p v-else>Doble del numero {{numero}}: {{doble}}</p>
    </div>
</template>

<script>
    export default{
        name:"NumeroDoble",
        methods:{
            redirectToHome(){
                this.$router.push("/");
            }
        },
        watch:{
            '$route.params.numero'(nextVal, oldVal){
                //Solamente deseamos realizar las acciones cuando nuestro
                //parametro cambie
                if(nextVal != oldVal){
                    //Acciones
                    this.numero = parseInt(this.$route.params.numero);
                    this.doble = this.numero * 2;
                }
            }
        },
        data(){
            return{
                mensaje:null,
                numero:0,
                doble:0
            }
        },
        mounted(){
            //Dibujamos nuestro parametro
            //Los parametros son string, no importa si son valores numeros o no
            console.log(this.$route.params.numero);
            let paramNum = this.$route.params.numero;
            if(paramNum === ""){
                console.log("Sin parametro");
                this.mensaje = "No tenemos parametros..."
            }else{
                console.log("Parametro recibido " + paramNum);
                this.numero = parseInt(paramNum);
                this.doble = this.numero * 2;
            }
        },
    }
</script>

<style>

</style>