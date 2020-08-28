<template>
  <div class="container">
    <Header @search="filter" />
    <div class="tile is-ancester">
      <div v-for="item in filteredItems" :key="item.id" class="tile is-parent">
        <Work
          :id="item.id"
          :title="item.title"
          :color="item.color"
          :breakfast="item.breakfast"
          :lunch="item.lunch"
          :dinner="item.dinner"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      items: [],
      params: {
        text: ''
      },
      test: null
    }
  },
  computed: {
    filteredItems () {
      return this.items.filter((el) => {
        const word = el.title.includes(this.params.text)
        const nextWeek = el.prev === null || this.params.displaySecondWeek
        const breakfast = !this.params.requireBreakfast || el.breakfast
        const lunch = !this.params.requireLunch || el.lunch
        const dinner = !this.params.requireDinner || el.dinner
        return word && nextWeek && breakfast && lunch && dinner
      })
    }
  },
  mounted () {
    axios.get('/api/work/index').then((res) => {
      this.items = res.data
    })
  },
  methods: {
    filter (word) {
      this.params = word
    }
  }
}
</script>

<style>
</style>
