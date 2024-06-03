<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "folketidende";

// Opret forbindelse
$conn = new mysqli($servername, $username, $password, $dbname);

// Check forbindelse
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>

