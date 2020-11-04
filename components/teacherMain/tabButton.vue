<template>
  <div>
    <div
      class="tab-button"
      @click="$emit('tab-click')"
      :style="{ width: tabStyles.width, height: tabStyles.height }"
      :class="{ active: tabState === true }"
    >
      {{ tabStyles.title }}
    </div>
  </div>
</template>

<script>
  export default {
    props: ["tabState", "tabStyles"]
  }
</script>
<style scoped>
  .tab-button.active {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    font-weight: bold;
    color: #3f60cc;
    font-size: 16px;
  }
  .tab-button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #eeeff4;
    font-weight: normal;
    color: #666;
  }
</style>
