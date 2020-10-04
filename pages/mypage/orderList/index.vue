<template>
  <div class="my-page-wrap">
    <div class="sidebar">
      <sidebar-temporal />
    </div>
    <div class="basic-board-cast">
      <basic-board-cast
        :defaultTableSet="myOrderListInfo"
        :tableList="paymentInfo"
        :blockSize="5"
        :differentContent="true"
      >
        <template v-slot:differentContent>
          <order-list
            v-for="(item, i) in computedListData"
            :key="i"
            :orderListData="item"
            :isCancelRefund="item === true || item.refund === true"
            @open="modalOnOff"
            @id="modalId"
          />
        </template>
      </basic-board-cast>
    </div>

    <modal
      :modalProps="modalInfoOrder"
      v-if="modalTypeOnOff.order.onoff"
      @close="modalOnOff('order')"
    >
      <modal-order
        :paymentData="paymentInfo.data.find((data) => data.id === modalIndex)"
      />
    </modal>

    <modal
      :modalProps="modalInfoReceipt"
      v-if="modalTypeOnOff.receipt.onoff"
      @close="modalOnOff('receipt')"
    >
      <modal-receipt
        :paymentData="paymentInfo.data.find((data) => data.id === modalIndex)"
      />
    </modal>

    <modal
      :modalProps="modalInfoCancel"
      v-if="modalTypeOnOff.cancel.onoff"
      @close="modalOnOff('cancel')"
    >
      <modal-cancel
        :paymentData="paymentInfo.data.find((data) => data.id === modalIndex)"
      />
    </modal>

    <modal
      :modalProps="modalInfoQna"
      v-if="modalTypeOnOff.qna.onoff"
      @close="modalOnOff('qna')"
    >
      <modal-qna
        :paymentData="paymentInfo.data.find((data) => data.id === modalIndex)"
      />
    </modal>
  </div>
</template>

<script>
  import { mapState, mapMutations } from "vuex"
  import modal from "../../../components/modal/modal.vue"
  import modalOrder from "../../../components/modal/modalOrder.vue"
  import modalReceipt from "../../../components/modal/modalReceipt.vue"
  import modalCancel from "../../../components/modal/modalCancel.vue"
  import modalQna from "../../../components/modal/modalQna.vue"
  import sidebarTemporal from "../../../components/myPage/sidebarTemporal.vue"
  import basicBoardCast from "../../../components/common/basicBoardCast.vue"
  import orderList from "../../../components/orderList/orderList.vue"
  import { paymentInfo } from "../../../components/orderList/payment.js"
  import { myOrderListInfo } from "../../../components/myPageBoard.js"

  export default {
    data() {
      return {
        paymentInfo,
        myOrderListInfo,
        modalIndex: 0
      }
    },
    components: {
      modal,
      modalOrder,
      modalReceipt,
      modalCancel,
      modalQna,
      sidebarTemporal,
      basicBoardCast,
      orderList
    },
    computed: {
      // store에서 각 데이터들 불러오는 부분
      ...mapState("orderListModal", {
        modalInfoCancel: "modalInfoCancel",
        modalInfoOrder: "modalInfoOrder",
        modalInfoReceipt: "modalInfoReceipt",
        modalInfoQna: "modalInfoQna",
        modalTypeOnOff: "modalTypeOpen"
      }),
      // 로컬 데이터를 limit값 기준으로 리스트 분할
      computedListData() {
        return this.paymentInfo.data.slice(
          (this.paymentInfo.page - 1) * this.paymentInfo.limit,
          this.paymentInfo.page * this.paymentInfo.limit
        )
      }
    },
    methods: {
      modalId(id) {
        this.modalIndex = id
      },
      ...mapMutations("orderListModal", ["modalOnOff"])
    }
  }
</script>

<style scoped>
  .my-page-wrap {
    width: 1200px;
    display: flex;
    margin: 0 auto;
  }
  .sidebar {
    display: inline-block;
    margin: 0;
    padding: 0;
  }
  .basic-board-cast {
    margin-top: 32px;
  }
</style>
