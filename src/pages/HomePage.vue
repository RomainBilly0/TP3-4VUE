<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import BaseButton from "../components/BaseButton.vue";
import AsyncButton from "@/components/AsyncButton.vue";
import SignInButton from "@/components/SignInButton.vue";
import Header from "@/components/BaseHeader.vue";

const store = useStore();
const user = computed(() => store.getters.user);
</script>

<template>
  <Header :user="user" />

  <div class="home-page">
    <div id="content">
      <h1>Welcome to the Homepage</h1>
    </div>

    <div id="button-box">
      <h2>Button Actions</h2>
      <div id="button-list">
        <BaseButton label="Click me!" />
        <BaseButton label="Warn Button" color="warn" />
        <BaseButton label="Danger Button" color="danger" />
        <BaseButton label="My async button" type="async" />
        <AsyncButton label="Your async button" @click="handleAsyncAction" />
        <SignInButton label="Sign in" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clickCount: 0,
    };
  },
  methods: {
    handleAsyncAction() {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("Async action completed!");
          this.clickCount++;
          resolve();
        }, 2000 + 1000 * this.clickCount);
      });
    }
  }
}
</script>

<style scoped>
.home-page {
  padding: 40px;
  background-color: #f5f5f5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#content {
  color: #333;
  margin-bottom: 40px;
}

#content h1 {
  font-size: 2.5rem;
  color: #00adb3;
  margin-bottom: 20px;
}

#button-box {
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  text-align: center;
}

#button-box h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 20px;
}

#button-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
}

</style>
