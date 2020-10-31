<template>
  <div class="new-cafe-resource-box">
    <div class="title">
      <h2>최신 Cafe 자료</h2>
    </div>
    <ul class="cafe-resource-list">
      <li v-for="(resource, index) in newCafeResource.data" :key="index">
        <nuxt-link to="">
          <div class="resource-content-box">
            <div class="resource-tag">
              <span>{{ resource.level_name }}</span>
              <span>{{ resource.tutor_name }}</span>
            </div>
            <h3 :class="latestCompare(resource.create_at) ? 'latest' : ''">
              {{ resource.title }}
            </h3>
            <div class="resource-info">
              <span>{{ resource.nickname }}</span>
              <span class="vertical-bar" />
              <span>{{ format(resource.create_at, "yyyy-M-dd") }}</span>
            </div>
            <p>{{ resource.content }}</p>
          </div>
          <div class="image-box">
            <img :src="resource.image.url" :alt="resource.image.alt" />
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import { format, subWeeks, isBefore } from "date-fns"
  import { newCafeResource } from "../../assets/data/lv0/newCafeResuorce.js"

  export default {
    data() {
      return {
        format,
        newCafeResource
      }
    },
    computed: {
      latestCompare() {
        return (createdAt) => {
          // subWeeks = 주어진 날짜에서 지정된 주 수를 뺌.
          const subWeek = subWeeks(Date.now(), 1)
          // isBefore = 지정된 첫번째 날짜가 두번째 날짜 이전인지 확인
          return isBefore(subWeek, createdAt)
        }
      }
    }
  }
</script>

<style scoped>
  .new-cafe-resource-box {
    width: 588px;
    padding-left: 32px;
  }
  .new-cafe-resource-box .title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
  }
  .new-cafe-resource-box .title h2 {
    font-size: 28px;
    font-weight: 700;
  }
  .new-cafe-resource-box .cafe-resource-list {
    margin-top: 12px;
  }
  .new-cafe-resource-box .cafe-resource-list li {
    display: flex;
    padding: 32px 0;
    border-bottom: 1px solid #dfdfdf;
  }
  .new-cafe-resource-box .cafe-resource-list li:last-child {
    border-bottom: 0;
  }
  .new-cafe-resource-box .cafe-resource-list li a {
    text-decoration: none;
    color: #212121;
    display: flex;
    align-items: center;
  }
  .new-cafe-resource-box .cafe-resource-list li a:hover h3,
  .new-cafe-resource-box .cafe-resource-list li a:hover p {
    text-decoration: underline;
  }
  .new-cafe-resource-box .cafe-resource-list .resource-tag {
    display: flex;
  }
  .new-cafe-resource-box .cafe-resource-list .resource-tag span {
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    padding: 0 12px;
    height: 20px;
    line-height: 20px;
    border-radius: 10px;
    margin-right: 8px;
  }
  .new-cafe-resource-box .cafe-resource-list .resource-tag span:nth-of-type(1) {
    background-color: #5d7ee9;
  }
  .new-cafe-resource-box .cafe-resource-list .resource-tag span:nth-of-type(2) {
    background-color: #666;
  }
  .new-cafe-resource-box .cafe-resource-list .resource-info {
    display: flex;
    align-items: center;
  }
  .new-cafe-resource-box .cafe-resource-list .vertical-bar {
    display: inline-block;
    width: 1px;
    height: 16px;
    background-color: #ececec;
    margin: 0 10px;
  }
  .new-cafe-resource-box .cafe-resource-list .resource-content-box > h3 {
    position: relative;
    font-size: 20px;
    font-weight: 700;
    max-width: 340px;
    margin: 4px 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .new-cafe-resource-box .cafe-resource-list .resource-content-box > h3.latest {
    max-width: 300px;
  }
  .new-cafe-resource-box
    .cafe-resource-list
    .resource-content-box
    > h3.latest::after {
    content: "N";
    position: absolute;
    font-size: 10px;
    color: #fff;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    text-align: center;
    width: 16px;
    height: 16px;
    line-height: 16px;
    border-radius: 50%;
    background-color: #ff3366;
    text-decoration: none;
  }
  .new-cafe-resource-box .cafe-resource-list .resource-content-box > p {
    margin-top: 12px;
    color: #666;
  }
  .new-cafe-resource-box .cafe-resource-list .image-box {
    width: 100%;
    border-radius: 4px;
    overflow: hidden;
  }
  .new-cafe-resource-box .cafe-resource-list .image-box img {
    width: 200px;
    height: 141px;
    background-color: #666;
    margin-left: 16px;
    vertical-align: top;
  }
</style>
