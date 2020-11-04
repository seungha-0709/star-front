<template>
  <div class="background">
    <div class="tab">
      <tab-button
        @tab-click="isTabActive(0)"
        :tabState="tabState"
        title="종합순위"
        width="157px"
        height="62px"
      />
      <tab-button
        @tab-click="isTabActive(1)"
        title="활동순위"
        width="157px"
        height="62px"
      />
      <tab-button
        @tab-click="isTabActive(2)"
        title="주요학원"
        width="156px"
        height="62px"
      />
    </div>
  </div>
</template>

<script>
  import tabButton from "./tabButton.vue"
  export default {
    data() {
      return {
        tabState: true
      }
    },
    components: {
      tabButton
    },
    methods: {
      isTabActive(index) {
        const tabStates = document.getElementsByClassName("tab-button")
        for (let i = 0; i < tabStates.length; i++)
          tabStates[i].classList.remove("active")
        document
          .getElementsByClassName("tab-button")
          [index].classList.add("active")
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
