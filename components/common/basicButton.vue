<template>
  <button
    type="button"
    :style="{
      color,
      backgroundColor,
      fontSize,
      fontWeight,
      border,
      borderRadius,
      width,
      height
    }"
    @mouseover="isMouseOver(true)"
    @mouseout="isMouseOver(false)"
    @click="$emit('event')"
  >
    {{ text }}
  </button>
</template>

<script>
  export default {
    data() {
      return {
        hoverState: false
      }
    },
    props: {
      text: {
        default: ""
      },
      Color: {
        default: "#fff"
      },
      hoverColor: {
        default: ""
      },
      BackgroundColor: {
        default: "#3f60cc"
      },
      hoverBackgroundColor: {
        default: ""
      },
      fontSize: {
        default: "16px"
      },
      FontWeight: {
        default: 700
      },
      hoverFontWeight: {
        default: ""
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
      backgroundColor() {
        return this.hoverState
          ? this.hoverBackgroundColor === ""
            ? this.BackgroundColor
            : this.hoverBackgroundColor
          : this.BackgroundColor
      },
      color() {
        return this.hoverState
          ? this.hoverColor === ""
            ? this.Color
            : this.hoverColor
          : this.Color
      },
      fontWeight() {
        return this.hoverState
          ? this.hoverFontWeight === ""
            ? this.FontWeight
            : this.hoverFontWeight
          : this.FontWeight
      },
      border() {
        return this.borderColor ? `1px solid ${this.borderColor}` : 0
      }
    },
    methods: {
      isMouseOver(state) {
        if (state === true) {
          this.hoverState = true
        } else {
          this.hoverState = false
        }
      }
    }
  }
</script>

<style scoped></style>
borderColor
