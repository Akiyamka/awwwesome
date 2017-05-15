<template>
  <div :class="['aw-button', { 'alternate': alternate }]">
    <button :disabled="disabled">
      <div class="border">
        <div class="top left"></div>
        <div class="top right"></div>
        <div class="bottom left"></div>
        <div class="bottom right"></div>
      </div>
      <slot></slot>
    </button>
  </div>

</template>
<script>
export default {
  name: 'awButton',
  props: {
    disabled: Boolean,
    alternate: Boolean
  },
  data () {
    return { }
  }
}
</script>
<style lang='stylus' scoped>

  bkgColor = hsla(17,100%,50%,.1)
  hoverColor = hsla(17,100%,50%,1)
  activeColor = #70D7FF

  .aw-button
    font-size: 0
    position: relative
    display: inline-block
    box-sizing: border-box
    margin: 10px

    button
      background: bkgColor
      border: none
      padding: .6em 2em
      text-transform: uppercase
      color: hsla(13,70%,50%,1)
      font: 18px/24px 'Hooge', sans-serif
      transition: .2s ease all
      position: relative
      word-spacing: 8px
      &:focus
        outline: none
      .border
        position: absolute
        width: 100%
        height: 100%
        top: 0
        right: 0
        box-sizing: border-box
        transition: .2s ease all
        & > div
          border: 1px solid hsla(17,100%,50%,0)
          transition: .2s ease all
          width: 10px
          height: 10px
          position: absolute
        .left
          border-right: none
          left: 0
        .right
          border-left: none
          right: 0
        .top
          border-bottom: none
          top: 0
        .bottom
          border-top: none
          bottom: 0
    // hover-state
    &:hover
      button
        background: hoverColor
        color: white
      .border
        margin-top: -10px
        margin-right: -10px
        width: calc( 100% + 20px)
        height: calc( 100% + 20px)
        & > div
          border: 1px solid hsla(17,100%,50%,1)
        .left
          border-right: none
          left: 0
        .right
          border-left: none
          right: 0
        .top
          border-bottom: none
          top: 0
        .bottom
          border-top: none
          bottom: 0
    // active-state
    &:active
      button
        background: activeColor

.alternate
  button
    background-color: transparent
    color: hsla(13,70%,40%,1)
</style>
