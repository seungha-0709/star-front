<template>
  <div class="doughnut-graph">
    <header><h1>수강 유형별 분포</h1></header>
    <main>
      <div class="graph">
        <doughnut-graph-chart :chartData="dataCollection" :options="options" />
      </div>
    </main>
  </div>
</template>

<script>
  import doughnutGraphChart from "./doughnutGraphChart.vue"

  export default {
    components: {
      doughnutGraphChart
    },
    data() {
      return {
        dataCollection: {},
        options: {
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            yAxes: [
              {
                display: false
              }
            ]
          },
          cutoutPercentage: 30,
          legend: {
            display: false
          },
          tooltips: {
            callbacks: {
              label: (tooltipItem) => {
                return tooltipItem.yLabel
              }
            }
          }
        }
      }
    },
    mounted() {
      this.fillData()
    },
    methods: {
      fillData() {
        this.dataCollection = {
          labels: ["긍정", "보통", "부정"],
          datasets: [
            {
              label: "긍정",
              backgroundColor: ["#5e3fcc", "#ff3366", "#18adde"],
              borderWidth: 1,
              borderColor: ["#ffffff"],
              data: [80, 40, 30]
            }
          ]
        }
      }
    }
  }
</script>

<style scoped>
  h1 {
    font-size: 20px;
    color: #212121;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .doughnut-graph {
    width: 303px;
    height: 337px;
    background: #fff;
    border: 1px solid #dfdfdf;
    padding: 32px;
    box-sizing: border-box;
  }
  .graph {
    width: 200px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
