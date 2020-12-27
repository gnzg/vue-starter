<template>
    <div class="not-found">
      <h1>404</h1>
      <h2>Oops, it looks like the page you're looking for doesn't exist.</h2>
    </div>
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
.not-found {
  position: absolute;
  top: 0;
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>