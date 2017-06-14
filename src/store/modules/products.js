import {RECEIVE_PRODUCTS, ADD_TO_CART} from '../types'
import shopServer from '../../api/shopServer'
/*
针对products.vue
 */
const state = {
  products: []
}

const mutations = {
  [RECEIVE_PRODUCTS] (state,  {products}) { // 'RECEIVE_PRODUCTS'
    state.products = products
  },
  [ADD_TO_CART] (state, {id}) {
    // 找到对应的product, 更新其inventory
    const p = state.products.find(p => p.id === id)
    p.inventory--
  }
}

const actions = {
  getAllProducts ({commit}) {
    // 从后台获取数据
    shopServer.getAllProducts(function (products) {
      // 提交mutation
      commit(RECEIVE_PRODUCTS, {products})
    })
  },
}

const getters = {
  products (state) {
    return state.products
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}