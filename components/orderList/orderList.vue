<template>
  <div>
    <table>
      <tbody>
        <tr class="main">
          <td class="img">
            <img :src="orderListData[indexData].goodsimg" alt="" />
          </td>
          <td class="body">
            <div class="body-content">
              <span class="date">
                {{ orderListData[indexData].paymentDate }}
              </span>
              <span class="payment-idx">
                ({{ orderListData[indexData].paymentIdx }})
              </span>
              <p class="goods-name">{{ orderListData[indexData].goodsName }}</p>
            </div>
          </td>
          <td class="price">
            {{ `${commaAdd(orderListData[indexData].paymentPrice)}원` }}
          </td>
          <td class="status">
            <span class="status-content">
              {{ orderListData[indexData].paymentStatus }}
            </span>
            <br />
            <span class="final-date">
              {{ orderListData[indexData].finalDate }}
            </span>
          </td>
        </tr>
        <tr class="bottom">
          <td colspan="3" class="bottom-left"></td>
          <td class="bottom-right"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    props: ["orderListData", "indexData"],
    components: {},
    methods: {
      commaAdd(num) {
        /* 숫자 1000단위마다 , 표시하게 하는 함수 */
        const regexp = /\B(?=(\d{3})+(?!\d))/g
        return num.toString().replace(regexp, ",")
      }
    }
  }
</script>

<style scoped>
  table {
    border-collapse: collapse;
  }
  table:hover {
    background-color: rgba(255, 255, 255, 0);
  }
  tr {
    border-top: 1px solid #ececec;
    border-bottom: 1px solid #ececec;
  }
  .main {
    height: 108px;
  }
  img {
    width: 103px;
    height: 76px;
    border-radius: 4px;
  }
  /** 테이블 각 td 클래스별 서식 */
  .img {
    width: 151px;
    padding: 16px 24px;
    vertical-align: center;
    display: table-cell;
    vertical-align: middle;
  }
  .body {
    width: 413px;
    padding: 16px 0;
    overflow: hidden;
    /* display: table-cell;
    vertical-align: middle; */
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .price {
    width: 140px;
    border: 1px solid #ececec;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    font-size: 14px;
    color: #212121;
  }
  .status {
    width: 140px;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
  .bottom {
    height: 56px;
    border: 1px solid #ececec;
  }
  /** 각 td 안 내용 서식 */
  .date {
    font-size: 14px;
    color: #212121;
  }
  .payment-idx {
    font-size: 14px;
    color: #666;
  }
  .body-content {
    margin: 0;
    padding: 0;
  }
  .goods-name {
    margin-top: 8px;
    width: 268px;
    height: 48px;
    font-size: 16px;
    color: #212121;
    text-overflow: ellipsis;
    white-space: normal;
    overflow: hidden;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .status-content {
    font-size: 14px;
    font-weight: bold;
    color: #212121;
  }
  .final-date {
    color: #8f8f8f;
    font-size: 14px;
  }
</style>
