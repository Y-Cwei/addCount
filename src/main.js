import Vue from 'vue'
import store from './store'
import app from './components/app.vue'
import {currency} from './currency'

// 注册全局过滤器
Vue.filter('currency', currency)

new Vue({
  el: '#app',
  store,
  render: h => h(app)
})