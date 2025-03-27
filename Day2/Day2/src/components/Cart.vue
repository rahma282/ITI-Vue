<template>
    <div class="d-flex justify-content-center align-items-baseline">
      <h4 class="w-100 text-center text-danger" v-if="store.getCart.length === 0">
        Sorry, your cart is empty. Please add more!
      </h4>
      <table class="table table-dark table-hover text-center mt-2" v-else>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in store.getCart" :key="product.item.id" class="fade-in">
            <td>{{ product.item.id }}</td>
            <td>{{ product.item.name }}</td>
            <td>{{ currencyFormatter(product.item.price) }}</td>
            <td>{{ product.quantity }}</td>
            <td>{{ currencyFormatter(product.quantity * product.item.price) }}</td>
            <td>
              <button class="btn btn-success action-btn" @click="handleAddToCart(product.item)" 
                :disabled="product.item.instock === 0">+</button>
              &nbsp; | &nbsp;
              <button class="btn btn-danger action-btn" @click="handleDropFromCart(product.item)">-</button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th colspan="4">Total Price</th>
            <th colspan="2">{{ currencyFormatter(store.getTotal()) }}</th>
          </tr>
          <tr>
            <th colspan="4">Total Tax</th>
            <th colspan="2">{{ currencyFormatter(store.getTotal() * 0.1) }}</th>
          </tr>
          <tr>
            <th colspan="4">Grand Total</th>
            <th colspan="2">{{ currencyFormatter(store.getTotal() * 1.1) }}</th>
          </tr>
        </tfoot>
      </table>
    </div>
  </template>
  
  <script setup>
  import { useCartStore } from "../store/store";
  
  const store = useCartStore();
  
  function currencyFormatter(val) {
    return Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0
    }).format(val);
  }
  
  const handleAddToCart = async (product) => {
    try {
      await store.addToCart(product);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };
  
  const handleDropFromCart = async (product) => {
    try {
      await store.reduseQuantity(product);
    } catch (error) {
      console.error("Error removing product from cart:", error);
    }
  };
  </script>
  
  <style scoped>
  /* Dark Theme Table */
  .table {
    width: 100%;
    border-radius: var(--border-radius);
    overflow: hidden;
    background-color: var(--secondary-color);
    color: var(--text-color);
  }
  
  /* Table Header */
  .table thead th {
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--text-color);
    font-weight: bold;
  }
  
  /* Hover Effect */
  .table-hover tbody tr:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transition: background-color 0.3s ease-in-out;
  }
  
  /* Button Styles */
  .action-btn {
    transition: transform 0.2s ease-in-out;
  }
  
  .action-btn:hover {
    transform: scale(1.1);
  }
  
  /* Row Fade-in Animation */
  .fade-in {
    animation: fadeIn 0.5s ease-in;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>
  