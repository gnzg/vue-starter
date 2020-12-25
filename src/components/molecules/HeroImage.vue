<template>
  <div class="hero-image"
    :style="{
      backgroundImage: `url(${image})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }
  ">
  </div>
</template>

<script>
import image from '../../assets/images/vue_bg.jpeg';

export default {
  name: "HeroImage",
  components: {},
  data: () => {
    return {
      image: image
    }
  }
}
</script>

<style lang="scss">
  @import '../../assets/scss/molecules/_hero-image.scss';
</style>