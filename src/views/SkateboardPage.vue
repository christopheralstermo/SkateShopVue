<template>
  <div class="container">
    <Header />
    <h1 id="skatePageH1">Skateboard Setup</h1>
    <div class="layoutSkatePage">
      <div class="sidebarSkatePage">
        <ul>
          <li
              v-for="component in components"
              :key="component"
              @mouseover="startAnimation(component)"
              @mouseleave="stopAnimation()"
          >
            {{ component }}
          </li>
        </ul>
      </div>
      <div class="contentSkatePage">
        <img
            v-if="currentImage"
            :src="currentImage"
            alt="Skateboard"
            class="skateboard-imageSkatePage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SkatePageController from '../controllers/SkatePageController.js'
export default SkatePageController;


</script>

<style scoped>

</style>