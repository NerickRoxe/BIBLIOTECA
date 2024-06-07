import { validarCampo, userMatriculaRegex, passwordRegex, estadoValidacionCampos,enviarFormulario} from "./register.js";

const formLogin = document.querySelector(".form-login");
const inputPass = document.querySelector('.form-login input[type="password"]');
const inputMatricula = document.querySelector('.form-login input[type="Matricula"]');
const alertaErrorLogin = document.querySelector(".form-login .alerta-error");
const alertaExitoLogin = document.querySelector(".form-login .alerta-exito");

document.addEventListener("DOMContentLoaded", () => {
    formLogin.addEventListener("submit", (e) => {
      estadoValidacionCampos.userName = true;
      e.preventDefault();
      enviarFormulario(formLogin,alertaErrorLogin,alertaExitoLogin);
    });
  
    inputMatricula.addEventListener("input", () => {
      validarCampo(userMatriculaRegex,inputMatricula,"La matricula deben ser conforma por 3 numero primero, seguido de z y despues seguido de 4 numeros.");
    });
  
    inputPass.addEventListener("input", () => {
      validarCampo(passwordRegex,inputPass,"La contraseña tiene que ser de 4 a 12 dígitos");
    });
});