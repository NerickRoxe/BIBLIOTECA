const formRegister = document.querySelector(".form-register");

export const inputMatricula = document.querySelector('.form-register input[type="Matricula"]');
const inputUser = document.querySelector('.form-register input[type="text"]');
const inputCarrera = document.querySelector('.form-register input[type="Carrera"]');
const inputGrado = document.querySelector('.form-register input[type="Grado"]');
const inputPhone = document.querySelector('.form-register input[type="Phone"]');
const inputPass = document.querySelector('.form-register input[type="password"]');
const inputEmail = document.querySelector('.form-register input[type="email"]');

const alertaError = document.querySelector(".form-register .alerta-error");
const alertaExito = document.querySelector(".form-register .alerta-exito");

export const userMatriculaRegex = /^[0-9]{3}+z[0-9]{4}$/;
const userNameRegex = /^[a-zA-Z0-9\_\-]{4,16}$/;
const userCarreraRegex = /^[a-zA-Z]+$/;
const userGradoRegex = /^[a-zA-Z]+$/;
const userPhoneRegex = /^[0-9]{10}$/;
export const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
export const passwordRegex = /^.{4,12}$/;

export const estadoValidacionCampos = {
  userMatricula: false,
  userName: false,
  usercarrera: false,
  userGrado: false,
  userPhone: false,
  userEmail: false,
  userPassword: false,
};

document.addEventListener("DOMContentLoaded", () => {
  formRegister.addEventListener("submit", (e) => {
    e.preventDefault();
    enviarFormulario(formRegister,alertaError,alertaExito);
  });

  inputMatricula.addEventListener("input",() => {
    validarCampo(userMatriculaRegex,inputMatricula,"La matricula deben ser conforma por 3 numero primero, seguido de z y despues seguido de 4 numeros.");
  });

  inputUser.addEventListener("input", () => {
    validarCampo(userNameRegex,inputUser,"El usuario tiene que ser de 4 a 16 dígitos y solo puede contener, letras y guión bajo.");
  });

  inputCarrera.addEventListener("input",() => {
    validarCampo(userCarreraRegex,inputCarrera,"no se admiten numeros.");
  });

  inputGrado.addEventListener("input",() => {
    validarCampo(userGradoRegex,inputGrado,"no se admiten numeros.");
  });

  inputPhone.addEventListener("input",() => {
    validarCampo(userPhoneRegex,inputPhone,"Solo se admiten numeros.");
  });

  inputEmail.addEventListener("input", () => {
    validarCampo(emailRegex,inputEmail,"El correo solo puede contener letras, números, puntos, guiones y guíon bajo.");
  });

  inputPass.addEventListener("input", () => {
    validarCampo(passwordRegex,inputPass,"La contraseña tiene que ser de 4 a 12 dígitos");
  });
});

export function validarCampo(regularExpresion, campo, mensaje) {
  const validarCampo= regularExpresion.test(campo.value);
  if (validarCampo) {
    eliminarAlerta(campo.parentElement.parentElement);
    estadoValidacionCampos[campo.name] = true;
    campo.parentElement.classList.remove("error");
    return;
  }
  estadoValidacionCampos[campo.name] = false;
  campo.parentElement.classList.add("error");
  mostrarAlerta(campo.parentElement.parentElement,mensaje);
}

function mostrarAlerta(referencia,mensaje) {
  eliminarAlerta(referencia);
  const alertaDiv = document.createElement("div");
  alertaDiv.classList.add("alerta");
  alertaDiv.textContent = mensaje;
  referencia.appendChild(alertaDiv);
}

function eliminarAlerta(referencia) {
  const alerta = referencia.querySelector(".alerta");

  if (alerta) alerta.remove();
}

export function enviarFormulario(form, alertaError,alertaExito) {
  //VALIDAMOS EL ENVIO DE NUESTRO FORMULARIO

  if (estadoValidacionCampos.userMatricula && 
    estadoValidacionCampos.userName && 
    estadoValidacionCampos.usercarrera &&
    estadoValidacionCampos.userGrado &&
    estadoValidacionCampos.userPhone &&
    estadoValidacionCampos.userEmail && 
    estadoValidacionCampos.userPassword) 
    
    {
    //Se agregó estas 3 líneas de código que evitan un error al mostrar las alertas , lo que hacen es resetear los valores del objeto
    estadoValidacionCampos.userMatricula = false;
    estadoValidacionCampos.userName = false;
    estadoValidacionCampos.usercarrera = false;
    estadoValidacionCampos.userGrado = false;
    estadoValidacionCampos.userPhone = false;
    estadoValidacionCampos.userEmail = false;
    estadoValidacionCampos.userPassword = false;

    form.reset();
    alertaExito.classList.add("alertaExito");
    alertaError.classList.remove("alertaError");
    setTimeout(() => {
      alertaExito.classList.remove("alertaExito");
    }, 3000); 
    return;
  }
  
  alertaExito.classList.remove("alertaExito");
  alertaError.classList.add("alertaError");
  setTimeout(() => {
    alertaError.classList.remove("alertaError");
  }, 3000);
}
