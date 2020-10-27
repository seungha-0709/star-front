<template>
  <div
    class="select-card"
    :class="$mq"
    @mouseenter="handleCardOnOff"
    @mouseleave="handleCardOnOff"
  >
    <div class="type-img">
      <img
        :src="image.src"
        :alt="image.alt"
        :width="image.width"
        :height="image.height"
      />
    </div>
    <div class="type-box">
      <div class="type-name">{{ type }}</div>
      <chevron-right-icon size="24" color="#8f8f8f" class="chevron-icon" />
    </div>
    <p class="description">{{ description }}</p>

    <basic-button
      class="select-button"
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
  import { ChevronRightIcon } from "vue-feather-icons"

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
      image: {
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
      "basic-button": basicButton,
      ChevronRightIcon
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
    cursor: pointer;
  }
  .select-card:hover {
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
  }
  .select-card .type-name {
    font-size: 20px;
    font-weight: bold;
    color: #212121;
    margin: 42px 0 8px;
  }
  .select-card .chevron-icon {
    display: none;
  }
  .select-card .description {
    width: 234px;
    height: 60px;
    text-align: left;
    font-size: 14px;
    color: #666666;
    margin-bottom: 24px;
  }
  .select-card .mobile-on {
    display: none;
  }
  .select-card.mobile {
    width: 100%;
    height: 62px;
    margin: 0 16px 4px;
    padding: 18px 16px 17px;
    border: solid 1px #dfdfdf;
    cursor: pointer;
  }
  .select-card.mobile:hover {
    box-shadow: none;
  }
  .select-card.mobile .type-img {
    display: none;
  }
  .select-card.mobile .type-box {
    display: flex;
    justify-content: space-between;
  }
  .select-card.mobile .type-name {
    font-size: 18px;
    font-weight: normal;
    margin: 0;
  }
  .select-card.mobile .chevron-icon {
    display: inline-block;
  }
  .select-card.mobile .description {
    display: none;
  }
  .select-card.mobile .select-button {
    display: none;
  }
</style>
