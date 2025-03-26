<template>
  <header class="bg-dark text-white py-3 text-center shadow">
    <h1>Open Source Mansoura</h1>
  </header>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style scoped>
header {
  font-family: 'Arial', sans-serif;
  text-shadow: 2px 2px 4px rgba(44, 43, 43, 0.7);
  border-bottom: rgba(255, 255, 255, 0.301) 1px solid;
}
h1 {
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(44, 43, 43, 0.7);
}
</style>