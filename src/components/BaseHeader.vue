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
  color: white;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-link {
  color: white;
  text-decoration: none;
  margin-right: 20px;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #ddd;
}

.username {
  font-weight: bold;
}
</style>