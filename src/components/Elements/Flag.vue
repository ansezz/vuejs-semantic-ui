<template>
  <i class="flag" :class="name"></i>
</template>

<script>
  export default {
    name: 'SuFlag',
    props: {
      name: {
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
