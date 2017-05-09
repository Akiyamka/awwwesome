<template>
  <section>
      <div class="wrapper">
        <h1>Отправить сообщение</h1>
        <div class="row">
          <aw-input placeholder="Ваше имя" v-model="senderName" type="text"></aw-input>
          <aw-input placeholder="Ваш e-email" v-model="senderMail" type="email"></aw-input>
        </div>
        <aw-textarea placeholder="Текст сообщения" v-model="text" ></aw-textarea>
        <div class="button-row">
          <router-link to="/"><aw-button alternate>Назад на главную</aw-button></router-link>
          <aw-button>Отправить</aw-button>
        </div>
      </div>
  </section>
</template>

<script src="./main.js" ></script>
<style src="./main.styl" lang="stylus" scoped></style>
