<template>
  <div>
    <div class="btn-colored">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.btn-colored {
  width: 180px;
  height: 52px;
  background-color: #1673e6;
  border-radius: 26px;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 8px 0 8px;
}
</style>