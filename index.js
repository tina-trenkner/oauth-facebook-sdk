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
  } else if (response.status === 'not_authorized') {
    document.getElementById('status').innerHTML = 'Please log in'
  } else {
    document.getElementById('status').innerHTML = 'Are you sure you want to sign into this time suck?'
  }
}

function testAPI () {
  console.log('Welcome!  Fetching your information.... ')
  FB.api('/me', (response) => {
    console.log('Successful login for: ' + response.name)
    document.getElementById('status').innerHTML = `You're gonna regret this time suck ${response.name}!`
  })
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
