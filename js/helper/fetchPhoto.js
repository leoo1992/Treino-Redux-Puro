import {
  alunoGetImageSuccess,
  alunoGetImageError,
  alunoGetImage,
} from "../../redux/store/exports/aluno.js";

export default function fetchPhoto() {
  return async (dispatch, getState) => {
    const urlToPhotoFetch = "https://dogsapi.origamid.dev/json/api/photo";
    const state = getState();
    const token = state.token.data;
    const user = state.aluno.user;
    const aluno = state.aluno.usuario.data;

    if (token && user && aluno) {
      try {
        dispatch(alunoGetImage());
        const data = await fetch(urlToPhotoFetch).then((r) => r.json());

        if (data.message) {
          dispatch(alunoGetImageError(data.message));
        } else {
          dispatch(alunoGetImageSuccess(data, localStorage));
        }
      } catch (error) {
        dispatch(alunoGetImageError(error.message));
      }
    } else {
      dispatch(alunoGetImageError("Sem usuario e token"));
    }
  };
}
