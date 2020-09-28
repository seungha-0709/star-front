<template>
  <div class="basic-board">
    <div>
      <h3 class="my-page-title">{{ myPageBoardInfo.title }}</h3>
    </div>
    <div class="my-page-sub-title" v-if="myPageBoardInfo.subTitle">
      {{ myPageBoardInfo.subTitle }}
    </div>
    <div class="content-count-wrap">
      <p class="content-count" v-if="myPageBoardInfo.isAllAmount">
        {{ `총 ${myPageBoardInfo.allAmount}개` }}
      </p>
      <p class="content-count" v-if="myPageBoardInfo.isAllAmountOrder">
        {{ `전체 주문내역 ${myPageBoardInfo.allAmount}건` }}
      </p>
      <basic-button
        v-if="myPageBoardInfo.removeAllBtn"
        text="모두삭제"
        width="84"
        height="42"
        color="#212121"
        fontSize="14"
        borderRadius="4"
        backgroundColor="#ffffff"
        borderColor="#dfdfdf"
        fontWeight="400"
        :event="deleteAll"
      />
    </div>
    <table class="my-page-table">
      <thead>
        <tr class="my-page-table-header">
          <th
            v-for="(title, index) in myPageBoardInfo.thTitle"
            :key="index"
            :style="{ width: myPageBoardInfo.tableColumnWidth[index] + 'px' }"
          >
            {{ title }}
          </th>
        </tr>
      </thead>
    </table>
    <slot></slot>
    <pagination
      v-if="myPageBoardInfo.pagination"
      :currentPage="tableList.page"
      :total="tableList.total"
      :limit="tableList.limit"
      :blockSize="blockSize"
    />
  </div>
</template>

<script>
  import basicButton from "../common/basicButton.vue"
  import pagination from "../common/pagination.vue"

  export default {
    props: ["myPageBoardInfo", "tableList"],
    data() {
      return {}
    },
    components: {
      basicButton,
      pagination
    },
    methods: {}
  }
</script>

<style scoped>
  .basic-board {
    width: 924px;
    border: solid 1px #dfdfdf;
    background-color: #ffffff;
    padding: 32px 40px 40px 40px;
    font-size: 14px;
    vertical-align: middle;
  }
  .my-page-title {
    text-align: left;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 2px;
  }
  .my-page-sub-title {
    font-size: 14px;
    color: #666;
  }
  .content-count-wrap {
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;
  }
  .content-count {
    margin-top: 22px;
  }
  .my-page-table-header {
    width: 100%;
    height: 40px;
    border-top: solid 1px #666666;
    border-bottom: solid 1px #dfdfdf;
  }
  .my-page-table-header th {
    vertical-align: middle;
  }
</style>
