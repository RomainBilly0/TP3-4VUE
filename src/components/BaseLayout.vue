<script setup>
import BaseFooter from "@/components/BaseFooter.vue";
import BaseHeader from "@/components/BaseHeader.vue";
import HomePage from "@/pages/HomePage.vue";
</script>

<template>
  <div id="main_template">
    <base-header/>
    <home-page />
    <base-footer/>
  </div>
</template>

<style scoped>
#main_template {
  left: 0;
  top: 0;
  width: 100%;
  background-color: #707070;
  position: fixed;
}
</style>