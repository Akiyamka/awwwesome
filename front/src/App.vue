<template>
  <div id="app">
    <!---->
    <header>
      <img class="logo" src="./assets/logo.svg">
      <nav>
        <a href="#">Разделы</a>
        <a href="#">Контакты</a>
        <a class="current" href="#">Контакты</a>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang='stylus' >
html
body
  margin: 0
  padding: 0
  height: 100%

#app
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%
</style>

<style lang='stylus' scoped>
header
  background: #140805
  font-size: 0
  display: flex
  flex-flow: row wrap
  justify-content: space-between
  align-items: center
  position: absolute
  width: 100%
  .logo
    height: 34px
    display: inline-block
    vertical-align: middle
    margin: 30px
  nav
    display: inline-block
    font-size: 16px
    vertical-align: -30%
    margin: 30px
    a
      color: white
      font: 16px/20px 'hooge 05_55 Cyr2', sans-serif
      text-decoration: none
      padding: .5em 1em
      &.current
        color: #FF4800
      &:hover
        background: #FF4800
        color: #140805
      &:active
        color: white
</style>
