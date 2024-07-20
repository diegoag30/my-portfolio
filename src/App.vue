<template>
  <HomeComponent />
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
import HomeComponent from "./components/HomeComponent.vue";

export default {
  name: "App",
  components: {
    HomeComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
