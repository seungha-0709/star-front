<template>
  <div>
    <h2>주문상품정보</h2>
    <div class="divider"></div>
    <table>
      <tbody>
        <tr>
          <th>결제번호(주문번호)</th>
          <td>{{ `${paymentData.paymentIdx}(${paymentData.orderIdx})` }}</td>
        </tr>
        <tr>
          <th>주문일자</th>
          <td>{{ paymentData.orderDate }}</td>
        </tr>
        <tr>
          <th>상품번호</th>
          <td>{{ paymentData.goodsIdx }}</td>
        </tr>
        <tr>
          <th>상품명</th>
          <td>{{ paymentData.goodsName }}</td>
        </tr>
        <tr>
          <th>상품금액(개수)</th>
          <td>
            {{ paymentData.paymentPrice.toLocaleString() }} ({{
              `${paymentData.ordernum}개`
            }})
          </td>
        </tr>
      </tbody>
    </table>

    <h2>배송정보</h2>
    <div class="divider"></div>
    <table>
      <tbody>
        <tr>
          <th>배송정보</th>
          <td>
            {{
              paymentData.shippingOnline === true
                ? "온라인 배송"
                : paymentData.shippingFee
            }}
            ({{ paymentData.phone }})
          </td>
        </tr>
      </tbody>
    </table>

    <h2>결제정보</h2>
    <div class="divider"></div>
    <table>
      <tbody>
        <tr>
          <th>최종결제금액</th>
          <td>{{ `${paymentData.paymentPrice.toLocaleString()}원` }}</td>
        </tr>
        <tr>
          <th>신용카드</th>
          <td>
            {{
              paymentData.creditCard === true
                ? `${paymentData.paymentPrice.toLocaleString()}원`
                : "0원"
            }}
            ({{ paymentData.creditCardName }}/
            {{
              paymentData.paymentPlan === true
                ? paymentData.paymentPlanMonth
                : "일시불"
            }})
          </td>
        </tr>
        <tr>
          <th>현금</th>
          <td>
            {{
              paymentData.cash === true
                ? paymentData.paymentPrice.toLocaleString()
                : "0원"
            }}
          </td>
        </tr>
        <tr>
          <th>상품금액</th>
          <td>{{ `${paymentData.paymentPrice.toLocaleString()}원` }}</td>
        </tr>
        <tr>
          <th>배송비</th>
          <td>
            {{
              paymentData.shippingOnline === true
                ? "0원"
                : paymentData.shippingFee + "원"
            }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    props: ["paymentData"]
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
    padding: 11px 0;
  }
  td {
    vertical-align: middle;
    width: 468px;
    color: #666666;
    padding: 11px 0;
  }
</style>
