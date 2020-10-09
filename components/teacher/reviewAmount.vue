<template>
  <div class="review-amount">
    <header>
      <ul>
        <li v-for="(tab, index) in graphTap" 
          :key="index" 
          :class="{ active: tab.type === activeTab }"
          @click="onChangeActive(tab.type)">
           {{ tab.name }} 
        </li>
      </ul>
    </header>
    <main>
      <div v-if="activeTab === 'review'">리뷰 그래프</div>
      <div v-if="activeTab === 'score'">평점 그래프</div>
      <div v-if="activeTab === 'passreview'">합격수기 그래프</div>
    </main>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        graphTap: [{
          type: "review",
          name: "리뷰"
        },
        {
          type: "score",
          name: "평점"
        },
        {
          type: "passreview",
          name: "합격수기"
        }],
        activeTab: "review"
      }
    },
    methods: {
      onChangeActive(type) {
        this.activeTab = type
      }
    }
  }
</script>

<style scoped>
  .review-amount {
    width: 458px;
    height: 212px;
    background: #fff;
    border: 1px solid #dfdfdf;
    padding: 0;
    box-sizing: border-box;

  }
  header ul {
    display: flex;
    padding: 0;
    margin: 0;
  }
  header li {
    width: 153px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eeeff4;
    color: #666;
    font-size: 16px;
  }
  header li.active {
    background: #fff;
    color: #212121;
    font-weight: bold;
  }
</style>
