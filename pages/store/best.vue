<template>
  <div>
    <div class="top-banner"></div>
    <div class="shop-best-item-container">
      <div class="shop-best-item-top">
        <span class="shop-best-item-sub-title">{{ `${limit}개의 강의` }}</span>
        <div class="select-box">
          <selectBox />
        </div>
      </div>
      <div class="shop-best-item-wrap">
        <shopBestItem v-bind:propsData="item" v-for="(item, i) in computedBestList" :key="i" />
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
      limit: 9
    }
  },
  computed: {
    computedBestList() {
      return this.shopBestList.slice(0, this.limit)
    }
  },
  components: {
    shopBestItem,
    selectBox
  }
  // methods: {
  //   lowestPriceList() {
  //     this.computedBestList.sort((a, b) => {
  //       return a.price < b.price ? -1 : 1
  //     })
  //     console.log(this.computedBestList)
  //   }
  // }
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
  justify-content: space-between;
  width: 1200px;
  margin: 0px auto 20px auto;
  flex-wrap: wrap;
}
</style>
