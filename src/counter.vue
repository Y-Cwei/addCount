<template>
  <div>
    click: {{count}}times, count is {{countOddOrEven}}
    <button @click="increment">加</button>
    <button @click="decrement">减</button>
    <button @click="incrementIfOdd">偶数时加</button>
    <button @click="incrementAsync">延迟一秒加</button>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    computed: mapGetters (['count', 'countOddOrEven']),
    methods: mapActions({
      increment: 'increment',
      decrement: 'decrement',
      incrementIfOdd: 'incrementIfOdd',
      incrementAsync: 'incrementAsync'
    })
  }
</script>