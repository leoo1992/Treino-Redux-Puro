import store from "../redux/store/storeConfig.js";
import render from "./render.js";
import {
  alunoModificarEmail,
  alunoModificarTempo,
  alunoModificarNome,
  alunoIncrementarTempo,
  alunoReduzirTempo,
  alunoGetImageSuccess,
  alunoGetImageError,
  alunoGetImage,
} from "../redux/store/reducers/aluno.js";
import {
  completarAula,
  completarCurso,
  resetarCurso,
  adicionarAula,
} from "../redux/store/reducers/aulas.js";

const urlToFetch = "https://dogsapi.origamid.dev/json/api/photo";

function fetchUrl(url) {
  return async (dispatch, _getState) => {
    try {
      dispatch(alunoGetImage());
      const data = await fetch(url).then((r) => r.json());

      if (data.message) {
        dispatch(alunoGetImageError(data.message));
      } else {
        dispatch(alunoGetImageSuccess(data));
      }
    } catch (error) {
      dispatch(alunoGetImageError(error.message));
    }
  };
}

render();
store.subscribe(render);
store.dispatch(fetchUrl(urlToFetch));
store.dispatch(alunoIncrementarTempo());
store.dispatch(alunoReduzirTempo());
store.dispatch(alunoModificarNome("Leonardo Santos Custódio"));
store.dispatch(alunoModificarTempo(350));
store.dispatch(alunoModificarEmail("santos-contato@hotmail.com.br"));
store.dispatch(alunoModificarEmail("santos-contato@hotmail.com.br"));
store.dispatch(completarAula(2));
store.dispatch(completarCurso());
store.dispatch(resetarCurso());
store.dispatch(completarAula(2));
store.dispatch(adicionarAula({ id: 5, nome: "React", completa: true }));
