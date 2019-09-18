/* eslint-disable */
import * as types from "./actionTypes.js";

// General Action Creators
export const activatePanel = (panelName) => ({
    type: types.ACTIVATE_PANEL,
    payload: panelName,
});
// End of General Action Creators


// Action Creators for Source Panel
export const addToStage = (bodyItem) => ({
    type: types.ADD_TO_STAGE,
    payload: bodyItem,
});
export const createBodyFromSource = (data) => ({
    type: types.CREATE_BODY_FROM_SOURCE,
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
export const makeNewTest = (testInfo) => ({
    type: types.MAKE_NEW_TEST,
    payload: testInfo,
});
export const addTestToServer = (testName) => ({
    type: types.ADD_TEST_TO_SERVER,
    payload: testName,
});
export const removeTestFromServer = (testName) => ({
    type: types.REMOVE_TEST_FROM_SERVER,
    payload:testName
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
export const setTestName = (testNameAndNewName) => ({
    type: types.SET_TEST_NAME,
    payload: testNameAndNewName, // Array containing current name and new name
});
export const deleteTest = (testName) => ({
    type: types.DELETE_TEST,
    payload: testName,
});
// End of Mockups Panel Action Creators

// BodyItem Selector Action Creators
export const BodyItemFilters = {
    ALL_ITEMS: types.ALL_ITEMS,
    CLONED_ITEMS: types.CLONED_ITEMS,
    STAGED_ITEMS: types.STAGED_ITEMS,
    HOSTED_ITEMS: types.HOSTED_ITEMS,
}
// End of BodyItem Selector Action Creators
