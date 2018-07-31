import rootSaga from "./Saga";
import rootReducer from "./rootReducers";
import createSagaMiddleware from "redux-saga";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import {
    createNavigationReducer,
    createReactNavigationReduxMiddleware,
    reduxifyNavigator
} from "react-navigation-redux-helpers";
import {createStackNavigator} from "react-navigation";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const showLog = (store) => (next) => (action) => {
    console.log("Log Action", action);
    next(action);
};


//------------------------------------------------------------------------------
/*import UserScreen from './UserScreen';
import Screen2 from './Screen2';
// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
const navigationMiddleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);
const AppNavigator = createStackNavigator({
    Home: { screen: Screen2 },
    Home2: { screen: Screen2 }
});
const navReducer = createNavigationReducer(AppNavigator);
const App = reduxifyNavigator(AppNavigator, "root");*/

//------------------------------------------------------------------------------
const store = createStore(combineReducers({
        ...rootReducer
    }),{},
    compose(applyMiddleware(sagaMiddleware, showLog/*, navigationMiddleware*/))
);


store.subscribe(() => {
        console.log("Update Store : ",store.getState());
    }
);

// run the saga
sagaMiddleware.run(rootSaga);

export default store;
