<template>
  <div class="container-fluid my-3">
    <div class="row justify-content-center">
      <div class="col-md-12 bg-secondary text-light p-3 rounded">
        <ul class="list-group">
          <li class="list-group-item bg-dark text-light menu-item">
            <a href="#" class="menu-link">Home</a>
          </li>
          <li class="list-group-item bg-dark text-light menu-item">
            <a href="#" class="menu-link">Contact</a>
          </li>
          <li class="list-group-item bg-dark text-light menu-item">
            <a href="#" class="menu-link">About</a>
          </li>
          <li class="list-group-item bg-dark text-light menu-item"> 
            <a href="#" class="menu-link">Gallery</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LinkMenu'
};
</script>

<style scoped>
.menu-item {
  transition: all 0.3s ease-in-out;
  text-align: left;
}

.menu-item:hover {
  background-color: #007bff !important;
  transform: scale(1.05);
}

.menu-item a {
  display: block;
  padding: 10px;
  text-decoration: none;
  color: #ffffff;
  transition: color 0.3s ease-in-out;
}

.menu-item:hover a {
  color: #ffffff;
}
</style>