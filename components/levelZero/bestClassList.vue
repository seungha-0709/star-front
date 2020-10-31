<template>
  <div class="best-class-box">
    <div class="title">
      <h2>인기 강의 상품</h2>
      <button type="button" class="btn-more">
        <plus-icon class="plus-icon"></plus-icon>
      </button>
    </div>
    <ul class="class-list">
      <li v-for="(list, index) in bestClassList.data" :key="index">
        <nuxt-link to="">
          <div class="image-box">
            <img :src="list.image.url" :alt="list.image.alt" />
          </div>
          <h3>{{ list.title }}</h3>
          <p>{{ list.category }}</p>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import { PlusIcon } from "vue-feather-icons"
  import { bestClassList } from "../../assets/data/lv0/bestClassList"

  export default {
    data() {
      return {
        bestClassList
      }
    },
    components: {
      PlusIcon
    }
  }
</script>

<style scoped>
  .best-class-box {
    width: 588px;
    padding-right: 32px;
  }
  .best-class-box .title {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
  }
  .best-class-box .title h2 {
    font-size: 28px;
    font-weight: 700;
  }
  .best-class-box .title .btn-more {
    position: absolute;
    right: 0;
    top: 4px;
  }
  .best-class-box .title .plus-icon {
    width: 32px;
    height: 32px;
    color: #dfdfdf;
    vertical-align: top;
  }
  .best-class-box .class-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 12px;
  }
  .best-class-box .class-list li {
    width: 50%;
    margin-top: 32px;
  }
  .best-class-box .class-list li:nth-of-type(odd) {
    padding-right: 16px;
  }
  .best-class-box .class-list li:nth-of-type(even) {
    padding-left: 16px;
  }
  .best-class-box .class-list li a {
    text-decoration: none;
    color: #212121;
  }
  .best-class-box .class-list li a:hover > h3,
  .best-class-box .class-list li a:hover > p {
    text-decoration: underline;
  }
  .best-class-box .class-list li .image-box {
    border-radius: 4px;
    overflow: hidden;
  }
  .best-class-box .class-list li .image-box img {
    width: 100%;
    height: 300px;
    background-color: #666;
    vertical-align: top;
  }
  .best-class-box .class-list li a > h3 {
    font-size: 20px;
    font-weight: 700;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-top: 16px;
  }
  .best-class-box .class-list li a > p {
    font-size: 18px;
    color: #666;
    margin-top: 4px;
  }
</style>
