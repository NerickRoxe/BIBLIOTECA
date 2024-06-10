const formRegister = document.querySelector(".form-register");
const inputMatricula = document.querySelector('.form-login input[name="userMatricula"]');
const inputUser = document.querySelector('.form-register input[name="userName"]');
const inputCarrera = document.querySelector('.form-register input[name="userCarrera"]');
const inputGrado = document.querySelector('.form-register input[name="userGrado"]');
const inputPhone = document.querySelector('.form-register input[name="userPhone"]');
const inputPass = document.querySelector('.form-register input[name="userPassword"]');
const inputEmail = document.querySelector('.form-register input[name="userEmail"]');
const alertaError = document.querySelector(".form-register .alerta-error");
const alertaExito = document.querySelector(".form-register .alerta-exito");

const MatriculaRegex = /^[0-9]{3}z[0-9]{4}$/;
const userNameRegex = /^[a-zA-Z0-9\_\-]{4,16}$/;
const userCarreraRegex = /^[a-zA-Z]+$/;
const userGradoRegex = /^[0-9][a-zA-Z]{1,1}$/;
const userPhoneRegex = /^[0-9]{10}$/;
const userEmailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const PasswordRegex = /^.{4,12}$/;

const estadoValidacionCampos = {
  userMatricula: false,
  userName: false,
  userCarrera: false,
  userGrado: false,
  userPhone: false,
  userEmail: false,
  userPassword: false,
};

document.addEventListener("DOMContentLoaded", () => {
  formRegister.addEventListener("submit", (e) => {
    e.preventDefault();
    enviarFormulario(formRegister, alertaError, alertaExito);
  });

  inputMatricula.addEventListener("input", () => {
    validarCampo(MatriculaRegex, inputMatricula, "La matricula debe tener el formato correcto.");
  });

  inputUser.addEventListener("input", () => {
    validarCampo(userNameRegex, inputUser, "El usuario debe contener de 4 a 16 caracteres alfanuméricos, guiones bajos y guiones.");
  });

  inputCarrera.addEventListener("input", () => {
    validarCampo(userCarreraRegex, inputCarrera, "La carrera solo puede contener letras.");
  });

  inputGrado.addEventListener("input", () => {
    validarCampo(userGradoRegex, inputGrado, "El grado debe tener un formato específico, por ejemplo: 6A.");
  });

  inputPhone.addEventListener("input", () => {
    validarCampo(userPhoneRegex, inputPhone, "El teléfono debe contener 10 números.");
  });

  inputEmail.addEventListener("input", () => {
    validarCampo(userEmailRegex, inputEmail, "El correo electrónico debe tener un formato válido.");
  });

  inputPass.addEventListener("input", () => {
    validarCampo(PasswordRegex, inputPass, "La contraseña debe tener entre 4 y 12 caracteres.");
  });
});

function validarCampo(regularExpresion, campo, mensaje) {
  const validarCampo = regularExpresion.test(campo.value);
  if (validarCampo) {
    eliminarAlerta(campo.parentElement.parentElement);
    estadoValidacionCampos[campo.name] = true;
    campo.parentElement.classList.remove("error");
    return;
  }

  estadoValidacionCampos[campo.name] = false;
  campo.parentElement.classList.add("error");
  mostrarAlerta(campo.parentElement.parentElement, mensaje);
}

function mostrarAlerta(referencia, mensaje) {
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

function enviarFormulario(form, alertaError, alertaExito) {
  const formData = new FormData(form);

  fetch('Registro_usuario.php', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      alertaExito.classList.add("alertaExito");
      form.reset();
      setTimeout(() => {
        alertaExito.classList.remove("alertaExito");
      }, 3000);
    } else {
      throw new Error('Error al enviar datos del formulario');
    }
  })
  .catch(error => {
    alertaError.classList.add("alertaError");
    setTimeout(() => {
      alertaError.classList.remove("alertaError");
    }, 3000);
  });
}
