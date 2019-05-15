<template>
  <div class="post">
    <img src="/src/assets/nature.jpg" class="post_img_nature" >
    <div class="information">
      <h2>{{ id }}</h2>
      <h2>{{ title }}</h2>
      <p>{{ body }}</p>

    <router-link :to="{ name: 'pagination' }"><button  @click="deleteData(id)" class="buttonDelete">Delete</button></router-link>
    <router-link :to="{ name: 'detailChange', params: {id: id, title: title, body: body} }"><button @click="visiblePostID = id" class="buttonChange">Change</button></router-link>
  <router-link :to="{ name: 'pagination' }">
    <p>Go to Posts</p>
  </router-link>
  </div>
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
    data: function() {
      return {
        current: null,
        createTitle: '',
        createBody: '',
        visiblePostID: '',
      }
    },
    computed: {
      posts(){
        return this.$store.state.posts
      }
    },
    created: function() {
      var postId = this.$route.params.id
      this.post = this.posts[this.$route.params.id]
      this.post = this.posts[this.$route.params.title]
      this.post = this.posts[this.$route.params.body]
    },
    methods: {
      deleteData ({commit}, id){
        axios.delete('http://jsonplaceholder.typicode.com/posts/' + id).then(response => {
          console.log('delete')
          this.posts.splice(id-1, 1);

        })
        .catch(function(error) {
          console.log(error)
        })
      }
    }
}
</script>

<style scoped>
  .post{
    margin: 30px 0 0 400px;
    position: absolute;
    width: 1000px;
  }
  .information{
    margin: 620px 0px 0px 30px;
    text-align: center;
  }
  .post_img_nature{
    width: 1000px;
    height: 600px;
    margin-left: 30px;
    position: absolute;
  }
</style>
