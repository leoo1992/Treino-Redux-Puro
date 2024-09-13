export const alertMiddleware = (_s) => (next) => (action) => {
    switch (action.type) {
      case "aluno/INCREMENTAR_TEMPO":
        alert("Acrescentou 1");
        break;
      case "aluno/REDUZIR_TEMPO":
        alert("Reduziu 1");
        break;
      default:
        break;
    }
    return next(action);
  };