var xAxis1 = new Array();
var temps1 = new Array();  
var hums1 = new Array();

var xAxis90 = new Array();
var temps90 = new Array();  
var hums90 = new Array();

var help = datas.length;
for(var i = 0; i < datas.length; i++){
    xAxis1.push(datas[i][2]);
    temps1.push(datas[i][0]);
    hums1.push(datas[i][1]);
    
    if(i >= datas.length - 90){
        xAxis90.push(datas[i][2]);
        temps90.push(datas[i][0]);
        hums90.push(datas[i][1]);
    }
}
var traceHum90 = {
    x: xAxis90,
    y: hums90,
    mode: 'lines+markers',
    type: 'scatter'
};
var traceTemp90 = {
    x: xAxis90,
    y: temps90,
    mode: 'lines+markers',
    type: 'scatter'
};
var traceHum1 = {
    x: xAxis1,
    y: hums1,
    mode: 'lines+markers',
    type: 'scatter'
};
var traceTemp1 = {
    x: xAxis1,
    y: temps1,
    mode: 'lines+markers',
    type: 'scatter'
};

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

var dataTemp90 = [traceTemp90];
var dataHum90 = [traceHum90];
var dataTemp1 = [traceTemp1];
var dataHum1 = [traceHum1];

Plotly.newPlot('aTemp1.5', dataTemp90, layoutTemp);
Plotly.newPlot('aHum1.5', dataHum90, layoutHum);
Plotly.newPlot('aTemp1', dataTemp1, layoutTemp);
Plotly.newPlot('aHum1', dataHum1, layoutHum);