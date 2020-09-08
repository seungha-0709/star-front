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
            {{ `${commaAdd(orderListData[idxData].paymentPrice)}원` }}
          </td>
          <td class="status">
            <span class="status-content">
              {{ orderListData[idxData].paymentStatus }}</span
            >
            <br />
            <span class="final-date">
              {{ orderListData[idxData].finalDate }}</span
            >
          </td>
        </tr>
        <tr class="tr-bottom">
          <td colspan="3" class="bottom-left">
            <div class="bottom-left-wrap">
              <basic-button
                text="구매 상세보기"
                color="#212121"
                backgroundColor="#fff"
                borderRadius="4"
                borderColor="#dfdfdf"
                fontSize="14"
                width="97"
                height="28"
                @event="onModalOrderOpen"
              >
                <!-- <span @click="onModalOrderOpen">구매 상세보기</span> -->
              </basic-button>
              <modal
                :modalProps="modalInfoOrder"
                :modalDisplay="modalOrderOpen"
                @modalClose="onModalOrderClose"
              >
                <modal-order :paymentData="orderListData[idxData]" />
              </modal>

              <basic-button
                text="구매 영수증 출력"
                color="#212121"
                backgroundColor="#fff"
                borderRadius="4"
                borderColor="#dfdfdf"
                fontSize="14"
                width="113"
                height="28"
                @event="onModalReceiptOpen"
              >
                <!-- <span @click="onModalReceiptOpen">구매 영수증 출력</span> -->
              </basic-button>
              <modal
                :modalProps="modalInfoReceipt"
                :modalDisplay="modalReceiptOpen"
                @modalClose="onModalReceiptClose"
              >
                <modal-receipt :paymentData="orderListData[idxData]" />
              </modal>
            </div>
          </td>
          <td class="bottom-right">
            <basic-button
              text="취소/환불 신청"
              color="#212121"
              backgroundColor="#fff"
              borderRadius="4"
              borderColor="#dfdfdf"
              fontSize="14"
              width="102"
              height="28"
              @event="onModalCancelOpen"
            >
              <!-- <span @click="onModalCancelOpen">취소/환불 신청</span> -->
            </basic-button>
            <modal
              :modalProps="modalInfoCancel"
              :modalDisplay="modalCancelOpen"
              @modalClose="onModalCancelClose"
            >
              <modal-cancel :paymentData="orderListData[idxData]" />
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
    modalInfoReceipt
  } from "../../components/modal/modal.js"

  export default {
    props: ["orderListData", "idxData"],
    data() {
      return {
        modalInfoCancel,
        modalInfoOrder,
        modalInfoReceipt,
        modalOrderOpen: false,
        modalReceiptOpen: false,
        modalCancelOpen: false
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
    methods: {
      commaAdd(num) {
        /* 숫자 1000단위마다 , 표시하게 하는 함수 */
        const regexp = /\B(?=(\d{3})+(?!\d))/g
        return num.toString().replace(regexp, ",")
      },
      /** 모달 팝업 열고 닫는 기능 함수 */
      onModalOrderOpen() {
        this.modalOrderOpen = true
      },
      onModalOrderClose(isClosed) {
        this.modalOrderOpen = isClosed
      },
      onModalReceiptOpen() {
        this.modalReceiptOpen = true
      },
      onModalReceiptClose(value) {
        this.modalReceiptOpen = value
      },
      onModalCancelOpen() {
        this.modalCancelOpen = true
      },
      onModalCancelClose(value) {
        this.modalCancelOpen = value
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
</style>
