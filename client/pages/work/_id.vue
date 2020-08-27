<template>
  <div>
    <div class="container" :style="{ backgroundColor: info.color }">
      <div class="title">
        <h1 class="title">
          {{ info.title }}
        </h1>
      </div>
      <p class="description">
        {{ info.description }}
      </p>
    </div>
    <div class="container" :style="{ backgroundColor: info.color }">
      <div class="title">
        <h1 class="title">
          必要な材料
        </h1>
      </div>
      <p v-for="(value, key, index) in ingredients" :key="index" class="description">
        {{ key }}, {{ value }}
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
      ingredients: {},
      info: {
        title: undefined,
        description: undefined,
        color: '#ffffff'
      },
      data: [],
      options: {
        scales: {
          yAxes: [{
            ticks: {
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
  computed: {
    chartData () {
      const color = []
      this.data.forEach((el) => {
        if (el > 100) {
          color.push('palegreen')
        } else if (el < 100) {
          color.push('tomato')
        } else {
          color.push('gainsboro')
        }
      })
      return {
        datasets: [{ data: this.data, backgroundColor: color }],
        labels: ['protein', 'sugar', 'vitaminB', 'vitaminC', 'vitaminD', 'valine', 'leucine', 'isoleucine', 'zinc', 'iron']
      }
    }
  },
  mounted () {
    this.id = this.$route.params.id
    // eslint-disable-next-line prefer-const
    let data = []
    axios.get(`/api/work/${this.id}`)
      .then((res) => {
        this.recipes = res.data
        for (let i = 0; i < 10; i++) {
          data[i] = 0
        }
      })
    axios.get(`/api/work/info/${this.id}`)
      .then((res) => {
        this.info = res.data
      })
    axios.get(`/api/work/nutrients/${this.id}`)
      .then((res) => {
        this.data = res.data
      })
    axios.get(`/api/work/ingredients/${this.id}`)
      .then((res) => {
        this.ingredients = res.data
      })
    // eslint-disable-next-line quotes
  },
  methods: {
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
    margin: 0em 0.5em;
  }

  .container {
    text-align: center;
    align-content: center;
  }

  .chart {
    margin: 0.5em;
  }

  h1.title {
    padding: 0.5em 0em;
    color: white;
  }

  .description {
    color: white;
    padding: 0.5em;
  }
</style>
