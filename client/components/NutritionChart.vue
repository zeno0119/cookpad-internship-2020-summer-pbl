<template>
  <div class="small">
    <bar-chart style="chart" :chart-data="datacollection" :options="options" :height="250" :width="350" />
  </div>
</template>

<script>
import BarChart from '../assets/BarChart.js'

export default {
  components: {
    BarChart
  },
  props: ['datacollection', 'options'],
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
