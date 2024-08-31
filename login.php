<?php
session_start(); // Start a session to store user data

// Define a sample username and password for testing
define('USERNAME', 'user123');
define('PASSWORD', 'pass123');

// Check if the form was submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Retrieve the submitted username and password from POST data
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Basic validation: Check if the username and password match
    if ($username === USERNAME && $password === PASSWORD) {
        // If credentials are correct, set session variable and redirect
        $_SESSION['loggedin'] = true;
        $_SESSION['username'] = $username;
        header('Location: welcome.php'); // Redirect to a welcome page
        exit();
    } else {
        // If credentials are incorrect, show an error message
        $error_message = "Invalid username or password.";
    }
}
?>
