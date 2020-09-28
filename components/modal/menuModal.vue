<template>
  <div class="bg">
    <div class="menu-modal-bg" v-if="(menuOnOff === true)">
      <div class="menu-list-wrap">
        <ul class="menu-list">
          <li
            v-for="(list, index) in tabChange"
            :key="index"
            @click="menuClick(list.type)"
            :class="{ active: list.type === activeTab }"
          >
            {{ list.name }}
          </li>
        </ul>
        <div class="cancel" @click="menuClose">취소</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tabChange", "activeTab", "menuOnOff"],

  methods: {
    menuClick(type) {
      this.$emit("tab", type)
      this.$emit("menuClose", false)
    },
    menuClose() {
      this.$emit("menuClose", false)
    }
  }
}
</script>

<style scoped>
.bg {
  position: relative;
}
.menu-modal-bg {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
}
.menu-list-wrap {
  position: fixed;
  bottom: 0px;
  width: 100%;
}
.menu-list > li {
  width: 100%;
  height: 43px;
  border-bottom: 1px solid #dfdfdf;
  font-size: 14px;
  color: #212121;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cancel {
  width: 100%;
  height: 52px;
  font-size: 17px;
  color: #212121;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu-list > li:hover {
  background-color: #f4f7ff;
}
.menu-list > .active {
  font-weight: bold;
}
</style>
