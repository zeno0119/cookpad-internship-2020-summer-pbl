const Recipes = require('./dummyRecipes')
const Works = require('./dummyWorks')
const Ingredients = require('./dummyIngredients')
const Steps = require('./dummySteps')
const Nutrients = require('./dummyNutrients')

module.exports.Menu = () => {
  return Works.Works
}

module.exports.Recipes = (el) => {
  return Recipes.dummy.filter((e) => {
    return e.work_id === parseInt(el, 10)
  })
}

module.exports.Recipe = (el) => {
  return Recipes.dummy.find((e) => {
    return e.id === parseInt(el, 10)
  })
}

module.exports.workInfo = (el) => {
  return Works.Works.find((e) => {
    return e.id === parseInt(el, 10)
  })
}

module.exports.Ingredients = (el) => {
  return Ingredients.dummy.filter((e) => {
    return e.id === parseInt(el, 10)
  })
}

module.exports.Step = (el) => {
  return Steps.dummy.filter((e) => {
    return e.id === parseInt(el, 10)
  })
}

module.exports.Nutrient = (el) => {
  return Nutrients.dummy.find((e) => {
    return e.id === parseInt(el, 10)
  })
}
