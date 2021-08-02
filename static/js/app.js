
function buildWdata(metric, sample) {




    d3.json("../data/weatherdata.json").then(wdata => {

        var filteredData = wdata.filter(day => day.DATE == sample);
        var result = filteredData[0];
        var datee = result.DATE;
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

    d3.json("../data/salesdata.json").then(Sdata => {

        const filteredDates = Sdata.filter(day => day.Date == sample);

        var yticks = filteredDates.map(loc => loc.Location);
        var netSales = filteredDates.map(sale => sale[metric]);

        const itemCountnum = filteredDates.map(item => item[metric])

        var barData = [{
            y: yticks,
            x: netSales,
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
            title: metric,
            margin: {
                t: 30,
                r: 0,
                b: 30,
                l: 75
            },
            "xaxis": {
                "categoryorder": "array",
                "categoryarray": netSales
            }

        };




        Plotly.newPlot("bar", barData, barLayout);

        // Build bubble chart




  







    });
    // };
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
    buildWdata("Sales", "9/1/2017");
}

document.getElementById('submit').onclick = function () {
    var selected = [];
    for (var option of document.getElementById('Metric').options) {
        if (option.selected) {
            selected.push(option.value);
        }
    }
    for (var option of document.getElementById('selDataset').options) {
        if (option.selected) {
            selected.push(option.value);
        }
    }
    console.log(selected);

    buildWdata(selected[0], selected[1]);
}

init();


