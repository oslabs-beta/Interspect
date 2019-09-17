
import * as types from "./actionTypes.js";

// Initial State for Source Panel
const initialState = {
  source_active: true,
  source_uri: '',
  data: {},
  contentType: 'JSON',
  hasAuth: false,
  authType: "",
}

const SourceReducer = (state=initialState, action) => {

  switch(action.type) {
    case types.ACTIVATE_PANEL:
      let source_active;
      if (action.payload === "source") { source_active = true; }
      else { source_active = false; }
      return {
        ...state,
        source_active,
      };

    case types.SET_SOURCE_URI:
      return {
        ...state,
        source_uri: action.payload,
      };
    case types.SET_CONTENT_TYPE:
      return {
        ...state,
        contentType: action.payload,
      };
    case types.SET_AUTHORIZATION:
      return {
        ...state,
        hasAuth: action.payload,
      };
    case types.SET_AUTH_TYPE:
      return {
        ...state,
        authType: action.payload,
      };
    default:
      return state;
  }


}

export default SourceReducer;
