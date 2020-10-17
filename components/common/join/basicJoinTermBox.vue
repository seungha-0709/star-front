<template>
  <div class="term-boxes">
    <div class="term-box">
      <div class="agreement">
        <p>{{ title }}</p>
        <div class="checkbox">
          <label>
            <input type="checkbox" />
            <check-button />
          </label>
        </div>
      </div>
    </div>
    <div class="term-context">
      <p v-html="context"></p>
    </div>
  </div>
</template>
<script>
  import checkButton from "../../common/checkButton.vue"
  export default {
    props: {
      title: {
        default: ""
      },
      context: {
        default: ""
      }
    },
    components: {
      "check-button": checkButton
    }
  }
</script>
<style scoped>
  .term-boxes {
    margin-top: 24px;
    width: 600px;
    border: solid 1px #ececec;
  }
  .term-boxes .term-box {
    height: 62px;
    padding: 18px 20px 17px;
    border-bottom: solid 1px #ececec;
    background-color: #ffffff;
  }
  .term-box .agreement {
    display: flex;
    justify-content: space-between;
    vertical-align: middle;
  }
  .term-box .agreement p {
    font-size: 18px;
    color: #212121;
    text-align: left;
  }
  .term-box .agreement label input[type="checkbox"] {
    display: none;
  }
  .term-boxes .term-context {
    overflow: scroll;
    height: 110px;
    padding: 20px 20px 0px;
    background-color: #ffffff;
  }
  .term-boxes .term-context p {
    font-size: 14px;
    color: #666666;
  }
</style>
