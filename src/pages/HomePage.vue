<script setup>
import BaseButton from "../components/BaseButton.vue";
import AsyncButton from "@/components/AsyncButton.vue";
import SignInButton from "@/components/SignInButton.vue";
import Header from "@/components/BaseHeader.vue";


import { ref } from 'vue';
const user = ref(null);

function updateUser(newUser) {
  user.value = newUser;
}
</script>

<template>
  <Header :user="user" />

  <div class="home-page">
    <div id="content">
      Homepage
    </div>
    <div id="button-box">
      button box
      <div id="button-list">
        <BaseButton label="Click me!" />
        <BaseButton label="Button with color prop warn" color="warn" />
        <BaseButton label="Button with color prop danger" color="danger" />
        <BaseButton label="My async button" type="async" />
        <AsyncButton label="Your async button" @click="handleAsyncAction" />
        <SignInButton label="Sign in" @update-user="updateUser" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clickCount: 0,
    }
  },
  methods: {
    handleAsyncAction() {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("Async action completed!");
          this.clickCount++;
          console.log(this.clickCount);
          resolve();
        }, 2000 + 1000 * this.clickCount);
      });
    }
  }
}
</script>

<style scoped>
.home-page {
  padding: 20px 20px 20px 20px;
  background-color: #707070;
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
