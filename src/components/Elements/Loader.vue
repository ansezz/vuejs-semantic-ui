<template>
  <div class="ui loader" :class="[size,{'text':text,inverted,indeterminate,active,disabled,inline,centered}]">
    <template v-if="text">
      {{text}}
    </template>
  </div>
</template>

<script>
  export default {
    name: 'SLoader',
    props: {
      text: {
        type: String,
        default: null
      },
      inverted: {
        type: Boolean,
        default: false
      },
      indeterminate: {
        type: Boolean,
        default: false
      },
      active: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      inline: {
        type: Boolean,
        default: false
      },
      centered: {
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
