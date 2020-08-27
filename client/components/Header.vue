<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-start">
        <div class="navbar-item">
          <p class="control has-icons-left">
            <input v-model="searchWord" type="text" class="input is-rounded" placeholder="献立を検索" @keydown.enter="search">
            <span class="icon is-small is-left">
              <font-awesome-icon icon="search" />
            </span>
          </p>
        </div>
      </div>
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        :class="{ 'is-active': isActive }"
        @click="toggleMenu"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>
    <div class="navbar-menu" :class="{'is-active': isActive}">
      <div class="navbar-item" />
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      isActive: false,
      searchWord: ''
    }
  },
  methods: {
    toggleMenu (e) {
      this.isActive = !this.isActive
    },
    search () {
      this.$emit('search', this.searchWord)
    }
  }
}
</script>

<style lang="css" scoped>
.header {
  width : 50%;
  float: right;
}
</style>
