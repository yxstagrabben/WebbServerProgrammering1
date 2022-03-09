<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Cars";

$q = $_GET['q'];
$sign = "%";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT Model, Year FROM Ford WHERE Model LIKE '".$sign.$q.$sign."'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    echo "Model: " . $row["Model"]. " - Year:" . $row["Year"]. "<br>";
  }
} else {
  echo "Request not found!";
}
$conn->close();
?>