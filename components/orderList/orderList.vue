<template>
  <tbody>
    <tr class="tr-main">
      <td class="order-list-body">
        <img class="order-list-img" :src="orderListData.goodsimg" alt="" />
        <div class="order-list-body-content">
          <span class="date">{{ orderListData.paymentDate }}</span>
          <span class="payment-idx">({{ orderListData.paymentIdx }})</span>
          <p class="goods-name">{{ orderListData.goodsName }}</p>
        </div>
      </td>
      <td class="price">
        {{ `${parseInt(orderListData.paymentPrice).toLocaleString()}원` }}
      </td>
      <td class="status">
        <span class="status-content">{{ orderListData.paymentStatus }}</span>
        <br />
        <span class="final-date">{{ orderListData.finalDate }}</span>
      </td>
    </tr>
    <tr class="tr-bottom">
      <td colspan="2" class="bottom-left">
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
              @event="modalOpen('order')"
            />
          </div>

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
              @event="modalOpen('receipt')"
            />
          </div>
        </div>
      </td>
      <td class="bottom-right">
        <basic-button
          :text="isCancelRefund === true ? '고객센터 문의' : '취소/환불 신청'"
          color="#212121"
          fontWeight="normal"
          backgroundColor="#fff"
          borderRadius="4"
          borderColor="#dfdfdf"
          fontSize="14"
          width="102"
          height="28"
          @event="
            isCancelRefund === true ? modalOpen('qna') : modalOpen('cancel')
          "
        />
      </td>
    </tr>
  </tbody>
</template>

<script>
  import basicButton from "../../components/common/basicButton.vue"

  export default {
    props: ["orderListData", "isCancelRefund"],
    components: {
      basicButton
    },
    methods: {
      modalOpen(type) {
        // index.vue(부모 컴포넌트)에 모달 열기 이벤트와 클릭한 데이터의 id값을 넘겨주는 부분
        this.$emit("open", type)
        this.$emit("id", this.orderListData.id)
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
  /** 테이블 각 td 클래스별 서식 */
  .order-list-body {
    width: 413px;
    vertical-align: middle;
    padding: 0 24px;
  }
  .order-list-img {
    width: 103px;
    height: 76px;
    border-radius: 4px;
    margin-right: 24px;
    float: left;
  }
  .order-list-body-content {
    text-align: left;
  }
  .price {
    width: 140px;
    border-left: 1px solid #ececec;
    border-right: 1px solid #ececec;
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
