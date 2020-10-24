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
        default: ""
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
      border() {
        return this.borderColor ? `1px solid ${this.borderColor}` : 0
      },
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
color, borderColor
