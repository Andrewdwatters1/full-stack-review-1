import React, { Component } from 'react';
import { connect } from 'react-redux';

class Landing extends Component {
  
  login = () => {
    let auth0domain =   `https://${process.env.REACT_APP_AUTH0_DOMAIN}`
    let clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
    let scope = encodeURIComponent(`openid profile email`)
    let redirectUri =  encodeURIComponent(`${window.location.origin}/auth/callback`)
    let location = `${auth0domain}/authorize?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&response_type=code`
    window.location = location
  }

  render() {
    return (
      <div>
        {this.props.user ? <h1>Aloha, {this.props.user.name}</h1> :
          <button onClick={this.login}>Login</button>}
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    user: state.user.data
  }
}

export default connect(mapStateToProps)(Landing)