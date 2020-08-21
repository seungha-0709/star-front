<template>
  <div>
    <h1>랭킹산정 Logic</h1>
    <p class="policy-content">
      별별선생에서는 사용자의 의사결정에 보탬이 되기 위해 랭킹 정보를 제공하고 있습니다.
      <br />이 랭킹의 산정은 여러분이 남겨 주신 리뷰로 쌓인 DB 분석을 통해 시스템 내에서 자동적으로 이뤄지며,
      랭킹 산정 시스템을 구축한 것 외에는 랭킹 산정 과정에서 저희 별별선생이 개입하는 영역은 조직적인 조작 행위에 대한 관리 등 매우 제한적인 영역에 국한됩니다.
      강사, 학원 및 유치원·어린이집의 랭킹은 별별선생 리뷰 DB에서 일련의 분석 과정을 거쳐 추출된 하나의 수치일 뿐입니다.
      <br />별별선생의 강사 랭킹은 그 자체가 해당 강사의 시장 점유율이나 강의 매출 순위, 강의 능력, 수업의 질과 같은 절대적인 정보를 대변하는 지표가 아니라는 점을 밝힙니다.
      유치원·어린이집의 랭킹 역시 마찬가지입니다.
      별별선생에서 제공하는 랭킹 정보는 강사 및 기관을 선택할 때 참고용으로만 활용하시기 바랍니다.
    </p>

    <span class="index">A</span>
    <h2>강사 랭킹 산정 방식</h2>
    <div class="index-line"></div>
    <p class="policy-content">
      별별선생에서는 랭킹 산정을 위해 개별 강사들에 관해서 외부에서 별도로 정보를 제공 받는 것은 없습니다.
      오히려 이와 같은 제공을 가급적 받지 않기 위해 노력합니다.
      전적으로 별별선생 이용자 여러분이 남겨주신 리뷰와 평점 정보, 그 외에 우리가 별별선생 안에서 직접 얻을 수 있는 데이터에 의존하여 랭킹을 산정하고 있으며,
      구체적으로는 별별선생에 축적된 전체 DB에서 다음 각 요소들의 수치를 추출하여 랭킹 산정에 활용하고 있습니다.
    </p>
    <p class="policy-sub-content">
      - 전체 리뷰 수
      <br />- 해당 강사의 리뷰 수 및 환승 리뷰 수
      <br />- 해당 강사의 조회 수
      <br />- 해당 강사의 평점 (유의미하지 않은 리뷰는 제외) 등
    </p>
    <p class="policy-content">
      위의 요소들에는 각각 서로 다른 가중치가 부여됩니다.
      예를 들어, 리뷰 수 및 환승리뷰 수가 180의 가중치를 가지고 있다면, 리뷰 평점은 100의 가중치를 지니는 식입니다.
      각 요소들은 각각의 가중치가 반영되어 새로운 수치로 변환되며, 궁극적으로는 이 변환값을 통해 랭킹 산정을 위한 세부적인 분석이 이뤄집니다.
      이 가중치는 171명의 상세 인터뷰로 수집된 정보에서 도출된 정성지표로서, 각 요소들에 대한 가중치는 다음과 같습니다.
    </p>
    <table class="ranking-logic">
      <tr>
        <th>리뷰 수 및 환승리뷰 수</th>
        <th>리뷰 평점</th>
        <th>조회수</th>
        <th>기타 영역 합산 변환값</th>
      </tr>
      <tr>
        <td>100</td>
        <td>100</td>
        <td>100</td>
        <td>20</td>
      </tr>
    </table>
    <p class="policy-content">
      위와 같이, 랭킹 산정에는 개별 강사들 앞으로 쌓인 리뷰 수와 환승 리뷰 수가 가장 크게 반영되고 있습니다.
      참고로 리뷰 4개 미만의 강사에 대한 데이터는 랭킹 산정에 충분히 유의미한 정보를 담고 있지 않다는 판단 하에 랭킹 산정 시스템에서 자동적으로 필터링되어 제외되고 있으며,
      가중치가 반영된 각각의 개별 요소 값과 평균값 등이 결합하여 강사들의 최종 랭킹이 산정됩니다.
    </p>

    <span class="index">B</span>
    <h2>학원 랭킹</h2>
    <div class="index-line"></div>
    <p class="policy-content">
      우리는, 특히 성인 교육 시장에 대해서, 학원에 대한 평가가 가능하다고는 생각하지 않습니다.
      학원의 퀄리티는 해당 학원에 소속된 강사들의 역량으로써 결정되는 것이며, 이미 별별선생은 그 개별 선생님에 대한 평가를 진행하고 있기 때문입니다.
      따라서 저희 별별선생에서는 저희가 얻을 수 있는 정보만으로 학원 랭킹을 일렬로 세우는 것은 부적절하며, 이는 오히려 이용자들에게도 깨끗하지 못한 정보로 혼란을 줄 수 있다고 판단하였습니다.
      다만, "그래도 어떤 학원에서 어떤 과목의 수업을 들을 수 있는지는 알고 싶어요."라는 사용자의 요청에 따라 우리 별별선생에서는 소속된 강사 수가 많은 순서대로 화면에 노출시키고 있습니다.
      학원이 화면에 노출되는 순서는 별도의 알고리즘이나 저희 별별선생 내부의 주관적인 판단이 작용한 것이 아닌, 단순한 “보유 강사 수”에 따른 것임을 알려드립니다.
    </p>

    <span class="index">C</span>
    <h2>어린이집 · 유치원 랭킹 산정 방식</h2>
    <div class="index-line"></div>
    <p class="policy-content">
      전적으로 정성적인 영역으로써 평가될 수밖에 없는 강사와는 달리,
      유치원의 경우에는 『어린이집-유치원 통합정보공시』 사이트 등 국가에서 제공되는 공공 데이터를 통해 평가에 활용할 수 있는 객관적 지표를 많이 얻을 수 있습니다.
      예를 들면 소속 교사 수, 실내 면적, 교사 1인당 담당하는 유아 수 등과 같은 수치들이 이에 해당합니다.
      이러한 지표들은 실제로 부모님께서 아이들의 유치원을 선택하실 때 참고할 만한 정보이기도 합니다.
      우리 별별선생에서는 공공 데이터에서 다음 항목들을 추출하여 유치원 랭킹 산정에 활용하고 있습니다.
    </p>
    <p class="policy-sub-content">
      - 교사 1인당 유아 수, 전체 유아 수
      <br />- 교사 연차
      <br />- 정원율
      <br />- 면적 당 CCTV
      <br />- 소속 교사 수
      <br />- 놀이터 및 통원 차량 존재 여부
      <br />- 실내 면적
    </p>
    <p class="policy-content">
      유치원 랭킹은 위 지표들에 대한 각각의 랭킹을 매기고,
      이후 별별선생에 축적된 DB를 통해 전체 리뷰 평점 평균, 리뷰 개수에 대한 랭킹을 매긴 후 이를 취합하는 방식으로 산정됩니다.
    </p>
  </div>
