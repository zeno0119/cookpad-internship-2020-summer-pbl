<template>
  <nuxt-link :to="path">
    <div class="menu">
      <p class="title">
        {{ title }}
      </p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: [
    'title', 'id', 'description'
  ],
  computed: {
    path () {
      return `/recipe/${this.id}`
    }
  }
}
</script>

<style lang="css" scoped>
  .title{
    padding: 4.0em 0.5em 0.5em 0.5em;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 2.0em;
    align-items: center;
    color: #ffffff;
  }
  .menu {
    border-radius: 1.0em;
    margin: 0.5em;
    text-align: right;
    background-image: url('~@/assets/demo/demo.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
</style>
