const parser = d3.timeParse("%m/%d");


function buildCharts(location, metric) {


    d3.json("../data/Sortedsalesdata.json").then(Sdata => {

        // parse data out to variables
        // * Use `sample_values` as the values for the bar chart.
        // * Use `otu_ids` as the labels for the bar chart.
        // * Use `otu_labels` as the hovertext for the chart.
        Sdata.Date = parser(Sdata.Date);



        // var dailySales = Sdata;
        // console.log(dailySales);
        const filteredData = Sdata.filter(loc => loc.Location == location);

        // Filter Yearly Data
        var year1 = filteredData.filter(year => year.Year == 1718);
        var year1x = year1.map(date => date.Date);
        var year1y = year1.map(sales => sales[metric]);

        var year2 = filteredData.filter(year => year.Year == 1819);
        var year2y = year2.map(sales2 => sales2[metric]);

        var year3 = filteredData.filter(year => year.Year == 1920);
        var year3y = year3.map(sales => sales[metric]);

        var year4 = filteredData.filter(year => year.Year == 2021);
        var year4y = year4.map(sales2 => sales2[metric]);


        // console.log(year1x);

        //         // Build bar chart
        // Use slice to get the top ten data
        // filteredData.sort((a, b) => a - b);
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



        Plotly.newPlot("line", data);

        // Build bubble chart


    });








};

function init() {

    const location = "ETC";
    const metric = "Sales";
    // buildWdata("9/1/2017");
    buildCharts(location, metric);
}

// function optionChanged(nextLocation, nextMetric) {

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
    // console.log(selected[1]);

    buildCharts(selected[0], selected[1]);
}


// buildCharts(nextLocation, nextMetric);
// }

// function locationChanged(nextLocation, nextMetric) {

//     buildCharts(nextLocation, nextMetric);
// }
init();


