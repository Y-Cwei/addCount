import {ADD_TO_CART} from './types'
export default { // 包含n个action回调函数
  addToCart ({commit, state}, product) {
    // 只有当还有库存时, 才提交mutation
    if(product.inventory) {
      commit(ADD_TO_CART, {id: product.id})
    }
  }
}