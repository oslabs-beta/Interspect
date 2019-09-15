
import * as types from "./actionTypes.js";

const initialState = {
  source_active: true,
  source_uri: '',
  data: {},
  contentType: 'JSON',
  hasAuth: false,
  authType: "",
}

const DestinationReducer = (state=initialState, action) => {

  switch(action.type) {
    case types.ACTIVATE_PANEL:
      const destination_active;
      if (action.payload === "mockups") { destination_active = true; }
      else { destination_active = false; }
      return {
        ...state,
        destination_active,
      };
  }
}

export default DestinationReducer;
