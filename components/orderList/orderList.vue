<template>
  <div class="order-list">
    <table>
      <tbody>
        <tr class="tr-main">
          <td class="order-list-img">
            <img :src="orderListData[idxData].goodsimg" alt />
          </td>
          <td class="order-list-body">
            <span class="date">{{ orderListData[idxData].paymentDate }}</span>
            <span class="payment-idx"
              >({{ orderListData[idxData].paymentIdx }})</span
            >
            <p class="goods-name">{{ orderListData[idxData].goodsName }}</p>
          </td>
          <td class="price">
            {{ `${orderListData[idxData].paymentPrice.toLocaleString()}원` }}
          </td>
          <td class="status">
            <span class="status-content">{{
              orderListData[idxData].paymentStatus
            }}</span>
            <br />
            <span class="final-date">{{
              orderListData[idxData].finalDate
            }}</span>
          </td>
        </tr>
        <tr class="tr-bottom">
          <td colspan="3" class="bottom-left">
            <div class="bottom-left-wrap">
              <div class="btn-order-position">
                <basic-button
                  text="구매 상세보기"
                  color="#212121"
                  fontWeight="normal"
                  backgroundColor="#fff"
                  borderRadius="4"
                  borderColor="#dfdfdf"
                  fontSize="14"
                  width="97"
                  height="28"
                  @event="onModalOn('order')"
                ></basic-button>
              </div>
              <modal
                :modalProps="modalInfoOrder"
                v-if="modalOrderOpen === true"
                @close="onModalOff('order')"
              >
                <modal-order :paymentData="orderListData[idxData]" />
              </modal>
              <div class="btn-receipt-position">
                <basic-button
                  text="구매 영수증 출력"
                  color="#212121"
                  fontWeight="normal"
                  backgroundColor="#fff"
                  borderRadius="4"
                  borderColor="#dfdfdf"
                  fontSize="14"
                  width="113"
                  height="28"
                  @event="onModalOn('receipt')"
                ></basic-button>
              </div>
              <modal
                :modalProps="modalInfoReceipt"
                v-if="modalReceiptOpen === true"
                @close="onModalOff('receipt')"
              >
                <modal-receipt :paymentData="orderListData[idxData]" />
              </modal>
            </div>
          </td>
          <td class="bottom-right">
            <basic-button
              text="취소/환불 신청"
              color="#212121"
              fontWeight="normal"
              backgroundColor="#fff"
              borderRadius="4"
              borderColor="#dfdfdf"
              fontSize="14"
              width="102"
              height="28"
              @event="onModalOn('cancel')"
              v-if="
                orderListData[idxData].cancel === false &&
                orderListData[idxData].refund === false
              "
            ></basic-button>
            <modal
              :modalProps="modalInfoCancel"
              v-if="modalCancelOpen === true"
              @close="onModalOff('cancel')"
            >
              <modal-cancel :paymentData="orderListData[idxData]" />
            </modal>

            <basic-button
              text="고객센터 문의"
              color="#212121"
              fontWeight="normal"
              backgroundColor="#fff"
              borderRadius="4"
              borderColor="#dfdfdf"
              fontSize="14"
              width="102"
              height="28"
              @event="onModalOn('qna')"
              v-if="
                orderListData[idxData].cancel === true ||
                orderListData[idxData].refund === true
              "
            ></basic-button>
            <modal
              :modalProps="modalInfoQna"
              v-if="modalQnaOpen === true"
              @close="onModalOff('qna')"
            >
              <modal-qna :paymentData="orderListData[idxData]" />
            </modal>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import basicButton from "../../components/common/basicButton.vue"
  import modal from "../../components/modal/modal.vue"
  import modalOrder from "../../components/modal/modalOrder.vue"
  import modalReceipt from "../../components/modal/modalReceipt.vue"
  import modalCancel from "../../components/modal/modalCancel.vue"
  import modalQna from "../../components/modal/modalQna.vue"
  import {
    modalInfoCancel,
    modalInfoOrder,
    modalInfoReceipt,
    modalInfoQna
  } from "../../components/modal/modal.js"

  export default {
    props: ["orderListData", "idxData"],
    data() {
      return {
        modalInfoCancel,
        modalInfoOrder,
        modalInfoReceipt,
        modalInfoQna
      }
    },
    components: {
      basicButton,
      modal,
      modalOrder,
      modalReceipt,
      modalCancel,
      modalQna
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
      /** 모달 팝업 열고 닫는 기능 함수 */
      onModalOn(type) {
        this.$store.commit("orderListModal/modalOn", type)
      },
      onModalOff(type) {
        this.$store.commit("orderListModal/modalOff", type)
      }
    }
  }
</script>

<style scoped>
  .order-list {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  table {
    border-collapse: collapse;
  }
  table:hover {
    background-color: rgba(255, 255, 255, 0);
  }
  .tr-main {
    height: 108px;
    border-bottom: 1px solid #ececec;
  }
  img {
    width: 103px;
    height: 76px;
    border-radius: 4px;
  }
  /** 테이블 각 td 클래스별 서식 */
  .order-list-img {
    width: 151px;
    line-height: 0;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
  .order-list-body {
    width: 413px;
    display: table-cell;
    vertical-align: middle;
  }
  .price {
    width: 140px;
    border-left: 1px solid #ececec;
    border-right: 1px solid #ececec;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    font-size: 14px;
    color: #212121;
  }
  .status {
    width: 140px;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
  .tr-bottom {
    height: 56px;
    border: 1px solid #ececec;
  }
  /** 각 td 안 내용 서식 */
  .date {
    font-size: 14px;
    color: #212121;
  }
  .payment-idx {
    font-size: 14px;
    color: #666;
  }
  .body-content {
    margin: 0;
    padding: 0;
  }
  .goods-name {
    margin-top: 8px;
    width: 268px;
    height: 48px;
    font-size: 16px;
    color: #212121;
    /* 넘치는 글자 말줄임표로 처리 */
    text-overflow: ellipsis;
    white-space: normal;
    overflow: hidden;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .status-content {
    font-size: 14px;
    font-weight: bold;
    color: #212121;
  }
  .final-date {
    color: #8f8f8f;
    font-size: 14px;
  }
  .bottom-left-wrap {
    display: flex;
    padding: 14px 32px;
  }
  .bottom-right {
    padding: 14px 24px;
  }
  .btn-order-position {
    margin: 0;
    padding: 0;
  }
  .btn-receipt-position {
    margin-left: 8px;
  }
</style>
