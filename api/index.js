const express = require('express')
const app = express()
const stub = require('./assets/stub')

app.get('/works/:id(\\d+)', function (req, res) {
  res.send(`ワークid ${req.params.id}のレシピが帰ってくる`)
})

app.get('/works/index', function (req, res) {
  res.send(stub.Menu())
})

app.get('/recipes/index', function (req, res) {
  res.send('一覧をjsonで返す')
})

app.get('/recipes/:id(\\d+)', function (req, res) {
  res.send(`レシピid ${req.params.id}のレシピを返す`)
})

app.get('/recipes/:id(\\d+)/nutrient', function (req, res) {
  res.send(`レシピid ${req.params.id}の栄養素情報を返す`)
})

module.exports = {
  path: '/api/',
  handler: app
}
