import store from "../../redux/store/storeConfig.js";
import {
  alunoEl,
  emailEl,
  diasEl,
  aulasEl,
  aulasfaltaEl,
  image,
  loading,
  user,
} from "./getElements.js";

export default function render() {
  const { aulas, aluno } = store.getState();
  const { usuario, imagem, nome, email, diasRestantes } = aluno;

  renderPhoto();
  renderUser();
  renderAluno();
  renderAulas();

  function renderPhoto() {
    if (imagem.loading) {
      loading.style.display = "block";
      loading.innerText = "Carregando...";
    }
    
    if (imagem.error) {
      loading.innerText = imagem.error;
      loading.style.display = "block";
    }
    
    if (imagem.data) {
      image.src = imagem.data;
      image.style.display = "block";
      loading.style.display = "none";
    } else {
      image.style.display = "none";
    }
  }

  function renderUser() {
    if (usuario.loading) {
      user.innerText = "Carregando...";
    } else if (usuario.data) {
      user.innerText = `Usuário: ${usuario.data.toUpperCase()}`;
    }
    user.style.display = usuario.loading || usuario.data ? "block" : "none";
  }

  function renderAluno() {
    alunoEl.innerText = `Aluno: ${nome}`;
    emailEl.innerText = `Email: ${email}`;
  }

  function renderAulas() {
    const aulasCompletas = aulas.filter((a) => a.completa).length;
    diasEl.innerText = `Dias restantes: ${diasRestantes}`;
    aulasEl.innerText = `Aulas completas: ${aulasCompletas}`;
    aulasfaltaEl.innerText = `Aulas restantes: ${
      aulas.length - aulasCompletas
    }`;
  }
}
