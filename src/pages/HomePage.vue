<script setup>
import BaseButton from "../components/BaseButton.vue";
import AsyncButton from "@/components/AsyncButton.vue";
</script>

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


<template>
  <div class="home-page">
    <div id="content">
      Homepage
    </div>
    <div id="button-box">
      button box
      <div id="button-list">
        <BaseButton label="Click me !" />
        <BaseButton label="Button with color prop warn" color="warn" />
        <BaseButton label="Button with color prop danger" color="danger" />
        <BaseButton label="My async button" type="async" />
        <async-button label="Your async button" @click="handleAsyncAction"/>

      </div>
    </div>
  </div>

</template>

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