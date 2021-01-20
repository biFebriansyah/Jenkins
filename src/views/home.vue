<template>
    <div id="app">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to week 5" />
    </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld"

export default {
    name: "home",
    components: {
        HelloWorld,
    },
}
</script>

<style scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
