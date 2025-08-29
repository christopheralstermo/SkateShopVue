<template>
  <div class="container">
    <Header />
    <h1 id="frontPageH1">Skateshop</h1>
    <div class="layoutFrontPage">
      <div class="sidebarFrontPage">
        <div class="gender-selectFrontPage">
          <select v-model="gender">
            <option value="female">Dame</option>
            <option value="male">Herre</option>
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
      <div class="contentFrontPage">
        <img
            v-if="gender && currentImage"
            :src="currentImage"
            alt="Kategoribilde"
            class="category-image"
        />
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import FrontPageController from '../controllers/FrontPageController.js';

export default FrontPageController;
</script>