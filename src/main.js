import Vue from 'vue'
import App from './App.vue'
// import Header from './Header.vue'
// import History from './History.vue'
import VueRouter from 'vue-router'
import store from './store/store.js'

Vue.use(VueRouter)

var router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: 'detail/:id', props: true, name: 'detail', component: (resolve) => { require(['./Detail.vue'], resolve)}
    },
    {path: '/', name: 'home', redirect: {name: 'pagination'} },
    {
      path: '/pagination', name: 'pagination', component: (resolve) => { require(['./Pagination.vue'], resolve) }
    },
    {
      path: '/detail/:id/detailChange', props: true, name: 'detailChange', component: (resolve) => { require(['./DetailChange.vue'], resolve) }
    },
  ]
})

// Vue.component('app-header',  Header),
// Vue.component('app-history',  History)


new Vue({
  el: '#app',
  // components: {
  //   'app-header': Header,
  //   'app-history': History
  // },
  render: h => h(App),
  store,
  router: router,
}).$mount('#app');
