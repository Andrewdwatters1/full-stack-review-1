import React from 'react'
import { connect } from 'react-redux'

function Posts(props) {
  return(
    <div>
      {props.posts.map(post => {
        return (
          <div key={post.id} className="posts-outer-main">
          <h2>{post.title}</h2>
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