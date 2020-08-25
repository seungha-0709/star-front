<template>
  <div>
    <div>
      <div v-for="(item, i) in qnaListType" :key="i" @click="onClassChange(i)">
        <div class="title" v-bind:class="{ active: qnaListActiveIndex === i }">
          <span class="q-circle">Q</span>
          {{ item.title }}
        </div>
        <div v-if="qnaListActiveIndex === i" class="content">{{ item.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { qnaList } from "../../components/qnaContents/qnaList.js"

export default {
  props: ["tabType"],
  data() {
    return { qnaList, qnaListActiveIndex: null }
  },
  computed: {
    qnaListType() {
      if (this.tabType === "all") return qnaList.qnaListMain
      if (this.tabType === "buy") return qnaList.qnaListBuy
      if (this.tabType === "logistics") return qnaList.qnaListLogistics
      if (this.tabType === "cancel") return qnaList.qnaListCancel
      if (this.tabType === "exchange") return qnaList.qnaListExchange
      if (this.tabType === "receipt") return qnaList.qnaListReceipt
      return qnaList.qnaListEtc
    }
  },
  watch: {
    qnaListType() {
      this.qnaListActiveIndex = null
    }
  },
  methods: {
    onClassChange(i) {
      this.qnaListActiveIndex = this.qnaListActiveIndex === i ? null : i
    }
  }
}
</script>

<style scoped>
.title {
  width: 1120px;
  height: 52px;
  border-top: 1px solid #dfdfdf;
  font-size: 15px;
  color: #212121;
  padding: 15px;
}
.title.active {
  background-color: #f6f8fc;
}
.q-circle {
  width: 24px;
  height: 24px;
  border-radius: 12px;
  display: inline-block;
  background-color: #dfdfdf;
  color: #666;
  text-align: center;
  line-height: 2;
  font-size: 12px;
}
.content {
  background-color: #f6f8fc;
}
</style>
