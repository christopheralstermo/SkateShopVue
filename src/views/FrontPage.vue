<template>
  <div class="container">
    <h1>Skateshop</h1>
    <div class="layout">
      <div class="sidebar">
        <div class="gender-select">
          <select v-model="gender">
            <option value="" disabled>Kjønn</option>
            <option value="female">Hun</option>
            <option value="male">Han</option>
          </select>
        </div>
        <ul>
          <li
              v-for="category in categories"
              :key="category"
              :class="{ disabled: !gender }"
              @mouseover="gender && setActiveCategory(category)"
              @mouseleave="gender && setActiveCategory(null)"
              @click="gender && navigateToCategory(category)"
          >
            {{ category }}
          </li>
        </ul>
      </div>
      <div class="content">
        <img
            v-if="gender && currentImage"
            :src="currentImage"
            alt="Kategoribilde"
            class="category-image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FrontPageController from '../controllers/FrontPageController.js';

export default FrontPageController;
</script>