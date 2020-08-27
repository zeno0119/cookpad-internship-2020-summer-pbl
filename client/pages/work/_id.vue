<template>
  <div>
    <div class="container">
      <div class="title">
        <h1 class="title">
          {{ info.title }}
        </h1>
      </div>
      <p class="description">
        {{ info.description }}
      </p>
    </div>
    <bar-chart class="chart" :datacollection="chartData" :options="options" />
    <div v-for="recipe in recipes" :key="recipe.id">
      <Recipe :id="recipe.id" :title="recipe.title" :description="recipe.description" :imgpath="recipe.imgs" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import BarChart from '../../components/NutritionChart'

export default {
  components: {
    BarChart
  },
  data () {
    return {
      id: null,
      recipes: [],
      info: {
        title: undefined,
        description: undefined
      },
      chartData: null,
      options: {
        scales: {
          yAxes: [{
            ticks: {
              // 目盛にドル記号を入れる
              callback (value, index, values) {
                return value + '%'
              },
              min: 0,
              max: 160
            }
          }]
        },
        legend: {
          display: false
        }
      }
    }
  },
  mounted () {
    this.id = this.$route.params.id
    axios.get(`/api/work/${this.id}`)
      .then((res) => {
        this.recipes = res.data
      })
    axios.get(`/api/work/info/${this.id}`)
      .then((res) => {
        this.info = res.data
      })
    // eslint-disable-next-line quotes
    axios.get(`/api/recipe/nutrients/1`)
      .then((res) => {
        const data = res.data.data
        const color = []
        data.forEach((el) => {
          if (el > 100) {
            color.push('palegreen')
          } else if (el < 100) {
            color.push('tomato')
          } else {
            color.push('gainsboro')
          }
        })
        this.chartData = {
          datasets: [{ data, backgroundColor: color }],
          labels: ['protein', 'sugar', 'vitaminB', 'vitaminC', 'vitaminD', 'valine', 'leucine', 'isoleucine', 'zinc', 'iron']
        }
      })
  },
  validate ({ params }) {
    // 数値でなければならない
    if (/^\d+$/.test(params.id)) {
      return params.id
    }
  }
}
</script>

<style lang="css" scoped>
  div.title {
    margin: 0.5em;
  }

  .container {
    text-align: center;
    align-content: center;
  }

  .chart {
    margin: 0.5em;
  }
</style>
