<template>
  <div class="term-all">
    <div class="all-agreement">
      <p>전체 약관 동의</p>
      <div class="checkbox">
        <label>
          <input type="checkbox" />
          <check-button />
        </label>
      </div>
    </div>
  </div>
</template>
<script>
  import checkButton from "../../common/checkButton.vue"
  export default {
    components: {
      "check-button": checkButton
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
  .term-all .all-agreement label input[type="checkbox"] {
    display: none;
  }
</style>
