<template>
  <div class="content">
    <div class="Rectangle">
      <div>
        <h3>장바구니</h3>
        <p class="cart-count">총 2개</p>
        <!-- 'n'개 표현  -->
        <div>
          <table class="cart-table">
            <tr>
            <th><input type="checkbox" v-model="checkAll">전체선택</th>
            <th>상품명</th>
            <th>수량</th>
            <th>할인금액</th>
            <th>할인적용금액</th>
            <th>배송비</th>
            </tr>
            <tr v-for="(cartlist, index) in cartlists" :key="index">
              <td><input type="checkbox" id="checkbox" v-model="checked"></td>
              <td>{{ cartlist.image }}, {{ cartlist.title }}</td>
              <td><button v-if="cartlist.amount>=0" v-on:click="cartlist.amount -= 1">-</button>{{ cartlist.amount }}<button v-on:click="cartlist.amount += 1">+</button></td>
              <td>{{ cartlist.sale }}</td>
              <td>{{ cartlist.originPrice }}</td>
              <!-- originPrice-sale  -->
              <td>{{ cartlist.shippingFee }}</td>
            </tr>
          </table>
          <button class="select-delete">선택삭제</button>
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
          "checkbox": false,
          "image": "http://placeimg.com/146/108/animals",
          "title":
          "상품명이 노출되는 영역. 상품명이 노출되는 영역. 상품명이 노출되는...",
          "amount": 1,
          "originPrice": 40000,
          "sale": 4000,
          "shippingFee": 0
        },
        {
          "checkbox": true,
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
.select-delete {
  width: 84px;
  height: 42px;
  margin-left: 40px;
  border-radius: 4px;
  border: solid 1px #dfdfdf;
  background-color: #ffffff;
}
</style>