<template>
  <div>
    <table class="my-class-content">
      <tbody>
        <tr v-for="(myClass, index) in tableList.data" :key="index">
          <td :style="{ width: myPageBoardInfo.tableColumnWidth[0] + 'px' }">
            1
          </td>
          <td :style="{ width: myPageBoardInfo.tableColumnWidth[1] + 'px' }">
            {{ myClass.date }}
          </td>
          <td
            class="my-class-title"
            :style="{ width: myPageBoardInfo.tableColumnWidth[2] + 'px' }"
          >
            {{ myClass.name }}
          </td>
          <td :style="{ width: myPageBoardInfo.tableColumnWidth[3] + 'px' }">
            {{ myClass.statusTitle }}
          </td>
        </tr>
      </tbody>
    </table>
    <div class="btn-position">
      <basic-button
        text="수강권 코드 등록하기"
        borderColor="#1673e6"
        backgroundColor="#fff"
        color="#1673e6"
        @event="modalOpen('coupon')"
      />
    </div>
  </div>
</template>

<script>
  import basicButton from "../common/basicButton"
  export default {
    props: ["myPageBoardInfo", "tableList"],
    components: {
      basicButton
    },
    methods: {
      modalOpen(type) {
        // index.vue(부모 컴포넌트)에 모달 열기 이벤트와 클릭한 데이터의 id값을 넘겨주는 부분
        this.$emit("open", type)
      }
    }
  }
</script>

<style scoped>
  .my-class-content {
    width: 844px;
    height: 42px;
    font-size: 14px;
    font-weight: normal;
    text-align: center;
    color: #666666;
  }
  .my-class-content tr {
    height: 42px;
    width: 100%;
    border-bottom: solid 1px #dfdfdf;
  }
  .my-class-content td {
    vertical-align: middle;
  }
  .my-class-content tr:hover {
    background-color: rgba(0.09, 0.45, 0.9, 0.03);
  }
  .my-class-title {
    text-align: left;
    padding-left: 16px;
  }
  .btn-position {
    margin-top: 32px;
    display: flex;
    justify-content: center;
  }
</style>
