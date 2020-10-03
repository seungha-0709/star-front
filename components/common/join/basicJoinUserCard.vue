<template>
  <div
    :style="{
      backgroundColor,
      color
    }"
    class="user-card"
  >
    <div class="type-img">
      <slot />
    </div>
    <div class="type-name">{{ type }}</div>
    <p
      :style="{
        width: width + 'px'
      }"
      class="description"
    >
      {{ description }}
    </p>
  </div>
</template>
<script>
  export default {
    props: {
      type: {
        default: ""
      },
      description: {
        default: ""
      },
      backgroundColor: {
        default: "#3f60cc"
      },
      color: {
        default: "#ffffff"
      },
      width: {
        default: 161
      }
    }
  }
</script>
<style scoped>
  .user-card {
    width: 282px;
    height: 320px;
    padding: 47px 0px 48px;
    text-align: center;
    font-weight: normal;
  }
  .user-card:hover {
    width: 282px;
    height: 320px;
    padding: 47px 0px 48px;
    text-align: center;
    font-weight: normal;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
  }
  .user-card .type-name {
    font-size: 20px;
    font-weight: bold;
    margin: 28px 0 8px;
  }
  .user-card .description {
    font-size: 14px;
    margin: 0 auto 48px;
  }
</style>
