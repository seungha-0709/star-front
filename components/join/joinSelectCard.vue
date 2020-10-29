<template>
  <div class="select-card" :class="$mq">
    <div class="type-img">
      <img
        :src="imageInfo.src"
        :alt="imageInfo.alt"
        :width="imageInfo.width"
        :height="imageInfo.height"
      />
    </div>
    <div class="type-box">
      <div class="type-name">{{ type }}</div>
      <chevron-right-icon class="chevron-right-icon" />
    </div>
    <p class="description">{{ description }}</p>

    <basic-button
      class="select-button"
      text="선택하기"
      width="140px"
      borderRadius="31px"
      fontWeight="400"
      fontSize="16px"
      background-color="#3f60cc"
    />
  </div>
</template>
<script>
  import basicButton from "../common/basicButton.vue"
  import { ChevronRightIcon } from "vue-feather-icons"

  export default {
    props: {
      type: {
        default: ""
      },
      link: {},
      description: {
        default: ""
      },
      imageInfo: {
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
    components: {
      "basic-button": basicButton,
      ChevronRightIcon
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
  .select-card .type-box .chevron-right-icon {
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
  .select-card.mobile {
    width: 100%;
    height: 62px;
    margin-bottom: 4px;
    padding: 18px 16px 17px;
    border: solid 1px #dfdfdf;
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
  .select-card.mobile .type-box .type-name {
    font-size: 18px;
    font-weight: normal;
    margin: 0;
  }
  .select-card.mobile .type-box .chevron-right-icon {
    color: #8f8f8f;
    display: inline-block;
  }
  .select-card.mobile .description {
    display: none;
  }
  .select-card.mobile .select-button {
    display: none;
  }
</style>
