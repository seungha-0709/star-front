<template>
  <div
    class="left-menu"
    :style="{
      color,
      backgroundColor,
      fontSize: fontSize + 'px',
      fontWeight,
      border,
      borderRadius: borderRadius + 'px',
      width: width + 'px',
      height: height + 'px',
      padding: padding + 'px',
      marggin: marggin + 'px'
    }"
    @click="$emit('event')"
  >
    {{ text }}
  </div>
</template>

<script>
  export default {
    props: {
      text: {
        default: ""
      },
      color: {
        default: "##212121"
      },
      fontSize: {
        default: 16
      },
      fontWeight: {
        default: 700
      },
      backgroundColor: {
        default: "#ffffff"
      },
      borderColor: {
        default: ""
      },
      width: {
        default: 260
      },
      height: {
        default: 240
      }
    },
    computed: {}
  }
</script>

<style scoped></style>
