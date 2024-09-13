const COMPLETAR_AULA = "aula/COMPLETAR_AULA";
const COMPLETAR_CURSO = "aula/COMPLETAR_CURSO";
const RESETAR_CURSO = "aula/RESETAR_CURSO";
const ADICIONAR_AULA = "aula/ADICIONAR_AULA";

export const completarCurso = () => ({ type: COMPLETAR_CURSO });
export const resetarCurso = () => ({ type: RESETAR_CURSO });
export const completarAula = (payload) => ({ type: COMPLETAR_AULA, payload });
export const adicionarAula = (payload) => ({ type: ADICIONAR_AULA, payload });

const aulaInitialState = [
  {
    id: 1,
    nome: "Design",
    completa: true,
  },
  {
    id: 2,
    nome: "HTML",
    completa: false,
  },
  {
    id: 3,
    nome: "CSS",
    completa: false,
  },
  {
    id: 4,
    nome: "JavaScript",
    completa: false,
  },
];

const reducer = immer.produce((state, action) => {
  switch (action.type) {
    case COMPLETAR_AULA: {
      const index = state.findIndex((x) => x.id === action.payload);
      if (!isNaN(index) && state[index]) state[index].completa = true;
      break;
    }
    case COMPLETAR_CURSO:
      state.forEach((aula) => (aula.completa = true));
      break;
    case RESETAR_CURSO:
      state.forEach((aula) => (aula.completa = false));
      break;
    case ADICIONAR_AULA:
      state.push(action.payload);
      break;
  }
}, aulaInitialState);

export default reducer;
