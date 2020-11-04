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
    </div>
    <likes number="123" />
  </div>
</template>

<script>
  import tabButton from "./tabButton.vue"
  import likes from "./likes.vue"

  export default {
    data() {
      return {
        tabStyle: [
          {
            title: "강사리뷰",
            width: "236px",
            height: "62px"
          },
          {
            title: "환승후기",
            width: "234px",
            height: "62px"
          }
        ],
        tabState: [false, false]
      }
    },
    components: {
      tabButton,
      likes
    },
    methods: {
      isTabActive(index) {
        for (let i = 0; i < this.tabState.length; i++) this.tabState[i] = false
        this.tabState[index] = true
        console.log(this.tabState[index])
      }
    }
  }
</script>

<style scoped>
  .background {
    width: 472px;
    height: 607px;
    border: 1px solid #dfdfdf;
    background: #fff;
    margin: 0px 4px 8px 4px;
  }
  .tab {
    display: flex;
  }
</style>
