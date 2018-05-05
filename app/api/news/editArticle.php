<?php 
session_start();
include '../credentials.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
mysqli_set_charset($conn,"utf8");


$request->title = addslashes($request->title);
$request->text = addslashes($request->text);
$request->catId = addslashes($request->catId);


$sql = "UPDATE News SET title='$request->title', image='$request->imgUrl', text='$request->text', catId='$request->catId' WHERE id='$request->id'";


if ($conn->query($sql) === TRUE) {
    echo "successfully updated";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

// $request->title = "lolo";
// echo(json_encode($request));

?>