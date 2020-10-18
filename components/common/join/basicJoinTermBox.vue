<template>
  <div class="term-boxes">
    <div class="term-box">
      <div class="agreement">
        <p>{{ title }}</p>
        <label class="checkbox">
          <input type="checkbox" />
          <div class="checkbox-icon" />
        </label>
      </div>
    </div>
    <div class="term-context">
      <p v-html="context"></p>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      title: {
        default: ""
      },
      context: {
        default: ""
      }
    },
    components: {}
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
  .term-boxes .agreement {
    display: flex;
    justify-content: space-between;
    vertical-align: middle;
  }
  .term-boxes .agreement p {
    font-size: 18px;
    color: #212121;
    text-align: left;
  }
  .term-boxes .agreement .checkbox {
    cursor: pointer;
  }
  .term-boxes .agreement input[type="checkbox"] {
    display: none;
  }
  .term-boxes .agreement .checkbox-icon {
    background-image: url("/img/button/check-01-off@3x.png");
    background-size: cover;
    width: 28px;
    height: 28px;
  }
  .term-boxes .agreement input[type="checkbox"]:checked + .checkbox-icon {
    background-image: url("/img/button/check-01-on@3x.png");
    background-size: cover;
    width: 28px;
    height: 28px;
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
