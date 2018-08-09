import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { HashRouter, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import { getUser } from './redux/reducers/user'
import Landing from './components/Landing'
import PostsContainer from './components/PostsContainer'

class App extends Component {

  componentDidMount() {
    this.props.getUser();
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/posts" component={PostsContainer} />



          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default connect(null, { getUser })(App);
