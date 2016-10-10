/* global FB */
window.fbAsyncInit = () => {
  FB.init({
    appId: '179702799142857',
    cookie: true,
    xfbml: true,
    version: 'v2.7'
  })

  FB.getLoginStatus((response) => {
    statusChangeCallback(response)
  })
}

function checkLoginState () {
  FB.getLoginStatus((response) => {
    statusChangeCallback(response)
  })
}

function statusChangeCallback (response) {
  console.log('In statusChangeCallback...', response)

  if (response.status === 'connected') {
    testAPI()
    getPhotoAPI()
  } else if (response.status === 'not_authorized') {
    document.getElementById('status').innerHTML = 'Please log in'
  } else {
    document.getElementById('status').innerHTML = 'Please log in to continue'
  }
}

function testAPI () {
  console.log('Welcome!  Fetching your information.... ')
  FB.api('/me', (response) => {
    console.log('Successful login for: ' + response.name)
    document.getElementById('status').innerHTML = `Thanks for logging in ${response.name}!`
    // document.getElementById('photo').innerHTML = `${response.picture}`
  })
}

function getPhotoAPI () {
  console.log('Getting profile photo...')
  FB.api(
  '/me',
  'GET',
  {"fields":"picture,name"},

  function(response) {
      console.log(response.picture.data.url)
      document.getElementById('photo').innerHTML = `<img src="${response.picture.data.url}" />`
    // document.getElementById('photo').innerHTML = `${response.picture}`
  }
)
}




(function (d, s, id) {
  const fjs = d.getElementsByTagName(s)[0]
  let js = fjs
  if (d.getElementById(id)) {
    return
  }
  js = d.createElement(s)
  js.id = id
  js.src = '//connect.facebook.net/en_US/sdk.js'
  fjs.parentNode.insertBefore(js, fjs)
}(document, 'script', 'facebook-jssdk'))
