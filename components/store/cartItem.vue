<template>
  <div class="content">
    <div class="Rectangle">
      <div>
        <h3>장바구니</h3>
        <p class="cart-count">총 {{ cartlists.length }}개</p>
        <div>
          <table class="cart-table">
           <thead>
            <tr class="table-header">
            <th class="tb-checkbox"><input v-bind:click="selectAllItems()" class="checkbox" type="checkbox" v-model="selectAll"></th>
            <th class="selectAll">전체선택</th>
            <!-- 전체선택 시 체크박스 전체선택 -->
            <th class="th-title">상품명</th>
            <th>수량</th>
            <th>할인금액</th>
            <th>할인적용금액</th>
            <th>배송비</th>
            </tr>
           </thead>
             <tbody>
            <tr v-for="(cartlist, index) in cartlists" :key="index">
              <td class="tb-checkbox"><input v-bind:click="selectItem()" class="checkbox" type="checkbox" v-model="select"></td>
              <td></td>
              <td class="table-line"><span class="item-img">{{ cartlist.image }}</span> {{ cartlist.title }} <div class="originPrice">정상가 {{ cartlist.originPrice }}</div></td>
              <td class="table-line"><button class="amt-btn" v-if="cartlist.amount>=0" v-on:click="cartlist.amount -= 1">-</button>{{ cartlist.amount }}<button class="amt-btn" v-on:click="cartlist.amount += 1">+</button></td>
              <td class="sale price table-line">-{{ cartlist.sale }}</td>
              <td class="cart price table-line">{{ (cartlist.originPrice-cartlist.sale)*cartlist.amount }}</td>
              <td class="shipping price">{{ cartlist.shippingFee }}</td>
            </tr>
            </tbody>
          </table>
          <button v-on:click="removeItem(cartlist, index)" class="select-delete">선택삭제</button>
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
      ],
      selectAll: false,
      select: []
    }
  },
  methods: {
    // removeItem: (cartlist, index) => {
    //   this.cartlists.splice(index, 1)
    // },
    selectAllItems() {
      if (this.selectAll === true) {
        this.select = true
      }else(this.select) = false
    },
    selectItem() {
      this.selectAll = false
    }    
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
  text-align: center;
}
tr {
  border-bottom: solid 1px #ececec;
}
td {
  padding: 0 16px;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #212121;
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
.table-line {
  border-right: solid 1px #ecece0;
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
.item-img {
  width: 146px;
  height: 108px;
  margin: 16px 16px 16px 0;
  border-radius: 4px;
}
.originPrice {
  font-size: 14px;
  color: #666666;
  margin: 8px 8px 0 0;
}
.price {
  min-width: 22px;
  height: 20px;
  text-align: right;
  font-size: 14px;
}
.sale {
  font-weight: bold;
  color: #e13a3a;
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
.amt-btn {
  width: 30px;
  height: 30px;
  margin: 55px 10px 55px;
  border-radius: 8px;
  border: solid 1px #dfdfdf;
  background-color: #ffffff;
  color: #c1c1c1;
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