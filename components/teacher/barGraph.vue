<template>
  <div class="bar-graph">
    <header>
      <h1>{{ title }}</h1>
    </header>
    <main>
      <bar-graph-chart :chartData="dataCollection" :options="options" />
    </main>
  </div>
</template>

<script>
  import barGraphChart from "./barGraphChart.vue"

  export default {
    props: ["title"],
    components: {
      barGraphChart
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
                ticks: {
                  stepSize: 10,
                  min: 0,
                  max: 100
                }
              }
            ]
          },
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
    created() {
      this.fillData()
    },
    methods: {
      fillData() {
        this.dataCollection = {
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
  .bar-graph {
    width: 303px;
    height: 337px;
    background: #fff;
    border: 1px solid #dfdfdf;
    padding: 32px;
    box-sizing: border-box;
  }
</style>
