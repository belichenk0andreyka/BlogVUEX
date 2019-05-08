<template>
  <div id="app">
    <header-self></header-self>
    <router-view></router-view>
    <app-history></app-history>
  </div>
</template>

<script>

export default {
  components: {
    name: 'app',
  }
}
</script>

<style>
</style>
