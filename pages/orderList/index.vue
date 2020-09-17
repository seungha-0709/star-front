<template>
  <div>
    <order-list
      v-for="(item, i) in listData"
      :key="i"
      :orderListData="listData"
      :idxData="i"
      @open="onModalOn('order')"
      @id="modalId"
    />
    <pagination
      :pageSetting="pageDataSetting(total, limit, block, this.page)"
      @paging="pagingMethod"
    />

    <modal :modalProps="modalInfoOrder" v-if="modalOrderOpen" @close="onModalOff('order')">
      <modal-order :paymentData="paymentInfo.find(el => el.id == modalindex)" />
    </modal>
  </div>
</template>

<script>
import modal from "../../components/modal/modal.vue"
import modalOrder from "../../components/modal/modalOrder.vue"
import modalReceipt from "../../components/modal/modalReceipt.vue"
import modalCancel from "../../components/modal/modalCancel.vue"
import modalQna from "../../components/modal/modalQna.vue"
import orderList from "../../components/orderList/orderList.vue"
import pagination from "../../components/orderList/pagination.vue"
import { paymentInfo } from "../../components/orderList/payment.js"
import {
  modalInfoCancel,
  modalInfoOrder,
  modalInfoReceipt,
  modalInfoQna
} from "../../components/modal/modal.js"

export default {
  data() {
    /**
     * @description
     * total: 받아오는 전체 데이터 개수
     * limit: 한 페이지에 표시될 데이터 개수
     * block: 페이지 리스트에 표시될 페이지 수
     * modalindex: paymentInfo 에서 하위 컴포넌트에 전달할 데이터의 인덱스
     */
    return {
      modalInfoCancel,
      modalInfoOrder,
      modalInfoReceipt,
      modalInfoQna,
      modalindex: 0,
      listData: [],
      paymentInfo,
      total: paymentInfo.length,
      page: 1,
      limit: 5,
      block: 5
    }
  },
  components: {
    modal,
    modalOrder,
    modalReceipt,
    modalCancel,
    modalQna,
    orderList,
    pagination
  },
  mounted() {
    this.pagingMethod(this.page)
  },
  computed: {
    modalOrderOpen() {
      return this.$store.state.orderListModal.modalOrderOpen
    },
    modalReceiptOpen() {
      return this.$store.state.orderListModal.modalReceiptOpen
    },
    modalCancelOpen() {
      return this.$store.state.orderListModal.modalCancelOpen
    },
    modalQnaOpen() {
      return this.$store.state.orderListModal.modalQnaOpen
    }
  },
  methods: {
    /** 전달받은 id를 modalindex에 반영 */
    modalId(id) {
      this.modalindex = id
    },
    /** 모달 팝업 열고 닫는 함수 */
    onModalOn(type) {
      this.$store.commit("orderListModal/modalOn", type)
    },
    onModalOff(type) {
      this.$store.commit("orderListModal/modalOff", type)
    },
    /**
     * @description
     * pagingMethod: pagination.vue에서 클릭 이벤트를 감지하여
     * 사용자가 어떤 페이지를 클릭했는지 값을 받아오는 함수.
     * 사용자가 클릭한 페이지 = page 값을 받아
     * 이를 활용하여 각 페이지마다 화면에 뿌려질 listData를 정의하고,
     * 페이지 리스트를 표시하기 위해 다음 함수 pageDataSetting에 page 값을 전달
     */
    pagingMethod(page) {
      this.listData = this.paymentInfo.slice(
        (page - 1) * this.limit,
        page * this.limit
      )
      this.page = page
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
      const totalPage = Math.ceil(total / limit)
      let currentPage = page
      const first =
        currentPage > 1 ? parseInt(currentPage, 10) - parseInt(1, 10) : null
      const end =
        totalPage !== currentPage
          ? parseInt(currentPage, 10) + parseInt(1, 10)
          : null
      // 페이지 리스트를 block 단위로 표시하기 위한 부분
      let startIndex = (Math.ceil(currentPage / block) - 1) * block + 1
      let endIndex =
        startIndex + block > totalPage ? totalPage : startIndex + block - 1
      let list = []
      for (let index = startIndex; index <= endIndex; index++) {
        list.push(index)
      }
      return { first, end, list, currentPage }
    }
  }
}
</script>
