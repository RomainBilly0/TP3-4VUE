<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  label: {
    type: String,
    required: true
  }
});
</script>

<template>
  <button>{{ props.label }}</button>
</template>

<style scoped>

</style>