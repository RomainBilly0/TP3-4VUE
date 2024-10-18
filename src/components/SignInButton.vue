<script>
import { mapMutations } from 'vuex';
import { signInAndGetUser } from "@/lib/microsoftGraph";

export default {
  props: {
    color: {
      type: String,
      default: "primary",
    },
    label: {
      type: String,
      default: "Login",
    },
  },
  methods: {
    ...mapMutations(['setUser']), // Map the mutation

    async handleClick() {
      const newUser = await signInAndGetUser();
      if (newUser) {
        this.setUser(newUser); // Call the mutation directly
      }
    },
  },
};
</script>

<template>
  <button @click="handleClick" class="glow-on-hover">
    {{ label }}
  </button>
</template>

<style scoped>
.glow-on-hover {
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  transition: transform 0.2s, background-color 0.2s;
}
.glow-on-hover:enabled {
  cursor: pointer;
}

.glow-on-hover:not(:disabled):hover {
  transform: scale(1.1);
}

.glow-on-hover:not(:disabled):active {
  transform: scale(0.95);
}

.glow-on-hover:disabled {
  background-color: #bdf7ff;
  color: #ababab;
}
</style>
