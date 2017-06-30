<template>
  <button class="ui button">
    <i v-if="icon" class="icon" :class="icon"></i>
    <template v-if="text">
      {{text}}
    </template>
  </button>
</template>

<script>
  export default {
    name: 'SuButton',
    props: {
      text: {
        type: String,
        default: 'Sm Button'
      },
      icon: {
        type: String,
        default: null
      }
    },
    data () {
      return {}
    }
  }
</script>

<style>
</style>
