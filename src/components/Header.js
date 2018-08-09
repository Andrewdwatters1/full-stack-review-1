import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

const Header = function(props) {
  return (
    <div style={styles.header}>

      <div id="logo" style={styles.logo}>
       <h1><Link to="/">Welcome to Facecrack broniez</Link></h1>
      </div>

      <div id="navbar" style={styles.navbar}>
      <Link to="/posts">posts</Link>
        {props.user ? <a href="">logout</a> : <a href="">login</a>}
      </div>

    </div>
  )
}

let mapStateToProps = state => {
  return {
    user: state.user.data
  }
}

export default connect(mapStateToProps)(Header);

let styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
    border: 'solid black 5px',
    borderRadius: 15,
    backgroundColor: 'grey',
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