<template>
  <div id="app">
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>

    <navigation />
    <HeroImage
        :src="require('./assets/images/vue_bg.jpeg')"
    />

    <router-view />
  </div>
</template>

<script>
import Navigation from "@/components/molecules/Navigation";
import HeroImage from "@/components/molecules/HeroImage";

export default {
  name: "App",
  components: {
    Navigation,
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
