import React from 'react';
import { connect } from 'react-redux'

const SinglePost = function (props) {
  return (
    <div>
      {console.log(props)}
      {props.post &&
        <div>
          <h2>{props.post.title}</h2>
          <p>{props.post.author}</p>
          <hr />
          <p>{props.post.content}</p>
          <button onClick={props.history.goBack}>back</button>
        </div>
      }
    </div>
  )
}
let mapStateToProps = (state, props) => {
  let { id } = props.match.params
  let post = state.posts.data.find(post => +post.id === +id)
  return { post }
}

export default connect(mapStateToProps)(SinglePost)