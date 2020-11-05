<template>
  <div class="star-info-box">
    <div class="title">
      <h2>별별정보</h2>
    </div>
    <ul class="star-info-list">
      <li
        v-for="(list, index) in starInfoList.data"
        :key="index"
        :style="{ backgroundImage: list.thumbnail }"
      >
        <nuxt-link to="">
          <h3>{{ list.title }}</h3>
          <div class="list-info">
            <span>{{ list.level_name }}</span>
            <span class="vertical-bar" />
            <span>{{ list.category }}</span>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import { starInfoList } from "../../assets/data/lv0/starInfoList"

  export default {
    data() {
      return {
        starInfoList
      }
    }
  }
</script>

<style scoped>
  .star-info-box {
    width: 588px;
    padding-left: 32px;
  }
  .star-info-box .title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
  }
  .star-info-box .title h2 {
    font-size: 28px;
    font-weight: 700;
  }
  .star-info-box .star-info-list {
    margin-top: 44px;
  }
  .star-info-box .star-info-list li {
    height: 200px;
    border-radius: 4px;
    overflow: hidden;
    background-color: #ccc;
    margin-bottom: 32px;
  }
  .star-info-box .star-info-list li a {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    text-decoration: none;
    color: #fff;
    padding: 24px;
  }
  .star-info-box .star-info-list li .list-info {
    display: flex;
    align-items: center;
  }
  .star-info-box .star-info-list li .list-info .vertical-bar {
    display: inline-block;
    width: 1px;
    height: 16px;
    background-color: #ececec;
    margin: 0 10px;
  }
  .star-info-box .star-info-list li a h3 {
    font-size: 20px;
    font-weight: 700;
  }
</style>
