function buildWdata(Day) {

    // get data

    d3.csv("cleanSales.csv").then(function (salesData) {
        console.log(salesData);
    });



    d3.csv("RichmondWeather.csv").then(function (wData) {
        console.log(wData);
        var dates = wData.map(data => data.DATE)

        console.log(dates);






        // var metadata = data.metadata;
        // console.log(metadata);

        //     // filtere meta data for a single sample
        //     var resultsArray = metadata.filter(sampleObj => sampleObj.id == sample);
        //     console.log(resultsArray);

        //     var result = resultsArray[0];
        //     console.log(result);

        //     var washFreq = result.wfreq;
        //     console.log(washFreq);

        //     // build indicator/gauge

        //     var gaugeData = [
        //       {
        //         domain: { x: [0, 1], y: [0, 1] },
        //         value: washFreq,
        //         title: { text: "Belly Button Wash Frequency <br> Scrubs Per Week" },
        //         type: "indicator",
        //         mode: "gauge+number",
        //         gauge: { axis: { range: [null, 9] } }
        //       }
        //     ];

        //     var gaugeLayout = { width: 600, height: 400 };
        //     Plotly.newPlot('gauge', gaugeData, gaugeLayout);

        //     var panel = d3.select("#weather-data");

        //     // ensure the panel is clear
        //     panel.html("");

        //     // use object.entries to access key value pairs
        //     // use chain technique to add text to my h5 tag for each key value pair
        //     Object.entries(result).forEach(([key, value]) => {
        //       panel.append("h5").text(`${key.toUpperCase()}: ${value}`);
        //     });

        //     });
        //   };

        //     function buildCharts (sample) {
        //       d3.json("samples.json").then(data => {
        //         console.log(data);
        //         // parse data out to variables
        //         // * Use `sample_values` as the values for the bar chart.
        //         // * Use `otu_ids` as the labels for the bar chart.
        //         // * Use `otu_labels` as the hovertext for the chart.

        //         var samples = data.samples;
        //         console.log(samples);

        //         var resultsArray = samples.filter(sampleObj => sampleObj.id == sample);
        //         var result = resultsArray[0];

        //         console.log(result);
        //         var sample_values = result.sample_values;
        //           console.log(sample_values)
        //         var otu_ids = result.otu_ids;
        //           console.log(otu_ids)
        //         var otu_labels = result.otu_labels;
        //           console.log(otu_labels)


        //       // Build bar chart
        //         // Use slice to get the top ten data

        //         var yticks = otu_ids.slice(0,10).map(otuID => `OTU ${otuID}`).reverse();

        //         var barData = [{
        //           y: yticks,
        //           x: sample_values.slice(0,10).reverse(),
        //           text: otu_labels.slice(0,10).reverse(),
        //           type: "bar",
        //           orientation: "h",

        //         }];

        //         barLayout = {
        //           title: "Top Ten Bacteria Cultures Found",
        //           margin: {
        //             t: 30,
        //             r: 0,
        //             b: 30,
        //             l: 75
        //           },

        //         };




        //         Plotly.newPlot("bar", barData, barLayout);

        //       // Build bubble chart

        //         var bubbleData = [{
        //           x: otu_ids,
        //           y: sample_values,

        //           text: otu_labels,
        //           mode: "markers",
        //           marker: {
        //             size:sample_values,
        //             color: otu_ids,
        //             colorscale: "Earth"
        //           },

        //           orientation: "h",
        //         }];

        //         var bubbleLayout = {
        //             title:"Bacteria Cultures Per Sample",
        //             margin: {
        //               t: 30,
        //               r: 10,
        //               b: 30,
        //               l: 75,
        //             },
        //             hovermode: "closest",
        //             xaxis: {title: "OTU ID"},
        //         };


        //         Plotly.newPlot("bubble", bubbleData, bubbleLayout);





    });


};

//     };

function init() {
    var pullDownMenu = d3.select("#selDataset")
    d3.csv("RichmondWeather.csv").then(function (wData) {
        console.log(wData);
        var days = wData.map(data => data.DATE)

        console.log(days);

        days.forEach((day) => {
            pullDownMenu
                .append("option")
                .property("value", day)
                .text(day);

        })


    });

    buildWdata(940);
    // buildCharts(940);
}

function optionChanged(nextSample) {
    buildMetadata(nextSample);
    buildCharts(nextSample);
}
init();


