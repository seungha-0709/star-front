<template>
  <div class="join-select-cards" :class="$mq">
    <div
      class="join-select-card"
      v-for="(item, index) in joinSelectCardInfo"
      :key="index"
    >
      <join-select-card
        :type="item.type"
        :description="item.description"
        :link="item.link"
        :imageInfo="item.imageInfo"
      />
    </div>
  </div>
</template>
<script>
  import joinSelectCard from "./joinSelectCard"
  import { joinSelectCardInfo } from "../../assets/data/join/joinUser.js"

  export default {
    data() {
      return {
        joinSelectCardInfo
      }
    },
    components: {
      "join-select-card": joinSelectCard
    }
  }
</script>
<style scoped>
  .join-select-cards {
    display: flex;
    justify-content: center;
    text-align: center;
  }
  .join-select-cards.desktop .join-select-card:not(:last-child) {
    margin-right: 24px;
  }
  .join-select-cards.mobile {
    display: block;
  }
</style>
