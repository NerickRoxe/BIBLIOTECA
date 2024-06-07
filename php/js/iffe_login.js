(function () {
    
    const formLogin = document.querySelector(".form-login");
    const inputPass = document.querySelector('.form-login input[type="password"]');
    const inputMatricula = document.querySelector('.form-login input[type="Matricula"]');
    const alertaError = document.querySelector(".form-login .alerta-error");
    const alertaExito = document.querySelector(".form-login .alerta-exito");
    

    const MatriculaRegex = /^[0-9]{3}z[0-9]{4}$/;
    const passwordRegex = /^.{4,12}$/;
    
    const estadoValidacionCampos = {
      Matricula: false,
      Password: false,
    };
    
    document.addEventListener("DOMContentLoaded", () => {
      formLogin.addEventListener("submit", (e) => {
        e.preventDefault();
        enviarFormulario();
      });
    
      inputMatricula.addEventListener("input",() => {
        validarCampo(MatriculaRegex,inputMatricula,"La matricula deben ser conforma por 3 numero primero, seguido de z y despues seguido de 4 numeros.");
      });
    
      inputPass.addEventListener("input", () => {
        validarCampo(passwordRegex,inputPass,"La contraseña tiene que ser de 4 a 12 dígitos");
      });
    });
    
    function validarCampo(regularExpresion, campo, mensaje) {
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
    
    function enviarFormulario() {
      //VALIDAMOS EL ENVIO DE NUESTRO FORMULARIO
    
      if (estadoValidacionCampos.Matricula && estadoValidacionCampos.Password) {
      
        estadoValidacionCampos.Matricula = false;
        estadoValidacionCampos.Password = false;
    
        formLogin.reset();
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
    
    })()
    