<?php
// Incluir el archivo de conexión a la base de datos
include 'conexion.php';

// Verificar si se recibieron datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los valores de los campos del formulario
    $matricula = $_POST['userMatricula'];
    $contraseña = $_POST['userPassword'];

    try {
        // Preparar la consulta
        $query = "SELECT * FROM registro WHERE matricula = ? AND contraseña = ?";
        $stmt = $pdo->prepare($query);
        $stmt->execute([$matricula, $contraseña]);

        // Verificar si se encontró el usuario
        if ($stmt->rowCount() > 0) {
            // Usuario encontrado, iniciar sesión
            session_start();
            $_SESSION['user'] = $stmt->fetch(PDO::FETCH_ASSOC);
            echo json_encode(['success' => true]);
        } else {
            // Usuario no encontrado
            echo json_encode(['success' => false, 'message' => 'Credenciales incorrectas.']);
        }
    } catch (PDOException $e) {
        // Error en la consulta
        echo json_encode(['success' => false, 'message' => 'Error al intentar iniciar sesión: ' . $e->getMessage()]);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Método de solicitud no válido.']);
}
?>
