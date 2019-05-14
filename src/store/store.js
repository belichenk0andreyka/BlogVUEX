import vue from 'vue'
import vuex from 'vuex' 
import axios from 'axios'
import Vue from 'vue';

Vue.use(vuex, axios)

export default new vuex.Store({
  state: {
    posts: [],
    sSearch: '',
    title: '',
    body: ''
  },
  actions: {
    loadPosts ({commit}) {
      axios.get('http://jsonplaceholder.typicode.com/posts').then(response => {
        let posts = response.data
        commit('SET_POSTS', posts)
      }).catch(error => {
        console.log(error);
      })
    },
    transferTitleAndBody({commit}, payload){ // мутация которая изменяет сосотаяние в sSearch
      const todo = {
        title: payload.sTitle,
        body: payload.sBody
      }
      axios.post('http://jsonplaceholder.typicode.com/posts', todo).then(_ => {
        commit('ADD_TODO', todo)
      }).catch(function (error) {
          console.log(error);
        })
    }
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts
    },
    transferSearch(state, payload){ // мутация которая изменяет сосотаяние в sSearch
      state.sSearch = payload
    },
    ADD_TODO (state, todoObject) {
      state.posts.unshift(todoObject)
    },
  },
})
