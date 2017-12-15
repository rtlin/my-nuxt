<template>
  <div>
     this is from about layout2.
     <nuxt/>
  </div>
</template>

<script>
export default {
 
  head: {		
	    bodyAttrs: {
		      // Added colection to body for stocks to be filled by the js
		      class: 'fb fbn about'
		    },
		link: [
		    /* External css for article page */
		    { rel: 'stylesheet', href: '//global2.fncstatic.com/static/cq/fb/css/article.rs.css' },
		    { rel: 'stylesheet', href: '/css/print.css', media: 'print' }
		  ],
		  htmlAttrs: {
			  class: 'bbb'
		  }
  }
}
</script>

