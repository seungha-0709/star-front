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
      color: {
        default: "#fff"
      },
      fontSize: {
        default: "16px"
      },
      fontWeight: {
        default: 700
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
      },
      hoverBackgroundColor: {
        default: ""
      },
      mainBackgroundColor: {
        default: ""
      }
    },
    computed: {
      border() {
        return this.borderColor ? `1px solid ${this.borderColor}` : 0
      },
      backgroundColor() {
        return this.hoverState
          ? this.hoverBackgroundColor === ""
            ? this.mainBackgroundColor
            : this.hoverBackgroundColor
          : this.mainBackgroundColor

        // return this.hoverState
        //   ? this.hoverBackgroundColor
        //   : this.mainBackgroundColor
        // hoverState 가 true ? hoverBackgroundColor : mainBackgroundColor
        // hoverBackgroundColor 가 존재 ? hoverBackgroundColor : hoverBackgroundColor == mainBackgroundColor

        // if (this.hoverState && this.hoverBackgroundColor) {
        //   return `${this.hoverBackgroundColor}`
        // } else if (this.hoverState && this.hoverBackgroundColor === "") {
        //   return `${this.mainBackgroundColor}`
        // } else if (!this.hoverState) {
        //   return `${this.mainBackgroundColor}`
        // }
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
color, fontWeight, background-color, borderColor
