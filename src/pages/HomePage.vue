<script setup>
import BaseButton from "../components/BaseButton.vue";
</script>

<template>
  <div class="home-page">
    <div id="content">
      Homepage
    </div>
    <div id="button-box">
      button box
      <div id="button-list">
        <BaseButton class="btn-primary" label="Click Me"/>
        <BaseButton class="btn-primary" label="Submit"/>
        <BaseButton class="btn-primary" label="Cancel"/>
      </div>
    </div>
  </div>

</template>

<style scoped>
.home-page {
  padding: 20px 20px 20px 20px;
  background-color: #707070;
}

.btn-primary {
  border: none;
  color: black;
  background-color: #00adb3;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;
}
.btn-primary:hover {
  color: grey;
  background-color: #aff7ff;
  transform: scale(1.1);
}
.btn-primary:active {
  transform: scale(0.95);
}

#button-box {
  padding: 20% 0;
  color: #aff7ff;
}

#button-list {
  padding: 20px;
}

#content {
  color: #aff7ff;
}
</style>