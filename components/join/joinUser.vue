<template>
  <div class="join-user-cards">
    <div class="join-user-card">
      <basic-join-user-card
        type="이메일로 회원가입"
        description="사용하는 이메일로
가입하기!"
        width="107px"
      >
        <img
          src="/img/image/join_email.png"
          alt="email image"
          width="120px"
          height="120px"
        />
      </basic-join-user-card>
    </div>

    <div class="join-user-card">
      <basic-join-user-card
        type="네이버 간편회원가입"
        description="사용하는 네이버 계정으로
가입하기!"
        backgroundColor="#3ec728"
        width="148px"
      >
        <img
          src="/img/image/join_naver.png"
          alt="네이버 로고"
          width="120px"
          height="120px"
        />
      </basic-join-user-card>
    </div>

    <div class="join-user-card">
      <basic-join-user-card
        type="카카오톡 간편회원가입"
        description="사용하는 카카오톡 계정으로
가입하기!"
        backgroundColor="#fee202"
        color="#423630"
      >
        <img
          src="/img/image/join_kakao.png"
          alt="카카오톡 로고"
          width="120px"
          height="120px"
        />
      </basic-join-user-card>
    </div>

    <div>
      <basic-join-user-card
        type="페이스북 간편회원가입"
        description="사용하는 페이스북 계정으로
가입하기!"
        backgroundColor="#3a5998"
      >
        <img
          src="/img/image/join_facebook.png"
          alt="페이스북 로고"
          width="120px"
          height="120px"
        />
      </basic-join-user-card>
    </div>
  </div>
</template>
<script>
  import basicJoinUserCard from "../common/join/basicJoinUserCard.vue"
  export default {
    components: {
      "basic-join-user-card": basicJoinUserCard
    }
  }
</script>
<style scoped>
  .join-user-cards {
    display: flex;
    justify-content: center;
    text-align: center;
  }
  .join-user-cards .join-user-card {
    margin-right: 24px;
  }
</style>
