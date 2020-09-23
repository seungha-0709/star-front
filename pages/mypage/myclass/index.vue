<template>
  <div class="my-page-wrap">
    <div class="sidebar">
      <sidebar-temporal />
    </div>
    <div class="my-page-content">
      <my-page-board :myPageBoardInfo="myClassInfo" :tableList="myClassList">
        <my-class-table
          :myPageBoardInfo="myClassInfo"
          :tableList="myClassList"
          @open="modalOn"
        />
      </my-page-board>
    </div>
    <modal
      :modalProps="modalInfoCoupon"
      v-if="modalTypeOnOff[4].onoff"
      @close="modalOff('coupon')"
    >
    </modal>
  </div>
</template>

<script>
  //   import { mapState } from "vuex"
  import { mapState, mapMutations } from "vuex"
  import sidebarTemporal from "../../../components/myPage/sidebarTemporal.vue"
  import myPageBoard from "../../../components/myClass/myPageBoard.vue"
  import myClassTable from "../../../components/myClass/myClassTable.vue"
  import modal from "../../../components/modal/modal.vue"
  import { myClassList } from "../../../components/myClass/myClassList.js"
  import { myClassInfo } from "../../../components/myPageBoard.js"

  export default {
    data() {
      return {
        myClassList,
        myClassInfo
      }
    },
    components: {
      sidebarTemporal,
      myPageBoard,
      myClassTable,
      modal
    },
    computed: {
      ...mapState("orderListModal", {
        modalInfoCoupon: "modalInfoCoupon",
        modalTypeOnOff: "modalTypeOpen"
      })
    },
    methods: {
      ...mapMutations("orderListModal", ["modalOn", "modalOff"])
    }
  }
</script>

<style scoped>
  .my-page-wrap {
    width: 1200px;
    display: flex;
    margin: 0 auto;
  }
  .sidebar {
    display: inline-block;
  }
  .my-page-content {
    margin-top: 32px;
  }
</style>
