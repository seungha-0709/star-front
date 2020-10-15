<template>
  <v-footer class="white footer" height="196px">
    <div class="content">
      <div class="logo-sns-box">
        <div class="logo">
          <img
            src="/img/logo/invalid-name.jpg"
            srcset="
              /img/logo/invalid-name@2x.jpg 2x,
              /img/logo/invalid-name@3x.jpg 3x
            "
          />
        </div>
        <div class="sns">
          <a>
            <img
              src="/img/sns/blog.jpg"
              srcset="/img/sns/blog@2x.jpg 2x, /img/sns/blog@3x.jpg 3x"
            />
          </a>
          <a>
            <img
              src="/img/sns/facebook.jpg"
              srcset="/img/sns/facebook@2x.jpg 2x, /img/sns/facebook@3x.jpg 3x"
            />
          </a>
          <a>
            <img
              src="/img/sns/insta.jpg"
              srcset="/img/sns/insta@2x.jpg 2x, /img/sns/insta@3x.jpg 3x"
            />
          </a>
          <a>
            <img
              src="/img/sns/plus-friend.jpg"
              srcset="
                /img/sns/plus-friend@2x.jpg 2x,
                /img/sns/plus-friend@3x.jpg 3x
              "
            />
          </a>
        </div>
      </div>
      <div>
        <div class="infos">
          <div>
            서울특별시 강남구 테헤란로 503 12F
            <span class="division-line" />
            대표이사: 박세준
            <span class="division-line" />
            사업자등록번호 : 328-87-00781
          </div>
          <div>
            통신판매업신고번호: 2017-서울강남-04601
            <span class="division-line" />
            대표메일: support@starteacher.co.kr
          </div>
          <div class="policy">
            Copyright © TEvalueWise Corp. All Rights Reserved.
            <ul>
              <li>
                <a href="#">별별선생 소개</a>
                <span class="division-line" />
              </li>
              <li>
                <a href="#">이용약관</a>
                <span class="division-line" />
              </li>
              <li>
                <a href="#">개인정보처리방침</a>
                <span class="division-line" />
              </li>
              <li>
                <a href="#">고객센터</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({})
  }
</script>

<style scoped>
  .footer {
    border-top: 1px solid #dfdfdf !important;
    margin-top: 120px;
  }

  .footer .content {
    width: 1240px;
    margin: 0 auto;
    padding: 0px 20px;
  }

  .footer .content .logo-sns-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .footer .content .sns {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .footer .content .sns a {
    margin: 0px 12px;
  }

  .footer .content .sns a:last-child {
    margin-right: 0;
  }

  .footer .infos {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    color: #666;
  }

  .footer .infos > div {
    margin-top: 4px;
  }

  .footer .division-line {
    display: inline-block;
    width: 1px;
    height: 10px;
    background-color: #dfdfdf;
    margin: 0 8px;
  }

  .footer .policy {
    display: flex;
    justify-content: space-between;
  }

  .footer .policy ul {
    display: flex;
  }

  .footer .policy ul li {
    display: flex;
    align-items: center;
  }

  .footer .policy ul li a {
    font-size: 14px;
    color: #666;
    text-decoration: none;
  }
</style>
