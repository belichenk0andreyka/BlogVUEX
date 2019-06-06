<template>
<div class="header">
  <div class="header_div_search">
    <input type="text" v-model="search" class="header_input_search" placeholder="Search" @input="saveMessage(search)" />
  </div>
  <div class="pictureDesignMilk">
    <router-link :to="{ name: 'pagination' }"><img src="src/assets/milk.png"></router-link>
  </div>
  <div>
    <div class="header_div_inputs">
      <input type="text" v-model="createTitle" class="created"/>
      <p><input type="text" v-model="createBody" class="createBody"/></p>
    </div>
    <button  @click="addPost()" class="addPost">AddPost</button>
  </div>
</div>
</template>

<script>
  import axios from 'axios';

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
      saveMessage(val){
        this.$store.commit('transforSearch', val)
      },
      addPost(){
        this.$store.dispatch('transforTitleAndBody', { // как вызвать actions с объект с параметром
          sTitle: this.createTitle,
          sBody: this.createBody,
          sId: Date.now()
        })
      },
    }
  }
</script>

<style>

  .header{
    width: 80%;
    height:110%;
    border-bottom: 5px solid #494949;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .header_div_search{
    padding-top: 40px;

  }
  .header_input_search{
    width:340px;
    height: 25px;

  }
  .header_input_search::placeholder{
    color: #000000;
    padding-right: 10px;
    text-align: right;
  }

  .pictureDesignMilk img{
    width: 200px;
    height: 100px;
  }
  /* .header_div_inputs{
    float: right;
  } */
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
    margin: 0px 0px 10px 6px;
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
