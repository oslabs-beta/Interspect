
import * as types from './actionTypes.js';

// Initial State for Destination Panel
const initialState = {
    destination_active: true,
    destination_uri: '',
    data: {},
    contentType: 'JSON',
    hasAuth: false,
    authType: "",
}

const DestinationReducer = (state=initialState, action) => {

}

export default DestinationReducer;