
import {combineReducers} from 'react-redux';

import SourceReducer from './sourceReducer.js';
import MockupsReducer from './mockupsReducer.js';
import DestinationReducer from './destinationReducer.js';

const reducers = combineReducers({
    source: SourceReducer,
    mockups: MockupsReducer,
    destination: DestinationReducer,
});

export default reducers;