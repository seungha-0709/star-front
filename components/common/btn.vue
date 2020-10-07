<template>
  <div>
    <div
      class="btn-colored"
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
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      color: {
        default: "#fff"
      },
      fontSize: {
        default: "16px"
      },
      fontWeight: {
        default: "bold"
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
        default: "180px"
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

<style scoped>
  .btn-colored {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 8px;
  }
</style>
