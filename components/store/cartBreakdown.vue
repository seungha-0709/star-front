<template>
  <div class="content">
    <div>
      <table class="breakdown-table">
        <tbody>
          <tr>
            <td>수량</td>
            <td>상품금액</td>
            <td>할인금액</td>
            <td>배송비</td>
          </tr>
          <tr>
            <td>전체 주문금액</td>
          </tr>
        </tbody>
      </table>
      <button class="order-btn">주문하기</button>
    </div>
  </div>
</template>
<script>
  export default {
    props: ["result-data"],
    data() {
      return {
        paymentData: []
      }
    },
    watch: {
      resultData() {
        this.paymentData = this.resultData
      }
    }
  }
</script>
<style scoped>
  .breakdown-table {
    width: 1120px;
    height: 250px;
    margin-top: 48px;
  }
  .order-btn {
    width: 240px;
    height: 52px;
    border-radius: 26px;
    background-color: #1673e6;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
  }
</style>
