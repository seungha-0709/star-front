<template>
  <button
    type="button"
    :style="{
      color,
      backgroundColor,
      fontSize: fontSize,
      fontWeight,
      border,
      borderRadius: borderRadius,
      width: width,
      height: height
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
        default: "16px"
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
        default: "26px"
      },
      width: {
        default: "240px"
      },
      height: {
        default: "52px"
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
