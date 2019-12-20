

// General Action Types
    export const ACTIVATE_PANEL = "ACTIVATE_PANEL";
// End of General Action Types


// Action Types for Source Panel
    export const TOGGLE_REQUEST_TYPE = "TOGGLE_REQUEST_TYPE";
    export const SET_SOURCE_URI = "SET_SOURCE_URI";
    export const SET_CONTENT_TYPE = "SET_CONTENT_TYPE";
    export const SET_AUTHORIZATION = "SET_AUTHORIZATION";
    export const SET_AUTH_TYPE = "SET_AUTH_TYPE";
    export const ADD_TO_STAGE = "ADD_TO_STAGE";
// End of Action Types for Source Panel


// Action Types for Mockups Panel
    // Reducer Action Types
    export const MAKE_NEW_TEST = "MAKE_NEW_TEST";
    export const ADD_TEST_TO_SERVER = "ADD_TEST_TO_SERVER";
    export const REMOVE_TEST_FROM_SERVER = "REMOVE_TEST_FROM_SERVER";
    export const TOGGLE_SERVER = "TOGGLE_SERVER";
    export const EDIT_TEST = "EDIT_TEST";
    export const SAVE_TEST = "SAVE_TEST";
    export const SET_TEST_NAME = "SET_TEST_NAME";
    export const DELETE_TEST = "DELETE_TEST";
    export const SET_PORT = "SET_PORT";

    // Middleware Action Types
    // export const GET_PORT = "GET_PORT";
    // export const GET_BODY_ITEM = "GET_BODY_ITEM";
    // export const GET_SERVER_ON = "GET_SERVER_ON";

// End of Action Types for Mockups Panel

// Action Types for BodyItems
    // Reducer Action Types
    export const CREATE_BODY_FROM_SOURCE = "CREATE_BODY_FROM_SOURCE";
    export const MODIFY_BODY_ITEM = "MODIFY_BODY_ITEM";
    export const DELETE_BODY_ITEM = "DELETE_BODY_ITEM";
    export const MOVE_BODY_ITEM = "MOVE_BODY_ITEM";
    export const OPEN_BODY_ITEM_EDITOR = "OPEN_BODY_ITEM_EDITOR";
    export const CLOSE_BODY_ITEM_EDITOR = "CLOSE_BODY_ITEM_EDITOR";
    export const UPDATE_BODY_ITEM_MOCK_SERVER = "UPDATE_BODY_ITEM_MOCK_SERVER";
    // Selector Action Types
    export const ALL_ITEMS = "ALL_ITEMS";
    export const CLONED_ITEMS = "CLONED_ITEMS";
    export const STAGED_ITEMS = "STAGED_ITEMS";
    export const HOSTED_ITEMS = "HOSTED_ITEMS";
// End of Action Types for BodyItems
