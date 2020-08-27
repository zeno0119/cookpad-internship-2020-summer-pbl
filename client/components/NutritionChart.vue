<template>
  <div class="small">
    <bar-chart :chart-data="datacollection" />
  </div>
</template>

<script>
import BarChart from '../assets/BarChart.js'

export default {
  components: {
    BarChart
  },
  data () {
    return {
    }
  },
  props: ['datacollection']
}
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>
