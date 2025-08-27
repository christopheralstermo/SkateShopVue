<template>
  <div class="header">
    <router-link to="/">Forsiden</router-link>
    <span class="cart-icon" @click="openCart">🛒 (0)</span>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    openCart() {
      alert('Handlevogn åpnes snart!');
    }
  }
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  z-index: 1000;
}

.header a {
  color: white;
  text-decoration: none;
  margin-left: 10px;
}

.header a:hover {
  text-decoration: underline;
}

.cart-icon {
  cursor: pointer;
  margin-right: 10px;
}

.cart-icon:hover {
  color: #ddd;
}
</style>