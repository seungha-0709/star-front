<template>
  <div class="basic-board">
    <div>
      <h3 class="basic-board-menu">{{ defaultTableSet.title }}</h3>
    </div>
    <div class="content-status">
      <p class="content-count">
        {{ `총 ${tableList.total.toLocaleString()}개` }}
      </p>
      <basic-button
        v-if="defaultTableSet.removeAllBtn"
        text="모두삭제"
        width="84"
        height="42"
        color="#212121"
        fontSize="14"
        borderRadius="4"
        backgroundColor="#ffffff"
        borderColor="#dfdfdf"
        fontWeight="400"
        v-on:event="deleteAll"
      />
    </div>
    <div>
      <table class="basic-board-table">
        <thead>
          <tr class="table-header">
            <th
              v-for="(item, index) in defaultTableSet.thTitle"
              :key="index"
              :style="{ width: defaultTableSet.tableColumnWidth[index] + 'px' }"
            >
              {{ item }}
            </th>
          </tr>
        </thead>
        <basic-board-cast-content
          v-if="!differentContent && tableList.total !== 0"
          :content="computedListData"
          :currentPage="tableList.page"
          :total="tableList.total"
          :limit="tableList.limit"
          :thCols="defaultTableSet.thCols"
        />
        <slot v-else></slot>
        <!-- 예외처리 -->
        <slot name="nullSet"></slot>
      </table>
      <div v-if="defaultTableSet.pagination && tableList.total !== 0">
        <pagination
          :currentPage="tableList.page"
          :total="tableList.total"
          :limit="tableList.limit"
          :blockSize="blockSize"
          v-on:paging="pagingMethod"
        />
      </div>
      <slot name="customButton" />
    </div>
  </div>
</template>
<script>
  import basicButton from "../common/basicButton.vue"
  import basicBoardCastContent from "../common/basicBoardCastContent.vue"
  import pagination from "../common/pagination.vue"

  export default {
    props: {
      defaultTableSet: {
        default: null
      },
      tableList: {
        default: null
      },
      blockSize: {
        default: 5
      },
      differentContent: {
        default: false
      }
    },
    data() {
      return {}
    },
    computed: {
      // 로컬 데이터를 limit값 기준으로 리스트 분할
      computedListData() {
        return this.tableList.data.slice(
          (this.tableList.page - 1) * this.tableList.limit,
          this.tableList.page * this.tableList.limit
        )
      }
    },
    components: {
      "basic-button": basicButton,
      "basic-board-cast-content": basicBoardCastContent,
      pagination
    },
    methods: {
      deleteAll() {
        this.$props.tableList.data = []
      },
      pagingMethod(clickPage) {
        if (!clickPage || clickPage === this.tableList.page) return null
        return (this.tableList.page = clickPage)
      }
    }
  }
</script>

<style scoped>
  .basic-board {
    width: 924px;
    height: 100%;
    border: solid 1px #dfdfdf;
    background-color: #ffffff;
    padding: 32px 40px 40px;
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
  .content-status {
    display: flex;
    margin-bottom: 14px;
  }
  .content-count {
    margin-top: 22px;
    margin-right: 706px;
  }
  .basic-board-table {
    width: 100%;
    text-align: center;
    margin-bottom: 32px;
    font-size: 15px;
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
