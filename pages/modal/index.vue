<template>
  <div class="bg">
    <div class="modal-bg">
      <div class="modal-wrap">
        <div class="modal-content">모달모달모달</div>
      </div>
    </div>
  </div>
</template>

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
.modal-wrap {
  width: 640px;
  background-color: #fff;
  border-radius: 4px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>