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
    width: 99%;
    margin-left: auto;
    mergin-right: auto;
    height: 100%;
    position: absolute;
  }
  ul{
    padding-top: 20px;
    border-top: 5px solid #494949;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: 34% 34% 34%;
    grid-template-rows: 50% 50% ;
    height: 100%;
  }
  ul li p{
    width: 450px;
  }
  li img{
    /* vertical-align:top; */
    width: 450px;
    height:250px;
  }
  .historyPost{
    height: 450px;
    width: 500px;
    list-style-type: none;
  }
</style>
