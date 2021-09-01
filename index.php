<html>
<head>
    <title>My Room</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="style/style.css">

    <script src="https://cdn.plot.ly/plotly-2.3.1.min.js"></script>
</head>

<?php
    include("config.php");
    include("get_datas.php");
?>
<script>var datas = <?php echo json_encode($array_res); ?>;</script>

<body stlye="width: 100%">
    <h1>
        My room
    </h1>
    <div class="contain">
        <div class="left">
            <div class="Curr">
                <div class="CurrIconCont">
                    <img src="icons/temp_3.png" alt="" class="currIcons">
                </div>
                
                <h3>Temperature</h3>
                <hr class="line">
                <p><?php echo $Currtemp?>°C</p>
            </div>
            <div class="Curr">
                <div class="CurrIconCont">
                    <img src="icons/hum.png" alt="" class="currIcons">
                </div>
                
                <h3>Humidity</h3>
                <hr class="line">
                <p><?php echo $Currhum?>%</p>
                
            </div>
        </div>
        <div class="right">
            <p class="selectint">Select time interval: </p>
            <select class="sel" name="interval" id="interval" onclick="update(this.value)">
                <option value="3">3 hours</option>
                <option value="6">6 hours</option>
                <option value="12">12 hours</option>
                <option value="24">24 hours</option>
                <option value="48">48 hours</option>
                <option value="72">72 hours</option>
            </select>

            <!--<h2 id="period">Last 1.5 hours</h2>-->
            <div class="plots">
                <div class="a" id="aTemp1"></div>
                <div class="a" id="aHum1"></div>
            </div>
        </div>
    </div>
    
    <p class = "lastUpdate">Last updated: <?php echo $Currdate?></p>
</body>
</html>

<script src="script.js">
</script>

