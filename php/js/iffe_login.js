(function () {
  const formLogin = document.querySelector(".form-login");
  const inputPass = document.querySelector('.form-login input[name="userPassword"]');
  const inputMatricula = document.querySelector('.form-login input[name="userMatricula"]');
  const alertaError = document.querySelector(".form-login .alerta-error");
  const alertaExito = document.querySelector(".form-login .alerta-exito");

  const userMatriculaRegex = /^[0-9]{3}z[0-9]{4}$/; 
  const userPasswordRegex = /^.{4,12}$/;

  const estadoValidacionCampos = {
    userMatricula: false,
    userPassword: false,
  };

  document.addEventListener("DOMContentLoaded", () => {
    formLogin.addEventListener("submit", (e) => {
      e.preventDefault();
      estadoValidacionCampos.userMatricula = userMatriculaRegex.test(inputMatricula.value);
      estadoValidacionCampos.userPassword = userPasswordRegex.test(inputPass.value);

      enviarFormulario(formLogin, alertaError, alertaExito);
    });

    inputMatricula.addEventListener("input", () => {
      validarCampo(userMatriculaRegex, inputMatricula, "La matrícula debe tener el formato 123z4567.");
    });

    inputPass.addEventListener("input", () => {
      validarCampo(userPasswordRegex, inputPass, "La contraseña tiene que ser de 4 a 12 dígitos.");
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
    if (estadoValidacionCampos.userMatricula && estadoValidacionCampos.userPassword) {
      const formData = new FormData(form);

      fetch('login_usuario.php', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alertaExito.classList.add("alertaExito");
          setTimeout(() => {
            window.location.href = '../inicio/index.html'; // Redirigir a la página deseada
          }, 1000);
        } else {
          alertaError.textContent = data.message;
          alertaError.classList.add("alertaError");
          setTimeout(() => {
            alertaError.classList.remove("alertaError");
          }, 3000);
        }
      })
      .catch(error => {
        alertaError.textContent = 'Error al intentar iniciar sesión';
        alertaError.classList.add("alertaError");
        setTimeout(() => {
          alertaError.classList.remove("alertaError");
        }, 3000);
      });

      return;
    }

    alertaExito.classList.remove("alertaExito");
    alertaError.classList.add("alertaError");
    setTimeout(() => {
      alertaError.classList.remove("alertaError");
    }, 3000);
  }
})();
