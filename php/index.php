<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="style.css">
    <title>FORMULARIO DE REGISTRO E INICIO SESIÓN</title>
</head>

<?php
include_once("conexion.php")
?>

<body>
    <div class="container-form register">
        <div class="information">
            <div class="info-childs">
                <h2>Bienvenido</h2>
                <p>Para unirte a nuestra comunidad por favor Inicia Sesión con tus datos</p>
                <input type="button" value="Iniciar Sesión" id="sign-in">
            </div>
        </div>
        <div class="form-information">
            <div class="form-information-childs">
                <h2>Crear una Cuenta</h2>
                <div class="icons">
                    <i class='bx bxl-google'></i>
                    <i class='bx bxl-github'></i>
                    <i class='bx bxl-linkedin'></i>
                </div>
                <p>o usa tu email para registrarte</p>
                <form class="form form-register" action="Registro_usuario.php" method="POST" novalidate>
                    <div>
                        <label>
                            <i class='bx bx-user'></i>
                            <input type="Matricula" placeholder="Matricula" name="Matricula">
                        </label>
                    </div>
                    <div>
                        <label>
                            <i class='bx bx-user'></i>
                            <input type="text" placeholder="Nombre" name="Name">
                        </label>
                    </div>
                    <div>
                        <label>
                            <i class='bx bx-user'></i>
                            <input type="Carrera" placeholder="Carrera" name="Carrera">
                        </label>
                    </div>
                    <div>
                        <label>
                            <i class='bx bx-user'></i>
                            <input type="Grado" placeholder="Grado" name="Grado">
                        </label>
                    </div>
                    <div>
                        <label>
                            <i class='bx bx-phone'></i>
                            <input type="Phone" placeholder="Telefono" name="phone">
                        </label>
                    </div>
                    <div>
                        <label>
                            <i class='bx bx-envelope'></i>
                            <input type="email" placeholder="Correo Electronico" name="Email">
                        </label>
                    </div>
                    <div>
                        <label>
                            <i class='bx bx-lock-alt'></i>
                            <input type="password" placeholder="Contraseña" name="Password">
                        </label>
                    </div>

                    <input type="submit" value="Registrarse">
                    <div class="alerta-error">Todos los campos son obligatorios</div>
                    <div class="alerta-exito">Te registraste correctamente</div>
                </form>
            </div>
        </div>
    </div>


    <div class="container-form login hide">
        <div class="information">
            <div class="info-childs">
                <h2>¡¡Bienvenido nuevamente!!</h2>
                <p>Para unirte a nuestra comunidad por favor Inicia Sesión con tus datos</p>
                <input type="button" value="Registrarse" id="sign-up">
            </div>
        </div>
        <div class="form-information">
            <div class="form-information-childs">
                <h2>Iniciar Sesión</h2>
                <div class="icons">
                    <i class='bx bxl-google'></i>
                    <i class='bx bxl-github'></i>
                    <i class='bx bxl-linkedin'></i>
                </div>
                <p>o Iniciar Sesión con una cuenta</p>
                <form class="form form-login" novalidate>
                    <div>
                        <label>
                            <i class='bx bx-envelope'></i>
                            <input type="Matricula" placeholder="Matricula" name="Matricula">
                        </label>
                    </div>
                    <div>
                        <label>
                            <i class='bx bx-lock-alt'></i>
                            <input type="password" placeholder="Contraseña" name="Password">
                        </label>
                    </div>
                    <input type="submit" value="Iniciar Sesión">
                    <div class="alerta-error">Todos los campos son obligatorios</div>
                    <div class="alerta-exito">Iniciaste sesión correctamente</div>
                </form>
            </div>
        </div>
    </div>
    <script src="js/script.js"></script>
    <script src="js/register.js" type="module"></script>
    <script src="js/iffe_login.js"></script>
    <script src="js/login_modulo.js" type="module"></script>
</body>

</html>
