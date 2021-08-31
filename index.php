<html>
<head>
    <title>My Room</title>
    <link rel="stylesheet" href="style/style.css">

    <script src="https://cdn.plot.ly/plotly-2.3.1.min.js"></script>
</head>
<?php
    include("config.php");
    $query = "select hum, temp, date from TempHum order by date desc limit 1440;";
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

<body stlye="width: 100%">
    <h1>
        My room
    </h1>
    <h3>Current Temperature and Humidity</h3>
    <div class="curr">
        <div class="CurrTemp">
            <p><?php echo $Currtemp?>°C</p>
        </div>
        <div class="CurrHum">
            <p><?php echo $Currhum?>%</p>
        </div>
    </div>
    
    <h2>Last 1.5 hours</h2>
    <div class="plots">
        <div class="a" id="aTemp1.5"></div>
        <div class="a" id="aHum1.5"></div>
    </div>
    <h2>Last day</h2>
    <div class="plots">
        <div class="a" id="aTemp1"></div>
        <div class="a" id="aHum1"></div>
    </div>
    <p class = "lastUpdate">Last updated: <?php echo $Currdate?></p>
</body>

<script>
    var datas = <?php echo json_encode($array_res); ?>;
</script>
<script src="script.js"></script>
</html>