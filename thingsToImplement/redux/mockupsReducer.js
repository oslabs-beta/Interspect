
import * as types from "./actionTypes.js";

const initialState = {
    mockups_active: false, // Sets panel to be focused or not
    serverOn: false, // Sets Server to be on or off
    numMockups: 0, // Number of mockup in testList
    mockupsOnStage: {}, // Object of mockup objects on stage
    mockupsOnServer: {}, // Object of mockup objects being used in server
}

const MockupsReducer = (state=initialState, action) => {



    switch(action.type) {
        case types.ACTIVATE_PANEL:
            let mockups_active;
            if (action.payload === "mockups") { mockups_active = true; }
            else { mockups_active = false}
            return {
                ...state,
                mockups_active,
            };

        case types.MAKE_NEW_TEST:
            // const mockupsOnStage = state.mockupsOnStage;
            const numMockups = state.numMockups + 1;
            // mockupsOnStage[`Test #${numMockups}`] = action.payload; // payload = JSON object

            return {
                ...state,
                // mockupsOnStage,
                numMockups,
            };

        case types.ADD_TEST_TO_SERVER:
            // const mockupsOnServer = state.mockupsOnServer;
            // const mockupsOnStage = state.mockupsOnStage;
            // mockupsOnServer[action.payload] = mockupsOnStage[action.payload];
            // delete mockupsOnStage[action.payload];

            return {
                ...state,
                // mockupsOnServer,
                // mockupsOnStage,
            };

        case types.REMOVE_TEST_FROM_SERVER:
            // const mockupsOnServer = state.mockupsOnServer;
            // const mockupsOnStage = state.mockupsOnStage;
            // mockupsOnStage[action.payload] = mockupsOnServer[action.payload];
            // delete mockupsOnServer[action.payload];

            return {
                ...state,
                // mockupsOnServer,
                // mockupsOnStage,
            };

        case types.TOGGLE_SERVER:
            let serverOn;
            if (action.payload) { serverOn = true; }
            else { serverOn = false; }
            
            return {
                ...state,
                serverOn,
            };

        case types.EDIT_TEST:

        case types.SAVE_TEST:

        case types.SET_TEST_NAME:
            // const mockupsOnStage = state.mockupsOnStage;
            // const newName = action.payload[1];
            // const trackMockupOnStage = mockupsOnStage[action.payload[0]];
            // mockupsOnStage[newName] = trackMockupOnStage;
            // delete mockupsOnStage[action.payload[0]];

            return {
                ...state,
                // mockupsOnStage,
            }

        case types.DELETE_TEST:
            // const mockupsOnStage = state.mockupsOnStage;
            // delete mockupsOnStage[action.payload];
            return {
                ...state,
                // mockupsOnStage,
            }

        default:
            return state;
    }

}

export default MockupsReducer;