const products = [
  {
    id: 1,
    name: 'Ipad mini',
    price: 2000,
    inventory: 2
  },
  {
    id: 2,
    name: 'Iphone8',
    price: 5000,
    inventory: 3
  },
  {
    id: 3,
    name: 'Ipod',
    price: 1000,
    inventory: 5
  },
  {
    id: 1,
    name: 'macbook',
    price: 12000,
    inventory: 10
  }
]

export default {
  getAllProducts (callback) {
    setTimeout(function () {
      callback(products)
    }, 1000)
  },
  
  buyProducts(products, sCallback, fCallback) {
    setTimeout(function () {
      console.log('server ' + products)
      if(Date.now()%2===0) {
        sCallback() // 成功
      } else {
        fCallback() //失败
      }
    }, 1000)
  }
}