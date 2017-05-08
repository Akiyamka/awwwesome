<template>
  <div id="app">
    <header>
      <router-link to="/"><img class="logo" src="./assets/logo.svg"></router-link>
      <nav>
        <a href="#">Работы</a>
        <a href="#">Сервисы</a>
        <a class="current" href="https://unicore.by/">Блог</a>
        <router-link to="/contact">Написать нам</router-link>
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
<style src="./main.styl" lang="stylus"></style>
