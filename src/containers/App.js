import React, { Component } from 'react';
import {combineReducers, createStore} from 'redux';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import FriendListApp from './FriendListApp';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer, devToolsEnhancer());

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <FriendListApp />
        </Provider>
      </div>
    );
  }
}
