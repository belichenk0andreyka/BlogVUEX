<template>
<div class="header">
  <input type="text" v-model="search" class="header_input_search" placeholder="Search" @input="saveMessage" />
  <img src="src/assets/milk.png">
  <div class="header_div_inputs">
    <input type="text" v-model="createTitle" class="created"/>
    <p><input type="text" v-model="createBody" class="createBody"/></p>
  </div>
  <button  @click="addPost()" class="addPost">AddPost</button>
</div>
</template>

<script>
  import axios from 'axios';
  import {eventEmitter} from './main'

  export default {
    name: 'Header',
    data () {
      return {
        search: '',
        createTitle: '',
        createBody: '',
      }
    },
    methods:{
      saveMessage(){
        eventEmitter.$emit('messageSave', this.search)
      },
      addPost(){
        const post = {
        title: this.createTitle,
        body: this.createBody
      }
        eventEmitter.$emit('postAdd', post)
      },
    }
  }
</script>

<style>

  .header{
    width: 80%;
    height:100%;
    border-bottom: 5px solid #494949;
    margin-left: 175px;
  }
  .header_input_search{
    margin: 60px 0px 0px  150px;
    position: absolute;
    width:340px;
    height: 25px;
    padding-left: 10px;
  }
  .header_input_search::placeholder{
    color: #000000;
    padding-right: 10px;
    text-align: right;
  }
  .header img{
    width: 200px;
    height: 100px;
    margin-left: 650px;
  }
  .header_div_inputs{
    float: right;
    margin: 10px 245px 0px 0px;
  }
  .created, .createBody{
    width: 340px;
    height: 25px;
    font-size: 20px;
    margin-bottom: -15px;
  }
  .createBody{
    margin-top: -15px;
  }
  .addPost {
    position: relative;
    display: inline-block;
    font-size: 90%;
    font-weight: 700;
    color: rgb(209,209,217);
    text-decoration: none;
    text-shadow: 0 -1px 2px rgba(0,0,0,.2);
    padding: .5em 1em;
    outline: none;
    width: 350px;
    margin: -15px 0px 10px 920px;
    border-radius: 3px;
    background: #2278BA;
    box-shadow:
    0 1px rgba(255,255,255,.2) inset,
    0 3px 5px rgba(0,1,6,.5),
    0 0 1px 1px rgba(0,1,6,.2);
    transition: .2s ease-in-out;
  }
  .addPost:hover:not(:active) {
    background: #2FA5BA;
  }
  .addPost:active {
    top: 1px;
    box-shadow:
    0 0 1px rgba(0,0,0,.5) inset,
    0 2px 3px rgba(0,0,0,.5) inset,
    0 1px 1px rgba(255,255,255,.1);
  }

</style>
