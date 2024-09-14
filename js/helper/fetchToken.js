import {
  tokenGetSuccess,
  tokenGetError,
  tokenGet,
} from "../../redux/store/reducers/token.js";
import fetchUser from "./fetchUser.js";

export default function fetchToken(url) {
  return async (dispatch, getState) => {
    const state = getState();
    const user = state.aluno.user;
    const urlToUserFetch = "https://dogsapi.origamid.dev/json/api/user";

    if (user) {
      try {
        dispatch(tokenGet(user));
        const data = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });

        const response = await data.json();
        
        if (!response.token) {
          dispatch(tokenGetError(response.message));
        } else {
          dispatch(tokenGetSuccess(response.token, localStorage));

          if (state.aluno.usuario.data === null) {
            dispatch(fetchUser(urlToUserFetch, response.token));
          }
        }
      } catch (error) {
        dispatch(tokenGetError(error.message));
      }
    } else {
      return dispatch(tokenGetError("Erro"));
    }
  };
}
