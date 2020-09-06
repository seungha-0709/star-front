<template>
  <div>
    <div class="top-banner"></div>
    <div class="shop-best-item-container">
      <div class="shop-best-item-top">
        <span class="shop-best-item-sub-title">{{ `${total}개의 강의` }}</span>
        <div class="select-box">
          <selectBox @listAlign="onAlignChange" />
        </div>
      </div>
      <div class="shop-best-item-wrap">
        <shopBestItem
          :propsData="item"
          :indexData="i"
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
  import selectBox from "../../components/shopBest/selectBox.vue"

  export default {
    data() {
      return {
        shopBestList,
        total: 9
      }
    },
    computed: {
      /* 받아 온 데이터 중 처음부터 9개까지만 화면에 표시되게 함 */
      computedBestList() {
        return this.shopBestList.slice(0, this.total)
      }
    },
    methods: {
      onAlignChange(value) {
        if (value === "latest_at") {
          this.shopBestList.sort((a, b) => a.index - b.index)
        }
        if (value === "low_price") {
          this.shopBestList.sort(
            (a, b) =>
              parseInt(a.price * a.discountRate, 10) -
              parseInt(b.price * b.discountRate, 10)
          )
        }
        if (value === "high_price") {
          this.shopBestList.sort(
            (a, b) =>
              parseInt(b.price * b.discountRate, 10) -
              parseInt(a.price * a.discountRate, 10)
          )
        }
        if (value === "high_like") {
          this.shopBestList.sort((a, b) => b.likes - a.likes)
        }
      }
    },
    components: {
      shopBestItem,
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
  .shop-best-item-wrap {
    display: flex;
    width: 1200px;
    margin: 0px auto 20px auto;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>
