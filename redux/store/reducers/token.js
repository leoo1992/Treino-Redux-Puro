const START_FETCH = "token/START_FETCH";
const FETCH_SUCCESS = "token/FETCH_SUCCESS";
const FETCH_ERROR = "token/FETCH_ERROR";

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

function getLocalStorage(key, initial = null) {
  try {
    const data = JSON.parse(window.localStorage.getItem(key));
    return data || initial;
  } catch (_error) {
    return initial;
  }
}

const initialState = {
  loading: false,
  data: getLocalStorage("auth"),
  error: null,
};

const reducer = immer.produce((state, action) => {
  switch (action.type) {
    case START_FETCH:
      state.loading = true;
      break;
    case FETCH_SUCCESS:
      state.loading = false;
      state.data = action?.payload;
      state.error = null;
      break;
    case FETCH_ERROR:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      break;
  }
}, initialState);

export default reducer;
