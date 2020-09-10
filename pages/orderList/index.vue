<template>
  <div>
    <order-list v-for="(item, i) in listData" :key="i" :orderListData="listData" :idxData="i" />
    <pagination :pageSetting="pageDataSetting(total, limit, block)" @paging="pagingMethod" />
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
      listData: [],
      paymentInfo,
      total: paymentInfo.length,
      limit: 3,
      block: 5
    }
  },
  components: {
    orderList,
    pagination
  },
  created() {
    this.listData = this.paymentInfo.slice(0, this.limit)
  },
  methods: {
    /**
     * @description
     * pagingMethod: pagination.vue에서 클릭 이벤트를 감지하여
     * 사용자가 어떤 페이지를 클릭했는지 값을 받아오는 함수.
     * 사용자가 클릭한 페이지 = page 값을 받아
     * 이를 활용하여 각 페이지마다 화면에 뿌려질 listData를 정의하고,
     * 페이지 리스트를 표시하기 위해 다음 함수 pageDataSetting에 page 값을 전달
     */
    pagingMethod(page) {
      console.log(page)
      this.listData = this.paymentInfo.slice(
        (page - 1) * this.limit,
        page * this.limit
      )
      this.pageDataSetting(this.total, this.limit, this.block, page)
    },
    /**
     * @description
     * pageDataSetting: 페이지 리스트를 표시하기 위한 함수.
     * total, limit, block은 기존의 값에서 받아오고, pagingMethod 함수에서 page 값을 전달받음.
     * (1)'이전' 아이콘, (2)'다음' 아이콘, (3)페이지 리스트 표시를 위해
     * 결과값을 pagination.vue 파일에 prop으로 전달
     */
    pageDataSetting(total, limit, block, page) {
      const totalPage = total / limit + (total % limit > 0 ? 1 : 0)
      let currentPage
      if (currentPage !== page) currentPage = page
      else {
        currentPage = 1
      }
      const first = currentPage > 1
      const end = totalPage !== currentPage
      let list = []
      for (let index = 1; index <= totalPage; index++) {
        list.push(index)
      }
      return { first, end, list }
    }
  }
}
</script>
