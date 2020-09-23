<template>
  <div>
    <table class="my-class-content" v-if="tableList.data !== []">
      <tbody>
        <tr v-for="(myClass, index) in tableList.data" :key="index">
          <td :style="{ width: myPageBoardInfo.tableColumnWidth[0] + 'px' }">
            {{}}
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
            <basic-button
              v-if="(myClass.status === 'future')"
              text="수강예정"
              fontSize="12"
              width="64"
              height="28"
              color="#ffb00f"
              borderColor="#ffb00f"
              borderRadius="4"
              backgroundColor="#fff"
            />
            <basic-button
              v-if="(myClass.status === 'now')"
              text="수강중"
              fontSize="12"
              width="64"
              height="28"
              color="#b0c93d"
              borderColor="#b0c93d"
              borderRadius="4"
              backgroundColor="#fff"
            />
            <basic-button
              v-if="(myClass.status === 'past')"
              text="수강완료"
              fontSize="12"
              width="64"
              height="28"
              color="#e13a3a"
              borderColor="#e13a3a"
              borderRadius="4"
              backgroundColor="#fff"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <div class="my-class-none-wrap" v-if="tableList.data === []">
      <div class="my-class-none">
        <p>강의 목록이 존재하지 않습니다.</p>
      </div>
      <div class="class-btn-position">
        <basic-button text="강의 상품 보러 가기" />
      </div>
    </div>
    <div class="coupon-btn-position">
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
    computed: {},
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
    margin-bottom: 32px;
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
  .my-class-none {
    height: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .my-class-none p {
    color: #666;
    font-size: 16px;
  }
  .class-btn-position {
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
  }
  .coupon-btn-position {
    display: flex;
    justify-content: center;
  }
</style>
