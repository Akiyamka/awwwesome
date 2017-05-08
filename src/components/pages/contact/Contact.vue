<template>
  <section>
      <div class="wrapper">
        <h1>Отправьте нам сообщение</h1>
        <aw-input placeholder="Как к вам обращаться?" v-model="test" ></aw-input>
        <p>{{ test }}</p>
      </div>
  </section>
</template>

<script src="./main.js" ></script>
<style src="./main.styl" lang="stylus"></style>
