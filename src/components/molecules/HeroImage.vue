<template>
  <div class="hero-image"
    :style="{
      backgroundImage: `url(${src})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }
  ">
    <Label size="h3">My Stellar Flower Shop</Label>
  </div>
</template>

<script>
import Label from '../atoms/Label';

export default {
  name: "HeroImage",
  props: ['src'],
  components: {
    Label
  }
}
</script>

<style lang="scss">
  @import '../../assets/scss/molecules/_hero-image.scss';
</style>