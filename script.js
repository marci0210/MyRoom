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
    let xAxis_needed = new Array();
    let temps_needed = new Array();  
    let hums_needed  = new Array();

    const xHoursAgo = new Date(new Date(xAxis[xAxis.length - 1]).getTime() - interval * 60 * 60 * 1000);

    let closestIndex = 0;
    let smallestDiff = Infinity;

    xAxis.forEach((time, index) => {
        const diff = Math.abs(new Date(time) - xHoursAgo);
        if (diff < smallestDiff) {
            smallestDiff = diff;
            closestIndex = index;
        }
    });

    for(let i = closestIndex; i < datas.length; i++){
        xAxis_needed.push(xAxis[i]);
        temps_needed.push(temps[i]);
        hums_needed.push(hums[i]);
    }

    let traceHum  = {
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
    let dataHum  = [traceHum];

    Plotly.react('aTemp1', dataTemp, layoutTemp);
    Plotly.react('aHum1', dataHum, layoutHum);
}

update(3);