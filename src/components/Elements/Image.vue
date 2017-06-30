<template>
  <img class="ui image" :src="src"
       :class="[size,{centered,avatar,hidden,disabled,bordered,fluid,rounded,circular,spaced}]">
</template>

<script>
  export default {
    name: 'SImg',
    props: {
      src: {
        type: String,
        required: true
      },
      avatar: {
        type: Boolean,
        default: false
      },
      hidden: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      bordered: {
        type: Boolean,
        default: false
      },
      fluid: {
        type: Boolean,
        default: false
      },
      circular: {
        type: Boolean,
        default: false
      },
      centered: {
        type: Boolean,
        default: false
      },
      spaced: {
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
