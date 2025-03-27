<template>
  <div id="hi">
    <!-- navbar -->
    <div class="d-flex align-items-baseline justify-content-between p-2 bg-dark text-light">
      <router-link to="/" class="nav-link">Products</router-link>
      <div class="d-flex align-items-baseline">
        <router-link to="/cart" class="btn btn-primary position-relative">
          Cart
          <span class="cart-count badge bg-danger position-absolute top-0 start-100 translate-middle">
            {{ store.getCart.length }}
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "../store/store";
const store = useCartStore();
</script>

<style scoped>

</style>