<script setup>

</script>


<template>
  <div id="header">
    <a href="#" class="nav-link">Home</a>
    <span class="username">Username: John Doe</span>
  </div>
</template>

<style scoped>
#header {
  background-color: #333;
  text-align: center;
  color: #aff7ff;
  top: 0;
  left: 0;
  line-height: 80px;
  width: 100%;
  border: none;
  position: sticky;
}

.nav-link {
  color: #aff7ff;
  text-decoration: none;
  margin-right: 20px;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #00adb3;
}

.username {
  font-weight: bold;
}
</style>