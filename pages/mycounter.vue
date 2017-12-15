<template>
	<div class="hello">
		<h3>Counter: {{count2}}, counter is  {{evenOrOdd}}</h3>
		<button class="btn btn-success" @click="increment">+</button>
		<button class="btn btn-dagner" @click="decrement"> -</button>
		<button class="btn btn-success" @click="incrementIfOdd"> incrementIfOdd</button>
		<button class="btn btn-success" @click="incrementAsync"> incrementAsync</button>
	</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default{
  name: 'mycounter',    
  computed: {
	  ...mapState('Mycounter', {
	      count2: 'count'
	    }),
	   ...mapGetters('Mycounter', [
		   'evenOrOdd'
		 ]		   
	   )
   },
   
   methods: mapActions('Mycounter',[
	   'increment',
	   'decrement',
	   'incrementIfOdd',
	   'incrementAsync'
   ])
  
}
</script>