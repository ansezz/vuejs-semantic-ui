<template>
  <div class="ui reveal" :class="[type,size,{active,image,circular,instant,disabled}]">
    <div class="visible content">
      <slot name="visible-content"></slot>
    </div>
    <div class="hidden content">
      <slot class="hidden content" name="hidden-content"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SReveal',
    props: {
      type: {
        type: String,
        default: 'fade'
      },
      active: {
        type: Boolean,
        default: false
      },
      image: {
        type: Boolean,
        default: false
      },
      circular: {
        type: Boolean,
        default: false
      },
      instant: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: ''
      }
    },
    data () {
      return {}
    }
  }
</script>

<style>
</style>
