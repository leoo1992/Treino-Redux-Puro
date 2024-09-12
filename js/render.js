import store from "../redux/store/storeConfig.js";
import {
  alunoEl,
  emailEl,
  diasEl,
  aulasEl,
  aulasfaltaEl,
  image,
  loading,
} from "./getElements.js";

export default function render() {
  const { aulas, aluno } = store.getState();

  if (aluno.imagem.loading) {
    loading.style.display = "block";
  } else {
    loading.style.display = "none";
  }

  if (aluno.imagem.error !== null) {
    loading.innerText = aluno.imagem.error;
    loading.style.display = "block";
  }

  if (aluno.imagem.data) {
    image.src = aluno?.imagem?.data;
    image.style.display = "block";
  } else {
    image.style.display = "none";
  }


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
