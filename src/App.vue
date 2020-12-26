<template>
  <div id="app">
    <navigation />
    <HeroImage
        :src="require('./assets/images/vue_bg.jpeg')"
    />
    <img alt="Vue logo" src="./assets/images/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Navigation from "@/components/molecules/Navigation";
import HeroImage from "@/components/molecules/HeroImage";

export default {
  name: "App",
  components: {
    Navigation,
    HelloWorld,
    HeroImage
  }
};
</script>

<style lang="scss">
@import './assets/scss/style';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}
</style>
