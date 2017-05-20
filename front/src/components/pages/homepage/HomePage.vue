<template>
  <section id="hero">
    <div class="middle wrapper">
      <transition name="showttl">
        <article class="main" v-show="!skills[0].runned && !skills[1].runned && !skills[2].runned">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 37.33">
            <path class="logo-main" d="M133.33,0V37.33H32V0ZM64,5.33H58.67V26.67H53.33V21.33H48v5.33H42.67V5.33H37.33V26.67h5.33V32H48V26.67h5.33V32h5.33V26.67H64Zm32,0H90.67V26.67H85.33V21.33H80v5.33H74.67V5.33H69.33V26.67h5.33V32H80V26.67h5.33V32h5.33V26.67H96Zm32,0h-5.33V26.67h-5.33V21.33H112v5.33h-5.33V5.33h-5.33V26.67h5.33V32H112V26.67h5.33V32h5.33V26.67H128Z" />
            <path class="logo-second" d="M21.33,5.33H0V32H5.33V26.67h16V32h5.33V5.33Zm0,16h-16V10.67h16Z" />
            <polygon class="logo-second" points="160 5.33 144 5.33 138.67 5.33 138.67 26.67 138.67 32 160 32 160 26.67 144 26.67 144 21.33 160 21.33 160 16 144 16 144 10.67 160 10.67 160 5.33" />
            <polygon class="logo-second" points="186.67 5.33 170.67 5.33 165.33 5.33 165.33 16 165.33 21.33 181.33 21.33 181.33 26.67 165.33 26.67 165.33 32 186.67 32 186.67 26.67 186.67 16 181.33 16 170.67 16 170.67 10.67 186.67 10.67 186.67 5.33" />
            <path class="logo-second" d="M208,5.33H192V32h21.33V5.33Zm0,21.33H197.33v-16H208Z" />
            <polygon class="logo-second" points="245.33 5.33 240 5.33 240 10.67 234.67 10.67 234.67 16 229.33 16 229.33 10.67 224 10.67 224 5.33 218.67 5.33 218.67 32 224 32 224 16 229.33 16 229.33 21.33 234.67 21.33 234.67 16 240 16 240 32 245.33 32 245.33 5.33" />
            <polygon class="logo-second" points="272 5.33 256 5.33 250.67 5.33 250.67 26.67 250.67 32 272 32 272 26.67 256 26.67 256 21.33 272 21.33 272 16 256 16 256 10.67 272 10.67 272 5.33" />
          </svg>
          <h1>Команда веб-разработки</h1>
          <p>Оперативная разработка, породистый код</p>
        </article>
      </transition>
      <div class="illustration">
        <div class="icon">
          <svg id="ring-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 198 198">
            <circle class="cls-line" cx="99" cy="99" r="48" />
            <circle class="cls-longDash" cx="99" cy="99" r="89.5" />
            <circle class="cls-shortDash" cx="99" cy="99" r="69" />
            <circle class="cls-line-secondary" cx="99" cy="99" r="54" />
            <circle class="cls-wide" cx="99" cy="99" r="79" />
            <circle class="cls-line3" cx="99" cy="99" r="98" />
            <circle class="cls-glow" cx="99" cy="99" r="9" />
          </svg>
        </div>
        <div class="icon">
          <svg id="front-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 215 215">
            <path class="cls-line" d="M1 1 214 1 214 214 1 214 1 0" />
            <path class="cls-line" d="M206.2,12.5A4.5,4.5,0,1,1,201.7,8a4.5,4.5,0,0,1,4.5,4.5" />
            <path class="cls-line" d="M193,12.5A4.5,4.5,0,1,1,188.5,8a4.5,4.5,0,0,1,4.5,4.5" />
            <path class="cls-line" d="M214,24H110L100,6H1" />
            <path class="cls-line" d="M209,48H7V30H208V48" />
            <line class="cls-line" x1="1" y1="54" x2="214" y2="54" />
            <path class="cls-line" d="M6,60H127V180H7V60" />
            <path class="cls-line" d="M209,159H133V60h75v99" />
            <path class="cls-line" d="M133,208V165h75v43" />
            <path class="cls-line" d="M7,208V186H127v22" />
            <rect class="cls-rect" x="15" y="68" width="104" height="13" />
            <rect class="cls-rect" x="15" y="194.15" width="104" height="13.85" />
            <rect class="cls-rect" x="15" y="89" width="104" height="4" />
            <rect class="cls-rect" x="15" y="97" width="96" height="4" />
            <rect class="cls-rect" x="15" y="108" width="104" height="4" />
            <rect class="cls-rect" x="15" y="116" width="104" height="4" />
            <rect class="cls-rect" x="15" y="124" width="104" height="4" />
            <rect class="cls-rect" x="15" y="135" width="100" height="4" />
            <rect class="cls-rect" x="15" y="143" width="104" height="4" />
            <rect class="cls-rect" x="15" y="151" width="104" height="4" />
            <rect class="cls-rect" x="15" y="159" width="104" height="4" />
            <rect class="cls-rect" x="15" y="167" width="104" height="4" />
            <rect class="cls-rect" x="139" y="66" width="63" height="12" />
            <rect class="cls-rect" x="147" y="84" width="42.58" height="4" />
            <rect class="cls-rect" x="147" y="94" width="54.11" height="4" />
            <rect class="cls-rect" x="147" y="104" width="43.47" height="4" />
            <rect class="cls-rect" x="147" y="114" width="32.82" height="4" />
            <rect class="cls-rect" x="147" y="124" width="55" height="4" />
            <rect class="cls-rect" x="147" y="134" width="48.79" height="4" />
            <rect class="cls-rect" x="147" y="144" width="55" height="4" />
            <rect class="cls-rect" x="139" y="84" width="4" height="4" />
            <rect class="cls-rect" x="139" y="94" width="4" height="4" />
            <rect class="cls-rect" x="139" y="104" width="4" height="4" />
            <rect class="cls-rect" x="139" y="114" width="4" height="4" />
            <rect class="cls-rect" x="139" y="124" width="4" height="4" />
            <rect class="cls-rect" x="139" y="134" width="4" height="4" />
            <rect class="cls-rect" x="139" y="144" width="4" height="4" />
            <rect class="cls-rect" x="140" y="171" width="62" height="37" />
          </svg>
        </div>
        <div class="icon">
          <svg id="bot-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162.83 226.17">
            <path class="cls-line" d="M119.94,73.65a67.1,67.1,0,0,0,.6-8.95,52.53,52.53,0,0,0-105.06,0A71.15,71.15,0,0,0,15.87,72" />
            <path class="cls-line-secondary" d="M15.87,72c9.39,13.94,31,18.66,54.16,18.66,22.28,0,40.1-4,49.92-17" />
            <path class="cls-line" d="M109.77,86.32c6.6,1.73,10.91,3.87,12,6.21" />
            <path class="cls-line" d="M14.29,92.54c1-2.31,5.24-4.43,11.68-6.14" />
            <path class="cls-line" d="M122.48,100.25q-.23-3.53-.57-7c-1.49,6.1-25.05,11-53.9,11s-52.4-4.85-53.9-11q-.34,3.5-.57,7.08" />
            <path class="cls-line" d="M30.58,196c9.81,18.43,23,29.7,37.43,29.7s27.37-11.06,37.15-29.18" />
            <path class="cls-line" d="M120.06,72.41C118.63,78.51,95.61,83,68,83S17.39,77.55,16,71.45" />
            <path class="cls-line-secondary" d="M108.37,55.28C104.33,67.7,80.08,71,68,71S31.69,67.7,27.65,55.28C23.18,41.54,44.07,18.43,68,18.43S112.83,41.54,108.37,55.28Z" />
            <path class="cls-filled" d="M63.45,51.14c-1.92,4-11,4.91-15.94.68-2.5-2.14-5.07-6.58-3.27-10.15,1.72-3.42,6.44-4.1,9.43-3.59C60.21,39.16,65.41,47.08,63.45,51.14Z" />
            <path class="cls-filled" d="M73.14,51.14c1.92,4,11,4.91,15.94.68,2.5-2.14,5.07-6.58,3.27-10.15-1.72-3.42-6.44-4.1-9.43-3.59C76.38,39.16,71.17,47.08,73.14,51.14Z" />
            <path class="cls-line" d="M17.89,110c0-14.46-18.31-7.71-17.35,11.57C1.6,142.75,7,170.86,18.63,191.12c6,10.45,12.42,5.51,10.82-1.12C22.71,162.05,17.89,138,17.89,110Z" />
            <path class="cls-line" d="M117.38,110c0-14.46,18.31-7.71,17.35,11.57-1.06,21.18-6.44,49.29-18.09,69.56-6,10.45-12.42,5.51-10.82-1.12C112.56,162.05,117.38,138,117.38,110Z" />
            <circle class="cls-rect" cx="32.62" cy="125.07" r="4.5" />
            <circle class="cls-rect" cx="47.44" cy="127.46" r="3.83" />
            <circle class="cls-rect" cx="61.86" cy="128.41" r="3.17" />
            <path class="cls-line" d="M158.95.5H128.41A3.39,3.39,0,0,0,125,3.88v17.3a3.39,3.39,0,0,0,3.38,3.38H134a4.34,4.34,0,0,1,0,.47c-.37,2.56-3,4-3.55,4.3a7.55,7.55,0,0,0,2.37-.45,8.66,8.66,0,0,0,4.58-4.31h21.59a3.39,3.39,0,0,0,3.38-3.38V3.88A3.39,3.39,0,0,0,158.95.5Z" />
            <line class="cls-line" x1="129.08" y1="5.92" x2="151.5" y2="5.92" />
            <line class="cls-line" x1="129.08" y1="9.83" x2="146.08" y2="9.83" />
            <line class="cls-line" x1="129.08" y1="13.74" x2="150.3" y2="13.74" />
            <line class="cls-line" x1="129.08" y1="17.65" x2="158.27" y2="17.65" />
          </svg>
        </div>
      </div>
      <nav class="skills" >
        <navblock v-for="skill, key in skills" :key="key" :elemId="key" @mouseenter.native="runAnim($event, key)">
          <header slot="header"> {{ skill.header }} </header>
          <article slot="article" v-html="skill.content"> </article>
        </navblock>
      </nav>
    </div>
  </section>
</template>

<script src="./main.js" ></script>
<style src="./main.styl" lang="stylus"></style>
