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
    <div>
      栄養のグラフが入るところ
    </div>
    <div v-for="recipe in recipes" :key="recipe.id">
      <Recipe :id="recipe.id" :title="recipe.title" :description="recipe.description" :imgpath="recipe.imgs" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      id: undefined,
      recipes: [],
      info: {
        title: undefined,
        description: undefined
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
</style>
