<template>
  <div>
    <div class="Rectangle">
      <div>
        <h3>장바구니</h3>
        <p class="cart-count">총 2개</p>
        <!-- 'n'개 표현  -->
        <div>
          <table></table>
          <button></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartList: [
        {
          checkbox: false,
          image: "http://placeimg.com/146/108/animals",
          title:
          "상품명이 노출되는 영역. 상품명이 노출되는 영역. 상품명이 노출되는...",
          price: 40000,
          sale: 4000,
          shippingFee: 0
        },
        {
          checkbox: true,
          image: "http://placeimg.com/146/108/animals",
          title:
          "상품명이 노출되는 영역. 상품명이 노출되는 영역. 상품명이 노출되는...",
          price: 30000,
          sale: 3000,
          shippingFee: 2500
        }
      ],
      headers: [
        { text: 'checkbox', value: 'checkbox' },
        { text: 'image', value: 'image' },
        { text: 'title', value: 'title' },
        { text: 'price', value: 'price' },
        { text: 'sale', value: 'sale' },
        { text: 'shippingFee', value: 'shippingFee' }
      ]
    }
  }
}
</script>

<style scoped>
.Rectangle {
  width: 1200px;
  height: 957px;
  padding: 32px 360px 120px;
  border: solid 1px #dfdfdf;
  background-color: #ffffff;
}
h3 {
  width: 89px;
  height: 36px;
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
  font-family: SpoqaHanSans;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #212121;
}
</style>