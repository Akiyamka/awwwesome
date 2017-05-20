<template>
  <section :class="[{ 'focus': isFocus }, { 'filled': value }, 'aw-input']">
    <label>{{placeholder}}</label>
    <div class="box">
      <span class="before"></span>
        <input
          :value="value"
          :type="type"
          :disabled="disabled"
          :required="required"
          @focus="isFocus = true"
          @blur="isFocus = false"
          @input="updateValue($event.target.value)">
      <span class="after"></span>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    placeholder: { type: String },
    value: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    disabled: Boolean,
    required: Boolean,
    name: String
  },
  data () {
    return {
      isFocus: false,
      filled: true
    }
  },
  methods: {
    updateValue (value) {
      this.$emit('input', value)
    }
  }
}
</script>
<style lang='stylus' scoped>
@import './../../colorTheme'

.box
  margin-top: 12px
  z-index: 1
  position: relative
section
  position: relative
  display: inline-block
  margin: 1em 2em 1em 0
input
  background: none
  border: none
  border-bottom: 1px solid inp_border
  padding: 12px 0
  color: inp_color
  margin-left: 12px
  transition: .2s ease all
  font-size: 16px
  min-width: 300px
  &:focus
    outline: none
    border-bottom: 1px solid mainColor
  &:invalid
    outline: none
    box-shadow: none
    border-bottom: 1px solid inp_error
label
  color: inp_color
  position: absolute
  left: 12px
  font-size: 16px
  top: 24px
  transition: .3s ease all
  white-space: nowrap
  text-overflow: ellipsis
  width: 100%
  overflow: hidden

.before
.after
  border-bottom: 1px solid mainColor
  position: absolute
  height: 0
  width: 0
  bottom: 0
  margin-left: 0
  visibility: hidden
  transition: .2s ease all
  border-bottom: 1px solid inp_border
.before
  margin-left: 12px
  border-left: 1px solid inp_border
.after
  border-right: 1px solid inp_border
  right: 0

.focus
.filled
  input
    color: white
  .after
  .before
    height: 4px
    display: inline-block
    width: 12px
    visibility: visible
  .before
    margin-right: 12px
    margin-left: 0
  .after
    margin-right: -12px

.filled
  input
    color: white
    border-bottom: 1px solid inp_border
  .after
  .before
    border-bottom: 1px solid inp_border
  .before
    border-left: 1px solid inp_border
  .after
    border-right: 1px solid inp_border
  label
    color: inp_color
    position: absolute
    left: 0
    font-size: 14px
    top: -2px

.focus
  input
    border-bottom: 1px solid mainColor
  .after
  .before
    border-bottom: 1px solid mainColor
  .before
    border-left: 1px solid mainColor
  .after
    border-right: 1px solid mainColor
</style>
