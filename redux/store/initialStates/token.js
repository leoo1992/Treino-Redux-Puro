import getLocalStorage from "../../../js/helper/getLocalStorage.js";

export const initialState = {
  loading: false,
  data: getLocalStorage("auth"),
  error: null,
};
