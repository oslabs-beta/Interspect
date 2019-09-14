import * as types from "./actionTypes.js";


// General Action Creators
export const activatePanel = (panelName) => ({
    type: types.ACTIVATE_PANEL,
    payload: panelName,
});

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