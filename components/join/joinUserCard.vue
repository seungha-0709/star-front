<template>
  <div
    :style="{
      backgroundColor,
      color
    }"
    class="user-card"
    :class="$mq"
  >
    <div class="user-wrap">
      <div class="user-box">
        <div class="user-img">
          <img
            :src="imageInfo.src"
            :alt="imageInfo.alt"
            :width="imageInfo.width"
            :height="imageInfo.height"
          />
        </div>

        <div class="user-name">{{ userType }}</div>
      </div>
      <chevron-right-icon
        color="rgba(255, 255, 255, 0.5)"
        class="chevron-icon"
      />
    </div>
    <p
      :style="{
        width
      }"
      class="description"
    >
      {{ description }}
    </p>
  </div>
</template>
<script>
  import { ChevronRightIcon } from "vue-feather-icons"

  export default {
    props: {
      userType: {
        default: ""
      },
      userLink: {},
      description: {
        default: ""
      },
      backgroundColor: {
        default: "#3f60cc"
      },
      color: {
        default: "#ffffff"
      },
      width: {
        default: "161px"
      },
      imageInfo: {
        src: {
          default: ""
        },
        alt: {
          defalut: ""
        },
        width: {
          default: "120px"
        },
        height: {
          default: "120px"
        }
      }
    },
    components: {
      ChevronRightIcon
    }
  }
</script>
<style scoped>
  .user-card {
    width: 282px;
    height: 320px;
    padding: 47px 0px 48px;
    text-align: center;
    font-weight: normal;
    cursor: pointer;
  }
  .user-card:hover {
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
  }
  .user-card .user-box .user-name {
    font-size: 20px;
    font-weight: bold;
    margin: 28px 0 8px;
  }
  .user-card .description {
    font-size: 14px;
    margin: 0 auto 48px;
  }
  .user-card.desktop .user-wrap .chevron-icon {
    display: none;
  }
  .user-card.mobile {
    width: 100%;
    height: 62px;
    margin-bottom: 4px;
    padding: 15px 16px 15px;
  }
  .user-card.mobile:hover {
    box-shadow: none;
  }
  .user-card.mobile .user-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .user-card.mobile .user-wrap .user-box {
    display: flex;
    align-items: center;
  }
  .user-card.mobile .user-wrap .user-box .user-img img {
    width: 32px;
    height: 32px;
    margin-right: 8px;
    text-align: center;
    vertical-align: middle;
  }
  .user-card.mobile .user-wrap .user-box .user-name {
    font-size: 18px;
    font-weight: normal;
    margin: 0;
  }
  .user-card.mobile .user-wrap .user-box .chevron-icon {
    display: inline-block;
    vertical-align: middle;
  }
  .user-card.mobile .description {
    display: none;
  }
</style>
