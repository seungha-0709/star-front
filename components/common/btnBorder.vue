<template>
  <div>
    <div class="btn-border">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.btn-border {
  width: 180px;
  height: 52px;
  border: 1px solid #dfdfdf;
  border-radius: 26px;
  color: #212121;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 8px 0 8px;
}
</style>