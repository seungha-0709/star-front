<template>
  <div class="qna-body">
    <div class="cs-center-wrap">
      <div class="cs-service">
        <h2>고객센터</h2>
        <table>
          <tbody>
            <tr>
              <th>운영시간</th>
              <td>평일 10:00~18:00 (점심시간 13:00~14:00 / 주말&공휴일 제외)</td>
            </tr>
            <tr>
              <th>이메일</th>
              <td>star_store@starteacher.co.kr</td>
            </tr>
            <tr>
              <th>전화</th>
              <td>070-1588-0000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="cs-online">
        <img src alt />
        <v-btn outlined color="#1673e6">1:1 온라인 문의하기</v-btn>
      </div>
    </div>

    <div class="qna-wrap">
      <h2>자주 묻는 질문과 답변</h2>
      <ul class="qna-category">
        <li
          v-for="(item, index) in categoryData"
          :key="index"
          :class="{ active: item.type === activeType }"
          @click="onTypeChange(item.type)"
        >
          <div class="icon">
            <v-icon>{{ item.icon }}</v-icon>
          </div>
          {{ item.name }}
        </li>
      </ul>
      <qnaTab v-bind:tabType="activeType" />
    </div>
  </div>
</template>

<script>
import { qnaCategory } from "../../components/qnaContents/qnaCategory.js"
import qnaTab from "../../components/qnaContents/qnaTap2.vue"

export default {
  data() {
    return {
      categoryData: qnaCategory,
      activeType: "all"
    }
  },
  components: {
    qnaTab
  },
  methods: {
    onTypeChange(type) {
      this.activeType = type
    }
  }
}
</script>

<style scoped>
.qna-body {
  background-color: #f1f1f1;
}
.cs-center-wrap {
  background-color: #fff;
  width: 1200px;
  height: 208px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #dfdfdf;
  display: flex;
  padding: 32px 40px 32px 40px;
  box-sizing: border-box;
}
h2 {
  font-size: 24px;
  color: #212121;
  margin-bottom: 24px;
  font-weight: bold;
}
.cs-service {
  width: 851px;
}
th {
  text-align: left;
  width: 100px;
}
.cs-online {
  width: 348px;
  border-left: 1px solid #dfdfdf;
}
.qna-wrap {
  background-color: #fff;
  width: 1200px;
  margin-top: 8px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #dfdfdf;
  padding: 32px 40px 32px 40px;
}
.qna-category {
  list-style: none;
  display: flex;
  padding: 0;
  width: 1180px;
  margin-bottom: 40px;
}
.icon {
  width: 56px;
  height: 56px;
  border-radius: 28px;
  background-color: #dfdfdf;
  margin: 24px 52px 8px 52px;
  padding: 16px;
}
.qna-category > li {
  border: 1px solid #dfdfdf;
  width: 160px;
  height: 136px;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
}
.qna-category > li.active {
  border: 1px solid #dfdfdf;
  width: 160px;
  height: 136px;
  text-align: center;
  background-color: #1673e6;
  box-sizing: border-box;
}
</style>
