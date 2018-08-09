const axios = require('axios');

module.exports = {
  auth: async (req, res) => {
    try {
      let { code } = req.query // this code is coming from Auth0, it was originally sent to our client side port and then proxied to server to here
      let db = req.app.get('db')

      let payload = {
        client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET,
        code,
        grant_type: 'authorization_code',
        redirect_uri: `http://${req.headers.host}/auth/callback`
      }

      let auth0domain = `https://${process.env.REACT_APP_AUTH0_DOMAIN}`

      let accessTokenResponse = await axios.post(`${auth0domain}/oauth/token`, payload) // here we send the code back as well as addl info in the payload obj (which comes from our backend and is passed via our frontend)
      let accessToken = accessTokenResponse.data.access_token // if all correct, they send back an access token

      let userInfoResponse = await axios.get(`${auth0domain}/userinfo?access_token=${accessToken}`) // we then send the next request for user info to them with the token
      let userInfo = userInfoResponse.data  // and they respond with data

      let users = await db.findUserByAuthId(userInfo.sub) // then we query our own DB and...

      if (users.length) { // if user exists in our DB, set their session on req.session.user
        req.session.user = users[0]
        res.redirect('/')
      } else { // else create them as a user
        let users = await db.createUser(userInfo)
        req.session.user = users[0]
        res.redirect('/')
      }
      console.log('Authentication is gewd to go :)');
    } catch (error) {
      console.log('Error, originates authCtrl.auth', error)
      res.redirect('/error');
    }
  }
}