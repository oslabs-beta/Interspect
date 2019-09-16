
import * as types from './actionTypes.js';

// Initial State for Destination Panel
const initialState = {
    destination_active: false,
    destination_uri: '',
    contentType: 'JSON',
    hasAuth: false,
    authType: "",
}

const DestinationReducer = (state=initialState, action) => {

    switch(action.type) {
        case types.ACTIVATE_PANEL:
            let destination_active;
            if (action.payload === "destination") { destination_active = true; }
            else { destination_active = false}
            return {
                ...state,
                destination_active,
            };
        default:
            return state;
    }
}

export default DestinationReducer;