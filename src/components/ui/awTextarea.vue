<template>
  <section :class="[{ 'focus': isFocus }, { 'filled': value }, 'aw-textarea']">
      <textarea
      :value="value"
      :disabled="disabled"
      :required="required"
      @focus="isFocus = true"
      @blur="isFocus = false"
      @input="updateValue($event.target.value)"
      :placeholder="placeholder"
      ></textarea>
  </section>
</template>
<script>
import autosize from 'autosize'
export default {
  props: {
    placeholder: String,
    value: [String, Number],
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
  },
  watch: {
    value () {
      this.$nextTick(() => { autosize.update(this.$el) })
    }
  },
  mounted () {
    this.$nextTick(() => { autosize(this.$el.firstChild) })
  },
  beforeDestroy () {
    autosize.destroy(this.$el.firstChild)
  }
}
</script>
<style lang='stylus' scoped>
section
  padding: 12px
  transition: .2s ease padding
  margin: 1em 0 0 0
  &.focus
  &.filled
    padding: 12px 0
    textarea
      padding: 1em 12px
textarea
  resize: none
  background: transparent
  color: white
  border: none
  width: 100%
  border-bottom: 1px solid hsla(17,100%,50%,.35)
  box-sizing: border-box
  padding: 1em 0
  transition: .2s ease all
  &:focus
    outline: none
    border-bottom: 1px solid hsla(17,100%,50%,1)
</style>
