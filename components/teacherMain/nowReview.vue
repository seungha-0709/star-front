<template>
  <div class="background">
    <header class="tab">
      <tab-button
        @tab-click="isTabActive"
        :tabState="firstTabState"
        :tabStyles="tabStyle[0]"
      />
      <tab-button
        @tab-click="isTabActive"
        :tabState="secondTabState"
        :tabStyles="tabStyle[1]"
      />
    </header>
    <main>
      <section v-if="firstTabState === true">
        강사리뷰
      </section>
      <section v-if="secondTabState === true">
        환승후기
        <likes number="123" />
      </section>
    </main>
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
        firstTabState: true,
        secondTabState: false
      }
    },
    components: {
      tabButton,
      likes
    },
    methods: {
      isTabActive() {
        // for (let i = 0; i < this.tabState.length; i++) this.tabState[i] = false
        this.firstTabState = !this.firstTabState
        this.secondTabState = !this.secondTabState
        // console.log(this.tabState[index])
      },
      isSecondTabActive() {
        this.secondTabState = !this.secondTabState
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
