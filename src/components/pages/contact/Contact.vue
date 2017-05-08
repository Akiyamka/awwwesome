<template>
  <section>
      <div class="wrapper">
        <h1>Задавайте ваши ответы</h1>
        <aw-input placeholder="Как Вас величать" v-model="senderName" type="text"></aw-input>
        <aw-input placeholder="Ваш e-email" v-model="senderMail" type="email"></aw-input>
        <aw-textarea placeholder="Текст сообщения" v-model="text" ></aw-textarea>
      </div>
  </section>
</template>

<script src="./main.js" ></script>
<style src="./main.styl" lang="stylus"></style>
