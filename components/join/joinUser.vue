<template>
  <div class="join-user-cards" :class="$mq">
    <div
      class="join-user-card"
      v-for="(item, index) in joinUserCardInfo"
      :key="index"
    >
      <join-user-card
        :type="item.type"
        :description="item.description"
        :width="item.width"
        :height="item.height"
        :backgroundColor="item.backgroundColor"
        :color="item.color"
        :link="item.link"
        :imageInfo="item.imageInfo"
      >
      </join-user-card>
    </div>
  </div>
</template>
<script>
  import joinUserCard from "./joinUserCard"
  import { joinUserCardInfo } from "../../assets/data/join/joinUser.js"

  export default {
    data() {
      return {
        joinUserCardInfo
      }
    },
    components: {
      "join-user-card": joinUserCard
    }
  }
</script>
<style scoped>
  .join-user-cards {
    display: flex;
    justify-content: center;
    text-align: center;
  }
  .join-user-cards.desktop .join-user-card:not(:last-child) {
    margin-right: 24px;
  }
  .join-user-cards.mobile {
    display: block;
  }
</style>
