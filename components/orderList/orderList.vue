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
            <span class="payment-idx">({{ orderListData[idxData].paymentIdx }})</span>
            <p class="goods-name">{{ orderListData[idxData].goodsName }}</p>
          </td>
          <td class="price">{{ `${commaAdd(orderListData[idxData].paymentPrice)}원` }}</td>
          <td class="status">
            <span class="status-content">{{ orderListData[idxData].paymentStatus }}</span>
            <br />
            <span class="final-date">{{ orderListData[idxData].finalDate }}</span>
          </td>
        </tr>
        <tr class="tr-bottom">
          <td colspan="3" class="bottom-left"></td>
          <td class="bottom-right"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["orderListData", "idxData"],
  components: {},
  methods: {
    commaAdd(num) {
      /* 숫자 1000단위마다 , 표시하게 하는 함수 */
      const regexp = /\B(?=(\d{3})+(?!\d))/g
      return num.toString().replace(regexp, ",")
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
</style>
