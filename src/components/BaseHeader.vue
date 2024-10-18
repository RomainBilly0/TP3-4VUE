<script>
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    user: Object
  }
});
</script>

<template>
  <div id="header">
    <router-link to="/conversations" class="nav-link">Conversations</router-link>

    <a class="username">
      Username: {{ user?.name || user?.username || "Guest" }}
    </a>
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
