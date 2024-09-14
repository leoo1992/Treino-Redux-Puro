import getLocalStorage from "../../../js/helper/getLocalStorage.js";
import getPhotoLocalStorage from "../../../js/helper/getPhotoLocalStorage.js";

export const initialState = {
  user: {
    username: "dog",
    password: "dog",
  },
  usuario: {
    loading: false,
    data: getLocalStorage("user"),
    error: null,
  },
  nome: "Leonardo Santos",
  email: "leo@leo.com",
  diasRestantes: 120,
  imagem: {
    loading: false,
    data: getPhotoLocalStorage("data-img"),
    error: null,
  },
};
