import { initialState } from "../initialStates/token.js";
import { START_FETCH, FETCH_SUCCESS, FETCH_ERROR } from "../exports/token.js";

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
