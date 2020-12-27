<template>
  <div class="home">
    <navigation />
    <HeroImage
        :src="require('../../assets/images/vue_bg.jpeg')"
    />
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
<style lang="scss">
  @import '../../assets/scss/organisms/home';
</style>
