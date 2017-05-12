<template>
  <div class="container">
    <div class="start"></div>
    <button>
      <slot></slot>
    </button>
    <div class="end"></div>
  </div>

</template>
<script>
export default {
  name: 'awButton',
  data () {
    return { }
  }
}
</script>
<style lang='stylus' scoped>

  bkgColor = #FF4800
  hoverColor = #70D7FF
  activeColor = #0080B2
  .container
    font-size: 0
    position: relative
    display: inline-block
    box-sizing: border-box
    margin: 10px

    .end
    .start
      display: inline-block
      background: bkgColor
      height: 42px
      width: 10px
      &:after
        width: 10px
        height: 10px
        background: #FF4800
        content: ''
        position: absolute
        transition: .2s ease
        transition-property: top, right, bottom, left

    .start
      vertical-align: top
      &:after
        bottom: 0
        left: 0

    .end
      vertical-align: bottom
      &:after
        top: 0
        right: 0

    // hover-state
    &:hover
      div,
      button
        background: hoverColor
      
      .start:after
      .end:after
        background: hoverColor

      .start:after
        bottom: -10px
        left: -10px

      .end:after
        top: -10px
        right: -10px

    // active-state
    &:active
      div,
      button
        background: activeColor

      .start:after
      .end:after
        background: activeColor

      .start:after
        bottom: 0
        left: 0

      .end:after
        top: 0
        right: 0

  button
    background: bkgColor
    border: none
    padding: .5em 3em
    text-transform: uppercase
    color: white
    font: 24px/28px 'hooge 05_55 Cyr2', sans-serif
    &:focus
      outline: none

</style>
