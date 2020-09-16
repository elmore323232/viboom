import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ['options', 'chartData'],
  mounted () {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.rChart()
  },

  data() {
    return {
    }
  },

  methods: {
    rChart() {
      this.renderChart(this.chartData, this.options)
    }
  },

  watch: {
    data() {

    }
  }
  
}