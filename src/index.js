import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore , applyMiddleware, compose, combineReducers} from 'redux';
import {Provider} from 'react-redux';
//import reducer from './Component/Redux/Redux'
import thunk from 'redux-thunk';
import wishReducer from './Component/Redux/wishReducer';
import nameReducer from './Component/Redux/nameReducer';

const materReducer= combineReducers({
    name:nameReducer,
    wish:wishReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(materReducer, {name: 'ramesh', wish:['eat', 'sleep']}, composeEnhancers (applyMiddleware(thunk)));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
