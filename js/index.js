import store from "../redux/store/storeConfig.js";
import render from "./helper/render.js";
import fetchPhoto from "./helper/fetchPhoto.js";
import fetchToken from "./helper/fetchToken.js";
import fetchUser from "./helper/fetchUser.js";
import {
  alunoModificarEmail,
  alunoModificarTempo,
  alunoModificarNome,
  alunoIncrementarTempo,
  alunoReduzirTempo,
} from "../redux/store/reducers/aluno.js";
import {
  completarAula,
  completarCurso,
  resetarCurso,
  adicionarAula,
} from "../redux/store/reducers/aulas.js";

const urlToPhotoFetch = "https://dogsapi.origamid.dev/json/api/photo";
const urlToTokenFetch = "https://dogsapi.origamid.dev/json/jwt-auth/v1/token";
const urlToUserFetch = "https://dogsapi.origamid.dev/json/api/user";
const state = store.getState();


render();
store.subscribe(render);

if (state.aluno.imagem.data === null) {
  store.dispatch(fetchPhoto(urlToPhotoFetch));
}

if (state.token.data === null) {
  store.dispatch(fetchToken(urlToTokenFetch));
}

if (state.aluno.usuario.data === null && state.token.data !== null ) {
  store.dispatch(fetchUser(urlToUserFetch, state.token.data));
  store.subscribe(render);
}

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
