import {ADD_TO_CART, CHECKOUT_REQUEST, CHECKOUT_SUCCESS, CHECKOUT_FAIL} from '../types'
import shopServer from '../../api/shopServer'
const state = {
  items: [],
  status: null
}

const mutations = {
  [ADD_TO_CART] (state, {id}) {
    // 查找对应的购物项
    let item = state.items.find(item => item.id===id)
    // 没有, 创建一个购物项对象, 并添加到购物车
    if(!item) {
      item = {
        id,
        count: 1
      }
      state.items.push(item)
    } else {
      // 有, 将其count加1
      item.count++
    }
  },

  [CHECKOUT_REQUEST] (state) {
    state.items = []
    state.status = null
  },
  [CHECKOUT_SUCCESS] (state) {
    state.status = '请求成功了'
  },
  [CHECKOUT_FAIL] (state, {items}) {
    state.items = items
    state.status = '请求失败了'
  }
}

const actions = {
  checkout ({commit, state}, products) {
    // 缓存items
    const items = state.items
    // 提交一个mutation: CHECKOUT_REQUEST
    commit(CHECKOUT_REQUEST)
    // 提交购物的异步请求
    shopServer.buyProducts(
      products,
      () => {
        // 提交请求成功的mutation: CHECKOUT_SUCCESS
        commit(CHECKOUT_SUCCESS)
      },
      () => {
        // 提交请求成功的mutation: CHECKOUT_FAIL
        commit(CHECKOUT_FAIL, {items})
      }
    )
  }
}

const getters = {
  status (state) {
    return state.status
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}