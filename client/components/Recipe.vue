<template>
  <nuxt-link :to="path">
    <div class="tile is-child is-12 box notification is-vertical" :style="{ backgroundImage: `url(${imgpath})` }">
      <p class="day">
        {{ info.day }}日目 {{ when(info.when) }}
      </p>
      <p class="title">
        {{ title }}
      </p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: [
    'title', 'id', 'description', 'imgpath', 'info'
  ],
  computed: {
    path () {
      return `/recipe/${this.id}`
    }
  },
  methods: {
    when (el) {
      if (el === 'breakfast') { return '朝' }
      if (el === 'lunch') { return '昼' }
      if (el === 'dinner') { return '夜' }
    }
  }
}
</script>

<style lang="css" scoped>
.title {
  color: #ffffff;
  text-align: right;
  line-break: strict;
  word-break: keep-all;
  position: absolute;
  right: 0.5em;
  bottom: 0.5em;
}

.box {
  position: relative;
  border-radius: 1.0em;
  height: 12.0em;
  background-position: center;
  background-size: cover;
}

.day {
  color: white;
  text-align: right;
  position: absolute;
  font-size: 1.25em;
  right: 0.75em;
  top: 0.75em;
}
</style>
