<?php
require "connection.php";

$username  = $_REQUEST['username'];
$email     = $_REQUEST['email'];
$password  = md5($_REQUEST['password']);
$confirmPass	  = md5($_REQUEST['confirmPass']);





$sql = "INSERT INTO users (username, email, password, confirmPass) VALUES (?,?,?,?)";
$result  = $conn->prepare($sql);

$result->execute([$username, $email, $password, $confirmPass]);

?>