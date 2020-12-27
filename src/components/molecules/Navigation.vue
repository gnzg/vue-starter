<template>
  <nav class="navigation">
    <div class="container">
      <div class="navigation__title">Hello</div>
      <div class="navigation__list">
        <ul v-bind:class="{active: isActive}">
          <li v-for="item in items" :key="item.id">
            <router-link
                :to="item.routeName"
                class="navigation__link"
            >{{  item.label }}</router-link>
          </li>
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
      isActive: false,
      items: [
        { label: 'Slider page', routeName: 'Slider Page' },
        { label: '404 example', routeName: '/404' },
      ]
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
