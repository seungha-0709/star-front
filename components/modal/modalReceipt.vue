<template>
  <div>
    <div class="gray">
      <div class="block">
        <span><strong>결제번호 / PAY NO.</strong></span>
        <span>{{ orderInfo.paymentIdx }}</span>
      </div>
      <div class="line"></div>
      <div class="block">
        <span><strong>거래일자 / TRANS DATE</strong></span>
        <span>{{ orderInfo.orderDate }}</span>
      </div>
    </div>

    <div class="white">
      <div class="block-wide">
        <span><strong>품명 / ITEM DESCRIPTION</strong></span>
        <span>({{ orderInfo.goodsIdx }}) {{ orderInfo.name }}</span>
      </div>
    </div>
    <div class="gray">
      <div class="block-total">
        <span><strong>합계 / TOTAL</strong></span>
      </div>
      <div class="block-price-won">₩</div>
      <div class="block-price">{{ priceTotal(orderInfo.price, 0) }}</div>
      <div class="block-price">{{ priceTotal(orderInfo.price, 1) }}</div>
      <div class="block-price">{{ priceTotal(orderInfo.price, 2) }}</div>
      <div class="block-price">{{ priceTotal(orderInfo.price, 3) }}</div>
      <div class="block-price">{{ priceTotal(orderInfo.price, 4) }}</div>
      <div class="block-price">{{ priceTotal(orderInfo.price, 5) }}</div>
      <div class="block-price">{{ priceTotal(orderInfo.price, 6) }}</div>
      <div class="block-price">{{ priceTotal(orderInfo.price, 7) }}</div>
      <div class="block-price">{{ priceTotal(orderInfo.price, 8) }}</div>
      <div class="block-price">{{ priceTotal(orderInfo.price, 9) }}</div>
    </div>

    <div class="white">
      <div class="block">
        <span><strong>회사명 / COMPANY NAME</strong></span>
        <span>주식회사 티밸류와이즈</span>
      </div>
      <div class="line"></div>
      <div class="block">
        <span><strong>대표자 / MASTER</strong></span>
        <span>김갹갹</span>
      </div>
    </div>

    <div class="gray">
      <div class="block">
        <span><strong>사업자등록번호 / BUSINESS NO.</strong></span>
        <span>123-45-67890</span>
      </div>
      <div class="line"></div>
      <div class="block">
        <span><strong>회사 주소 / ADDRESS</strong></span>
        <span>서울시 강남구 삼성동 플래닛타워 19F</span>
      </div>
    </div>

    <div class="white">
      <div class="block">
        <span><strong>문의처 / CONTACT</strong></span>
        <span>070-1234-5678</span>
      </div>
      <div class="line"></div>
      <div class="block">
        <span><strong>서명 / SIGNATURE</strong></span>
        <span></span>
      </div>
    </div>

    <span class="bottom-text">
      이 영수증은 법적 효력을 가지지 않으며, 세금계산서 등 증빙서류로 사용할 수
      없습니다.
    </span>
    <div class="btn-wrap">
      <btn
        width="240"
        color="#212121"
        borderColor="#dfdfdf"
        backgroundColor="#fff"
        >화면프린트</btn
      >
    </div>
  </div>
</template>

<script>
  import btn from "../../components/common/btn.vue"
  import { orderInfo } from "./modalBuyInfo.js"

  export default {
    data() {
      return {
        orderInfo
      }
    },
    components: {
      btn
    },
    methods: {
      priceTotal(price, num) {
        const priceString = String(price)
        const arr1 = priceString.split("")
        console.log(arr1)
        if (priceString.length === 1) {
          arr1.unshift("", "", "", "", "", "", "", "", "")
        }
        if (priceString.length === 2) {
          arr1.unshift("", "", "", "", "", "", "", "")
        }
        if (priceString.length === 3) {
          arr1.unshift("", "", "", "", "", "", "")
        }
        if (priceString.length === 4) {
          arr1.unshift("", "", "", "", "", "")
        }
        if (priceString.length === 5) {
          arr1.unshift("", "", "", "", "")
        }
        if (priceString.length === 6) {
          arr1.unshift("", "", "", "")
        }
        if (priceString.length === 7) {
          arr1.unshift("", "", "")
        }
        if (priceString.length === 8) {
          arr1.unshift("", "")
        }
        if (priceString.length === 9) {
          arr1.unshift("")
        }
        return arr1[num]
      }
    }
  }
</script>

<style scoped>
  .gray {
    background-color: #f8f8f8;
    width: 100%;
    height: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .white {
    background-color: #fff;
    width: 100%;
    height: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .block {
    box-sizing: border-box;
    width: 288px;
    padding-left: 12px;
  }
  .block-wide {
    width: 100%;
    padding-left: 12px;
    padding-right: 12px;
  }
  .block-total {
    width: 224px;
    display: flex;
    padding-left: 12px;
  }
  .block-price-won {
    width: 32px;
    height: 40px;
    margin: 15px 0 15px 0;
    border-left: 1px solid #ececec;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    color: #212121;
  }
  .block-price {
    width: 32px;
    height: 40px;
    margin: 15px 0 15px 0;
    border-left: 1px solid #ececec;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    color: #212121;
  }
  .line {
    border-left: 1px solid #ececec;
    height: 42px;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  span {
    display: block;
    font-size: 14px;
    color: #212121;
  }
  span > strong {
    font-weight: bold;
  }
  .bottom-text {
    text-align: center;
  }
  .btn-wrap {
    margin-top: 40px;
    display: flex;
    justify-content: center;
  }
</style>
