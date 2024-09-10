import {
    alunoIncrementarTempo,
    alunoReduzirTempo,
    alunoModificarEmail,
    alunoModificarTempo,
    alunoModificarNome
} from "../redux/store/reducers/aluno.js";
import { completarAula, completarCurso, resetarCurso, adicionarAula } from "../redux/store/reducers/aulas.js";
import store from "../redux/store/storeConfig.js";
import render from "./render.js";

render();

const aulaReact = { 
    id: 5,
    nome: 'React',
    completa: false
}

store.subscribe(render);
store.dispatch(resetarCurso());
store.dispatch(completarAula(3));
store.dispatch(completarAula(4));
store.dispatch(completarCurso());
store.dispatch(alunoReduzirTempo());
store.dispatch(alunoIncrementarTempo());
store.dispatch(alunoIncrementarTempo());
store.dispatch(alunoModificarEmail('santos-contato@hotmail.com.br'));
store.dispatch(alunoModificarTempo(300));
store.dispatch(alunoModificarNome('Leonardo Santos Custódio'));
store.dispatch(adicionarAula(aulaReact));