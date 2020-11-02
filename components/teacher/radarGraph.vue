<template>
  <div class="radar-graph">
    <header>
      <h1>{{ title }}</h1>
    </header>
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
    props: ["title", "graphData"],
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
