
import * as types from "./actionTypes.js";

const initialState = {
  source_active: true,
  source_uri: '',
  data: {},
  contentType: 'JSON',
  hasAuth: false,
  authType: "",
}

const MockupsReducer = (state=initialState, action) => {

  switch(action.type) {
    case types.ACTIVATE_PANEL:
      const mockups_active;
      if (action.payload === "mockups") { mockups_active = true; }
      else { mockups_active = false; }
      return {
        ...state,
        mockups_active,
      };
  }
}

export default MockupsReducer;
