import {
    alunoGetImageSuccess,
    alunoGetImageError,
    alunoGetImage,
  } from "../../redux/store/exports/aluno.js";

export default function fetchPhoto(url) {
  return async (dispatch, _getState) => {
    try {
      dispatch(alunoGetImage());
      const data = await fetch(url).then((r) => r.json());

      if (data.message) {
        dispatch(alunoGetImageError(data.message));
      } else {
        dispatch(alunoGetImageSuccess(data, localStorage));
      }
    } catch (error) {
      dispatch(alunoGetImageError(error.message));
    }
  };
}
