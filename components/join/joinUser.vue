<template>
  <div class="join-user-cards">
    <div class="join-user-card">
      <basic-join-user-card
        type="이메일로 회원가입"
        description="사용하는 이메일로
가입하기!"
        width="107"
      >
        <img
          src="/img/image/group-3.png"
          srcset="/img/image/group-3@2x.png 2x, /img/image/group-3@3x.png 3x"
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
        width="148"
      >
        <img
          src="/img/image/group-4.png"
          srcset="/img/image/group-4@2x.png 2x, /img/image/group-4@3x.png 3x"
          alt="naver image"
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
          src="/img/image/group-5.png"
          srcset="/img/image/group-5@2x.png 2x, /img/image/group-5@3x.png 3x"
          alt="kakaotalk image"
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
        <img src="alt" ="페이스북 로고" width="120px" height="120px" />
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
