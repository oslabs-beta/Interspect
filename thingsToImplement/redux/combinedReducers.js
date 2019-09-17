
import {combineReducers} from 'redux';

import SourceReducer from './sourceReducer.js';
import MockupsReducer from './mockupsReducer.js';
import DestinationReducer from './destinationReducer.js';
import BodyItemsReducer, * as bodyItemSelectors from './bodyItemsReducer.js';


const reducers = combineReducers({
    SourceReducer,
    MockupsReducer,
    DestinationReducer,
    BodyItemsReducer
});



export default reducers;

export const bodyItemsCollectionSelector = (state, filter) =>
    bodyItemSelectors.bodyItemsCollectionSelector(state.BodyItemsReducer, filter);

