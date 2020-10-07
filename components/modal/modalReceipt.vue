<template>
  <div>
    <div class="gray">
      <div class="block">
        <span>
          <strong>결제번호 / PAY NO.</strong>
        </span>
        <span>{{ paymentData.paymentIdx }}</span>
      </div>
      <div class="line"></div>
      <div class="block">
        <span>
          <strong>거래일자 / TRANS DATE</strong>
        </span>
        <span>{{ paymentData.orderDate }}</span>
      </div>
    </div>

    <div class="white">
      <div class="block-wide">
        <span>
          <strong>품명 / ITEM DESCRIPTION</strong>
        </span>
        <span>({{ paymentData.goodsIdx }}) {{ paymentData.goodsName }}</span>
      </div>
    </div>
    <div class="gray">
      <div class="block-total">
        <span>
          <strong>합계 / TOTAL</strong>
        </span>
      </div>
      <div class="block-price-won">₩</div>
      <!-- 방법 1에 따른 자릿수 숫자 반환 -->
      <!-- <div
        class="block-price"
        v-for="(priceNum, i) in priceLength"
        v-bind:key="i">
        {{ priceTotal(priceLength, i) }}
      </div>-->
      <!-- 방법 2에 따른 자릿수 숫자 반환 -->
      <div
        class="block-price"
        v-for="(price, i) in paymentData.slicePrice2"
        v-bind:key="i"
      >
        {{ price }}
      </div>
    </div>

    <div class="white">
      <div class="block">
        <span>
          <strong>회사명 / COMPANY NAME</strong>
        </span>
        <span>주식회사 가나다라마바사</span>
      </div>
      <div class="line"></div>
      <div class="block">
        <span>
          <strong>대표자 / MASTER</strong>
        </span>
        <span>김갹갹</span>
      </div>
    </div>

    <div class="gray">
      <div class="block">
        <span>
          <strong>사업자등록번호 / BUSINESS NO.</strong>
        </span>
        <span>123-45-67890</span>
      </div>
      <div class="line"></div>
      <div class="block">
        <span>
          <strong>회사 주소 / ADDRESS</strong>
        </span>
        <span>서울시 강남구 삼성동 플래닛타워 19F</span>
      </div>
    </div>

    <div class="white">
      <div class="block">
        <span>
          <strong>문의처 / CONTACT</strong>
        </span>
        <span>070-1234-5678</span>
      </div>
      <div class="line"></div>
      <div class="block">
        <span>
          <strong>서명 / SIGNATURE</strong>
        </span>
        <span></span>
      </div>
    </div>

    <span class="bottom-text">
      이 영수증은 법적 효력을 가지지 않으며, 세금계산서 등 증빙서류로 사용할 수
      없습니다.
    </span>
    <div class="btn-wrap">
      <basic-button
        text="화면프린트"
        width="240px"
        color="#212121"
        borderColor="#dfdfdf"
        backgroundColor="#fff"
      >
      </basic-button>
    </div>
  </div>
</template>

<script>
  import basicButton from "../../components/common/basicButton.vue"

  export default {
    props: ["paymentData"],
    data() {
      // 합계 가격 자릿수
      this.paymentData.slicePrice = String(this.paymentData.paymentPrice).split(
        ""
      )
      // 합계 가격 자릿수 잘린것
      this.paymentData.slicePrice2 = this.slicePriceTotal(
        this.paymentData.paymentPrice
      )
      return {
        priceLength: 10
        // orderInfo
      }
    },
    components: {
      basicButton
    },
    methods: {
      /** @description 표시할 합계 값의 길이를 받아 받은 값을 자릿수에 따라 반환 */
      /** 방법 1 */
      // priceTotal(length, i) {
      //   const calcuIndex = orderInfo.slicePrice.length - length + i
      //   return calcuIndex >= 0 ? orderInfo.slicePrice[calcuIndex] : ""
      // },
      /** 방법 2 */
      slicePriceTotal(price) {
        const maxLength = 10
        const slice = String(price).split("")
        const result = []
        for (let i = 0; i < maxLength; i++) {
          const countIdx = slice.length - maxLength + i
          result.push(countIdx >= 0 ? slice[countIdx] : "")
        }
        return result
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
