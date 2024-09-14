import { initialState } from "../initialStates/aluno.js";
import {
  INCREMENTAR_TEMPO,
  REDUZIR_TEMPO,
  MODIFICAR_EMAIL,
  MODIFICAR_TEMPO,
  MODIFICAR_NOME,
  START_FETCH_PHOTO,
  FETCH_SUCCESS_PHOTO,
  FETCH_ERROR_PHOTO,
  START_FETCH_USER,
  FETCH_SUCCESS_USER,
  FETCH_ERROR_USER,
} from "../exports/aluno.js";

const reducer = immer.produce((state, action) => {
  switch (action.type) {
    case INCREMENTAR_TEMPO:
      state.diasRestantes++;
      break;
    case REDUZIR_TEMPO:
      state.diasRestantes--;
      break;
    case MODIFICAR_EMAIL:
      state.email = action.payload;
      break;
    case MODIFICAR_TEMPO:
      state.diasRestantes = action.payload;
      break;
    case MODIFICAR_NOME:
      state.nome = action.payload;
      break;
    case START_FETCH_PHOTO:
      state.imagem.loading = true;
      break;
    case FETCH_SUCCESS_PHOTO:
      state.imagem.loading = false;
      state.imagem.data = action?.payload[0]?.src;
      state.imagem.error = null;
      break;
    case FETCH_ERROR_PHOTO:
      state.imagem.loading = false;
      state.imagem.data = null;
      state.imagem.error = action.payload;
      break;
    case START_FETCH_USER:
      state.usuario.loading = true;
      break;
    case FETCH_SUCCESS_USER:
      state.usuario.loading = false;
      state.usuario.data = action?.payload;
      state.usuario.error = null;
      break;
    case FETCH_ERROR_USER:
      state.usuario.loading = false;
      state.usuario.data = null;
      state.usuario.error = action.payload;
      break;
  }
}, initialState);

export default reducer;
