import {createStore, applyMiddleware} from 'redux'
import combinedReducer from './reducers' // this will automatically look to index.js
import promiseMiddleware from 'redux-promise-middleware'

export default createStore(combinedReducer, applyMiddleware(promiseMiddleware()))