</template>

<style scoped>
h1 {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 40px;
}
h2 {
  margin-top: 35px;
  margin-bottom: 12px;
  display: inline-block;
  font-size: 16px;
  color: #212121;
  text-align: left;
}
.policy-content {
  font-size: 14px;
  text-align: left;
}
.policy-sub-content {
  font-size: 14px;
  color: #666666;
  text-align: left;
}

/* 랭킹 산정 기준 테이블 ---------------------------- */
.ranking-logic {
  border: 1px solid #dfdfdf;
  border-collapse: collapse;
  margin-bottom: 16px;
}
.ranking-logic th {
  border: 1px solid #dfdfdf;
  width: 284px;
  height: 36px;
  background-color: #f6f8fc;
  font-size: 14px;
  color: #666666;
  padding-top: 8px;
  padding-bottom: 8px;
  text-align: center;
}
.ranking-logic td {
  border: 1px solid #dfdfdf;
  text-align: center;
  font-weight: bold;
  padding-top: 8px;
  padding-bottom: 8px;
}

/* 기타 ------------------------------------------- */

.index {
  display: inline-block;
  width: 18px;
  height: 18px;
  border-radius: 9px;
  background-color: #dfdfdf;
  color: #5d7ee9;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  margin-right: 4px;
}
.index-line {
  border-bottom: 1px solid #dfdfdf;
  margin-bottom: 12px;
}
</style>