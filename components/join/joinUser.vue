<template>
  <div class="join-user-cards">
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
        :img="item.img"
      >
      </basic-join-user-card>
    </div>
  </div>
</template>
<script>
import basicJoinUserCard from "../common/join/basicJoinUserCard.vue"
import { joinUserCardInfo } from "../../assets/data/joinUser.js"

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
.join-user-cards .join-user-card {
  margin-right: 24px;
}
</style>
