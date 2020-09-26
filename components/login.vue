<template>
  <div>
    <div class="login-body">
      <div class="login-left">
        <img
          src="../static/img/login/login_logo_h_white.png"
          class="top-logo"
        />
        <div class="login-left-wrap">
          <img src="../static/img/login/group-6.png" />
          <span>
            <basic-button
              text="자세히 보기"
              backgroundColor="transparent"
              borderColor="#fff"
              width="164"
              fontWeight="noraml"
          /></span>
        </div>
      </div>
      <div class="login-right">
        <div class="login-main">
          <div class="login-main-h3">
            <h3><span>대한민국 No.1</span> 강사평가 플랫폼</h3>
          </div>
          <h2>별별선생에 오신 것을<br />진심으로 환영합니다.</h2>
          <div class="login-sns">
            <span class="login-sns-naver"></span>
            <span class="login-sns-kakao"></span>
            <span class="login-sns-facebook"></span>
          </div>
          <div class="login-input-wrap">
            <span>아이디</span>
            <input type="text" placeholder="아이디를 입력해주세요." />
            <span>비밀번호</span>
            <input type="password" placeholder="비밀번호를 입력해주세요." />
          </div>
          <div class="btn_position">
            <basic-button text="로그인" width="240" backgroundColor="#3f60cc" />
          </div>
          <div class="login-main-bottom">
            <span>회원가입</span>
            <span>|</span>
            <span>아이디 찾기</span>
            <span>|</span>
            <span>비밀번호 찾기</span>
          </div>
        </div>
        <div class="login-footer">
          <span class="login-copyright">
            Copyright © TEvalueWise Corp. All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import basicButton from "./common/basicButton"
  export default {
    components: {
      basicButton
    }
  }
</script>

<style scoped>
  .login-body {
    width: 100%;
    display: flex;
    position: relative;
  }
  /** 좌측 이미지 배너 **************************************/
  .login-left {
    background-image: url(../static/img/login/tip-103-s-15100186.png);
    background-repeat: no-repeat;
    background-size: cover;
    width: 610px;
    height: 1080px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .top-logo {
    position: absolute;
    top: 48px;
    left: 48px;
    height: 45px;
  }
  .login-left-wrap {
    width: 327px;
  }
  .login-left-wrap > img {
    display: block;
    margin-bottom: 37px;
  }
  .login-left-wrap > span {
    display: block;
    text-align: center;
  }
  /** 우측 로그인 화면 **************************************/
  .login-right {
    position: relative;
    width: calc(100% - 610px);
    height: 1080px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
  }
  .login-main {
    width: 480px;
  }
  .login-main h2 {
    font-size: 40px;
    line-height: 1.35;
    text-align: center;
    margin-bottom: 28px;
  }
  .login-main-h3 {
    height: 54px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login-main-h3 > h3 {
    font-size: 18px;
    color: #666;
    text-align: center;
  }
  .login-main-h3 h3 > span {
    color: #3f60cc;
  }
  .login-sns {
    text-align: center;
  }
  .login-sns > span {
    width: 72px;
    height: 72px;
    margin: 0 8px;
    display: inline-block;
  }
  .login-sns-naver {
    background-image: url(../static/img/login/btn_login_naver01.png);
  }
  .login-sns-kakao {
    background-image: url(../static/img/login/btn_login_kakao01.png);
  }
  .login-sns-facebook {
    background-image: url(../static/img/login/btn_login_facebook01.png);
  }
  .login-sns-naver:hover {
    background-image: url(../static/img/login/btn_login_naver01_hover.png);
  }
  .login-sns-kakao:hover {
    background-image: url(../static/img/login/btn_login_kakao01_hover.png);
  }
  .login-sns-facebook:hover {
    background-image: url(../static/img/login/btn_login_facebook01_hover.png);
  }
  .login-input-wrap {
    margin-top: 20px;
    width: 100%;
  }
  .login-input-wrap > span {
    display: block;
    font-size: 14px;
    color: #212121;
    font-weight: bold;
    margin-bottom: 4px;
  }
  .login-input-wrap > input {
    width: 100%;
    height: 52px;
    display: block;
    border-bottom: 1px solid #c1c1c1;
  }
  .login-input-wrap > input::placeholder {
    font-size: 16px;
    color: #c1c1c1;
  }
  .login-input-wrap > span:nth-of-type(2) {
    margin-top: 32px;
  }
  .btn_position {
    margin-top: 50px;
    display: flex;
    justify-content: center;
  }
  .login-main-bottom {
    margin-top: 42px;
    text-align: center;
  }
  .login-main-bottom > span {
    font-size: 14px;
    color: #666;
  }
  .login-main-bottom > span:nth-child(even) {
    color: #c1c1c1;
  }
  /** 우측 하단 푸터 **************************************/
  .login-footer {
    position: absolute;
    bottom: 0px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 132px;
  }
  .login-copyright {
    display: block;
    font-size: 14px;
    color: #c1c1c1;
  }
  /** 반응형 구현을 위한 미디어 쿼리 *************************/
  @media screen and (max-width: 1199px) {
    .login-left {
      display: none;
    }
    .login-right {
      width: 100%;
    }
    .login-main h2 {
      font-size: 24px;
    }
    .login-main-h3 > h3 {
      font-size: 14px;
    }
  }
</style>
