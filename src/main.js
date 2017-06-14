import Vue from 'vue'
import store from './store'
import counter from './counter.vue'

new Vue ({
  el: "#app",
  store,
  render: h => h(counter)
})

