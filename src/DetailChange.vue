<template>
  <div class="detailChangePost">
    <div class="tableChange">
      <div>
        <p class="editText">Edit your title:</p>
        <p><textarea  v-model="dTitle" class="changeTitle"></textarea></p>
        <p class="editText">Edit your post</p>
        <p><textarea  v-model="dBody" class="changeBody"></textarea></p>
      </div>
      <router-link :to="{ name:'detail', params: { title: dTitle, body: dBody} }"><button type="button" @click="changePost(id, title, body)" class="apply">To apply</button></router-link>
    </div>
    <div>
      <img src="/src/assets/nature.jpg" >
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
  .detailChangePost{
    position: relative;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-center;
  }
  .tableChange{
    width: 500px;
    height: 450px;
    margin: 100px 50px 100px auto;
    border: 1px solid #000000;
    border-radius: 10px;
  }
.editText{
  margin-left: 40px;
}
  .changeTitle{
    height: 95px;
  }
  .changeBody{
    height: 170px;
  }
  .detailChangePost p textarea{
    width: 450px;
    margin-left: 20px
  }
  .detailChangePost button{
    margin: 0px 0px 0px 10px;
  }
  .detailChangePost div img{
    width: 800px;
    height: 450px;
    margin: 100px 50px 100px auto;
    position: relative;
  }
</style>
