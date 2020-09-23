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
        />
      </my-page-board>
    </div>
  </div>
</template>

<script>
  //   import { mapState } from "vuex"
  import sidebarTemporal from "../../components/myPage/sidebarTemporal.vue"
  import myPageBoard from "../../components/myClass/myPageBoard.vue"
  import myClassTable from "../../components/myClass/myClassTable.vue"
  import { myClassList } from "../../components/myClass/myClassList.js"
  import { myClassInfo } from "../../components/myPageBoard.js"

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
      myClassTable
    },
    computed: {
      //   myClassInfo() {
      //     return this.$store.state.myPageBoard.myClassInfo
      //   }
      //   ...mapState("myPageBoard", ["myClassInfo"])
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
