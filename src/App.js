import React, { Component } from 'react';
import './App.css';
import InvitePage from './components/pages/invite';
import { Provider } from 'react-redux';
import store from './state/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <InvitePage />
        </div>
      </Provider>
    );
  }
}

export default App;
