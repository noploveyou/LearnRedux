import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from 'react-redux';
import createSagaMiddleware from "redux-saga";

import rootSaga from './Saga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const initialState={
    result : 15000,
    value : []
};

const userReducer = (state={name: 'Nop',age: 15},action) => {
    switch (action.type){
        case "setName" : {
              state = {
                    ...state,
                    name: action.payload
              }
        }
        break;

        case "setAge" : {
             state = {
                    ...state,
                    age: action.payload
             }
        }
        break;

        default:
    }
    return state;
};

const employeeReducer = (state=initialState,action) => {
    switch (action.type){
        case "ADD" :
            /*state+=action.payload;*/
            state={
                /*result: state.result+=action.payload,
                value: state.value*/
                ...state,
                result: state.result+=action.payload,
                value: [...state.value,action.payload]
            };
            break;

        case "SUBTRACT" :
            state={
                /*result: state.result-=action.payload,
                value: state.value*/
                ...state,
                result: state.result-=action.payload,
                value: [...state.value,action.payload]
            };
            break;

        default:
    }
    return state;
};

const myloger = (store) => (next) => (action) => {
    console.log("Log Action",action);
    next(action);
};

const store = createStore(combineReducers({emp: employeeReducer,user: userReducer}),{},
    compose(applyMiddleware(sagaMiddleware, myloger)));

store.subscribe(() => {
        console.log("Update Store : ",store.getState());
    }
);

store.dispatch({
    type: 'ADD',
    payload : 100
});

// run the saga
sagaMiddleware.run(rootSaga);

const Start = () =>
    <Provider store={store}>
        <App/>
    </Provider>;

AppRegistry.registerComponent('LearnRedux', () => Start);
