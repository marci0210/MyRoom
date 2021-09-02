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
            family: 'Ubuntu',
            size: 20,
            color: 'gray'
        },
        xref: 'paper',
        x: 0.5,
    },
    xaxis: {
        title: {
        text: 'Date',
        font: {
            family: 'Ubuntu',
            size: 18,
            color: 'gray'
        },
        xref: 'paper',
        x: 0.5,
        },
    },
    yaxis: {
        title: {
        text: '°C',
        font: {
            family: 'Ubuntu',
            size: 18,
            color: 'gray'
        },
        xref: 'paper',
        x: 0.5,
        }
    },
    plot_bgcolor:"white",
    paper_bgcolor:"white"
};
var layoutHum = {
    title: {
        text:'Humidity',
        font: {
            family: 'Ubuntu',
            size: 20,
            color: 'gray'
        },
        xref: 'paper',
        x: 0.5,
    },
    xaxis: {
        title: {
        text: 'Date',
        font: {
            family: 'Ubuntu',
            size: 18,
            color: 'gray'
        },
        xref: 'paper',
        x: 0.5,
        },
    },
    yaxis: {
        title: {
        text: '%',
        font: {
            family: 'Ubuntu',
            size: 18,
            color: 'blagrayck'
        },
        xref: 'paper',
        x: 0.5,
        }
    },
    plot_bgcolor:"white",
    paper_bgcolor:"white"
    
};

function update(interval){
    /*document.getElementById("period").innerHTML = "Last " + interval + " hours";*/

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
        marker: {
            color: 'blue',
            size: 2
        },
        line: {
            color: 'blue',
            width: 2
        },
        type: 'scatter'
    };
    let traceTemp = {
        x: xAxis_needed,
        y: temps_needed,
        mode: 'lines+markers',
        marker: {
            color: 'red',
            size: 2
        },
        line: {
            color: 'red',
            width: 2
        },
        type: 'scatter'
    };

    let dataTemp = [traceTemp];
    let dataHum = [traceHum];

    Plotly.newPlot('aTemp1', dataTemp, layoutTemp);
    Plotly.newPlot('aHum1', dataHum, layoutHum);
}

update(3);