<template>
  <button :disabled="isDisabled" @click="handleClick" class="glow-on-hover" type="button" >{{ isDisabled ? "Button disabled" : "Click me once!" }}</button>
</template>

<script>
export default {
  data() {
    return {
      isDisabled: false,
    };
  },
  methods: {
    handleClick() {
      this.isDisabled = true;

    }
  }
};
</script>

<style scoped>

</style>