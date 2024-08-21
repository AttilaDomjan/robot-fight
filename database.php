<?php
$db_server = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "robot-fight_db";

$conn = new mysqli(
    // Create Connection
    $db_server,
    $db_user,
    $db_pass,
    $db_name
);

if ($conn->connect_error) {
    // Check Connection
    die("Connection failed: " . $conn->connect_error);
}

// Only for testing purposes. Comment out when the app is finished. 
// echo "Connected successfully.";


$sql_select = "SELECT * FROM robot WHERE deleted_at IS NULL";
$sql_result = mysqli_query($conn, $sql_select);


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if each form field is set and not empty
    if (isset($robot_name) && isset($robot_type) && isset($robot_power)) {
        $robot_name = $_POST['robot-name'];
        $robot_type = $_POST['robot-type'];
        $robot_power = $_POST['robot-power'];
        // Retrieve form data
        $sql = "INSERT INTO robot (name, type, power)
                        VALUES ('$robot_name', '$robot_type', $robot_power)";

        mysqli_query($conn, $sql);
    }
}

mysqli_close($conn);
