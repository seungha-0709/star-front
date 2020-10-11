<template>
  <div
    :style="{
      backgroundColor,
      color
    }"
    class="user-card"
    :class="$mq"
  >
    <div class="type-wrap">
      <div class="type-box">
        <div class="type-img">
          <img
            :src="img.src"
            :alt="img.alt"
            :width="img.width"
            :height="img.height"
          />
        </div>

        <div class="type-name">{{ type }}</div>
      </div>
      <chevron-right-icon
        size="24"
        color="rgba(255,255,255,0.5)"
        class="chevron-icon"
      />
    </div>
    <p
      :style="{
        width: width
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
      type: {
        default: ""
      },
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
        default: 161
      },
      img: {
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
  }
  .user-card:hover {
    width: 282px;
    height: 320px;
    padding: 47px 0px 48px;
    text-align: center;
    font-weight: normal;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
  }
  .user-card .type-name {
    font-size: 20px;
    font-weight: bold;
    margin: 28px 0 8px;
  }
  .user-card .description {
    font-size: 14px;
    margin: 0 auto 48px;
  }
  .user-card.desktop .chevron-icon {
    display: none;
  }
  /* 반응형 구현 */
  .user-card.mobile {
    width: 100%;
    height: 62px;
    margin: 0 16px 4px;
    padding: 15px 16px 15px;
  }
  .user-card.mobile:hover {
    width: 100%;
    height: 62px;
    margin: 0 16px 4px;
    padding: 15px 16px 15px;
    box-shadow: none;
  }
  .user-card.mobile .type-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .user-card.mobile .type-box {
    display: flex;
    align-items: center;
  }
  .user-card.mobile .type-img img {
    width: 32px;
    height: 32px;
    margin-right: 8px;
    text-align: center;
    vertical-align: middle;
  }
  .user-card.mobile .type-name {
    font-size: 18px;
    font-weight: normal;
    margin: 0;
  }
  .user-card.mobile .chevron-icon {
    display: inline-block;
    vertical-align: middle;
  }
  .user-card.mobile .description {
    display: none;
  }
</style>
