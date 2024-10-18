<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goToRandomConversation() {
  // Generate a random positive number which will be used as an id
  const randomId = Math.floor(Math.random() * 10000) + 1;
  router.push(`/conversation/${randomId}`);
}
</script>

<template>
  <div class="placeholder">
    <h1>Conversations Page</h1>
    <p>This is the Conversations Page. The route is working correctly!</p>

    <button @click="goToRandomConversation" class="random-conversation-button">
      Go to Random Conversation
    </button>

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
  display: block;
  margin-top: 20px;
  color: #00adb3;
  text-decoration: none;
  transition: color 0.3s ease;
}

.home-link:hover {
  color: #aff7ff;
}

.random-conversation-button {
  margin-top: 20px;
  padding: 10px 15px;
  background-color: #00adb3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.random-conversation-button:hover {
  background-color: #009999;
}
</style>
