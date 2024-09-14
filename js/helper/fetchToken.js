import {
  tokenGetSuccess,
  tokenGetError,
  tokenGet,
} from "../../redux/store/reducers/token.js";

export default function fetchPhoto(url) {
  return async (dispatch, getState) => {
    const user = getState().aluno.user;
 
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
        }
      } catch (error) {
        dispatch(tokenGetError(error.message));
      }
    } else {
      return dispatch(tokenGetError("Erro"));
    }
  };
}
