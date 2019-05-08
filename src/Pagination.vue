<template>
  <div class = "app">
    <ul>
      <li v-for="(post, index) in paginatedData" class="post" :key="index">
        <router-link :to="{ name: 'detail', params: {id: post.id, title: post.title, body: post.body} }">
        <img src="src/assets/nature.jpg">
        <p class="boldText"> {{ post.title }}</p>
        </router-link>
        <p> {{ post.body }}</p>
      </li>
      </ul>
        <div class="allpagination">
          <button type="button" @click="page -=1" v-if="page > 0" class="prev"><<</button>
          <div class="pagin">
            <button class="item"
            v-for="n in evenPosts"
            :key="n.id"
            v-bind:class="{'selected': current === n.id}"
            @click="page=n-1">{{ n }} </button>
          </div>
          <button type="button" @click="page +=1" class="next" v-if="page < evenPosts-1">>></button>
        </div>
      </div>
    </template>

    <script>
      import {mapState} from 'vuex'
      import {eventEmitter} from './main'
      export default {
        name: 'app',
        data () {
          return {
            current: null,
            page: 0,
            visiblePostID: '',
            pSearch: ''
          }
        },
        mounted(){
          this.$store.dispatch('loadPosts')
        },
        computed: {
          ...mapState([
          'posts'
          ]),
          evenPosts: function(posts){
            return Math.ceil(this.posts.length/6);
          },

          paginatedData() {
            const start = this.page * 6;
            const end = start + 6;
            return this.filteredPosts.slice(start, end);
          },
          filteredPosts() {
            return this.posts.filter((post) => {
              return post.title.match(this.pSearch);
            });
          },
        },
        created(){
          eventEmitter.$on('messageSave', (string) => {
            this.pSearch = string
          }),
        }
      }
    </script>

    <style>
      .app{
        background-color: #FFFFFF;
        width: 100%;
        height: 100%;
        /* background-size: cover; */
      }
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

      .boldText{
        font-weight: bold;
        font-size: 20px;
      }
      ul{
        margin-left: 170px;
        display: grid;
        grid-template-columns: 500px 500px 500px;
        grid-template-rows: 400px 400px;
      }
      ul li p{
        width: 450px;
      }
      li img{
        vertical-align:top;
        width: 450px;
        height:250px;
      }
      .post{
        height: 400px;
        width: 500px;
        /* border: 1px solid #4A535C; */
        list-style-type: none;
      }
      .buttonDelete{
        background-color: white;
        color: #38414A;
        border: 2px solid #A52A2A;
        font-weight: 550;
        font-size: 17px;
        border-radius: 2px;
        box-shadow: -1px 3px 28px 6px rgba(0,0,0,0.17);
        margin-right: 10px;
        transition-duration: 0.6s;
        float: left;
      }
      .buttonDelete:hover{
        background-color: #A52A2A;
        color: white;
        transition-duration: 0.6s;
      }
      .buttonChange{
        background-color: #3C97E1;
        color: #38414A;
        border: 2px solid #3C97E1;
        font-weight: 550;
        font-size: 17px;
        border-radius: 2px;
        box-shadow: -1px 3px 28px 6px rgba(0,0,0,0.17);
        margin-right: 10px;
        float: left;
        position: relative;
      }
      .buttonChange:hover{
        background-color: white;
        color: black;
        transition-duration: 0.6s;
      }
      .modalWindow{
        margin-left: 50px;
      }
      .changePost{
        width: 195px;
        margin-right: 6px;
        height: 30px;
        box-shadow: -1px 3px 19px -7px rgba(0,0,0,0.13);
      }
      .apply{
        margin: 10px 0px 0px 410px;
        background-color: #4CAF50;
        color: #000000;
        font-size: 18px;
        box-shadow: -1px 3px 28px 6px rgba(0,0,0,0.17);
        transition-duration: 0.6s;
        border-radius: 1px;
        border: 1px solid #949494;
      }
      .apply:hover{
        background-color: #4CAF50;
        color: white;
      }
      .prev{
        float: left;
        position: absolute;
        margin-left: 330px;
        margin-top: -4px;
      }
      .next{
        margin-top: -4px;
        margin-left: 1170px;
        position: absolute;
      }
      .item{
        display: inline-block;
        width: 25px;
        height: 20px;
        margin: 0px 10px 0px 10px;
        text-align: center;
        border: solid 1px #333;
        cursor: pointer;
        transition: background .3s;
      }
      .selected{
        background: #ccc;
      }
      .pagin{
        margin-left: 400px;
        float: left;
        position: absolute;
      }
      .allpagination{
        padding-top: 10px;
        height: 40px;
        border-bottom: 5px solid #494949;
        width: 80%;
        margin-left: 175px;
      }
    </style>
