<template>
  <div>
    <div>
      <div class="qna-wrap" v-for="(item, i) in qnaListType" :key="i" @click="onClassChange(i)">
        <div class="qna-title" v-bind:class="{ active: qnaListActiveIndex === i }">
          <span class="qna-q-circle">Q</span>
          {{ item.title }}
          <span class="qna-nav-icon">
            <v-icon>arrow_drop_down</v-icon>
          </span>
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
  border-top: 1px solid #dfdfdf;
  width: 1120px;
  height: 52px;
  font-size: 15px;
  color: #212121;
  padding: 15px;
}
.qna-wrap:first-child .qna-title {
  border: 0;
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
.qna-nav-icon {
  float: right;
  transition: 0.5s;
}
.qna-title.active .qna-nav-icon {
  transform: rotate(180deg);
}
.qna-content {
  background-color: #f6f8fc;
  color: #212121;
  font-size: 14px;
  padding: 16px 16px 32px 16px;
}
</style>
