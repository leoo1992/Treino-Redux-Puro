import fetchUser from "./fetchUser.js";//O fetch do USER é feito depois do sucesso do fetch do token
import fetchPhoto from "./fetchPhoto.js";//O fetch da PHOTO é feito depois do sucesso do fetch do token
import {
  tokenGetSuccess,
  tokenGetError,
  tokenGet,
} from "../../redux/store/exports/token.js";

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

          if (state.aluno.imagem.data === null ) {
            store.dispatch(fetchPhoto(urlToPhotoFetch));
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
