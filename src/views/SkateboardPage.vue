<template>
  <div class="container">
    <h1>Skateboard Setup</h1>
    <div class="layout">
      <div class="sidebar">
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
      <div class="content">
        <img
            v-if="currentImage"
            :src="currentImage"
            alt="Skateboard"
            class="skateboard-image"
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