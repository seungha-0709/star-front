<template>
  <div class="content">
    <div class="rectangle">
      <div>
        <h3 class="cart-name">주문서</h3>
        <p class="cart-count">총 0개</p>
        <!-- {{ `총 ${cartLists.length.toLocaleString()}개` }} -->
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
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import checkButton from "../common/checkButton"
export default {
  data() {
    return {}
  },
  components: {
    "check-button": checkButton
  }
}
</script>
<style scoped>
.content {
  width: 100%;
  margin: 0 auto;
  font-family: SpoqaHanSans;
  font-weight: normal;
  color: #212121;
  vertical-align: middle;
  text-align: center;
  font-size: 14px;
  background-color: #ffffff;
}
.rectangle {
  height: 491px;
  margin: 32px auto 0;
  font-size: 14px;
}
.cart-name {
  width: 89px;
  height: 36px;
  margin: 32px 0 16px 40px;
  font-size: 24px;
  font-weight: bold;
}
.cart-count {
  width: 38px;
  height: 20px;
  margin: 0 0 17px 40px;
}
.cart-table {
  width: 1120px;
  border-top: solid 1px #666666;
  margin: 0 40px 16px;
}
.cart-table th {
  text-align: center;
}
.table-header {
  height: 42px;
  font-size: 15px;
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