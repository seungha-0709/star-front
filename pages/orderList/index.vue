<template>
  <div>
    <order-list
      v-for="(item, i) in computedListData"
      :key="i"
      :orderListData="computedListData"
      :idxData="i"
    />
    <pagination
      :currentPage="page"
      :total="total"
      :limit="limit"
      :blockSize="blockSize"
      v-on:paging="pagingMethod"
    />
  </div>
</template>

<script>
  import orderList from "../../components/orderList/orderList.vue"
  import pagination from "../../components/orderList/pagination.vue"
  import { paymentInfo } from "../../components/orderList/payment.js"

  export default {
    data() {
      /**
       * @description
       * total: 받아오는 전체 데이터 개수
       * limit: 한 페이지에 표시될 데이터 개수
       * block: 페이지 리스트에 표시될 페이지 수
       */
      return {
        paymentInfo,
        total: paymentInfo.length,
        page: 1,
        limit: 5,
        blockSize: 5
      }
    },
    components: {
      orderList,
      pagination
    },
    computed: {
      // 로컬 데이터를 limit값 기준으로 리스트 분할
      computedListData() {
        return this.paymentInfo.slice(
          (this.page - 1) * this.limit,
          this.page * this.limit
        )
      }
    },
    methods: {
      // page 이동 메서드. 블록단위 이전, 다음, 단일 페이징
      pagingMethod(clickPage) {
        if (!clickPage || clickPage === this.page) return
        this.page = clickPage
      }
    }
  }
</script>
