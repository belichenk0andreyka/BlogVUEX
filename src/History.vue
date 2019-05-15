<template>
  <div class="history">
    <ul>
      <li v-for="(historyPost, index) in historyPosts" class="historyPost" :key="index">
        <img src="./assets/nature.jpg">
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
    border-top: 5px solid #494949;
    width: 80%;
    margin: 932px 0px 0px 175px;
    height: 100px;
    position: relative;
  }
  ul{
    margin-left: -10px;
    display: grid;
    grid-template-columns: 500px 500px 500px;
    grid-template-rows: 450px 400px;
  }
  ul li p{
    width: 450px;
  }
  li img{
    vertical-align:top;
    width: 450px;
    height:250px;
  }
  .historyPost{
    height: 500px;
    width: 500px;
    /* border: 1px solid #4A535C; */
    list-style-type: none;
  }
</style>
