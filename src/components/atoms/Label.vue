<template>
  <div class="label"
       :class="fontSize">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "Label",
  components: {},
  props: ['size'],
  computed: {
    fontSize: () => {
        return 'h2';
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/atoms/_label.scss';
</style>