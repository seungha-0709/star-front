<template>
  <div>
    <table class="policy">
      <tr>
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
      </tr>
      <tr>
        <td colspan="5">
          <tab v-bind:tab-type="activeType"></tab>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import TabVue from "../../components/PolicyTab.vue"

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

<style>
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
    border: 1px solid #dfdfdf;
    border-collapse: collapse;
    margin-left: auto;
    margin-right: auto;
    background-color: #ffffff;
  }
  .policy td {
    padding-left: 32px;
    padding-right: 32px;
    text-align: left;
  }
</style>
