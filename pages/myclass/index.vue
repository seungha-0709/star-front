<template>
  <div>
    <my-page-board :myPageBoardInfo="myClassInfo">
      <my-class-table :myPageBoardInfo="myClassInfo" :boardData="myClassList" />
    </my-page-board>
  </div>
</template>

<script>
  //   import { mapState } from "vuex"
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
