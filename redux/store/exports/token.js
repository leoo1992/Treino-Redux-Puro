export const START_FETCH = "token/START_FETCH";
export const FETCH_SUCCESS = "token/FETCH_SUCCESS";
export const FETCH_ERROR = "token/FETCH_ERROR";

//Functions
export const tokenGet = (payload) => ({ type: START_FETCH, payload });
export const tokenGetSuccess = (payload) => ({
  type: FETCH_SUCCESS,
  payload,
  localStorage: "auth",
});
export const tokenGetError = (payload) => ({
  type: FETCH_ERROR,
  payload,
});
