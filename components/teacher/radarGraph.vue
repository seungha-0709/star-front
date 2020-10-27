<template>
  <div class="radar-graph">
    <header><h1>세부 항목</h1></header>
    <main>
      <div class="graph">
        <radar-graph-chart :chartData="dataCollection" :options="options" />
      </div>
    </main>
  </div>
</template>

<script>
  import radarGraphChart from "./radarGraphChart.vue"

  export default {
    components: {
      radarGraphChart
    },
    data() {
      return {
        dataCollection: {},
        options: {
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            ticks: {
              display: false,
              min: 0,
              max: 100,
              stepSize: 20
            },
            xAxes: [
              {
                display: false
              }
            ],
            yAxes: [
              {
                display: false
              }
            ]
          },
          legend: {
            position: "bottom",
            labels: {
              boxWidth: 14,
              fontColor: "#666666"
            }
          }
        }
      }
    },
    created() {
      this.fillData()
    },
    methods: {
      fillData() {
        this.dataCollection = {
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
    }
  }
</script>
<style scoped>
  h1 {
    font-size: 20px;
    color: #212121;
    font-weight: bold;
    margin-bottom: 13px;
  }
  .radar-graph {
    width: 303px;
    height: 337px;
    background: #fff;
    border: 1px solid #dfdfdf;
    padding: 32px;
    box-sizing: border-box;
  }
  .graph {
    width: 220px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
