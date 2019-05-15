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
    body: '',
    id: Number,
    historyPosts: []
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
    transforTitleAndBody({commit}, payload){ // мутация которая изменяет сосотаяние в sSearch
      const todo = {
        title: payload.sTitle,
        body: payload.sBody,
        id: payload.sId
      }
      axios.post('http://jsonplaceholder.typicode.com/posts', todo).then(_ => {
        commit('ADD_TODO', todo)
      }).catch(function (error) {
          console.log(error);
        })
    },
    transforPostToHistoryComp({commit}, payload){ // мутация которая изменяет сосотаяние в sSearch
      const todohistory = {
        title: payload.pTitle,
        body: payload.pBody,
        id: payload.pId
      }
      commit('ADD_TODO_HISTORY', todohistory)
    }
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts
    },
    transforSearch(state, payload){ // мутация которая изменяет сосотаяние в sSearch
      state.sSearch = payload
    },
    ADD_TODO (state, todoObject) {
      state.posts.unshift(todoObject)
    },
    ADD_TODO_HISTORY (state, todohistoryObject) {
      if (state.historyPosts.length >5) {
        state.historyPosts.pop()
        state.historyPosts.unshift(todohistoryObject)
      } else {
        state.historyPosts.unshift(todohistoryObject)
      }
    },
  },
})
