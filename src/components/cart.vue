<template>
  <div>
    <h2>Your Cart</h2>
    <p v-if="!cartProducts.length">Please add some products to cart.</p>
    <ul>
      <li v-for="item in cartProducts">
        {{item.name}} - {{item.price | currency}} x {{item.count}}
      </li>
    </ul>
    <p>Total: {{totalPrice | currency}}</p>
    <button @click="checkout(cartProducts)" :disabled="cartProducts.length===0">checkout</button>

    <p>Checkout {{status}}</p>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    computed: {
      ...mapGetters(['cartProducts', 'status']),  // ...chai jie object
      totalPrice () {
        return this.cartProducts.reduce((preTotal, cp) => {
          return preTotal + cp.count * cp.price
        }, 0)
      }
    },
    methods: mapActions(['checkout'])
  }
</script>
