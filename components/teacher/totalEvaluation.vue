<template>
  <div class="total-evaluation">
    <header>
      <h1>종합평가</h1>
      <span>??????? ???명의 강사 중</span>
    </header>
    <main>
      <div>
        <span>종합</span>
        <span>???위</span>
      </div>
      <div>
        <span>리뷰기준</span>
        <span>???위</span>
      </div>
      <div>
        <span>평점기준</span>
        <span>???위</span>
      </div>
    </main>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .total-evaluation {
    width: 458px;
    height: 212px;
    background: #fff;
    border: 1px solid #dfdfdf;
    padding: 32px;
    box-sizing: border-box;
  }
  header {
    margin-bottom: 16px;
  }
  h1 {
    font-size: 20px;
    color: #212121;
    font-weight: bold;
    display: inline-block;
  }
  main {
    width: 394px;
    height: 103px;
    background: #eeeff4;
    border-radius: 51.5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  main > div {
    width: 131px;
    height: 71px;
  }
  main > div:nth-of-type(2) {
    border-left: 1px solid #dfdfdf;
    border-right: 1px solid #dfdfdf;
  }
  main > div > span:nth-of-type(1) {
    font-size: 14px;
    color: #666;
    text-align: center;
    display: block;
  }

  main > div > span:nth-of-type(2) {
    font-size: 24px;
    color: #212121;
    font-weight: bold;
    text-align: center;
    display: block;
    margin-top: 8px;
  }
</style>
