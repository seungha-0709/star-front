<template>
  <div class="content">
    <div class="rectangle">
      <div>
        <h3 class="cart-name">장바구니</h3>
        <p class="cart-count">{{ `총 ${cartLists.length.toLocaleString()}개` }}</p>
        <div>
          <table class="cart-table">
            <thead>
              <tr class="table-header">
                <th class="tb-checkbox">
                  <div class="checkbox-item">
                    <label>
                      <input type="checkbox" v-model="selectAll" v-on:click="selectAllItems" />
                      <check-button :value="selectAll" />
                    </label>
                    <p class="select-all">전체선택</p>
                  </div>
                </th>
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
  font-size: 14px;
  color: #212121;
}
.rectangle {
  width: 1200px;
  margin: 32px auto 0;
  border-top: solid 1px #dfdfdf;
  border-right: solid 1px #dfdfdf;
  border-left: solid 1px #dfdfdf;
  background-color: #ffffff;
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
  font-size: 16px;
  vertical-align: middle;
}
.table-line {
  height: 140px;
  border-right: solid 1px #ecece0;
  padding: 16px 16px 16px 0;
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
</style>