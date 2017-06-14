import Vue from 'vue'
import Vuex from 'vuex'

// 声明使用Vuex,在每个组件中都有$store属性
Vue.use(Vuex)

// 状态：相当于data
const state = {
  count: 0
}

// mutations,
// 1.包含多个直接更新state的方法（回调函数）
// 2.action对象来触发
const mutations = {
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  }
}

// 1.包含多个事件回调函数的对象
// 2.在组件中触发：component.dispatch('函数名')
const actions = {
  increment ({commit}) { // 框架调用increment({commit, state,...})
    commit('increment')
  },
  decrement ({commit}) {
    commit('decrement')
  },
  incrementIfOdd ({commit, state}) {
    if (state.count % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync ({commit}) {
    setTimeout (() => {
      commit('increment')
    }, 1000)
  }
}

// 包含多个计算属性的（get）的对象
const getters = {
  countOddOrEven (state) {
    return state.count % 2 === 0 ? '偶数' : '奇数'
  },
  count (state) {
    return state.count
  }
}
// 暴露一个store对象
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
