<template>
  <div>
    <div class="menu" :style="{ backgroundImage: `url(${recipe.imgs})` }">
      <h1 class="title">
        {{ recipe.title }}
      </h1>
    </div>
    <div>
      {{ recipe.description }}
    </div>
    <div class="ingredients">
      <p class="recipe-bar">
        材料
      </p>
      <li v-for="ingredient in ingredients" :key="ingredient.ingredient" class="list">
        {{ ingredient.ingredient }},
        {{ ingredient.number + ingredient.prefix }}
      </li>
    </div>
    <div class="recipe">
      <p class="recipe-bar">
        レシピ
      </p>
      <li v-for="step in steps" :key="step.index" class="list">
        {{ step.index }},
        {{ step.text }}
      </li>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      id: undefined,
      recipe: [],
      ingredients: [],
      steps: []
    }
  },
  mounted () {
    this.id = this.$route.params.id
    axios.get(`/api/recipe/${this.id}`)
      .then((res) => {
        this.recipe = res.data
      })
    axios.get(`/api/recipe/ingredients/${this.id}`)
      .then((res) => {
        this.ingredients = res.data
      })
    axios.get(`/api/recipe/steps/${this.id}`)
      .then((res) => {
        this.steps = res.data
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
  .menu {
    text-align: right;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  h1.title {
    padding: 4.0em 0.5em 0.5em 0.5em;
    color: white;
  }

  .recipe-bar {
    text-align: center;
    border: solid 1px;
    border-color: #c1ffff;
    background-color: #ccffff;
  }

  .list {
    padding: 0.1em;
    border-bottom: 1px solid #c1ffff
  }
</style>
