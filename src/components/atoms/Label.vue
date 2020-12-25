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
    // using an arrow function here will not work as
    // arrow functions lack context
    fontSize: function () {
      return this.size;
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/atoms/_label.scss';
</style>