<?php
session_start();
include '../credentials.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$conn = new mysqli($servername, $username, $password, $dbname);
mysqli_set_charset($conn,"utf8");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$request->title = addslashes($request->title);
$request->text = addslashes($request->text);
$request->category = addslashes($request->category);


$sql = "INSERT INTO News (title, image, text, catId) VALUES ('$request->title', '$request->imgUrl', '$request->text', '$request->catId')";


if ($conn->query($sql) === TRUE) {
 	echo "Новину додано успішно.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>
