<template>
	<div>
	<h2>posts/{{$route.params.id}} route</h2>
	<button @click="popup">click me</button>
	<br><br>
	<p>test1</p>
	<p>test</p>
	<p>test</p>
	<p>test</p>
	
	<p>test2</p>
	<p>test</p>
	<p>test</p>
	<p>test</p>
	
	<p>test3</p>
	<p>test</p>
	<p>test</p>
	<p>test</p>
	
		test5<br>
	
	</div>
	

</template>

<script>
export default {
  validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
  methods: {
    popup () {
      alert(this.$route.params.id)
    }
  }
}
</script>