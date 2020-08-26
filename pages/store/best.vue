<template>
  <div>
    <div class="top-banner"></div>
    <div class="shop-best-item-container">
      <span class="shop-best-item-sub-title">{{ `${limit}개의 강의`}}</span>
      <span @click="lowestPriceList()">가격 낮은 순</span>
      <div class="shop-best-item-wrap">
        <shopBestItem v-bind:propsData="item" v-for="(item, i) in computedBestList" :key="i" />
      </div>
    </div>
  </div>
</template>

<script>
import { shopBestList } from "../../components/shopBest/shopBestList.js"
import shopBestItem from "../../components/shopBest/shopBestItem.vue"

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
    shopBestItem
  },
  methods: {
    lowestPriceList() {
      this.computedBestList.sort((a, b) => {
        return a.price < b.price ? -1 : 1
      })
      console.log(this.computedBestList)
    }
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
  margin: 40px auto 40px auto;
}
.shop-best-item-sub-title {
  display: block;
  font-size: 18px;
}
.shop-best-item-wrap {
  display: flex;
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid red;
  flex-wrap: wrap;
}
</style>