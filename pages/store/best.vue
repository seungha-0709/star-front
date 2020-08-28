<template>
  <div>
    <div class="top-banner"></div>
    <div class="shop-best-item-container">
      <div class="shop-best-item-top">
        <span class="shop-best-item-sub-title">{{ `${limit}개의 강의` }}</span>
        <div class="select-box">
          <selectBox v-bind:bestList="shopBestList" />
        </div>
      </div>
      <div class="shop-best-item-wrap">
        <shopBestItem
          v-bind:propsData="item"
          v-for="(item, i) in computedBestList"
          :key="i"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import { shopBestList } from "../../components/shopBest/shopBestList.js"
  import shopBestItem from "../../components/shopBest/shopBestItem.vue"
  import { ChevronDownIcon } from "vue-feather-icons"
  import selectBox from "../../components/shopBest/selectBox.vue"

  export default {
    data() {
      return {
        shopBestList,
        selectItemList: [
          /* 셀렉트 박스에 들어가는 옵션항목 */
          { title: "최신순", sort: "latest_at" },
          { title: "가격 낮은 순", sort: "low_price" },
          { title: "가격 높은 순", sort: "high_price" },
          { title: "좋아요 많은 순", sort: "high_like" }
        ],
        limit: 9
      }
    },
    computed: {
      /* 받아 온 데이터 중 처음부터 9개까지만 화면에 표시되게 함 */
      computedBestList() {
        return this.shopBestList.slice(0, this.limit)
      }
    },
    components: {
      shopBestItem,
      ChevronDownIcon,
      selectBox
    }
  }
</script>

<style scoped>
  .top-banner {
    width: 100%;
    background-color: #000;
    height: 300px;
  }
  .shop-best-item-container {
    width: 1200px;
    margin: 48px auto 48px auto;
  }
  .shop-best-item-top {
    width: 1200px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .shop-best-item-sub-title {
    align-self: center;
    font-size: 18px;
    color: #212121;
  }
  .select-box {
    padding: 0;
  }
  /* 셀렉트 박스 시작----------------------------------------- */
  .select-box {
    /* 전체를 감싸는 컨테이너 */
    background: #fff;
    display: flex;
    width: 189px;
    position: relative;
    flex-direction: column;
  }
  .select-box .options-container {
    /* 클릭하면 나타나는 드롭다운 박스 */
    position: absolute;
    top: 52px;
    right: 0;
    z-index: 100;
    border: 1px solid #dfdfdf;
    background: #fff;
    color: #212121;
    max-height: 0;
    width: 100%;
    opacity: 0;
    transition: all 0.4s;
    border-radius: 4px;
    overflow: hidden;
  }
  .selected {
    /* 선택한 옵션이 나타나는 박스 */
    width: 100%;
    border-radius: 4px;
    color: #212121;
    position: relative;
    border: 1px solid #dfdfdf;
    margin: 0;
    padding: 0;
  }
  .drop-down-icon {
    /* 화살표 아이콘 */
    float: right;
    transition: 0.5s;
    color: #666;
  }
  .drop-down-icon.active {
    transform: rotate(180deg);
  }
  .select-box .options-container.active {
    max-height: 240px;
    opacity: 1;
    overflow-y: scroll;
  }
  .select-box .option,
  .selected {
    /* option-container와 selected 박스 요소 공통 패딩값 */
    padding: 14px 16px;
    cursor: pointer;
  }
  .select-box .option:hover {
    background: #dfdfdf;
  }
  .select-box label {
    cursor: pointer;
  }
  .select-box .option .radio {
    display: none;
  }
  /* 셀렉트 박스 끝-----------------------------------------*/

  .shop-best-item-wrap {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    margin: 0px auto 20px auto;
    flex-wrap: wrap;
  }
</style>
