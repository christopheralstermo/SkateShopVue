<template>
  <div class="container">
    <Header />
    <h1>Skateboard Decks</h1>
    <div class="deck-list">
      <div v-for="deck in decks" :key="deck.id" class="deck-item">
        <img :src="deck.imageUrl" :alt="deck.name" />
        <h3>{{ deck.name }}</h3>
        <p>{{ deck.brand }} - {{ deck.width }}" - {{ deck.price }} kr</p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import DeckPage from '../controllers/DeckPageController.js';
import '../style/DeckPage.css';

export default DeckPage;
</script>