<template>
    <nav class="navigation">
      <ul>
        <li><a class="navigation__link" href="">link1</a></li>
        <li><a class="navigation__link" href="">link2</a></li>
        <li><a class="navigation__link" href="">link3</a></li>
      </ul>

      <button class="button button__burger" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="icon__line"></span>
        <span class="icon__line"></span>
        <span class="icon__line"></span>
      </button>

    </nav>
</template>

<script>

export default {
  name: "Navigation",
  components: {
  },
};
</script>

<style lang="scss">
@import '../../assets/scss/molecules/navigation';
</style>
