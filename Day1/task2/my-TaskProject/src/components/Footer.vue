<template>
  <footer class="bg-dark text-white py-3 text-center mt-auto shadow">
    <p class="mb-0">&copy; Copyrights reserved to OS Mansoura Branch.</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style scoped>
footer {
  font-family: 'Arial', sans-serif;
  text-shadow: 2px 2px 4px rgba(44, 43, 43, 0.7);
  border-top: rgba(255, 255, 255, 0.301) 1px solid;
  /* make footor stack at the bottom */
}
p {
  font-size: 0.9rem;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(44, 43, 43, 0.7);
}
</style>