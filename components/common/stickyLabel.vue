<template>
  <div>
    <div
      class="sticky-label"
      :style="{
        width,
        height,
        color,
        backgroundColor,
        borderRadius,
        fontWeight,
        fontSize
      }"
    >
      {{ title }}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        default: ""
      },
      width: {
        default: ""
      },
      height: {
        default: ""
      },
      color: {
        default: "#fff"
      },
      backgroundColor: {
        default: "#5d7ee9"
      },
      fontWeight: {
        default: "bold"
      },
      borderRadius: {
        default: "16px"
      },
      fontSize: {
        default: "12px"
      }
    }
  }
</script>

<style scoped>
  .sticky-label {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
