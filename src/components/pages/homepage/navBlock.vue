<template>
  <div @mouseover="getContentHeight(false)" @mouseout="getContentHeight(true)" :id="'skl-' + elemId" class="skill-block">
    <slot name="header"></slot>
    <div class="hider">
      <slot name="article"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false
    }
  },
  props: ['elemId'],
  methods: {
    getContentHeight (state) {
      let rootBlockSelector = '#skl-' + this.elemId.toString()
      let hider = document.querySelector(rootBlockSelector + '>div.hider')
      let content = document.querySelector(rootBlockSelector + '>div.hider>article')
      if (state) {
        hider.style.height = 0 + 'px'
      } else {
        hider.style.height = content.offsetHeight + 'px'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  header
    font: 26px/1.2em 'JustSquare', sans-serif

  .hider
    height: 0px
    overflow: hidden
    transition: .3s ease height
    
  .skill-block
    border-top: 1px solid white
    margin: 0 3% 0 0
    padding: 30px 0
    box-sizing: border-box
    text-align: left
    width: 31%
    article
      font: 16px/1.6em 'Exo 2', sans-serif
      padding: 1.6em 0
      text-align: left
      color: #7b5f58
      opacity: 0
      box-sizing: border-box
      overflow: hidden
      transition: .1s ease opacity 0s
      span
        color: #a78c85
    &:last-child
      margin: 0
    &:hover
      color: #FF4800
      border-top: 1px solid #FF4800
      article
        opacity: 1
        transition: .3s ease opacity .2s
</style>
