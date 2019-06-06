<template>
<div class="app">
<ul>
  <template v-for="(post, index) in paginatedData">
    <li class="post" :key="index" @click="addPostToHistoryComp(post)">
      <img src="src/assets/nature.jpg">
      <p class="boldText">{{ post.title }}</p>
      <p>{{ post.body }}</p>
    </li>
  </template>
</ul>
<div class="allpagination">
  <div class="next">
    <button type="button" @click="page -=1" v-if="page > 0"><<</button>
  </div>
    <div>
      <button
        v-for="n in evenPosts"
        :key="n.id"
        v-bind:class="{'selected': current === n.id}"
        @click="page=n-1"
      >{{ n }}</button>
    </div>
    <div>
      <button type="button" @click="page +=1" v-if="page < evenPosts-1">>></button>
    </div>
</div>
</div>
</template>

<script>
import { mapState } from "vuex";
export default {
name: "app",
data() {
return {
  current: null,
  page: 0,
  visiblePostID: ""
};
},
mounted() {
this.$store.dispatch("loadPosts");
},
computed: {
posts() {
  return this.$store.state.posts;
},
search() {
  return this.$store.state.sSearch;
},
evenPosts: function(posts) {
  return Math.ceil(this.posts.length / 6);
},
paginatedData() {
  const start = this.page * 6;
  const end = start + 6;
  return this.filteredPosts.slice(start, end);
},
filteredPosts() {
  return this.posts.filter(post => {
    return post.title.match(this.search);
  });
}
},
methods: {
addPostToHistoryComp(post) {
  this.$store.dispatch("transforPostToHistoryComp", {
    pTitle: post.title,
    pBody: post.body,
    pId: post.id
  });

  this.$router.push({
    name: "detail",
    params: { id: post.id, title: post.title, body: post.body }
  });
}
}
};
</script>

    <style scoped>
      .app{
        background-color: #FFFFFF;
        width: 99%;
        height: 100%;
        position: relative;
      }

      .boldText{
        font-weight: bold;
        font-size: 20px;
      }
      ul{
        width: 80%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-left: auto;
        margin-right: auto;
        display: grid;
        grid-template-columns: 34% 34% 34%;
        grid-template-rows: 40% 40%;
      }
      ul li p{
        width: 445px;
      }
      li img{
        vertical-align:top;
        width: 445px;
        height:250px;
      }
      .post{
        height: 460px;
        width: 495px;
        list-style-type: none;
      }
      .allpagination{
        position: relative;
        width: 70%;
        margin: -20px auto 0px auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
      }

    </style>
