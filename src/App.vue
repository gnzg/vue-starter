<template>
  <div id="app">
    <navigation />

    <div class="container">
      <img alt="Vue logo" src="./assets/logo.png" />
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Navigation from "@/components/molecules/Navigation";

export default {
  name: "App",
  components: {
    Navigation,
    HelloWorld
  },
};
</script>

<style lang="scss">
@import './assets/scss/style';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .container {
    background-color: red;
    @include respond-to("tablet") {
      background-color: yellow;
    }
    @include respond-to("desktop") {
      background-color: green;
    }
  }

  img {
    width: 100%;
    height: auto;
  }

  nav {
    position: relative;
    display: flex;
    width: 100%;
  }
}
</style>
