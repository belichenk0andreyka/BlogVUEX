<template>
  <ul>
    <li v-for="(post, index) in historyPosts" class="post" :key="index">
        <router-link :to="{ name: 'detail', params: {id: post.id, title: post.title, body: post.body} }">
        <img src="src/assets/nature.jpg">
        <p class="boldText"> {{ post.title }}</p>
        </router-link>
      <p> {{ post.body }}</p>
    </li>
  </ul>
</template>

<script>
  import {eventEmitter} from './main'

  export default{
    data(){
      return{
        historyPosts: []
      }
    },
      created(){
        eventEmitter.$on('historyPost', (hPost) => {
          historyPosts: hPost
        })
    }
  }
</script>

<style>

</style>
