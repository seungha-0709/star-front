<template>
  <button
    type="button"
    :style="{
      color,
      backgroundColor,
      fontSize: fontSize + 'px',
      fontWeight,
      border,
      borderRadius: borderRadius + 'px',
      width: width + 'px',
      height: height + 'px'
    }"
    @click="$emit('event')"
  >
    {{ text }}
  </button>
</template>

<script>
  export default {
    props: {
      text: {
        default: ""
      },
      color: {
        default: "#fff"
      },
      fontSize: {
        default: 16
      },
      fontWeight: {
        default: 700
      },
      backgroundColor: {
        default: "#1673e6"
      },
      borderColor: {
        default: ""
      },
      borderRadius: {
        default: 26
      },
      width: {
        default: 240
      },
      height: {
        default: 52
      }
    },
    computed: {
      border() {
        return this.borderColor ? `1px solid ${this.borderColor}` : 0
      }
    }
  }
</script>

<style scoped></style>
