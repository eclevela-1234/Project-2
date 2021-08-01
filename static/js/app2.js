const parser = d3.timeParse("%m/%d/%Y");

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


    d3.json("../data/salesdata.json").then(Sdata => {

        // parse data out to variables
        // * Use `sample_values` as the values for the bar chart.
        // * Use `otu_ids` as the labels for the bar chart.
        // * Use `otu_labels` as the hovertext for the chart.
        Sdata.Date = parser(Sdata.Date);

        console.log(Sdata);
        // var dailySales = Sdata;
        // console.log(dailySales);
        const filteredData = Sdata.filter(loc => loc.Location == location);

        // var resultsArray = samples.filter(sampleObj => sampleObj.Date == sample);
        // var result = resultsArray[0];

        // console.log(result);
        // var sample_values = result.sample_values;
        // console.log(sample_values)
        // var otu_ids = result.otu_ids;
        // console.log(otu_ids)
        // var otu_labels = result.otu_labels;
        // console.log(otu_labels)


        var xCoords = filteredData.map(date => (date.Date));
        console.log(xCoords);
        var yCoords = filteredData.map(location => location.Sales);
        console.log(yCoords);
        // var year1 = filteredData.filter(year => year.Year == 1718);
        // console.log(year1);
        // var year1x = year1.map(date => date.DATE);

        // console.log(year1x);

        //         // Build bar chart
        // Use slice to get the top ten data
        // filteredData.sort((a, b) => a - b);
      var trace1 = {
          x: xCoords,
          y: yCoords,
          mode: 'Scatter + Lines'
      };
      var data = [trace1];





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

function metricChanged(nextLocation) {
    // buildWdata(nextSample);
    buildCharts(nextLocation);
}
init();


