var dotenv = require('dotenv')
var dotenvExpand = require('dotenv-expand')

dotenvExpand(dotenv.config())


module.exports = {
		env: {
		    domainName: process.env.DOMAIN_NAME,
		    baseUrl: process.env.BASE_URL,
		    scheduleUrl: process.env.SCHEDULE_URL,
		    searchUrl: process.env.SEARCH_URL,
		    watchLiveUrl: process.env.WATCH_LIVE_URL,
		    quoteApiUrl: process.env.QUOTE_API_URL,
		    showsUrl: process.env.SHOWS_URL,
		    personsUrl: process.env.PERSONS_URL,		    
		    layoutUrl: process.env.LAYOUT_URL,
		    articleSearch: process.env.ARTICLE_SEARCH,
		    slackWebhook: process.env.SLACK_WEBHOOK,
		    slackChannel: process.env.SLACK_CHANNEL,
		    slackEnable: process.env.SLACK_ENABLE === 'false',
		    nodeEnv: process.env.NODE_ENV || 'development',
		    facebookArticleAppId: process.env.FACEBOOK_ARTICLE_APP_ID,
		    a57Url: process.env.A57_URL
		  },		
		
		css: [
		    'assets/main.css'
		  ],		
		  
		  router: {
			    middleware: ['stats', 'redirect']
		  },
		  
  /*
  ** Headers of the page
  */ 	  
  head: {
    title: 'robtest',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Just a first nuxt test' }
    ],
    link: [
    	  { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.0/css/bulma.min.css' },
	  { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          exclude: /(node_modules)/
        })
      }
    }
  }
}
