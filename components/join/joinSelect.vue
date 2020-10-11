<template>
  <div class="join-select-cards" :class="$mq">
    <div
      class="join-select-card"
      v-for="(item, index) in joinSelectCardInfo"
      :key="index"
    >
      <basic-join-select-card
        :type="item.type"
        :description="item.description"
        :img="item.img"
      />
    </div>
  </div>
</template>
<script>
  import basicJoinSelectCard from "../common/join/basicJoinSelectCard.vue"
  import { joinSelectCardInfo } from "../../assets/data/join/joinUser.js"

  export default {
    data() {
      return {
        joinSelectCardInfo
      }
    },
    components: {
      "basic-join-select-card": basicJoinSelectCard
    }
  }
</script>
<style scoped>
  .join-select-cards {
    display: flex;
    justify-content: center;
    text-align: center;
  }
  .join-select-cards .join-select-card {
    margin-right: 24px;
  }
  /* 반응형 구현 */
  .join-select-cards.mobile {
    display: block;
    justify-content: center;
    text-align: center;
  }
</style>
