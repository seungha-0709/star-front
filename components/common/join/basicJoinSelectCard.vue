<template>
  <div
    class="select-card"
    v-on:mouseenter="hoverState = true"
    v-on:mouseleave="hoverState = false"
  >
    <div class="type-img">
      <slot />
    </div>
    <div class="type-name">{{ type }}</div>
    <p class="description">{{ description }}</p>
    <basic-button
      class="join-select-card-button"
      text="선택하기"
      width="140"
      borderRadius="31"
      :backgroundColor="hoverState ? '#2c428d' : '#3f60cc'"
      fontWeight="400"
      fontSize="16"
    />
  </div>
</template>
<script>
  import basicButton from "../basicButton.vue"
  export default {
    data() {
      return {}
    },
    props: {
      type: {
        default: ""
      },
      description: {
        default: ""
      }
    },
    components: {
      "basic-button": basicButton
    }
  }
</script>
<style scoped>
  .select-card {
    width: 282px;
    height: 372px;
    border: solid 1px #ececec;
    background-color: #ffffff;
    padding: 48px 24px 24px;
    text-align: center;
    font-weight: normal;
  }
  .select-card:hover {
    width: 282px;
    height: 372px;
    border: solid 1px #ececec;
    background-color: #ffffff;
    padding: 48px 24px 24px;
    text-align: center;
    font-weight: normal;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
  }
  .select-card .type-name {
    font-size: 20px;
    font-weight: bold;
    color: #212121;
    margin: 42px 0 8px;
  }
  .select-card .description {
    width: 234px;
    height: 60px;
    text-align: left;
    font-size: 14px;
    color: #666666;
    margin-bottom: 24px;
  }
</style>
