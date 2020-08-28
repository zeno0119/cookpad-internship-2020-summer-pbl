<template>
  <nuxt-link :to="path">
    <div class="tile is-child is-12 box notification is-vertical" :style="{ backgroundImage: `url(${imgpath})` }">
      <p class="title">
        {{ title }}
      </p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: [
    'title', 'id', 'description', 'imgpath'
  ],
  computed: {
    path () {
      return `/recipe/${this.id}`
    }
  }
}
</script>

<style lang="css" scoped>
.title {
  color: #ffffff;
  text-align: right;
  padding-top:3.0em;
  line-break: strict;
  word-break: keep-all;
}

.box {
  border-radius: 1.0em;
  background-position: center;
  background-size: cover;
}
</style>
