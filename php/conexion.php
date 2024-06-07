<?php
// Configuración de la conexión PDO a la base de datos MySQL
$host = 'localhost';
$dbname = 'biblioteca';
$username = 'root';
$password = '';

try {
    // Crear la conexión PDO
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    // Habilitar el manejo de errores de PDO
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // En caso de error al conectar, mostrar mensaje de error y salir
    die("Error al conectar a la base de datos: " . $e->getMessage());
}
?>
