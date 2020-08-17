 <template>
  <v-footer class="white footer" height="196">
    <div class="content">
      <div>
        <div class="logo">
          <img
            src="img/logo/invalid-name.jpg"
            srcset="img/logo/invalid-name@2x.jpg 2x, img/logo/invalid-name@3x.jpg 3x"
          />
        </div>
        <div class="sns">
          <a>
            <img src="img/sns/blog.jpg" srcset="img/sns/blog@2x.jpg 2x, img/sns/blog@3x.jpg 3x" />
          </a>
          <a>
            <img
              src="img/sns/facebook.jpg"
              srcset="img/sns/facebook@2x.jpg 2x, img/sns/facebook@3x.jpg 3x"
            />
          </a>
          <a>
            <img src="img/sns/insta.jpg" srcset="img/sns/insta@2x.jpg 2x, img/sns/insta@3x.jpg 3x" />
          </a>
          <a>
            <img
              src="img/sns/plus-friend.jpg"
              srcset="img/sns/plus-friend@2x.jpg 2x, img/sns/plus-friend@3x.jpg 3x"
            />
          </a>
        </div>
      </div>
      <div>
        <div clas="info">
          서울특별시 강남구 테헤란로 503 12F
          대표이사: 박세준
          사업자등록번호 : 328-87-00781
          통신판매업신고번호: 2017-서울강남-04601
          대표메일: support@starteacher.co.kr
          Copyright © TEvalueWise Corp. All Rights Reserved.
        </div>
        <div class="policy">
          별별선생 소개
          이용약관
          개인정보처리방침
          고객센터
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
}

.footer .content {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0px 20px;
}

.footer .content div {
  display: flex;
  justify-content: space-between;
}

.footer .content .sns a {
  margin: 0px 12px;
  align-items: center;
  display: flex;
  justify-content: center;
}
</style>
