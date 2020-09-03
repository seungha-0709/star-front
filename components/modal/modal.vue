<template>
  <div class="bg">
    <div class="modal-bg" v-if="modalProps.isDimmed === true">
      <div class="modal-container">
        <div class="close-icon-box" v-if="modalProps.isClose === true">
          <x-icon class="close-icon" @click="onClose()" />
        </div>
        <div class="modal-wrap">
          <div class="modal-header">
            <h1>{{ modalProps.title }}</h1>
            <h3>{{ modalProps.subTitle }}</h3>
            <div class="modal-divider" v-if="modalProps.isDivider === true"></div>
          </div>
          <div class="modal-main">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <h3>{{ modalProps.bottomText }}</h3>
            <div class="btn-wrap" v-if="modalProps.footerBtn === true">
              <btn-border>{{ modalProps.bottomBtn[0].title }}</btn-border>
              <btn-color>{{ modalProps.bottomBtn[1].title }}</btn-color>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { XIcon } from "vue-feather-icons"
import btnBorder from "../common/btnBorder.vue"
import btnColor from "../common/btnColor.vue"

export default {
  props: ["modalProps"],
  components: {
    XIcon,
    btnBorder,
    btnColor
  },
  methods: {
    onClose() {
      this.modalProps.isClose = false
      this.modalProps.isDimmed = false
    }
  }
}
</script>

<style scoped>
.bg {
  position: relative;
}
.modal-bg {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
}
.modal-container {
  width: 640px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.close-icon-box {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #000;
  opacity: 0.4;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
}
.close-icon {
  color: #fff;
}
.modal-wrap {
  width: 640px;
  background-color: #fff;
  border-radius: 4px;
  padding: 32px 32px 40px 32px;
}
h1 {
  color: #212121;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 2px;
}
h2 {
  color: #212121;
  font-size: 20px;
  font-weight: bold;
  margin-top: 24px;
}
h3 {
  color: #666;
  font-size: 14px;
  margin-top: 10px;
}
.modal-divider {
  width: 100%;
  height: 16px;
  border-bottom: 1px solid #000;
}
.btn-wrap {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
</style>