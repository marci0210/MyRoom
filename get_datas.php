<?php
    include("config.php");
    $query = "select humidity, temperature, timestamp from sensor_data order by timestamp desc limit 4320;";
    $ans = mysqli_query($db, $query);
    $row = $ans->fetch_assoc();

    $Currhum = $row["humidity"];
    $Currtemp = $row["temperature"];
    $Currdate = $row["timestamp"];

    $array = array(array($Currtemp, $Currhum, $Currdate));

    while($row = $ans->fetch_assoc())
    {
        array_push($array, array($row["temperature"], $row["humidity"], $row["timestamp"]));
    }
    $array_res = array_reverse($array);    
?>