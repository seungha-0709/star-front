<template>
  <div>
    <h2>주문상품정보</h2>
    <div class="divider"></div>
    <table>
      <tbody>
        <tr>
          <th>결제번호(주문번호)</th>
          <td>{{ `${orderInfo.paymentIdx}(${orderInfo.orderIdx})` }}</td>
        </tr>
        <tr>
          <th>주문일자</th>
          <td>{{ orderInfo.orderDate }}</td>
        </tr>
        <tr>
          <th>상품번호</th>
          <td>{{ orderInfo.goodsIdx }}</td>
        </tr>
        <tr>
          <th>상품명</th>
          <td>{{ orderInfo.name }}</td>
        </tr>
        <tr>
          <th>상품금액(개수)</th>
          <td>{{ commaAdd(orderInfo.price) }} ({{`${orderInfo.ordernum}개`}})</td>
        </tr>
      </tbody>
    </table>

    <h2>배송정보</h2>
    <div class="divider"></div>
    <table>
      <tbody>
        <tr>
          <th>배송정보</th>
          <td>{{ shippingInfo.online === true ? "온라인 배송" : shippingInfo.price }} ({{ shippingInfo.phone }})</td>
        </tr>
      </tbody>
    </table>

    <h2>결제정보</h2>
    <div class="divider"></div>
    <table>
      <tbody>
        <tr>
          <th>최종결제금액</th>
          <td>{{ commaAdd(orderInfo.price) }}</td>
        </tr>
        <tr>
          <th>신용카드</th>
          <td>
            {{ payInfo.creditCard === true ? commaAdd(orderInfo.price) : "0원"}}
            ({{ payInfo.creditCardName }}/{{ payInfo.paymentPlan === true ? payInfo.paymentPlanMonth : "일시불" }})
          </td>
        </tr>
        <tr>
          <th>현금</th>
          <td>{{ payInfo.cash === true ? commaAdd(orderInfo.price) : "0원" }}</td>
        </tr>
        <tr>
          <th>상품금액</th>
          <td>{{ commaAdd(orderInfo.price) }}</td>
        </tr>
        <tr>
          <th>배송비</th>
          <td>{{ shippingInfo.online === true ? "0원" : shippingInfo.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { orderInfo, shippingInfo, payInfo } from "./modalBuyInfo.js"

export default {
  data() {
    return {
      orderInfo,
      shippingInfo,
      payInfo
    }
  },
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
h2:first-child {
  margin-top: 10px;
}
h2 {
  font-size: 20px;
  color: #212121;
  font-weight: bold;
  margin-top: 46px;
  margin-bottom: 10px;
}
.divider {
  border-bottom: 1px solid #000;
}
table {
  border-collapse: collapse;
  display: table-cell;
  width: 576px;
}
tr {
  border-bottom: 1px solid #ececec;
  font-size: 14px;
}
th {
  color: #212121;
  font-weight: bold;
  width: 152px;
  height: 42px;
  vertical-align: middle;
  text-align: left;
}
td {
  vertical-align: middle;
  width: 468px;
  color: #666666;
}
</style>