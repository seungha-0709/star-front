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
          src="https://cdn.zeplin.io/5c9896e0ea78dc066bbc8cac/assets/C03A309E-F2D5-428D-8CAF-946453B8A771.svg"
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
          src="https://cdn.zeplin.io/5c9896e0ea78dc066bbc8cac/assets/A18A51C2-73CA-4D98-B0FD-9D120DB4C928.png"
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
          src="https://cdn.zeplin.io/5c9896e0ea78dc066bbc8cac/assets/C30E6689-3119-4347-8749-DD4ECED1C0FD.png"
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
        <img
          src="https://cdn.zeplin.io/5c9896e0ea78dc066bbc8cac/assets/55D13F21-206E-47B0-86E0-B39601AD0758.png"
          alt="facebook image"
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
