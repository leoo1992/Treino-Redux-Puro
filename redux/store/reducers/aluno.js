const INCREMENTAR_TEMPO = "aluno/INCREMENTAR_TEMPO";
const REDUZIR_TEMPO = "aluno/REDUZIR_TEMPO";
const MODIFICAR_EMAIL = "aluno/MODIFICAR_EMAIL";
const MODIFICAR_TEMPO = "aluno/MODIFICAR_TEMPO";
const MODIFICAR_NOME = "aluno/MODIFICAR_NOME";
const START_FETCH = "aluno/START_FETCH";
const FETCH_SUCCESS = "aluno/FETCH_SUCCESS";
const FETCH_ERROR = "aluno/FETCH_ERROR";

export const alunoIncrementarTempo = () => ({ type: INCREMENTAR_TEMPO });
export const alunoReduzirTempo = () => ({ type: REDUZIR_TEMPO });
export const alunoGetImage = () => ({ type: START_FETCH });

export const alunoGetImageSuccess = (payload) => ({
  type: FETCH_SUCCESS,
  payload,
  localStorage: 'data-img'
});

export const alunoGetImageError = (payload) => ({
  type: FETCH_ERROR,
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

const alunoInitialState = {
  nome: "Leonardo Santos",
  email: "leo@leo.com",
  diasRestantes: 120,
  imagem: {
    loading: false,
    data: null,
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
    case START_FETCH:
      state.imagem.loading = true;
      break;
    case FETCH_SUCCESS:
      state.imagem.loading = false;
      state.imagem.data = action?.payload[0]?.src;
      state.imagem.error = null;
      break;
    case FETCH_ERROR:
      state.imagem.loading = false;
      state.imagem.data = null;
      state.imagem.error = action.payload;
      break;
  }
}, alunoInitialState);

export default reducer;
