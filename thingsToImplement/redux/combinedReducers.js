
import {combineReducers} from 'redux';

import SourceReducer from './sourceReducer.js';
import MockupsReducer from './mockupsReducer.js';
import DestinationReducer from './destinationReducer.js';

const reducers = combineReducers({
    SourceReducer,
    MockupsReducer,
    DestinationReducer,
});

export default reducers;