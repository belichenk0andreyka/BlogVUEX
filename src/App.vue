<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-history></app-history>
  </div>
</template>

<script>
  import Header from './Header.vue'
  import History from './History.vue'

export default{
  components: {
    'app-header': Header,
    'app-history': History
  },
}


</script>

<style>
</style>
