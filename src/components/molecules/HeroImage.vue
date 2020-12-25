<template>
  <div class="hero-image"
    :style="{
      backgroundImage: `url(${src})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }
  ">
  </div>
</template>

<script>

export default {
  name: "HeroImage",
  components: {},
  props: ['src'],
}
</script>

<style lang="scss">
  @import '../../assets/scss/molecules/_hero-image.scss';
</style>