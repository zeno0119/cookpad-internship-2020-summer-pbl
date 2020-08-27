const express = require('express')
const app = express()
const stub = require('./assets/stub')

app.get('/work/:id(\\d+)', function (req, res) {
  res.send(stub.Recipes(req.params.id))
})

app.get('/work/info/:id(\\d+)', function (req, res) {
  res.send(stub.workInfo(req.params.id))
})

app.get('/work/index', function (req, res) {
  res.send(stub.Menu())
})

app.get('/recipe/:id(\\d+)', function (req, res) {
  res.send(stub.Recipe(req.params.id))
})

app.get('/recipe/nutrients/:id(\\d+)', function (req, res) {
  res.send(`レシピid ${req.params.id}の栄養素情報を返す`)
})

app.get('/recipe/ingredients/:id(\\d+)', (req, res) => {
  res.send(stub.Ingredients(req.params.id))
})

app.get('/recipe/steps/:id(\\d+)', (req, res) => {
  res.send(stub.Step(req.params.id))
})

module.exports = {
  path: '/api/',
  handler: app
}
