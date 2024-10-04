<template>
  <baseButton :disabled="isPending" :color="color" @click.stop.prevent="handleClick">
    <p v-if="isPending">Pending ...  </p>
    <slot />
  </baseButton>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  name: 'AsyncButton',
  components: { BaseButton },
  inheritAttrs: false,

  props: {
    color: {
      type: String,
      default: 'primary',
    },
  },

  data () {
    return {
      isPending: false,
    };
  },

  methods: {
    handleClick(event) {
      const onClick = this.$attrs.onClick || this.$emit.bind(this, 'click');
      if (typeof onClick === 'function') {
        this.isPending = true;

        Promise.resolve(onClick(event))
            .finally(() => {
              this.isPending = false;
            });
      }
    },
  },
};
</script>
