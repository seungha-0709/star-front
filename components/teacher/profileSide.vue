<template>
  <div class="profile-side">
    <section>
      <div class="teacher-photo">
        <img
          src="/img/teacher/default_teacher01_01@2x.png"
          alt="오로라 선생님"
        />
        <img
          class="ranking-first"
          src="/img/teacher/mark-02-ranking-01@2x.png"
          alt="랭킹 1등"
        />
      </div>
    </section>
    <section>
      <h1>오로라</h1>
      <a class="logo-image" href=""><div class="logo"></div></a>
      <h2>
        <a href="">현)YBM어학원 강남센터</a><br />
        <a href="">연세대학교 Toeic 강의</a><br />
        다수 유명어학원 강의
      </h2>
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
  .teacher-photo img {
    width: 184px;
    height: 184px;
    border-radius: 92px;
  }
  .teacher-photo {
    position: relative;
  }
  .teacher-photo .ranking-first {
    position: absolute;
    top: 132px;
    left: 133px;
    width: 50px;
    height: 50px;
  }
  a.logo-image {
    text-decoration: none;
  }
  h2 a {
    text-decoration: none;
    color: #666;
  }
</style>
