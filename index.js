import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { Provider, connect } from 'react-redux';
import store from './initialStore'

const Start = () =>
    <Provider store={store}>
        <App/>
    </Provider>;

AppRegistry.registerComponent('LearnRedux', () => Start);
