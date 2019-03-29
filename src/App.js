import React, { Component } from 'react';
import './App.css';
import InvitePage from './components/pages/invite';
import { Provider } from 'react-redux';
import store from './state/store';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import TnC from './components/pages/tnc';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route path='/invite' component={InvitePage} />
          <Route path='/tnc' component={TnC} />
          <Route path='/' exact component={InvitePage} />
        </Router>
      </Provider>
    );
  }
}

export default App;
