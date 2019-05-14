<template>
  <div class="post">
    <div class="tableChange"> 
      <div>
        <p class="editText">Edit your title:</p>
        <p><textarea  v-model="dTitle" class="changeTitle"></textarea></p>
        <p class="editText">Edit your post</p>
        <p><textarea  v-model="dBody" class="changeBody"></textarea></p>
      </div>
      <router-link :to="{ name:'detail', params: { title: dTitle, body: dBody} }"><button type="button" @click="changePost(id, title, body)" class="apply">To apply</button></router-link>
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
    data(){
      return{
        dTitle: this.title,
        dBody: this.body
      }
    },
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

<style scoped>
  .tableChange{
    width: 450px;
    height: 400px;
    margin: 75px 0px 0px 250px;
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
    margin: -450px 0px 0px 900px;
  }
</style>
