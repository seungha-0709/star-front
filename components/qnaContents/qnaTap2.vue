<template>
  <div>
    <div v-if="tabType === 'all'">
      <div v-for="(item, i) in qnaListMain" :key="i" @click="onClassChange(i)">
        <div class="title">
          <span class="q-circle">Q</span>
          {{ item.title }}
        </div>
        <div class="content">{{ item.content }}</div>
      </div>
    </div>

    <div v-if="tabType === 'buy'">
      <div v-for="(item, i) in qnaListBuy" :key="i" @click="onClassChange(i)">
        <div class="title">
          <span class="q-circle">Q</span>
          {{ item.title }}
        </div>
        <div>{{ item.content }}</div>
      </div>
    </div>

    <div v-if="tabType === 'logistics'">
      <div
        v-for="(item, i) in qnaListLogistics"
        :key="i"
        @click="onClassChange(i)"
      >
        <div class="title">
          <span class="q-circle">Q</span>
          {{ item.title }}
        </div>
        <div class="content">{{ item.content }}</div>
      </div>
    </div>

    <div v-if="tabType === 'cancel'">
      <div
        v-for="(item, i) in qnaListCancel"
        :key="i"
        @click="onClassChange(i)"
      >
        <div class="title">
          <span class="q-circle">Q</span>
          {{ item.title }}
        </div>
        <div class="content">{{ item.content }}</div>
      </div>
    </div>

    <div v-if="tabType === 'exchange'">
      <div
        v-for="(item, i) in qnaListExchange"
        :key="i"
        @click="onClassChange(i)"
      >
        <div class="title">
          <span class="q-circle">Q</span>
          {{ item.title }}
        </div>
        <div class="content">{{ item.content }}</div>
      </div>
    </div>

    <div v-if="tabType === 'receipt'">
      <div
        v-for="(item, i) in qnaListReceipt"
        :key="i"
        @click="onClassChange(i)"
      >
        <div class="title">
          <span class="q-circle">Q</span>
          {{ item.title }}
        </div>
        <div class="content">{{ item.content }}</div>
      </div>
    </div>

    <div v-if="tabType === 'etc'">
      <div v-for="(item, i) in qnaListEtc" :key="i" @click="onClassChange(i)">
        <div class="title">
          <span class="q-circle">Q</span>
          {{ item.title }}
        </div>
        <div class="content">{{ item.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    qnaListMain,
    qnaListBuy,
    qnaListLogistics,
    qnaListCancel,
    qnaListExchange,
    qnaListReceipt,
    qnaListEtc
  } from "../../components/qnaContents/qnaList.js"

  export default {
    props: ["tabType"],
    data() {
      return {
        qnaListMain,
        qnaListBuy,
        qnaListLogistics,
        qnaListCancel,
        qnaListExchange,
        qnaListReceipt,
        qnaListEtc
      }
    },
    methods: {
      onClassChange(i) {
        console.log(i)
        const title = document.getElementsByClassName("title")
        const content = document.getElementsByClassName("content")
        if (title[i].classList.contains("active")) {
          title[i].classList.remove("active")
          content[i].style.display = "none"
        } else {
          title[i].classList.add("active")
          content[i].style.display = "block"
        }
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
  .title:last-child {
    border-bottom: 1px solid #dfdfdf;
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
    display: none;
  }
  .content.active {
    background-color: #f6f8fc;
    display: block;
  }
</style>
