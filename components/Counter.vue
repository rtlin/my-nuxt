<template>  
  <div class="counter">
    <h1>Counter</h1>
    
   <div>
    <p>{{ count }}</p>
  	<p>
    		<button @click="increment">+</button>
    		<button @click="decrement">-</button>
  	</p>
  </div>
  
  </div>

</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default{
  name: 'counter', 
  methods: {   
    ...mapActions('Mystore', {
    		increment: 'increment',
    		decrement: 'decrement'
      })
  },
  
  computed: {
	  ...mapState('Mystore', {
	      count: 'count'
	    })
  }
  
}
</script>
