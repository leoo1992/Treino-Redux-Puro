export const COMPLETAR_AULA = "aula/COMPLETAR_AULA";
export const COMPLETAR_CURSO = "aula/COMPLETAR_CURSO";
export const RESETAR_CURSO = "aula/RESETAR_CURSO";
export const ADICIONAR_AULA = "aula/ADICIONAR_AULA";

//Functions
export const completarCurso = () => ({ type: COMPLETAR_CURSO });
export const resetarCurso = () => ({ type: RESETAR_CURSO });
export const completarAula = (payload) => ({ type: COMPLETAR_AULA, payload });
export const adicionarAula = (payload) => ({ type: ADICIONAR_AULA, payload });
