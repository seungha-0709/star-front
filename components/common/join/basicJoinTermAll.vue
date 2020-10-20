<template>
  <div class="term-all">
    <div class="all-agreement">
      <p>전체 약관 동의</p>
      <div
        class="checkbox-icon"
        :class="{ check: computedCheckAll }"
        @click="$emit('check-all')"
      />
    </div>
  </div>
</template>
<script>
  export default {
    props: ["term-all-agree"],
    data() {
      return {}
    },
    computed: {
      computedCheckAll() {
        return this.termAllAgree.every((item) => item === true)
      }
    }
  }
</script>
<style scoped>
  .term-all {
    width: 600px;
    height: 62px;
    border: solid 1px #ececec;
    background-color: #ffffff;
    padding: 18px 20px 17px;
  }
  .term-all .all-agreement {
    display: flex;
    justify-content: space-between;
    vertical-align: middle;
  }
  .term-all .all-agreement p {
    font-size: 18px;
    color: #212121;
    text-align: left;
  }
  .term-all .all-agreement .checkbox-icon {
    cursor: pointer;
    background-image: url("/img/button/check-01-off@3x.png");
    background-size: cover;
    width: 28px;
    height: 28px;
  }
  .term-all .all-agreement .checkbox-icon.check {
    background-image: url("/img/button/check-01-on@3x.png");
    background-size: cover;
    width: 28px;
    height: 28px;
  }
</style>
