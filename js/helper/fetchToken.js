import {
  tokenGetSuccess,
  tokenGetError,
  tokenGet,
} from "../../redux/store/exports/token.js";

export default function fetchToken() {
  return async (dispatch, getState) => {
    const urlToTokenFetch =
      "https://dogsapi.origamid.dev/json/jwt-auth/v1/token";
    //aqui esta o usuario
    const user = getState().aluno.user;

    if (user) {
      try {
        dispatch(tokenGet(user));
        const data = await fetch(urlToTokenFetch, {
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
        }
      } catch (error) {
        dispatch(tokenGetError(error.message));
      }
    } else {
      return dispatch(tokenGetError("Sem usuario"));
    }
  };
}
