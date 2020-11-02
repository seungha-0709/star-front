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
    props: ["title", "graphData"],
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
        this.dataCollection = this.graphData
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
