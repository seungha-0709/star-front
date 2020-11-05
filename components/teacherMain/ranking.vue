<template>
  <div class="background">
    <div class="tab">
      <tab-button
        @tab-click="isTabActive(0)"
        :tabState="firstTabState"
        :tabStyles="tabStyle[0]"
      />
      <tab-button
        @tab-click="isTabActive(1)"
        :tabState="secondTabState"
        :tabStyles="tabStyle[1]"
      />
      <tab-button
        @tab-click="isTabActive(2)"
        :tabState="thirdTabState"
        :tabStyles="tabStyle[2]"
      />
    </div>
    <section class="ranking-slide-tab">
      <ranking-slide-menu />
    </section>
    <section v-if="firstTabState === true">
      <div v-for="(item, index) in totalRankingList" :key="index">
        <ranking-content :rankingInfo="item" />
      </div>
    </section>
    <section v-if="secondTabState === true">랭킹2</section>
    <section v-if="thirdTabState === true">랭킹3</section>
  </div>
</template>

<script>
  import tabButton from "./tabButton.vue"
  import rankingContent from "./rankingContent.vue"
  import rankingSlideMenu from "./rankingSlideMenu.vue"
  import { totalRankingList } from "../../assets/data/teacherMain/ranking.js"

  export default {
    data() {
      return {
        tabStyle: [
          {
            title: "종합순위",
            width: "157px",
            height: "62px"
          },
          {
            title: "활동순위",
            width: "157px",
            height: "62px"
          },
          {
            title: "주요학원",
            width: "156px",
            height: "62px"
          }
        ],
        firstTabState: true,
        secondTabState: false,
        thirdTabState: false,
        totalRankingList
      }
    },
    components: {
      tabButton,
      rankingContent,
      rankingSlideMenu
    },
    methods: {
      isTabActive(index) {
        if (index === 0) {
          this.firstTabState = true
          this.secondTabState = false
          this.thirdTabState = false
        }

        if (index === 1) {
          this.firstTabState = false
          this.secondTabState = true
          this.thirdTabState = false
        }

        if (index === 2) {
          this.firstTabState = false
          this.secondTabState = false
          this.thirdTabState = true
        }
      }
    }
  }
</script>

<style scoped>
  .background {
    width: 472px;
    height: 602px;
    border: 1px solid #dfdfdf;
    background: #fff;
    margin: 4px 0px 0px 4px;
  }
  .tab {
    display: flex;
  }
  .ranking-slide-tab {
    height: 42px;
  }
</style>
