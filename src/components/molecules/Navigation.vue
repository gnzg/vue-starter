<template>
  <nav class="navigation">
    <div class="container">
      <div class="navigation__title">Hello</div>
      <div class="navigation__list">
        <ul v-bind:class="{active: isActive}">
          <li>
            <router-link
                :to="{ name: 'Slider Page' }"
                class="navigation__link"
            >Slider Page</router-link>
          </li>
          <li><a class="navigation__link" href="">link2</a></li>
          <li><a class="navigation__link" href="">link3</a></li>
        </ul>
      </div>

      <button
          class="button button__burger"
          type="button" data-toggle="collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
          v-on:click="toggleIsActive"
      >
        <span class="icon__line"></span>
        <span class="icon__line"></span>
        <span class="icon__line"></span>
      </button>
    </div>
  </nav>
</template>

<script>

export default {
  name: "Navigation",
  components: {
  },
  data: () => {
    return {
      isActive: false
    }
  },
  methods: {
    toggleIsActive : function() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style lang="scss">
@import '../../assets/scss/molecules/navigation';
</style>
