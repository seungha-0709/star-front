<template>
  <div class="join-user-cards" :class="$mq">
    <div
      class="join-user-card"
      v-for="(item, index) in joinUserCardInfo"
      :key="index"
    >
      <basic-join-user-card
        :type="item.type"
        :description="item.description"
        :width="item.width"
        :height="item.height"
        :backgroundColor="item.backgroundColor"
        :color="item.color"
        :link="item.link"
        :image="item.image"
      >
      </basic-join-user-card>
    </div>
  </div>
</template>
<script>
  import basicJoinUserCard from "./basicJoinUserCard"
  import { joinUserCardInfo } from "../../assets/data/join/joinUser.js"

  export default {
    data() {
      return {
        joinUserCardInfo
      }
    },
    components: {
      "basic-join-user-card": basicJoinUserCard
    }
  }
</script>
<style scoped>
  .join-user-cards {
    display: flex;
    justify-content: center;
    text-align: center;
  }
  .join-user-cards .join-user-card:not(:last-child) {
    margin-right: 24px;
  }
  .join-user-cards.mobile {
    display: block;
  }
  .join-user-cards.mobile .join-user-card:not(:last-child),
  .join-user-cards.mobile .join-user-card:last-child {
    margin-right: 0;
  }
</style>
