<template>
  <transition name="fade">
    <div>
      <h1>404</h1>
      <h2>Oops, it looks like the page you're looking for doesn't exist.</h2>
    </div>
  </transition>
</template>

<script>
export default {
  name: "NotFound",
}
</script>

<style scoped>
body {
  padding: 0;
  margin: 0;
}
h1, h2 {
  padding: 0;
  margin: 0;
  color: white;
  text-align: center;
}

h1 {
  padding: 5rem 5rem 0;
  font-size: 128px;
}
</style>