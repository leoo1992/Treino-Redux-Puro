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

store.subscribe(render);

store.dispatch(alunoIncrementarTempo());

store.dispatch(alunoReduzirTempo());


store.dispatch(alunoIncrementarTempo());