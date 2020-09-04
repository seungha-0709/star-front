<template>
  <div>
    <div
      class="btn-colored"
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
        default: 16
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
        default: 26
      },
      width: {
        default: 180
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

<style scoped>
  .btn-colored {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 8px;
  }
</style>
