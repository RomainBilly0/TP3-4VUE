<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const conversationId = route.params.id;
</script>

<template>
  <div class="conversation-show">
    <h1>Conversation ID: {{ conversationId }}</h1>

    <router-link to="/conversations" class="nav-link">Conversations</router-link>
    <router-link to="/" class="home-link">Go to Home</router-link>
  </div>
</template>

<style scoped>
.conversation-show {
  text-align: center;
  padding: 20px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 20px auto;
  max-width: 600px;
}

.nav-link {
  display: inline-block;
  margin-top: 20px;
  color: #00adb3;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #aff7ff;
}

.home-link {
  display: inline-block;
  margin-top: 10px;
  color: #00adb3;
  text-decoration: none;
  transition: color 0.3s ease;
}

.home-link:hover {
  color: #aff7ff;
}
</style>
