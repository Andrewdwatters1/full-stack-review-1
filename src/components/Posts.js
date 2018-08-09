import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Posts(props) {
  return(
    <div>
      {props.posts.map(post => {
        return (
          <div key={post.id} className="posts-outer-main">
          <Link to={`/posts/${post.id}`}><h2>{post.title}</h2></Link>
          <h3>{post.author}</h3><br/>
          </div>
        )
      })}
    </div>
  )
}

let mapStateToProps = state => {
  return {
    posts: state.posts.data
  }
}

export default connect(mapStateToProps)(Posts)