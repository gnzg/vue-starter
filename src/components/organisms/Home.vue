<template>
  <div class="home">
    <navigation />
    <HeroImage
        :src="require('../../assets/images/vue_bg.jpeg')"
    />
    <div>
      <router-link :to="{ name: 'Foo' }">Go to Foo</router-link>
      <router-link :to="{ name: 'Slider Page' }">Go to Slider Page</router-link>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/molecules/Navigation";
import HeroImage from "@/components/molecules/HeroImage";

export default {
  name: 'Home',
  components: {
    Navigation,
    HeroImage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  padding: 1rem;
}
</style>
