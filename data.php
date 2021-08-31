<?php
    include("config.php");
    if($_SERVER["REQUEST_METHOD"] == "GET"){
        $temp = $_GET["temp"];
        $hum = $_GET["hum"];
        $date = date("Y-m-d H:i:s");

        $query = "insert into TempHum (temp, hum, date) values ('$temp', '$hum', '$date');";
        mysqli_query($db, $query);
    }
    mysqli_close($db);
?>