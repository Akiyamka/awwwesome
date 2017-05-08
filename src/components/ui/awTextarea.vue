<template>
  <section :class="[{ 'focus': isFocus }, { 'filled': value }]">
      <textarea
      cols="30" rows="10"
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
  }
}
</script>
<style lang='stylus' scoped>
section
  padding: 12px
  transition: .2s ease padding
  &.focus
  &.filled
    padding: 12px 0
    textarea
      padding: 0 12px
textarea
  resize: none
  background: transparent
  color: white
  border: none
  width: 100%
  border-bottom: 1px solid hsla(17,100%,50%,.35)
  box-sizing: border-box
  padding: 0
  transition: .2s ease all
  &:focus
    outline: none
    border-bottom: 1px solid hsla(17,100%,50%,1)
</style>
