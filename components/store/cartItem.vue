<template>
  <div class="content">
    <div class="Rectangle">
      <div>
        <h3>장바구니</h3>
        <p class="cart-count">총 {{ cartlists.length }}개</p>
        <div>
          <table class="cart-table">
            <tbody>
            <tr class="table-header">
            <th class="tb-checkbox"><input class="checkbox" type="checkbox" v-model="checkAll"></th>
            <th class="selectAll">전체선택</th>
            <!-- 전체선택 시 체크박스 전체선택 -->
            <th class="th-title">상품명</th>
            <th>수량</th>
            <th>할인금액</th>
            <th>할인적용금액</th>
            <th>배송비</th>
            </tr>
            <tr v-for="(cartlist, index) in cartlists" :key="index">
              <td class="tb-checkbox"><input class="checkbox" type="checkbox" v-model="checked"></td>
              <td>전체선택</td>
              <td>{{ cartlist.image }}, {{ cartlist.title }}</td>
              <td><button v-if="cartlist.amount>=0" v-on:click="cartlist.amount -= 1">-</button>{{ cartlist.amount }}<button v-on:click="cartlist.amount += 1">+</button></td>
              <td>{{ cartlist.sale }}</td>
              <td>{{ (cartlist.originPrice-cartlist.sale)*cartlist.amount }}</td>
              <td>{{ cartlist.shippingFee }}</td>
            </tr>
            </tbody>
          </table>
          <button v-on:click="removeItem" class="select-delete">선택삭제</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartlists: [
        {
          "image": "http://placeimg.com/146/108/animals",
          "title":
          "상품명이 노출되는 영역. 상품명이 노출되는 영역. 상품명이 노출되는...",
          "amount": 1,
          "originPrice": 40000,
          "sale": 4000,
          "shippingFee": 0
        },
        {
          "image": "http://placeimg.com/146/108/animals",
          "title":
          "상품명이 노출되는 영역. 상품명이 노출되는 영역. 상품명이 노출되는...",
          "amount": 1,
          "originPrice": 30000,
          "sale": 3000,
          "shippingFee": 2500
        }
      ]
    }
  },
  methods: {
    removeItem: (cartlist, index) => {
      this.cartlists.splice(index, 1)
    }
    // check 된 것 삭제
  }
  
}
</script>

<style scoped>
.content {
  width: 100%;
  margin: 0 auto;
}
.Rectangle {
  width: 1200px;
  height: 957px;
  margin: 32px 360px 120px;
  border: solid 1px #dfdfdf;
  background-color: #ffffff;
}
h3 {
  width: 89px;
  height: 36px;
  margin: 32px 0 16px 40px;
  font-family: SpoqaHanSans;
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #212121;
}
.cart-count {
  width: 38px;
  height: 20px;
  margin: 0 0 17px 40px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #212121;
}
.cart-table {
  width: 1120px;
  height: 321px;
  border-top: solid 1px #666666;
  margin: 0 40px 16px;
}
th {
  width: 140px;
}
tr {
  border-bottom: solid 1px #ececec;
}
.table-header {
  height: 42px;
  font-family: SpoqaHanSans;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #212121;
}
.tb-checkbox {
  width: 52px;
  padding: 11px 8px 11px 24px;
}
.checkbox {
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: #dfdfdf;
}
.checkbox:checked {
  background-color: #1673e6;
}
.table-header .selectAll {
  width: 52px;
  height: 20px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #666666;
}
.th-title {
  width: 446px;
}
.select-delete {
  width: 84px;
  height: 42px;
  margin-left: 40px;
  border-radius: 4px;
  border: solid 1px #dfdfdf;
  background-color: #ffffff;
}
</style>