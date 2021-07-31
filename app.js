

// d3.json("weatherdata.json").then(data => {
//     console.log(data);
//     var metadata = data.metadata;
//     console.log(metadata);
// })


function buildWdata(sample) {




    d3.json("weatherdata.json").then(wdata => {

        var filteredData = wdata.filter(day => day.DATE == sample);
        console.log(filteredData);
        var result = filteredData[0];
        console.log(result);
        var datee = result.DATE;
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
        var datehead = d3.select(".dateheader");
        datehead.text(`Business Date: ${datee}`);


        var panel = d3.select("#weather-Data");

        // ensure the panel is clear
        panel.html("");

        // use object.entries to access key value pairs
        // use chain technique to add text to my h5 tag for each key value pair
        Object.entries(result).forEach(([key, value]) => {
            panel.append("h5").text(`${key}: ${value}`);
        });
    });
};

function buildCharts(sample) {


    d3.json("salesdata.json").then(Sdata => {
        console.log(Sdata);
        // parse data out to variables
        // * Use `sample_values` as the values for the bar chart.
        // * Use `otu_ids` as the labels for the bar chart.
        // * Use `otu_labels` as the hovertext for the chart.

        // var dailySales = Sdata;
        // console.log(dailySales);
        var filteredDates = Sdata.filter(day => day.Date == sample);
        console.log(filteredDates)
        // var resultsArray = samples.filter(sampleObj => sampleObj.Date == sample);
        // var result = resultsArray[0];

        // console.log(result);
        // var sample_values = result.sample_values;
        // console.log(sample_values)
        // var otu_ids = result.otu_ids;
        // console.log(otu_ids)
        // var otu_labels = result.otu_labels;
        // console.log(otu_labels)




        //         // Build bar chart
        // Use slice to get the top ten data
        // filteredDates.sort((a, b) => a - b);
        var yticks = filteredDates.map(loc => loc.Location);
        var netSales = filteredDates.map(sale => sale.Sales);

        const netSalesnum = netSales.map((i) => parseFloat(i.replace(",", "")));
        console.log(netSalesnum)
        const itemCountnum = filteredDates.map (item => item.Item_Count)
        console.log (itemCountnum)




        console.log(yticks);
        console.log(netSales);

        var barData = [{
            y: yticks,
            x: netSalesnum,
            text: yticks,
            type: "bar",
            orientation: "h",
            transforms: [{
                type: 'sort',
                target: 'x',
                order: 'ascending'
            }]

        }];

        barLayout = {
            title: "Net Sales ($)",
            margin: {
                t: 30,
                r: 0,
                b: 30,
                l: 75
            },
            "xaxis": {
                "categoryorder": "array",
                "categoryarray": netSalesnum
            }

        };




        Plotly.newPlot("bar", barData, barLayout);

        // Build bubble chart

        d3.csv("LocationCoords.csv").then(Cdata => {

            console.log(Cdata)

            // Parse x/y coords
            var xCoords = Cdata.map(Coords => Coords.Long)
            console.log(xCoords)
            var yCoords = Cdata.map(Coords => Coords.Lat)
            console.log(yCoords)
            var clocs = Cdata.map(Coords => Coords.Location)
            console.log(clocs)

            // var netSales = filteredDates.map(sale => sale.Sales);


            // var filteredDates = Sdata.filter(day => day.Date == sample);
            // console.log(filteredDates)

            // var yticks = filteredDates.map(loc => loc.Location);
            // var netSales = filteredDates.map(sale => sale.Sales);    
            var bubbleData = [{
                x: xCoords,
                y: yCoords,

                text: clocs,
                mode: "markers",
                marker: {
                    size: {itemCountnum} / 10,
                    color: clocs,
                    colorscale: "Earth"
                },

                orientation: "h",
            }];

            var bubbleLayout = {
                title: "Total Item Sales (count)",
                margin: {
                    t: 30,
                    r: 10,
                    b: 30,
                    l: 75,
                },
                hovermode: "closest",
                xaxis: { title: "Location" },
                images: [      {
                    "source": "CampusMap.png",
                    "xref": "x",
                    "yref": "y",
                    "x": 1,
                    "y": 3,
                    "sizex": 2,
                    "sizey": 2,
                    "sizing": "stretch",
                    "opacity": 0.4,
                    "layer": "below"
                  },
                ]
            };


            Plotly.newPlot("bubble", bubbleData, bubbleLayout);


        });







    });
};

function init() {
    var pullDownMenu = d3.select("#selDataset")
    d3.json("weatherdata.json").then(function (wData) {
        // console.log(wData);
        var days = wData.map(data => data.DATE)



        days.forEach((day) => {
            pullDownMenu
                .append("option")
                .property("value", day)
                .text(day);

        })


    });

    buildWdata("9/1/2017");
    buildCharts("9/1/2017");
}

function optionChanged(nextSample) {
    buildWdata(nextSample);
    buildCharts(nextSample);
}
init();


