<template>
  <div class="policy-body">
    <div class="policy">
      <div class="tab-menu-mobile" @click="onMenuOnOff">
        {{ tabData.find((tabdata) => tabdata.type === activeType).name }}
        <chevron-down-icon size="1.5x" class="down-icon"></chevron-down-icon>
      </div>
      <div class="tab-menu-wrap">
        <ul class="tab-menu">
          <li
            v-for="(data, index) in tabData"
            :key="index"
            @click="onTypeChange(data.type)"
            :class="{ active: data.type === activeType }"
          >
            {{ data.name }}
          </li>
        </ul>
      </div>
      <div class="policy-content">
        <tab :tab-type="activeType"></tab>
      </div>
      <menu-modal
        :modalMenuList="tabData.name"
        :tabChange="tabData"
        :activeTab="activeType"
        :menuOnOff="isMenuOnoff"
        @tab="onTypeChange"
        @menuClose="onMenuOnOff"
      />
    </div>
  </div>
</template>

<script>
  import { ChevronDownIcon } from "vue-feather-icons"
  import TabVue from "../../components/policyTab.vue"
  import menuModal from "../../components/modal/menuModal.vue"

  export default {
    data() {
      return {
        isMenuOnoff: false,
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
      tab: TabVue,
      menuModal,
      ChevronDownIcon
    },
    methods: {
      onTypeChange(type) {
        this.activeType = type
      },
      onMenuOnOff() {
        console.log(this.isMenuOnoff)
        this.isMenuOnoff = !this.isMenuOnoff
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
    border-width: 1px 0 0 0;
    border-style: solid;
    border-color: #dfdfdf;
  }
  .tab-menu > li:first-child {
    border-width: 1px 0 0 1px;
  }
  .tab-menu > li:last-child {
    border-width: 1px 1px 0 0;
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
  .tab-menu-mobile {
    background-color: rgb(251, 251, 251);
    border: 1px solid #dfdfdf;
    width: 100%;
    height: 42px;
    align-items: center;
    padding: 0 16px;
    font-size: 12px;
    color: #212121;
    display: none;
  }
  .down-icon {
    color: #666;
  }
  @media (max-width: 1199px) {
    .tab-menu-wrap {
      display: none;
    }
    .tab-menu-mobile {
      display: flex;
    }
    .policy {
      width: 100%;
      margin-top: 8px;
    }
    .policy-content {
      margin-top: 8px;
    }
  }
</style>
