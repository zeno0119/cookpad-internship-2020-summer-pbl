<template>
  <nuxt-link :to="path">
    <div class="tile is-child box notification is-vertical" :style="{ backgroundColor: color}">
      <div class="level">
        <div class="level-right align">
          <div class="level-item">
            <p :class="{ active: breakfast, deactive: !breakfast }" class="day" :style="style">
              朝
            </p>
            <p :class="{ active: lunch, deactive: !lunch }" class="day" :style="style">
              昼
            </p>
            <p :class="{ active: dinner, deactive: !dinner }" class="day" :style="style">
              夕
            </p>
          </div>
        </div>
      </div>
      <p class="title">
        {{ title }}
      </p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: [
    'dinner', 'breakfast', 'color', 'lunch', 'title', 'id'
  ],
  computed: {
    path () {
      return `/work/${this.id}`
    },
    style () {
      return {
        '--color': this.color
      }
    }
  }
}
</script>

<style lang="css" scoped>
:root{
  --color: var(color)
}

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

.active {
  color: var(--color);
  background-color: white;
  font-weight: bold;
}

.deactive {
  color: gray;
  background-color: gray;
}

.day {
  margin: 0em 0.5em;
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  text-align: center;
}

.align {
  align-content: flex-end;
}
</style>
