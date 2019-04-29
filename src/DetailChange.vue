<template>
  <div class="post">
    <div class="tableChange">
      <div>
        <p class="editText">Edit your title:</p>
        <p><textarea  v-model="title" class="changeTitle"></textarea></p>
        <p class="editText">Edit your post</p>
        <p><textarea  v-model="body" class="changeBody"></textarea></p>
      </div>
      <router-link :to="{ name:'detail', params: { title: title, body: body} }"><button type="button" @click="changePost(id, title, body)" class="apply">To apply</button></router-link>
    </div>
    <img src="/src/assets/nature.jpg" >
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    props: {
      id: Number,
      title: String,
      body: String,
    },
    // created: function() {
    //   var postId = this.$route.params.id
    //   this.post = this.posts[this.$route.params.id]
    //   this.post = this.posts[this.$route.params.title]
    //   this.post = this.posts[this.$route.params.body]
    // },
    methods: {
      changePost(id, title, body) {
             axios.put('http://jsonplaceholder.typicode.com/posts/' + id, {
               title: title,
               body: body
             })
           },
    }
}
</script>

<style>
  .tableChange{
    width: 450px;
    height: 400px;
    margin: 70px 0px 0px 100px;
    border: 1px solid #000000;
    border-radius: 10px;
  }

.editText{
  margin-left: 40px;
}

  .changeTitle{
    height: 75px;
  }

  .changeBody{
    height: 150px;
  }

  .post p textarea{
    width: 400px;
    margin-left: 20px
  }

  .post button{
    margin: 0px 0px 0px 10px;
  }
  .post img{
    width: 800px;
    height: 450px;
    position: relative;
    margin: -400px 0px 0px 700px;
  }
</style>
