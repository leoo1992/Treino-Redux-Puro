import {
  alunoGetUserSuccess,
  alunoGetUserError,
  alunoGetUser,
} from "../../redux/store/exports/aluno.js";

export default function fetchUser() {
  return async (dispatch, getState) => {
    const urlToUserFetch = "https://dogsapi.origamid.dev/json/api/user";
    const token = getState().token.data;

    if (token) {
      try {
        dispatch(alunoGetUser(token));
        const data = await fetch(urlToUserFetch, {
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
      return dispatch(alunoGetUserError("Sem token"));
    }
  };
}
