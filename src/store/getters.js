export default {// 包含n个get方法
  cartProducts (state) {
    // 根据state中items生成一个对应的新数组
    return state.cart.items.map(({id, count}) => {
      // 根据id在products中找到对应的product
      var p = state.products.products.find(p => p.id===id)
      return {
        id,
        count,
        name: p.name,
        price: p.price
      }
    })
  }
}