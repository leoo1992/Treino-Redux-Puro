const INCREMENTAR_TEMPO = "aluno/INCREMENTAR_TEMPO";
const REDUZIR_TEMPO = "aluno/REDUZIR_TEMPO";
const MODIFICAR_EMAIL = "aluno/MODIFICAR_EMAIL";
const MODIFICAR_TEMPO = "aluno/MODIFICAR_TEMPO";
const MODIFICAR_NOME = "aluno/MODIFICAR_NOME";

export const alunoIncrementarTempo = () => ({ type: INCREMENTAR_TEMPO });
export const alunoReduzirTempo = () => ({ type: REDUZIR_TEMPO });

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
  }
}, alunoInitialState);

export default reducer;
