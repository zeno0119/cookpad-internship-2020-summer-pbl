import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Bar,
  mixins: [reactiveProp],
  props: ['options'],
  mounted () {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderBarChart()
  },
  watch: {
    chartData () {
      this.renderBarChart()
    }
  },
  methods: {
    renderBarChart () {
      this.renderChart(this.chartData, this.options)
    }
  }
}
