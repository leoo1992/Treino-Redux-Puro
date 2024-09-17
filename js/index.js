import store from "../redux/store/storeConfig.js";
import render from "./helper/render.js";
import fetchToken from "./helper/fetchToken.js";
import fetchUser from "./helper/fetchUser.js";
import fetchPhoto from "./helper/fetchPhoto.js";

import {
  alunoModificarEmail,
  alunoModificarTempo,
  alunoModificarNome,
  alunoIncrementarTempo,
  alunoReduzirTempo,
} from "../redux/store/exports/aluno.js";
import {
  completarAula,
  completarCurso,
  resetarCurso,
  adicionarAula,
} from "../redux/store/exports/aulas.js";

render();
store.subscribe(render);
let state = store.getState();

async function login() {
  if (validaSeTemUsuarioESeNaoTemToken()) await store.dispatch(fetchToken());
  if (validaSeTemToken()) await store.dispatch(fetchUser());
  if (validaSeTemTokenEAlunoLogado()) await store.dispatch(fetchPhoto());
}

function validaSeTemUsuarioESeNaoTemToken() {
  state = store.getState();
  return (
    state.token.data === null &&
    state.aluno.user.username &&
    state.aluno.user.password
  );
}

function validaSeTemTokenEAlunoLogado() {
  state = store.getState();
  return state.token.data !== null && state.aluno.usuario.data;
}

function validaSeTemToken() {
  state = store.getState();
  return state.token.data !== null;
}

login();

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
