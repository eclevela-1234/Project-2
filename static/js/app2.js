const parser = d3.timeParse("%m/%d");

// d3.json("weatherdata.json").then(data => {
//     console.log(data);
//     var metadata = data.metadata;
//     console.log(metadata);
// })


// function buildWdata(location) {




//     d3.json("../data/weatherdata.json").then(wdata => {

//         var filteredData = wdata.filter(day => day.DATE == sample);
//         console.log(filteredData);
//         var result = filteredData[0];
//         console.log(result);
//         var datee = result.DATE;
//         //     var washFreq = result.wfreq;
//         //     console.log(washFreq);

//         //     // build indicator/gauge

//         //     var gaugeData = [
//         //       {
//         //         domain: { x: [0, 1], y: [0, 1] },
//         //         value: washFreq,
//         //         title: { text: "Belly Button Wash Frequency <br> Scrubs Per Week" },
//         //         type: "indicator",
//         //         mode: "gauge+number",
//         //         gauge: { axis: { range: [null, 9] } }
//         //       }
//         //     ];

//         //     var gaugeLayout = { width: 600, height: 400 };
//         //     Plotly.newPlot('gauge', gaugeData, gaugeLayout);
//         var datehead = d3.select(".dateheader");
//         datehead.text(`Business Date: ${datee}`);


//         var panel = d3.select("#weather-Data");

//         // ensure the panel is clear
//         panel.html("");

//         // use object.entries to access key value pairs
//         // use chain technique to add text to my h5 tag for each key value pair
//         Object.entries(result).forEach(([key, value]) => {
//             panel.append("h5").text(`${key}: ${value}`);
//         });
//     });
// };

function buildCharts(location) {


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
        var year1y = year1.map(sales => sales.Sales);

        var year2 = filteredData.filter(year => year.Year == 1819);
        var year2y = year2.map(sales2 => sales2.Sales);
      
        var year3 = filteredData.filter(year => year.Year == 1920);  
        var year3y = year3.map(sales => sales.Sales);

        var year4 = filteredData.filter(year => year.Year == 2021);
        var year4y = year4.map(sales2 => sales2.Sales);


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



    var pullDownMenu = d3.select("#selDataset")
    d3.json("../data/weatherdata.json").then(function (wData) {
        // console.log(wData);
        var days = wData.map(data => data.DATE)



        days.forEach((day) => {
            pullDownMenu
                .append("option")
                .property("value", day)
                .text(day);

        })


    });

    // buildWdata("9/1/2017");
    buildCharts("ETC");
}

function locationChanged(nextLocation) {
    // buildWdata(nextSample);
    buildCharts(nextLocation);
}
init();


