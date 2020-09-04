<template>
  <div class="content">
    <table class="breakdown-table">
      <tbody>
        <tr class="title-amount outer-border">
          <td class="content-amount quantity">
            <div class="inner-border">
              <div>
                상품금액
                <div class="content-title">
                  {{ `${orderData.productPrice.toLocaleString()}원` }}
                </div>
              </div>
            </div>
          </td>
          <td class="content-amount origin-price">
            <div class="inner-border">
              <div>
                <div class="icon-position">
                  <minus-icon
                    size="20"
                    class="icon-add minus-icon"
                  ></minus-icon>
                </div>
                할인금액
                <div class="content-title">
                  {{ `${orderData.productSale.toLocaleString()}원` }}
                </div>
              </div>
            </div>
          </td>
          <td class="content-amount discount">
            <div class="inner-border">
              <div>
                <div class="icon-position">
                  <plus-icon size="20" class="icon-add plus-icon"></plus-icon>
                </div>
                배송비
                <div class="content-title discount-price">
                  {{ `${orderData.productShipping.toLocaleString()}원` }}
                </div>
              </div>
            </div>
          </td>
          <td class="content-amount shipping">
            <div>
              <div class="icon-position">
                <plus-icon size="20" class="icon-add plus-icon"></plus-icon>
                <!-- equal icon 이 없음...! -->
              </div>
              최종 결제금액
              <div class="content-title">
                {{
                  `${(
                    orderData.productPrice +
                    -orderData.productSale +
                    orderData.productShipping
                  ).toLocaleString()}원`
                }}
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import { PlusIcon, MinusIcon } from "vue-feather-icons"

  export default {
    components: {
      PlusIcon,
      MinusIcon
    },
    props: ["order-data"],
    data() {
      return {}
    },
    computed: {
      productCount() {
        return {}
      }
    }
  }
</script>
<style scoped>
  .content {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    vertical-align: middle;
    font-family: SpoqaHanSans;
    font-weight: bold;
    font-size: 16px;
    color: #666666;
  }
  .breakdown-table {
    margin: 0 40px 48px;
    width: 1120px;
    height: 130px;
    border: solid 1px #dfdfdf;
  }
  .title-amount {
    border-top: solid 2px #1673e6;
  }
  .content-amount {
    position: relative;
    width: 280px;
    /* vertical-align: middle; */
  }
  .inner-border {
    height: 80px;
    border-right: solid 1px #dfdfdf;
    margin-top: 25px;
    padding-top: 8px;
  }
  .icon-position {
    position: absolute;
    top: 50%;
    left: -15px;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border: 1px solid #dfdfdf;
    border-radius: 50%;
    background-color: #fff;
  }
  .icon-add {
    color: #666;
  }
  .content-title {
    font-size: 24px;
    color: #121210;
  }
  .discount-price {
    color: #e13a3a;
  }
</style>
