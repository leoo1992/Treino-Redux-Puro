import store from "../redux/store/storeConfig.js";
import {
  alunoEl,
  emailEl,
  diasEl,
  aulasEl,
  aulasfaltaEl,
} from "./getElements.js";

export default function render() {
  const { aulas, aluno } = store.getState();

  alunoEl.innerText = `Aluno: ${aluno.nome}`;
  emailEl.innerText = `Email: ${aluno.email}`;
  diasEl.innerText = `Dias restantes: ${aluno.diasRestantes}`;
  aulasEl.innerText = `Aulas completas: ${
    aulas.filter((a) => a.completa === true).length
  }`;
  aulasfaltaEl.innerText = `Aulas restantes: ${
    aulas.length - aulas.filter((a) => a.completa === true).length
  }`;
}
