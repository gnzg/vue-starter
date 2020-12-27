<template>
  <div id="app">
    <transition name="fade">
    <router-view />
    </transition>
  </div>
</template>

<script>

export default {
  name: "App"
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
