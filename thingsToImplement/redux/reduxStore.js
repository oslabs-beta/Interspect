
import {createStore} from 'react-redux';
import reducers from './combinedReducers.js';

const store = createStore(reducers);
export default store;