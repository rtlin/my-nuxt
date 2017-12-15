import axios from 'axios'
//import slackNotify from '~/plugins/slack-notify'
//const slack = slackNotify(process.env.slackWebhook)

// List of static urls that don't need the article check
const whiteList = {
  '/': true,
  '/about-us': true,
  '/accessibility-statement': true,
  '/channel-finder': true,
  '/closed-captioning': true,
  '/fbntv': true,
  '/features': true,
  '/markets': true,
  '/personalities': true,
  '/politics': true,
  '/privacy-policy': true,
  '/search': true,
  '/slideshow': true,
  '/terms-new': true,
  '/terms-of-use': true
}
console.log('MY_LOG: middleware/redirect.js')
export default function (context) {
  if (!context.isServer) {
	  console.log('Not a server.')
    return context.redirect(context.route)
  }
  //console.log(context)
  const { route, redirect } = context
  if (whiteList[route.path]) {
    console.log('[middleware/redirect.js]::White listed path, not looking for article...')
    return
  }

  const url = `${process.env.domainName}${route.path}`

  const request = `${process.env.articleSearch}?searchBy=urls&values=${url}`

  console.log('[middleware/redirect.js]::request: \n' + request)
  
  /*
  return axios
    .get(request)
    .then(res => {
      const [article] = res.data

      // This caused error on non article pages
      if (!article.canonical_url) {
        return
      }

      const redirectUrl = article.canonical_url.replace(
        process.env.domainName,
        ''
      )
      if (redirectUrl !== route.path) {
        redirect(redirectUrl)
      } else {
        return context.store.dispatch('Articles/fetchFullArticle', article)
      }
    })
    .catch(e => {
      console.log('middlewares/redirect.js::', e)
      if (!e.response) {
        // error doesn't come from axios
        slack.send({
          text: `[middleware/redirect.js]:: Error (most likely from) rendering components`,
          fields: {
            url: request,
            status: '' + e
          }
        })
        return
      }
      slack.send({
        text: `[middleware/redirect.js]:: Error with article middleware request`,
        fields: {
          url: request,
          status: e.response.status,
          statusText: e.response.statusText
        }
      })
      return
    })
  */
}
