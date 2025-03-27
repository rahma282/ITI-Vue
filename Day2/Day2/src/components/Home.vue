<template>
 <div class="row my-2 justify-content-center">
            <div class="card" style="width:23rem;margin:0.2rem;" v-for="product in products" :key="product.id">
                <img :src="product.image" :title="product.name"/>
                <h4 class="text-center my-1">{{product.name}}</h4>
                <p style="text-align:justify;">{{product.description}}</p>
                <div class="card-footer">
                    <div class="d-flex justify-content-between align-items-baseline">
                        <p :class="[product.instock>=5?'more':'',product.instock<5?'less':'',product.instock==0?'none':'']">Instock : {{product.instock}}</p>
                        <button class="btn btn-primary" :disabled="product.instock==0" @click="handleAddToCart(product)">AddToCart</button>
                    </div>
                </div>
            </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from "vue";
    import {useCartStore} from "../store/store"
   const store = useCartStore();
  const products = ref([]);
  
  onMounted(async () => {
    try {
      const res = await fetch("http://localhost:3000/products");
      products.value = await res.json();
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  });
  const handleAddToCart = async (product) => {
    try {
    await store.addToCart(product);
      const res = await fetch("http://localhost:3000/products");
      products.value = await res.json();
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }  
 };
</script>

<style>

</style>