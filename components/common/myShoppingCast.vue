<template>
  <div class="my-shopping">
    <div>
      <h3 class="shopping-menu">{{ title }}</h3>
    </div>
    <div class="content-status">
      <p class="content-count">
        {{ `총 ${tableList.length.toLocaleString()}개` }}
      </p>
      <basic-button
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
      <table class="my-shopping-table">
        <thead>
          <tr class="table-header">
            <th
              v-for="(item, index) in tableHeader"
              :key="index"
              :style="{ width: tableColumnWidth[index] + 'px' }"
            >
              {{ item }}
            </th>
          </tr>
        </thead>
        <my-shopping-cast-content :content="tableList" />
      </table>
      <div>
        <pagination
          :currentPage="page"
          :total="total"
          :limit="limit"
          :blockSize="blockSize"
        />
      </div>
    </div>
  </div>
</template>
<script>
  import basicButton from "../common/basicButton.vue"
  import myShoppingCastContent from "../common/myShoppingCastContent.vue"
  import pagination from "../orderList/pagination.vue"

  export default {
    props: {
      title: {
        default: ""
      },
      tableColumnWidth: {
        default: []
      },
      tableHeader: {
        default: []
      },
      tableList: {
        default: []
      }
    },
    data() {
      return {
        total: this.tableList.length,
        page: 1,
        limit: 5,
        blockSize: 5
      }
    },
    components: {
      "basic-button": basicButton,
      "my-shopping-cast-content": myShoppingCastContent,
      pagination
    },
    methods: {
      deleteAll() {
        this.$props.tableList = []
      }
      // $props.tableList 에서 $props 는 왜 붙여야하는지?
    }
  }
</script>

<style scoped>
  .my-shopping {
    width: 924px;
    height: 696px;
    border: solid 1px #dfdfdf;
    background-color: #ffffff;
    padding: 32px 40px 40px;
    font-size: 14px;
    font-weight: normal;
    color: #212121;
    vertical-align: middle;
  }
  .shopping-menu {
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
  .my-shopping-table {
    width: 844px;
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
