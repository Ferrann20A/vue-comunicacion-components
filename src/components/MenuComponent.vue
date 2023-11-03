<template>
    <div>
        <ul id="menu">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/checkbox">Checkboxs</router-link>
            </li>
            <li>
                <router-link to="/numerodoble/77">Número Doble 77</router-link>
            </li>
            <li>
                <router-link to="/numerodoble/322">Número Doble 322</router-link>
            </li>
            <li>
                <router-link to="/numerodoble">Número Doble sin param</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        name:"MenuComponent"
    }
</script>

<style>
    ul#menu li{
        display: inline;
    }
    li{
        padding: 10px
    }
</style>