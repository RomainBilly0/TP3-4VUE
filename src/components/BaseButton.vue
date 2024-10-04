<template>
  <button :disabled="isDisabled" @click="handleClick" :style="buttonStyles" class="glow-on-hover" type="button">
    {{ isDisabled ? "Button disabled" : label }}
  </button>
</template>

<script>
export default {

  props: {
    color: {
      type: String,
      default: 'primary',
    },

    label: {
      type: String,
      default: 'Click me once!',
    },
  },

  computed: {
    buttonStyles() {
      const palette = this.colorPalette[this.color] || this.colorPalette.primary;
      return {
        backgroundColor: palette.bg,
        color: palette.color,
        cursor: this.isDisabled ? 'not-allowed' : 'pointer',
      };
    },
  },

  methods: {
    handleClick() {
      this.isDisabled = true;
    },
  },

  data() {
    return {
      isDisabled: false,

      colorPalette: {
        primary: {
          bg: "#00adb3",
          color: "black",
          hoverBg: "#aff7ff",
          hoverColor: "grey"
        },
        warn: {
          bg: "#ff5722",
          color: "black",
          hoverBg: "#ff7043",
          hoverColor: "black"
        },
        danger: {
          bg: "#e53935",
          color: "black",
          hoverBg: "#ef5350",
          hoverColor: "black"
        },
      },
    };
  }
};
</script>

<style scoped>
.glow-on-hover {
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  transition: transform 0.2s, background-color 0.2s;
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