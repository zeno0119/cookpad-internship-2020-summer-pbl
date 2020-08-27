const express = require('express')
const app = express()
const stub = require('./assets/stub')

app.get('/work/:id(\\d+)', function (req, res) {
  res.send(stub.Recipes(req.params.id))
})

app.get('/work/info/:id(\\d+)', function (req, res) {
  res.send(stub.workInfo(req.params.id))
})

app.get('/work/index', (req, res) => {
  res.send(stub.Menu())
})

app.get('/work/nutrients/:id(\\d)+', (req, res) => {
  const recipe = stub.Recipes(req.params.id)
  const nutrients = Array(10).fill(0)
  recipe.forEach((el) => {
    const nutrient = stub.Nutrient(el.id)
    for (let i = 0; i < nutrient.data.length; i++) {
      nutrients[i] += nutrient.data[i] / recipe.length
    }
  })
  res.send(nutrients)
})

app.get('/recipe/:id(\\d+)', function (req, res) {
  res.send(stub.Recipe(req.params.id))
})

app.get('/recipe/nutrients/:id(\\d+)', function (req, res) {
  res.send(stub.Nutrient(req.params.id))
})

app.get('/recipe/ingredients/:id(\\d+)', (req, res) => {
  res.send(stub.Ingredients(req.params.id))
})

app.get('/work/ingredients/:id(\\d+)', (req, res) => {
  // workIdに対して原材料を合成するためのエンドポイント
  const recipe = stub.Recipes(req.params.id)
  const ingredients = {}
  recipe.forEach((el) => {
    const ingredient = stub.Ingredients(el.id)
    for (let i = 0; i < ingredient.length; i++) {
      ingredients[ingredient[i].ingredient] = 0
    }
    for (let i = 0; i < ingredient.length; i++) {
      ingredients[ingredient[i].ingredient] += ingredient[i].number
    }
  })
  res.send(ingredients)
})

app.get('/recipe/steps/:id(\\d+)', (req, res) => {
  res.send(stub.Step(req.params.id))
})
module.exports = {
  path: '/api/',
  handler: app
}
