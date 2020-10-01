<template>
  <div class="join-select-cards">
    <div class="join-select-card">
      <basic-join-select-card
        type="학생"
        description="리뷰작성과 함께 모든 선생님들의 리뷰를
        확인하실 수 있습니다."
      >
        <img
          src="/img/image/student.png"
          alt="학생 이미지"
          width="120px"
          height="85px"
        />
      </basic-join-select-card>
    </div>

    <div class="join-select-card">
      <basic-join-select-card
        type="학부모"
        description="리뷰작성과 함께 우리아이의 선생님과 
유치원, 어린이집의 리뷰를 보실 수 
있습니다."
      >
        <img
          src="/img/image/parents.png"
          alt="학부모 이미지"
          width="120px"
          height="85px"
        />
      </basic-join-select-card>
    </div>

    <div class="join-select-card">
      <basic-join-select-card
        type="선생님 / 교수님"
        description="세상 가장 쉬운 방법으로 우리 학생들과 소통을 할 수 도, 내 강의를 등록할 수도 
있습니다."
      >
        <img
          src="/img/image/teacher.png"
          alt="강사 이미지"
          width="120px"
          height="85px"
        />
      </basic-join-select-card>
    </div>

    <div>
      <basic-join-select-card
        type="학원/유치원 등 기업회원"
        description="소속 강사, 학생관리 서비스를 이용하실 수 있습니다.
  "
      >
        <img
          src="/img/image/academy.png"
          alt="학원 이미지"
          width="86px"
          height="76px"
        />
      </basic-join-select-card>
    </div>
  </div>
</template>
<script>
  import basicJoinSelectCard from "../common/join/basicJoinSelectCard.vue"
  export default {
    components: {
      "basic-join-select-card": basicJoinSelectCard
    }
  }
</script>
<style scoped>
  .join-select-cards {
    display: flex;
    justify-content: center;
    text-align: center;
  }
  .join-select-cards .join-select-card {
    margin-right: 24px;
  }
</style>
