<template>
  <i class="icon" :class="icon"></i>
</template>

<script>
  export default {
    name: 'SuIcon',
    props: {
      icon: {
        type: String,
        required: true
      }
    },
    data () {
      return {}
    }
  }
</script>

<style>
</style>
