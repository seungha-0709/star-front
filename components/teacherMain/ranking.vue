<template>
  <div class="background">
    <div class="tab">
      <tab-button
        @tab-click="isTabActive(0)"
        :tabState="tabState[0]"
        :tabStyles="tabStyle[0]"
      />
      <tab-button
        @tab-click="isTabActive(1)"
        :tabState="tabState[1]"
        :tabStyles="tabStyle[1]"
      />
      <tab-button
        @tab-click="isTabActive(2)"
        :tabState="tabState[2]"
        :tabStyles="tabStyle[2]"
      />
    </div>
  </div>
</template>

<script>
  import tabButton from "./tabButton.vue"
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
        tabState: [false, false, false]
      }
    },
    components: {
      tabButton
    },
    methods: {
      isTabActive(index) {
        for (let i = 0; i < this.tabState.length; i++) this.tabState[i] = false
        this.tabState[index] = true
        console.log(this.tabState[index])
        console.log(this.tabState)
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
</style>
