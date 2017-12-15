import axios from 'axios'

export default function ({ route }) {
  console.log('middleware:stats.js: test stats... fullPath:' + route.fullPath + ' | path:' + route.path)
  
  return axios.get('http://jsonplaceholder.typicode.com/todos')
    .then(res => {
      const things = res.data
      console.log('num=' + things.length)
    })
}
