var xAxis = new Array();
var temps = new Array();
var hums = new Array();

let shapes = [];

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
    shapes = [];

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
        if (i > closestIndex) {
            const currentTime = new Date(xAxis[i]).getTime();
            const prevTime = new Date(xAxis[i - 1]).getTime();
            const diffInMinutes = (currentTime - prevTime) / (1000 * 60);

            if (diffInMinutes >= 6) {
                xAxis_needed.push(xAxis[i - 1]);
                temps_needed.push(null);
                hums_needed.push(null);

                shapes.push({
                    type: 'rect',
                    xref: 'x',
                    yref: 'paper',
                    x0: xAxis[i - 1],
                    x1: xAxis[i],
                    y0: 0,
                    y1: 1,
                    fillcolor: '#9e9e9eff',
                    opacity: 0.5,
                    line: { width: 0 }
                });
            }
        }
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

    layoutTemp.shapes = shapes;
    layoutHum.shapes = shapes;

    Plotly.react('aTemp1', dataTemp, layoutTemp);
    Plotly.react('aHum1', dataHum, layoutHum);
}

update(3);