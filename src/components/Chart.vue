<template>
  <div class="small">
    <h1 class="mob-chart-title">Подписчики</h1>
    <line-chart :width="700" :height="280" :chart-data="datacollection" :options="options"></line-chart>
  </div>
</template>

<script>
  import LineChart from './chart.js'
  import {mapState} from 'vuex';

  export default {
    components: {
      LineChart
    },

    data () {
      return {
        datacollection: {
            data: this.graphData
        },

        options: {
                     legend: {
            display: false
         },
         tooltips: {
            enabled: false
         }
        },
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
        fillData () {
        this.datacollection = {
          labels: ['1 day', '2 day', '3 day', '4 day', '5 day', '6 day', '7 day'],
          datasets: [
            {
              label: '10',
              backgroundColor: 'rgba(112, 69, 196, 0.4)',
              borderWidth: '2',
              borderColor: 'rgba(112, 69, 196, 1)',
              data: this.graphData,
            }, 
          ]
        }
      },
    },

    computed: {
      ...mapState(['graphData', 'moneyCounter'])
    },

    watch: {
      moneyCounter() {
        this.fillData();
      }
    }
}

</script>

<style>
  .small {
    max-width: 700px;
    border: 1px solid #E2E5EE;
    box-sizing: border-box;
    border-radius: 6px;
    padding: 40px 20px;
    margin: 40px 0;
  }

  .mob-chart-title {
    display: none;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    font-family: 'PT Sans', sans-serif;
  }

  @media (max-width: 767px) {
    .mob-chart-title {
      display: flex;
    }

    .small {
      max-width: 100%;
      padding: 10px 20px 20px 20px;
      margin: 9px 0px 30px 0px;
    }

    canvas {
      width: calc(100% - 40px) !important;
    }
  }
</style>