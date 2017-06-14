<template>
  <div>
    <h2>Products</h2>
    <ul>
      <li v-for="p in products">
        {{p.name}}--{{p.price | currency}}
        <p><button @click="addToCart(p)" :disabled="!p.inventory">add to cart</button></p>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    computed: mapGetters(['products']),
    methods: mapActions(['addToCart']),
    created () {
      this.$store.dispatch('getAllProducts')
    }
  }
</script>