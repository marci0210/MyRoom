var xAxis = new Array();
var temps = new Array();
var hums = new Array();

for(var i = 0; i < datas.length; i++){
    xAxis.push(datas[i][2]);
    temps.push(datas[i][0]);
    hums.push(datas[i][1]);
}

var layoutTemp = {
    title: {
        text:'Temperature',
        font: {
            family: 'Times New Roman',
            size: 20 
        },
        xref: 'paper',
        x: 0.05,
    },
    xaxis: {
        title: {
        text: 'Date',
        font: {
            family: 'Times New Roman',
            size: 18,
            color: 'black'
        }
        },
    },
    yaxis: {
        title: {
        text: '°C',
        font: {
            family: 'Times New Roman',
            size: 18,
            color: 'black'
        }
        }
    }
};
var layoutHum = {
    title: {
        text:'Humidity',
        font: {
            family: 'Times New Roman',
            size: 20,
            color: 'black'
        }
    },
    xaxis: {
        title: {
        text: 'Date',
        font: {
            family: 'Times New Roman',
            size: 18,
            color: 'black'
        }
        },
    },
    yaxis: {
        title: {
        text: '%',
        font: {
            family: 'Times New Roman',
            size: 18,
            color: 'black'
        }
        }
    }
};

function update(interval){
    document.getElementById("period").innerHTML = "Last " + interval + " hours";

    let xAxis_needed = new Array();
    let temps_needed = new Array();  
    let hums_needed = new Array();

    for(let i = datas.length - (interval * 60); i < datas.length; i++){
        xAxis_needed.push(xAxis[i]);
        temps_needed.push(temps[i]);
        hums_needed.push(hums[i]);
    }

    let traceHum = {
        x: xAxis_needed,
        y: hums_needed,
        mode: 'lines+markers',
        type: 'scatter'
    };
    let traceTemp = {
        x: xAxis_needed,
        y: temps_needed,
        mode: 'lines+markers',
        type: 'scatter'
    };

    let dataTemp = [traceTemp];
    let dataHum = [traceHum];

    Plotly.newPlot('aTemp1', dataTemp, layoutTemp);
    Plotly.newPlot('aHum1', dataHum, layoutHum);
}

update(1.5);