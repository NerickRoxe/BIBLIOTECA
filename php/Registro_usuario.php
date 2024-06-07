<?php
// Incluir el archivo de conexión a la base de datos
include 'conexion.php';

// Verificar si se recibieron datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los valores de los campos del formulario
    $matricula = $_POST['Matricula'];
    $nombre = $_POST['Name'];
    $carrera = $_POST['Carrera'];
    $grado = $_POST['Grado'];
    $telefono = $_POST['Phone'];
    $correo = $_POST['Email'];
    $contraseña = $_POST['Password'];

    try {
        // Preparar la consulta
        $query = "INSERT INTO registro (matricula, nombre, carrera, grado, telefono, correo, contraseña) VALUES (?, ?, ?, ?, ?, ?, ?)";
        $stmt = $pdo->prepare($query);

        // Ejecutar la consulta
        $stmt->execute([$matricula, $nombre, $carrera, $grado, $telefono, $correo, $contraseña]);

        // Redireccionar al usuario después de insertar los datos
        echo '<script>alert("Usuario almacenado exitosamente"); window.location = "../registro.php";</script>';
    } catch (PDOException $e) {
        // Mostrar mensaje de error en caso de fallo en la consulta
        echo '<script>alert("Error al insertar usuario: ' . $e->getMessage() . '"); window.location = "../registro.php";</script>';
    }
}

// No es necesario cerrar la conexión en PDO, se cerrará automáticamente al finalizar el script
?>
