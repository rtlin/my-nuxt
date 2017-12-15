<template>  
  <div class="users">
    <h1>Users</h1>
    <form v-on:submit="addUser">
      <input type="text" v-model="newUser.name" placeholder="Name">
      <br/>
      <input type="text" v-model="newUser.email" placeholder="Email">
      <br/>
      <input type="submit" value="Submit">
    </form>

    <ul>
      <li v-for="user in users">
        <input type="checkbox" class="toggle" v-model="user.contacted" v-on:click="updateUserStatus(user)">
        <span :class="{contacted: user.contacted}">
        {{user.name}} : {{user.email}} <button v-on:click="deleteUser(user)">x</button>
        </span>
      </li>
    </ul>
    
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
  name: 'users',
  data () {
    return {
      newUser: {
        name: '',
        email: ''
      },
      users: [
        {
          name: 'John Doe',
          email: 'jde@gmail.com',
          contacted: false
        },
        {
          name: 'Mark Smith',
          email: 'msmith@gmail.com',
          contacted: false
        },
        {
          name: 'Kevin Butt',
          email: 'kbutt@gmail.com',
          contacted: false
        }
      ]
    }
  },
  methods: {
    addUser: function (e) {
      console.log('add user')
      this.users.push({
        name: this.newUser.name,
        email: this.newUser.email,
        contacted: false
      })
      e.preventDefault()
    },
    deleteUser: function (user) {
      this.users.splice(this.users.indexOf(user), 1)
    },
    updateUserStatus: function(user) {
      console.log(this.users.length)
      this.users.push() // empty push to refresh the object
      console.log('Update user status3...')
    },
    ...mapActions('Mystore', {
    		increment: 'increment',
    		decrement: 'decrement'
      })
  },
  created: function () {
    // nothing here
    /* nothing here either */
    this.$http.get('https://jsonplaceholder.typicode.com/users')
      .then(function (response) {
        this.users = response.data
        console.log(response.data)
      })
    console.log('created ran...')
  },
  computed: {
	  ...mapState('Mystore', {
	      count: 'count'
	    })
  }
  
}
</script>

<style scoped>
.contacted {
text-decoration: line-through;
}

</style>
