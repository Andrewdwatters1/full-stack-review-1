import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { logout } from '../redux/reducers/user'

const Header = function (props) {
  console.log(props)
  return (
    <div style={styles.header}>

      <div id="logo" style={styles.logo}>
        <h1><Link to="/">Welcome to Facecrack BRONIEZ</Link></h1>
      </div>

      <div id="navbar" style={styles.navbar}>
        <Link to="/posts"><button>posts</button></Link>
        {props.user ? <Link to="/" onClick={props.logout}><button>logout</button></Link> : <Link to=""><button>login</button></Link>}
      </div>

    </div>
  )
}

let mapStateToProps = state => {
  return {
    user: state.user.data
  }
}

export default connect(mapStateToProps, { logout })(Header);

let styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
    border: 'solid black 5px',
    borderRadius: 15,
  },
  logo: {
    flex: 4,
    displY: 'flex',
    justifyContent: 'flex-start'
  },
  navbar: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between'
  }
}