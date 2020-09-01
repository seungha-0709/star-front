<template>
  <div class="bg">
    <div class="modal-bg">
      <div class="modal-container">
        <div class="close-icon-box" v-if="modalContents.closeBtn === true">
          <x-icon class="close-icon" />
        </div>
        <div class="modal-wrap">
          <div class="modal-header">
            <h1>{{ modalContents.title }}</h1>
            <h2>{{ modalContents.subTitle }}</h2>
            <h3>{{ modalContents.description }}</h3>
            <div class="modal-line" v-if="modalContents.line === true"></div>
          </div>
          <div class="modal-footer">
            <btn-white>취소</btn-white>
            <btn-blue>접수하기</btn-blue>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { XIcon } from "vue-feather-icons"
import { modalContents } from "./modalCancel.js"
import btnWhite from "./btnWhite.vue"
import btnBlue from "./btnBlue.vue"

export default {
  data() {
    return {
      modalContents
    }
  },
  components: {
    XIcon,
    btnWhite,
    btnBlue
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
  top: 40%;
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
h3 {
  color: #666;
  font-size: 14px;
}
.modal-line {
  width: 100%;
  height: 16px;
  border-bottom: 1px solid #000;
}
.modal-footer {
  display: flex;
  justify-content: center;
}
</style>