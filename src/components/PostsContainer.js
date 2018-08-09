import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import {getPosts} from '../redux/reducers/posts'
import Posts from './Posts'
import SinglePost from './SinglePost'

class PostsContainer extends Component {
  
  componentDidMount() {
    this.props.getPosts()
  }
  
  render() {
    return (
      <Switch>
        <Route exact path="/posts" component={Posts}/>
        <Route path="/posts/:id" component={SinglePost} />
      </Switch>
    )
  }
}

export default connect(null, {getPosts})(PostsContainer);