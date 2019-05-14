<template>
  <div class="history">
    <ul>
      <li v-for="(historyPost, index) in historyPosts" class="post" :key="index">
        <img src="src/assets/nature.jpg">
        <p class="boldText"> {{ historyPost.title }}</p>
        <p> {{ historyPost.body }}</p>
      </li>
      </ul>
  </div>
</template>

<script>
  export default{
    computed: {
      historyPosts(){
        return this.$store.state.historyPosts
      },
    },

  }
</script>

<style scoped>
  .history{
    border-top: 1px solid #494949;
    width: 80%;
    margin-left: 175px;
    height: 100px;
  }
</style>
