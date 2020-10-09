<template>
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
        <bar-graph />
        <pentagon-graph />
        <circle-graph />
      </section>
    </main>
  </div>
</template>

<script>
  import profileSide from "../../components/teacher/profileSide.vue"
  import profileSidebar from "../../components/teacher/profileSidebar.vue"
  import profileMain from "../../components/teacher/profileMain.vue"
  import totalEvaluation from "../../components/teacher/totalEvaluation.vue"
  import reviewAmount from "../../components/teacher/reviewAmount.vue"
  import barGraph from "../../components/teacher/barGraph.vue"
  import pentagonGraph from "../../components/teacher/pentagonGraph.vue"
  import circleGraph from "../../components/teacher/circleGraph.vue"

  export default {
    components: {
      profileSidebar,
      profileSide,
      profileMain,
      totalEvaluation,
      reviewAmount,
      barGraph,
      pentagonGraph,
      circleGraph
    }
  }
</script>

<style scoped>
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
</style>
