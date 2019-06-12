<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/new-contact">Add New Contact</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style scoped lang="sass">
#app
  font-family: 'Roboto', sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
#nav
  padding: 30px
  a
    font-weight: bold
    color: #3676bb
    padding: 20px
    &.router-link-exact-active
      color: #2360a1
</style>
