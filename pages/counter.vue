<!-- pages/counter.vue -->

<template>
 <div>
 	ABC
 	<counter/>
 </div>
</template>


<script>
import Counter from '~/components/Counter.vue'
import vueResource from 'vue-resource'
import Vue from 'vue'
Vue.use(vueResource)
export default {
  components: {
    Counter
  }
}
</script>

