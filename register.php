<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Database connection
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "home_maintenance";

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Collect form data
    $role = $_POST['role'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Securely hash the password
    $address = $_POST['address'];
    $contact = $_POST['contact'];
    $city = $_POST['city'];
    $job_role = isset($_POST['job_role']) ? $_POST['job_role'] : null; // Optional for customers

    // Handle file upload (if employee uploads a photo)
    if ($role == 'employee' && isset($_FILES['photo']) && $_FILES['photo']['error'] == 0) {
        $photo = $_FILES['photo'];
        $photo_name = time() . '_' . $photo['name'];
        $photo_path = 'uploads/' . $photo_name;
        move_uploaded_file($photo['tmp_name'], $photo_path);
    } else {
        $photo_path = null;
    }

    // Insert data into database
    $sql = "INSERT INTO users (role, name, email, password, address, contact, city, job_role, photo) 
            VALUES ('$role', '$name', '$email', '$password', '$address', '$contact', '$city', '$job_role', '$photo_path')";

    if ($conn->query($sql) === TRUE) {
        echo "Registration successful!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>