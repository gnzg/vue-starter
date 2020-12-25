<template>
  <div class="Label {size}">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "Label",
  components: {},
  props: ['size'],
}
</script>

<style lang="scss">
@import '../../assets/scss/atoms/_label.scss';
</style>