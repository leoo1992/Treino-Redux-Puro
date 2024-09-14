import { initialState } from "../initialStates/aulas.js";
import { COMPLETAR_AULA, COMPLETAR_CURSO, RESETAR_CURSO, ADICIONAR_AULA  } from "../exports/aulas.js";

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
}, initialState);

export default reducer;
