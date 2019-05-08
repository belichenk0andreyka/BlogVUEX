<template>
  <div class="history">
    <ul>
      <li v-for="(post, index) in historyPosts" class="post" :key="index">
        <router-link :to="{ name: 'detail', params: {id: post.id, title: post.title, body: post.body} }">
        <img src="src/assets/nature.jpg">
        <p class="boldText"> {{ post.title }}</p>
        </router-link>
        <p> {{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script>

</script>
  export default{
    data(){
      return{
        historyPosts: []
      }
    },
    
  }
<style>

</style>
