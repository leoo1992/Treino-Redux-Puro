const INCREMENTAR_TEMPO = "aluno/INCREMENTAR_TEMPO";
const REDUZIR_TEMPO = "aluno/REDUZIR_TEMPO";
const MODIFICAR_EMAIL = "aluno/MODIFICAR_EMAIL";
const MODIFICAR_TEMPO = "aluno/MODIFICAR_TEMPO";
const MODIFICAR_NOME = "aluno/MODIFICAR_NOME";
const START_FETCH_PHOTO = "aluno/START_FETCH_PHOTO";
const FETCH_SUCCESS_PHOTO = "aluno/FETCH_SUCCESS_PHOTO";
const FETCH_ERROR_PHOTO = "aluno/FETCH_ERROR_PHOTO";
const START_FETCH_USER = "aluno/START_FETCH_USER";
const FETCH_SUCCESS_USER = "aluno/FETCH_SUCCESS_USER";
const FETCH_ERROR_USER = "aluno/FETCH_ERROR_USER";

export const alunoIncrementarTempo = () => ({ type: INCREMENTAR_TEMPO });
export const alunoReduzirTempo = () => ({ type: REDUZIR_TEMPO });
export const alunoGetImage = () => ({ type: START_FETCH_PHOTO });
export const alunoGetUser = (payload) => ({ type: START_FETCH_USER, payload });

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

function getPhotoLocalStorage(key, initial = null) {
  try {
    const dataImg = JSON.parse(window.localStorage.getItem(key));
    return dataImg?.[0]?.src || initial;
  } catch (_error) {
    return initial;
  }
}

function getUserLocalStorage(key, initial = null) {
  try {
    const user = JSON.parse(window.localStorage.getItem(key));
    return user?.username || initial;
  } catch (_error) {
    return initial;
  }
}

const alunoInitialState = {
  user: {
    username: "dog",
    password: "dog",
  },
  usuario: {
    loading: false,
    data: getUserLocalStorage("user"),
    error: null,
  },
  nome: "Leonardo Santos",
  email: "leo@leo.com",
  diasRestantes: 120,
  imagem: {
    loading: false,
    data: getPhotoLocalStorage("data-img"),
    error: null,
  },
};

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
}, alunoInitialState);

export default reducer;
