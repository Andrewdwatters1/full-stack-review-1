import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import {getPosts} from '../redux/reducers/posts'
import Posts from './Posts'

class PostsContainer extends Component {
  
  componentDidMount() {
    this.props.getPosts()
  }
  
  render() {
    return (
      <Switch>
        <Route exact path="/posts" component={Posts}/>
      </Switch>
    )
  }
}

export default connect(null, {getPosts})(PostsContainer);