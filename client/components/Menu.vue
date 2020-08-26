<template>
  <div class="menu" :style="{ backgroundColor: color}">
    <p class="title">
      {{ title }}
    </p>
  </div>
</template>

<script>
export default {
  props: [
    'dinner', 'breakfast', 'color', 'lanch', 'title'
  ]
}
</script>

<style lang="css" scoped>
  .title{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 2.0em;
    display: flex;
    align-items: center;
    text-align: right;

    color: #000000;
  }
  .menu {
    margin: 0.5em;
  }
</style>
