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
      export default {
        name: 'app',
        data () {
          return {
            current: null,
            page: 0,
            visiblePostID: '',
          }
        },
        mounted(){
          this.$store.dispatch('loadPosts')
        },
        computed: {
          posts(){
            return this.$store.state.posts
          },
          search(){
            return this.$store.state.sSearch
          },
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
              return post.title.match(this.search);
            });
          },
        }
      }
    </script>

    <style scoped>
      .app{
        background-color: #FFFFFF;
        width: 100%;
        height: 100%;
        /* background-size: cover; */
      }

      .boldText{
        font-weight: bold;
        font-size: 20px;
      }
      ul{
        margin-left: 170px;
        display: grid;
        grid-template-columns: 500px 500px 500px;
        grid-template-rows: 450px 400px;
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
        height: 500px;
        width: 500px;
        /* border: 1px solid #4A535C; */
        list-style-type: none;
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
