<template>
  <div>
    <div>
      <div v-for="(item, i) in qnaListType" :key="i" @click="onClassChange(i)">
        <div class="qna-title" v-bind:class="{ active: qnaListActiveIndex === i }">
          <span class="qna-q-circle">Q</span>
          {{ item.title }}
        </div>
        <v-expand-transition>
          <div v-if="qnaListActiveIndex === i" class="qna-content">{{ item.content }}</div>
        </v-expand-transition>
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
.qna-title {
  width: 1120px;
  height: 52px;
  border-top: 1px solid #dfdfdf;
  font-size: 15px;
  color: #212121;
  padding: 15px;
}
.qna-title.active {
  background-color: #f6f8fc;
}
.qna-q-circle {
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
.qna-content {
  background-color: #f6f8fc;
  color: #212121;
  font-size: 14px;
  padding: 16px 16px 32px 16px;
}
</style>
