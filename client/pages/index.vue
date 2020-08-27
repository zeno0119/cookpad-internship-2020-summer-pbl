<template>
  <div class="container">
    <Header @search="filter" />
    <div v-for="item in filteredItems" :key="item.id">
      <Menu :id="item.id" :title="item.title" :color="item.color" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      items: [],
      word: '',
      test: null
    }
  },
  computed: {
    filteredItems () {
      return this.items.filter((el) => {
        return el.title.includes(this.word)
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
      this.word = word
    }
  }
}
</script>

<style>
</style>
