const parser = d3.timeParse("%m/%d");


function buildCharts(location, metric) {


    d3.json("../data/Sortedsalesdata.json").then(Sdata => {

        // Date Parser - Not sure if it mattered, lol
        Sdata.Date = parser(Sdata.Date);

        const filteredData = Sdata.filter(loc => loc.Location == location);

        // Filter Yearly Data on Year Field
        var year1 = filteredData.filter(year => year.Year == 1718);
        var year1x = year1.map(date => date.Date);
        var year1y = year1.map(sales => sales[metric]);

        var year2 = filteredData.filter(year => year.Year == 1819);
        var year2y = year2.map(sales2 => sales2[metric]);

        var year3 = filteredData.filter(year => year.Year == 1920);
        var year3y = year3.map(sales => sales[metric]);

        var year4 = filteredData.filter(year => year.Year == 2021);
        var year4y = year4.map(sales2 => sales2[metric]);

        var trace1 = {
            x: year1x,
            y: year1y,
            mode: 'lines',
            name: 'FY 17-18'
        };


        var trace2 = {
            x: year1x,
            y: year2y,
            mode: 'lines',
            name: 'FY 18-19'
        };
        var trace3 = {
            x: year1x,
            y: year3y,
            mode: 'lines',
            name: 'FY 19-20'
        };


        var trace4 = {
            x: year1x,
            y: year4y,
            mode: 'lines',
            name: 'FY 20-21'
        };

        var data = [trace1, trace2, trace3, trace4];
        barLayout = {
            title: metric,
            margin: {
                t: 30,
                r: 0,
                b: 80,
                l: 75
            },
        }

        Plotly.newPlot("line", data, barLayout);
       
        //  calculate stats data - My feeble attempt, bwahahahahaha
        // function mean(arr) {
        //     var total = 0;
        //     for (var i = 0; i < arr.length; i++) {
        //         total += arr[i];
        //     }
        //     var meanValue = total / arr.length;

        //     return meanValue;
        // }
        // var MeanData = parseFloat(year1y);
        // console.log(mean(MeanData));
    });


    // Show data filters in Header
    var datehead = d3.select(".dateheader");
    datehead.text(`Location: ${location} ---> Metric: ${metric}`);

};

function init() {

    const location = "ETC";
    const metric = "Sales";
    buildCharts(location, metric);
}

// Event Listeners for Calcualte button

document.getElementById('submit').onclick = function () {
    var selected = [];
    for (var option of document.getElementById('Location').options) {
        if (option.selected) {
            selected.push(option.value);
        }
    }
    for (var option of document.getElementById('Metric').options) {
        if (option.selected) {
            selected.push(option.value);
        }
    }
    buildCharts(selected[0], selected[1]);
}

init();


