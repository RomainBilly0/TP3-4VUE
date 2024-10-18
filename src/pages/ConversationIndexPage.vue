<script setup>
</script>

<template>
  <div class="placeholder">
    <h1>Conversations Page</h1>
    <p>This is the conversations Page. The route is working correctly!</p>

    <router-link to="/" class="home-link">Go to Home</router-link>
  </div>
</template>

<style scoped>
.placeholder {
  text-align: center;
  padding: 20px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 20px auto;
  max-width: 600px;
}

.home-link {
  display: block; /* Makes the link a block element */
  margin-top: 20px; /* Adds some space above the link */
  color: #00adb3; /* Change the color as needed */
  text-decoration: none; /* Remove underline */
  transition: color 0.3s ease; /* Add a smooth transition */
}

.home-link:hover {
  color: #aff7ff; /* Change color on hover */
}
</style>
