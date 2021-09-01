<?php
    include("config.php");
    $query = "select hum, temp, date from TempHum order by date desc limit 4320;";
    $ans = mysqli_query($db, $query);
    $row = $ans->fetch_assoc();

    $Currhum = $row["hum"];
    $Currtemp = $row["temp"];
    $Currdate = $row["date"];

    $array = array(array($Currtemp, $Currhum, $date));

    while($row = $ans->fetch_assoc())
    {
        array_push($array, array($row["temp"], $row["hum"], $row["date"]));
    }
    $array_res = array_reverse($array);    
?>