<template>
  <section id="hero">
    <div class="wrapper">
      <div class="half">
        <!--<h1> Кодим крутые штуки</h1>-->
      </div>

    <nav class="skills">

      <navblock v-for="skill, key in skills" :key="key" :elemId="key">
        <header slot="header"> {{ skill.header }} </header>
        <article slot="article" v-html="skill.content"> </article>
      </navblock>

    </nav>
    </div>

  </section>
</template>

<script src="./main.js" ></script>
<style src="./main.styl" lang="stylus" scoped></style>
