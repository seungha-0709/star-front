<template>
  <div class="background">
    <top-banner />
    <div class="total-wrap">
      <div>
        <header>
          <teacher-top @popup="onSubjectPopUp" />
        </header>
        <div class="teacher-wrap">
          <aside>
            <section>
              <profile-side />
            </section>
            <section>
              <profile-sidebar />
            </section>
          </aside>
          <main>
            <section>
              <profile-main />
            </section>
            <section>
              <total-evaluation />
              <review-amount />
            </section>
            <section>
              <bar-graph :title="titleData[0]" :graphData="barData" />
              <radar-graph :title="titleData[1]" :graphData="radarData" />
              <doughnut-graph :title="titleData[2]" :graphData="doughnutData" />
            </section>
            <section>
              <review-keyword />
            </section>
            <section>
              <review-content />
            </section>
            <section>
              <banner />
            </section>
            <section>
              <review-list />
              <teacher-in-press />
            </section>
          </main>
        </div>
      </div>
      <div class="right-banner-position">
        <right-banner />
      </div>
    </div>
    <div class="pop-up-subject" v-if="isSubjectPopUp">
      <div class="popup-header">
        <h2>강의 전체보기</h2>
        <x-icon size="1.5x" class="x-icon" @click="onSubjectPopUp"></x-icon>
      </div>
      <div class="button-wrap">
        <div v-for="(subject, index) in subjects" :key="index">
          <div class="button-position">
            <basic-button
              width="105px"
              height="42px"
              borderRadius="4px"
              fontSize="14px"
              :borderColor="index === 0 ? '#5d7ee9' : '#dfdfdf'"
              :backgroundColor="index === 0 ? '#5d7ee9' : '#ffffff'"
              :color="index === 0 ? '#ffffff' : '#666666'"
              :fontWeight="index === 0 ? 'bold' : 'normal'"
              :text="subject.title"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import topBanner from "../../components/teacher/topBanner.vue"
  import rightBanner from "../../components/teacher/rightBanner.vue"
  import teacherTop from "../../components/teacher/teacherTop.vue"
  import profileSide from "../../components/teacher/profileSide.vue"
  import profileSidebar from "../../components/teacher/profileSidebar.vue"
  import profileMain from "../../components/teacher/profileMain.vue"
  import totalEvaluation from "../../components/teacher/totalEvaluation.vue"
  import reviewAmount from "../../components/teacher/reviewAmount.vue"
  import barGraph from "../../components/teacher/barGraph.vue"
  import radarGraph from "../../components/teacher/radarGraph.vue"
  import doughnutGraph from "../../components/teacher/doughnutGraph.vue"
  import reviewKeyword from "../../components/teacher/reviewKeyword.vue"
  import reviewContent from "../../components/teacher/reviewContent.vue"
  import banner from "../../components/teacher/banner.vue"
  import reviewList from "../../components/teacher/reviewList.vue"
  import teacherInPress from "../../components/teacher/teacherInPress.vue"
  import basicButton from "../../components/common/basicButton.vue"
  import { XIcon } from "vue-feather-icons"

  export default {
    data() {
      return {
        titleData: ["리뷰 분포", "세부 항목", "수강 유형별 분포"],
        isSubjectPopUp: false,
        subjects: [
          {
            title: "Toeic RC"
          },
          {
            title: "Toeic LC"
          },
          {
            title: "OPIc"
          },
          {
            title: "Toeic Speaking"
          }
        ],
        doughnutData: {
          labels: ["실강", "인강", "둘다"],
          datasets: [
            {
              label: "긍정",
              backgroundColor: ["#5e3fcc", "#ff3366", "#18adde"],
              borderWidth: 1,
              borderColor: ["#ffffff"],
              data: [80, 40, 30]
            }
          ]
        },
        barData: {
          labels: ["긍정", "보통", "부정"],
          datasets: [
            {
              label: "긍정",
              backgroundColor: [
                "rgba(63, 96, 204, 0.5)",
                "rgba(24, 173, 222, 0.4)",
                "rgba(255, 51, 102, 0.5)"
              ],
              borderWidth: 1,
              borderColor: ["#3f60cc", "#18adde", "#ff3366"],
              data: [80, 40, 30]
            }
          ]
        },
        radarData: {
          labels: ["강의몰입도", "유머", "질의응답", "이해도", "암기법"],
          datasets: [
            {
              label: "오로라",
              backgroundColor: ["rgba(93, 126, 233, 0.3)"],
              borderWidth: 1,
              borderColor: ["#3f60cc"],
              data: [43, 40, 55, 44, 51]
            },
            {
              label: "과목평균",
              backgroundColor: ["rgba(255, 51, 102, 0.2)"],
              borderWidth: 1,
              borderDash: [5],
              borderColor: ["#ff3366"],
              data: [50, 50, 50, 50, 50]
            }
          ]
        }
      }
    },
    components: {
      topBanner,
      rightBanner,
      teacherTop,
      profileSidebar,
      profileSide,
      profileMain,
      totalEvaluation,
      reviewAmount,
      barGraph,
      radarGraph,
      doughnutGraph,
      reviewKeyword,
      reviewContent,
      banner,
      reviewList,
      teacherInPress,
      basicButton,
      XIcon
    },
    methods: {
      onSubjectPopUp() {
        this.isSubjectPopUp = !this.isSubjectPopUp
      }
    }
  }
</script>

<style scoped>
  .total-wrap {
    width: 1200px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
  }
  .teacher-wrap {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  main {
    width: 924px;
    margin: 0;
    padding: 0;
  }
  section {
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
  }
  aside {
    margin-right: 16px;
  }
  .right-banner-position {
    margin-left: 16px;
  }
  .pop-up-subject {
    width: 864px;
    background: #fff;
    position: absolute;
    z-index: 10;
    top: 230px;
    left: 250px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
    padding: 24px;
  }
  .pop-up-subject h2 {
    font-size: 18px;
    color: #212121;
    font-weight: bold;
    margin-bottom: 12px;
  }
  .popup-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .button-wrap {
    display: flex;
  }
  .button-position {
    margin-right: 12px;
  }
</style>
