<template>
  <div>
    <top-banner />
    <section class="top">
      <article>
        <soccer-field />
        <chat-board />
        <info-board />
      </article>
      <article>
        <now-review />
        <ranking />
      </article>
    </section>
    <section class="middle-banner">
      <middle-banner />
    </section>
    <section class="middle">
      <article>
        <middle-left-banner />
        <teacher-in-press />
      </article>
      <article>
        <now-question />
      </article>
    </section>
    <section class="calendar">
      <calendar />
    </section>
  </div>
</template>

<script>
  import topBanner from "../../components/teacherMain/topBanner.vue"
  import soccerField from "../../components/teacherMain/soccerField.vue"
  import chatBoard from "../../components/teacherMain/chatBoard.vue"
  import infoBoard from "../../components/teacherMain/infoBoard.vue"
  import nowReview from "../../components/teacherMain/nowReview.vue"
  import ranking from "../../components/teacherMain/ranking.vue"
  import middleBanner from "../../components/teacherMain/middleBanner.vue"
  import middleLeftBanner from "../../components/teacherMain/middleLeftBanner.vue"
  import nowQuestion from "../../components/teacherMain/nowQuestion.vue"
  import calendar from "../../components/teacherMain/calendar.vue"

  export default {
    components: {
      topBanner,
      soccerField,
      chatBoard,
      infoBoard,
      nowReview,
      ranking,
      middleBanner,
      middleLeftBanner,
      nowQuestion,
      calendar
    }
  }
</script>

<style scoped>
  section.top {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
  section.middle-banner {
    width: 1200px;
    margin: 8px auto;
  }
  section.middle {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
  section.calendar {
    width: 1200px;
    margin: 0 auto;
  }
</style>
