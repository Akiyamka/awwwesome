<template>
  <section>
      <div class="wrapper">
        <h1>Отправить срочную телеграмму</h1>
        <div class="row">
          <aw-input placeholder="Ваше имя" v-model="senderName" type="text"></aw-input>
          <aw-input placeholder="Ваш e-email" v-model="senderMail" type="email"></aw-input>
        </div>
        <aw-textarea placeholder="Текст сообщения" v-model="text" ></aw-textarea>
        <div class="button-row">
          <aw-button>Отправить</aw-button>
        </div>
      </div>
  </section>
</template>

<script src="./main.js" ></script>
<style src="./main.styl" lang="stylus" scoped></style>
