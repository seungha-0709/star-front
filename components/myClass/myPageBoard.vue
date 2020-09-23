<template>
  <div class="basic-board">
    <div>
      <h3 class="basic-board-menu">{{ myPageBoardInfo.title }}</h3>
    </div>
    <div v-if="myPageBoardInfo.subTitle">{{ myPageBoardInfo.subTitle }}</div>
    <div class="content-header-wrap">
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
    <table class="basic-board-table">
      <thead>
        <tr class="table-header">
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
  import pagination from "../orderList/pagination.vue"

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
    font-weight: normal;
    color: #212121;
    vertical-align: middle;
  }
  .basic-board-menu {
    text-align: left;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 2px;
  }
  .content-header-wrap {
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;
  }
  .content-count {
    margin-top: 22px;
  }
  .table-header {
    width: 100%;
    height: 40px;
    border-top: solid 1px #666666;
    border-bottom: solid 1px #dfdfdf;
  }
  .table-header th {
    vertical-align: middle;
  }
</style>
