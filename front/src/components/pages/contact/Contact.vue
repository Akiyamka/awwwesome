<template>
  <section>
      <div class="wrapper">
        <!-- indle state -->
        <article v-if="state === 0" class="indle-state">
          <h1>Отправить сообщение</h1>
          <div class="row">
            <aw-input placeholder="Ваше имя" v-model="senderName" type="text"></aw-input>
            <aw-input placeholder="Ваш e-email" v-model="senderMail" type="email"></aw-input>
          </div>
          <aw-textarea placeholder="Текст сообщения" v-model="text" ></aw-textarea>
          <div class="button-row">
            <router-link to="/"><aw-button alternate>Назад на главную</aw-button></router-link>
            <aw-button @click.native="send">Отправить</aw-button>
          </div>
        </article>

        <!-- wait state -->
        <article v-if="state === 1" class="wait-state">
          <h1>Отправление</h1>
          <div class="preloader"></div>
        </article>

        <!-- sucsess state -->
        <article v-if="state === 2" class="sucsess-state">
          <h1>Отправлено</h1>
          <p></p>
          <div class="button-row">
            <router-link to="/"><aw-button alternate>Вернуться на главную</aw-button></router-link>
          </div>
        </article>

        <!-- error state -->
        <article v-if="state === -1" class="error-state">
          <h1>Отправка не удалась</h1>
          <p>Попробуйте отправить позже</p>
          <div class="button-row">
            <router-link to="/"><aw-button alternate>Вернуться на главную</aw-button></router-link>
          </div>
        </article>
      </div>
  </section>
</template>

<script src="./main.js" ></script>
<style src="./main.styl" lang="stylus" scoped></style>
