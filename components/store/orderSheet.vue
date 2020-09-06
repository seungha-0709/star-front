<template>
  <div class="content">
    <div class="rectangle">
      <div>
        <h3 class="cart-name">주문서</h3>
        <p class="cart-count">
          {{ `주문 정보 확인 ${orderData.productCount.toLocaleString()}건` }}
        </p>
        <div>
          <table class="cart-table">
            <thead>
              <tr class="table-header">
                <th class="th-title">상품명</th>
                <th class="th-size">수량</th>
                <th class="th-size">할인금액</th>
                <th class="th-size">할인적용금액</th>
                <th class="th-size">배송비</th>
              </tr>
            </thead>
            <cart-items
              :cart-lists="computedCartLists"
              :select="null"
              :select-all="selectAll"
            />
          </table>
          <order-breakdown :order-data="orderData" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import cartItems from "./cartItems.vue"
  // 장바구니에 담기는 상품 테이블
  import orderBreakdown from "./orderBreakdown"
  // 주문정보 확인 최종결제금액 나오는 계산서

  export default {
    props: ["cart-lists", "result-data", "order-data"],
    data() {
      return {}
    },
    components: {
      "cart-items": cartItems,
      "order-breakdown": orderBreakdown
    },
    computed: {
      computedCartLists() {
        return this.resultData.map((data) => this.cartLists[data])
      }
    }
  }
</script>
<style scoped>
  .content {
    width: 100%;
    margin: 0 auto;
    font-family: SpoqaHanSans;
    color: #212121;
    vertical-align: middle;
    text-align: center;
    background-color: #ffffff;
  }
  .rectangle {
    margin: 32px auto 0;
    font-size: 14px;
  }
  .cart-name {
    text-align: left;
    margin: 32px 0 16px 40px;
    font-size: 24px;
    font-weight: bold;
  }
  .cart-count {
    text-align: left;
    margin: 0 0 17px 40px;
    font-size: 20px;
    font-weight: bold;
  }
  .cart-table {
    width: 1120px;
    border-top: solid 1px #666666;
    margin: 0 40px 50px;
  }
  .cart-table th {
    text-align: center;
  }
  .table-header {
    height: 42px;
    font-size: 15px;
    font-weight: normal;
    font-size: 14px;
    text-align: center;
  }
  .cart-table thead tr {
    width: 100%;
    border-bottom: solid 1px #ececec;
    vertical-align: middle;
  }
  .cart-table tbody {
    width: 100%;
  }
  .cart-table td {
    height: 140px;
    border-bottom: solid 1px #ececec;
    vertical-align: middle;
  }
  .select-all {
    font-size: 14px;
    color: #666666;
    margin-left: 8px;
    text-align: center;
  }
  .checkbox-item {
    display: flex;
  }
  .tb-checkbox {
    width: 114px;
    padding: 11px 8px 11px 0;
  }
  .tb-checkbox label input[type="checkbox"] {
    display: none;
  }
  .th-size {
    width: 140px;
    padding: 10px 0 10px;
  }
  .empty-cart {
    width: 217px;
    height: 24px;
    text-align: center;
    vertical-align: middle;
    color: #666666;
    font-size: 16px;
    margin: 98px auto;
  }
  .shopping-btn {
    width: 240px;
    height: 52px;
    border-radius: 26px;
    border: solid 1px #1673e6;
    background-color: #ffffff;
    font-weight: bold;
    color: #1673e6;
    font-size: 16px;
  }
</style>
