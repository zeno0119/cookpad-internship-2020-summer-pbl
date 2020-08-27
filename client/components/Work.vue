<template>
  <nuxt-link :to="path">
    <div class="tile is-child box notification is-vertical" :style="{ backgroundColor: color}">
      <p class="title">
        {{ title }}
      </p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: [
    'dinner', 'breakfast', 'color', 'lanch', 'title', 'id'
  ],
  computed: {
    path () {
      return `/work/${this.id}`
    }
  }
}
</script>

<style lang="css" scoped>
.title {
  color: #ffffff;
  text-align: left;
  padding-top:3.0em;
}

.box {
  border-radius: 1.0em;
}
</style>
