export const INCREMENTAR_TEMPO = "aluno/INCREMENTAR_TEMPO";
export const REDUZIR_TEMPO = "aluno/REDUZIR_TEMPO";
export const MODIFICAR_EMAIL = "aluno/MODIFICAR_EMAIL";
export const MODIFICAR_TEMPO = "aluno/MODIFICAR_TEMPO";
export const MODIFICAR_NOME = "aluno/MODIFICAR_NOME";
export const START_FETCH_PHOTO = "aluno/START_FETCH_PHOTO";
export const FETCH_SUCCESS_PHOTO = "aluno/FETCH_SUCCESS_PHOTO";
export const FETCH_ERROR_PHOTO = "aluno/FETCH_ERROR_PHOTO";
export const START_FETCH_USER = "aluno/START_FETCH_USER";
export const FETCH_SUCCESS_USER = "aluno/FETCH_SUCCESS_USER";
export const FETCH_ERROR_USER = "aluno/FETCH_ERROR_USER";

//Functions
export const alunoIncrementarTempo = () => ({ type: INCREMENTAR_TEMPO });
export const alunoReduzirTempo = () => ({ type: REDUZIR_TEMPO });
export const alunoGetImage = () => ({ type: START_FETCH_PHOTO });
export const alunoGetUser = () => ({ type: START_FETCH_USER });
export const alunoGetImageSuccess = (payload) => ({
  type: FETCH_SUCCESS_PHOTO,
  payload,
  localStorage: "data-img",
});
export const alunoGetImageError = (payload) => ({
  type: FETCH_ERROR_PHOTO,
  payload,
});
export const alunoGetUserSuccess = (payload) => ({
  type: FETCH_SUCCESS_USER,
  payload,
  localStorage: "user",
});
export const alunoGetUserError = (payload) => ({
  type: FETCH_ERROR_USER,
  payload,
});
export const alunoModificarEmail = (payload) => ({
  type: MODIFICAR_EMAIL,
  payload,
});
export const alunoModificarTempo = (payload) => ({
  type: MODIFICAR_TEMPO,
  payload,
});
export const alunoModificarNome = (payload) => ({
  type: MODIFICAR_NOME,
  payload,
});
