<template>
  <div class="profile-side">
    <section>
      <div class="teacher-photo"></div>
    </section>
    <section>
      <h1>오로라</h1>
      <div class="logo"></div>
      <h2>현)YBM어학원 강남센터<br />
          연세대학교 Toeic 강의<br />
          다수 유명어학원 강의</h2>
    </section>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .profile-side {
    width: 260px;
    background: #fff;
    border: 1px solid #dfdfdf;
    padding: 24px 38px 26px 38px;
    box-sizing: border-box;
  }
  .teacher-photo {
    margin: 24px auto 16px auto;
    display: block;
    width: 184px;
    height: 184px;
    border-radius: 92px;
    background: #eeeff4;
  }
  h1 {
    margin: 0 auto;
    text-align: center;
    font-size: 28px;
    color: #212121;
    font-weight: bold;
  }
  h2 {
    font-size: 14px;
    color: #666;
    font-weight: normal;
    text-align: center;
  }
  .logo {
    margin: 8px auto;
    width: 161px;
    height: 41px;
    display: block;
    background: #c1c1c1;
  }
</style>
