import React from 'react';
import {connect} from 'react-redux'

const Header = function(props) {
  return (
    <div style={styles.header}>

      <div id="logo" style={styles.logo}>
        <h1>Dis da header, it'll be errrywhere</h1>
      </div>

      <div id="navbar" style={styles.navbar}>
      <a href="">posts</a>
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
    alignItems: 'center'
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