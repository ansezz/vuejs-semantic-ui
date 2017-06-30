<template>
  <i class="flag" :class="name"></i>
</template>

<script>
  export default {
    name: 'SFlag',
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
