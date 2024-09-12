import {
  alunoIncrementarTempo,
  alunoReduzirTempo,
  //   alunoModificarEmail,
  //   alunoModificarTempo,
  //   alunoModificarNome,
  alunoGetImageSuccess,
  alunoGetImageError,
  alunoGetImage,
} from "../redux/store/reducers/aluno.js";
// import {
//   completarAula,
//   completarCurso,
//   resetarCurso,
//   adicionarAula,
// } from "../redux/store/reducers/aulas.js";
import store from "../redux/store/storeConfig.js";
import render from "./render.js";

render();

store.subscribe(render);

store.dispatch(alunoIncrementarTempo());

store.dispatch(alunoReduzirTempo());

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

const urlToFetch = "https://dogsapi.origamid.dev/json/api/photo";

store.dispatch(fetchUrl(urlToFetch));
