<template>
  <div id="app">
    <header>
      <router-link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 37.33" class="logo">
          <path class="logo-main" d="M133.33,0V37.33H32V0ZM64,5.33H58.67V26.67H53.33V21.33H48v5.33H42.67V5.33H37.33V26.67h5.33V32H48V26.67h5.33V32h5.33V26.67H64Zm32,0H90.67V26.67H85.33V21.33H80v5.33H74.67V5.33H69.33V26.67h5.33V32H80V26.67h5.33V32h5.33V26.67H96Zm32,0h-5.33V26.67h-5.33V21.33H112v5.33h-5.33V5.33h-5.33V26.67h5.33V32H112V26.67h5.33V32h5.33V26.67H128Z" />
          <path class="logo-second" d="M21.33,5.33H0V32H5.33V26.67h16V32h5.33V5.33Zm0,16h-16V10.67h16Z" />
          <polygon class="logo-second" points="160 5.33 144 5.33 138.67 5.33 138.67 26.67 138.67 32 160 32 160 26.67 144 26.67 144 21.33 160 21.33 160 16 144 16 144 10.67 160 10.67 160 5.33" />
          <polygon class="logo-second" points="186.67 5.33 170.67 5.33 165.33 5.33 165.33 16 165.33 21.33 181.33 21.33 181.33 26.67 165.33 26.67 165.33 32 186.67 32 186.67 26.67 186.67 16 181.33 16 170.67 16 170.67 10.67 186.67 10.67 186.67 5.33" />
          <path class="logo-second" d="M208,5.33H192V32h21.33V5.33Zm0,21.33H197.33v-16H208Z" />
          <polygon class="logo-second" points="245.33 5.33 240 5.33 240 10.67 234.67 10.67 234.67 16 229.33 16 229.33 10.67 224 10.67 224 5.33 218.67 5.33 218.67 32 224 32 224 16 229.33 16 229.33 21.33 234.67 21.33 234.67 16 240 16 240 32 245.33 32 245.33 5.33" />
          <polygon class="logo-second" points="272 5.33 256 5.33 250.67 5.33 250.67 26.67 250.67 32 272 32 272 26.67 256 26.67 256 21.33 272 21.33 272 16 256 16 256 10.67 272 10.67 272 5.33" />
        </svg>
      </router-link>
      <nav>
        <a href="#" class="disabled">Работы</a>
        <a href="#" class="disabled">Сервисы</a>
        <a class="current" href="https://unicore.by/">Блог</a>
        <router-link to="/contact">Написать нам</router-link>
      </nav>
    </header>
    <transition name="fade" mode="out-in">
      <article>
        <router-view></router-view>
      </article>
    </transition>
    <div class="back layer">
      <div class="overlay"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style src="./main.styl" lang="stylus"></style>
