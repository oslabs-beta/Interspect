import * as types from "./actionTypes.js";


// General Action Creators
export const activatePanel = (panelName) => ({
    type: types.ACTIVATE_PANEL,
    payload: panelName,
});
// End of General Action Creators


// Action Creators for Source Panel
export const addToStage = () => ({
    type: types.ADD_TO_STAGE,
});
export const loadData = (data) => ({
    type: types.LOAD_DATA,
    payload: data,
});
export const setSourceURI = (uri) => ({
    type: types.SET_SOURCE_URI,
    payload: uri,
});
export const setContentType = (content) => ({
    type: types.SET_CONTENT_TYPE,
    payload: content,
});
export const setAuthorization = (hasAuth) => ({
    type: types.SET_AUTHORIZATION,
    payload: hasAuth,
});
export const setAuthType = (authType) => ({
    type: types.SET_AUTH_TYPE,
    payload: authType,
})
// End of Source Panel Action Creators


// Mockups Panel Action Creators
export const makeNewTest = () => ({
    type: types.MAKE_NEW_TEST,
});
export const addTestToServer = () => ({
    type: types.ADD_TEST_TO_SERVER,
});
export const toggleServer = () => ({
    type: types.TOGGLE_SERVER,
});
export const editTest = (testName) => ({
    type: types.EDIT_TEST,
    payload: testName,
});
export const saveTest = (testName) => ({
    type: types.SAVE_TEST,
    payload: testName,
});
export const setTestName = (testName) => ({
    type: types.SET_TEST_NAME,
    payload: testName,
})
// End of Mockups Panel Action Creators