<template>
  <div
    class="select-card"
    @mouseenter="handleCardOnOff"
    @mouseleave="handleCardOnOff"
  >
    <div class="type-img">
      <img
        :src="img.src"
        :alt="img.alt"
        :width="img.width"
        :height="img.height"
      />
    </div>
    <div class="type-name">{{ type }}</div>
    <p class="description">{{ description }}</p>
    <basic-button
      class="join-select-card-button"
      text="선택하기"
      width="140px"
      borderRadius="31px"
      fontWeight="400"
      fontSize="16px"
      :backgroundColor="buttonHoverColor"
    />
  </div>
</template>
<script>
import basicButton from "../basicButton.vue"
export default {
  data() {
    return {
      hoverState: false
    }
  },
  props: {
    type: {
      default: ""
    },
    description: {
      default: ""
    },
    img: {
      src: {
        default: ""
      },
      alt: {
        default: ""
      },
      width: {
        default: "120px"
      },
      height: {
        default: "85px"
      }
    }
  },
  computed: {
    buttonHoverColor() {
      return this.hoverState ? "#2c428d" : "#3f60cc"
    }
  },
  components: {
    "basic-button": basicButton
  },
  methods: {
    handleCardOnOff() {
      return (this.hoverState = !this.hoverState)
    }
  }
}
</script>
<style scoped>
.select-card {
  width: 282px;
  height: 372px;
  border: solid 1px #ececec;
  background-color: #ffffff;
  padding: 48px 24px 24px;
  text-align: center;
  font-weight: normal;
}
.select-card:hover {
  width: 282px;
  height: 372px;
  border: solid 1px #ececec;
  background-color: #ffffff;
  padding: 48px 24px 24px;
  text-align: center;
  font-weight: normal;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
}
.select-card .type-name {
  font-size: 20px;
  font-weight: bold;
  color: #212121;
  margin: 42px 0 8px;
}
.select-card .description {
  width: 234px;
  height: 60px;
  text-align: left;
  font-size: 14px;
  color: #666666;
  margin-bottom: 24px;
}
</style>
