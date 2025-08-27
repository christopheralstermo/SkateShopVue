<template>
  <div class="container">
    <h1>{{ category }}</h1>
    <p>Dette er siden for {{ category }}. Produkter kommer snart!</p>
  </div>
</template>

<script>
export default {
  name: 'CategoryPage',
  props: {
    category: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  font-size: 2.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}
</style>