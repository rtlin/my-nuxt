export default {
	namespaced: true,
	state:{
		count: 1
	},
	mutations: {  //syncronous
		increment: state => state.count++,
		decrement: state => state.count--
	},
	getters: {
		evenOrOdd: state => state.count %2 ===0 ? 'even' : 'odd'
	},
	actions: {  //asycronous
	    increment (context, payload) {
	      context.commit('increment')
	    },
	    decrement (context, payload) {
	    		context.commit('decrement')
	    },
	    incrementIfOdd: ({commit, state}) => {
	    		if((state.count + 1) % 2 ===0) {
	    			commit('increment')
	    		}
	    },
	    incrementAsync: ({commit}) => {
	    		return new Promise((response, reject) => {
	    			setTimeout(() => {
	    				commit('increment')
	    				resolve()
	    			},3000)
	    		})
	    }
	}
	
}