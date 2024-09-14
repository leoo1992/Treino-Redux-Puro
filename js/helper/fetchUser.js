import {
  alunoGetUserSuccess,
  alunoGetUserError,
  alunoGetUser,
} from "../../redux/store/exports/aluno.js";

//O fetch do USER é feito junto ao token
export default function fetchUser(url) {
  return async (dispatch, getState) => {
    const token = getState().token.data;

    if (token) {
      try {
        dispatch(alunoGetUser(token));
        const data = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        });

        const response = await data.json();
        if (!response.username) {
          dispatch(alunoGetUserError(response.message));
        } else {
          dispatch(alunoGetUserSuccess(response.username, localStorage));
        }
      } catch (error) {
        dispatch(tokenGetError(error.message));
      }
    } else {
      return dispatch(alunoGetUserError("Erro"));
    }
  };
}
