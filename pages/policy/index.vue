<template>
  <div class="policy">
    <div class="tab-menu-wrap">
      <ul class="tab-menu">
        <li
          v-for="(data, index) in tabData"
          :key="index"
          v-on:click="onTypeChange(data.type)"
          :class="{ active: data.type === activeType }"
        >
          {{ data.name }}
        </li>
      </ul>
    </div>
    <div class="policy-content">
      <tab v-bind:tab-type="activeType"></tab>
    </div>
  </div>
</template>

<script>
  import TabVue from "../../components/policyTab.vue"

  export default {
    data() {
      return {
        tabData: [
          {
            type: "service",
            name: "이용약관"
          },
          {
            type: "privacy",
            name: "개인정보처리방침"
          },
          {
            type: "marketing",
            name: "정보제공활용동의"
          },
          {
            type: "email",
            name: "이메일 집단수집거부"
          },
          {
            type: "ranking_logic",
            name: "랭킹산정 Logic"
          }
        ],
        activeType: "service"
      }
    },
    components: {
      tab: TabVue
    },
    methods: {
      onTypeChange(type) {
        this.activeType = type
      }
    }
  }
</script>

<style scoped>
  .tab-menu {
    display: flex;
    width: 1200px;
  }
  .tab-menu > li {
    width: 100%;
    height: 62px;
    line-height: 62px;
    background-color: #eeeff4;
    color: #666;
    font-size: 16px;
    text-align: center;
    cursor: pointer;
    border-width: 1px 0 0 1px;
    border-style: solid;
    border-color: #dfdfdf;
  }
  .tab-menu > li:last-child {
    border-width: 1px 1px 0 1px;
  }
  .tab-menu > li.active {
    background-color: #fff;
    color: #3f60cc;
    font-weight: 700;
    cursor: pointer;
  }

  .policy {
    margin-top: 80px;
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
    background-color: #ffffff;
  }
  .policy-content {
    padding: 28px 32px;
    text-align: left;
    border: 1px solid #dfdfdf;
  }
</style>
