<template>
  <nav class="navigation">
    <div class="container">
      <div class="navigation__title">Hero title</div>
      <div class="navigation__list">
        <ul :class="{active: isActive}" :style="{ top: isActive ? '50px' : `-${items.length * 50}px` }">
          <li v-for="item in items" :key="item.id">
            <router-link
                :to="item.route"
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
        { label: 'Slider page', route: 'slider-page' },
        { label: '404 example', route: '/404' },
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
