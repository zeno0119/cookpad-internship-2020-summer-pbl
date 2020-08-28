const Recipes = require('./dummyRecipes')
const Works = require('./dummyWorks')
const Ingredients = require('./dummyIngredients')
const Steps = require('./dummySteps')
const Nutrients = require('./dummyNutrients')
const Tables = require('./dummyTables')

module.exports.Menu = () => {
  return Works.Works
}

module.exports.Recipes = (el) => {
  const recipes = Tables.dummy.filter((e) => {
    return e.work_id === parseInt(el, 10)
  })
  const res = []
  recipes.forEach((el) => {
    res.push(Recipes.dummy.find((e) => {
      return e.id === el.recipe_id
    }))
    res[res.length - 1].info = el
  })
  return res
}

module.exports.Nextwork = (el) => {
  return Works.Works.find((e) => {
    return e.prev === parseInt(el, 10)
  })
}

module.exports.Recipe = (el) => {
  return Recipes.dummy.find((e) => {
    return e.id === parseInt(el, 10)
  })
}

module.exports.workInfo = (el) => {
  const res = Works.Works.find((e) => {
    return e.id === parseInt(el, 10)
  })
  res.nextInfo = this.Nextwork(el)
  return res
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
