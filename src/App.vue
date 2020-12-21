<template>
  <div id="app">
    <nav>
      <ul>
        <li>link1</li>
        <li>link2</li>
        <li>link3</li>
      </ul>
    </nav>

    <button class="button button__burger" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="icon__line"></span>
          <span class="icon__line"></span>
          <span class="icon__line"></span>
    </button>

    <div class="container">
      <img alt="Vue logo" src="./assets/logo.png" />
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss">
  @import './assets/scss/style.scss';
  $breakpoints: (
    "mobile": 576px,
    "tablet": 768px,
    "desktop": 992px,
  );

  @mixin respond-to($breakpoint) {
    @if map-has-key($breakpoints, $breakpoint) {
      @media (min-width: map-get($breakpoints, $breakpoint)) {
        @content;
      }
    }
  }

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
