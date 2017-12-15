<!-- pages/users.vue -->

<template>
  <section class="section is-medium">
    <div class="container has-text-centered">
      <h1 class="title">Users App2</h1>
      <p>
        Bla bla bla...
         </p>
    </div>
    <users/>

  </section>
</template>

<script>
import Users from '~/components/Users.vue'
import vueResource from 'vue-resource'
import Vue from 'vue'
Vue.use(vueResource)
export default {
  components: {
    Users
  },
  layout: 'users',
  head: {
		title:'Users - Robert'
  }
}
</script>
