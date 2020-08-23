<template>
  <div>
    <div v-if="tabType === 'all'">
      <v-expansion-panel>
        <v-expansion-panel-content v-for="(item, i) in qnaListMain" :key="i">
          <template v-slot:header>
            <div>{{ item.title }}</div>
          </template>
          <v-card>
            <v-card-text>{{ item.content }}</v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </div>
    <div v-if="tabType === 'buy'">
      <v-expansion-panel>
        <v-expansion-panel-content v-for="(item, i) in qnaListBuy" :key="i">
          <template v-slot:header>
            <div>{{ item.title }}</div>
          </template>
          <v-card>
            <v-card-text>{{ item.content }}</v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </div>
  </div>
</template>

<script>
  import {
    qnaListMain,
    qnaListBuy
  } from "../../components/qnaContents/qnaList.js"

  export default {
    props: ["tabType"],
    data() {
      return {
        qnaListMain,
        qnaListBuy
      }
    }
  }
</script>
