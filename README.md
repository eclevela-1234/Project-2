# Key Business Metrics
## A Dashboard for Vizualizing Location Sales Data

Here is the link to the deployed page!

https://eclevela-1234.github.io/Project-2/

### Summary
Our goal was to visualize real historical sales data to provide new and quanitative insights for business operators. We looked at three business metrics (net sales, total item sales & averaged transaction amount) from nine business units. The locations varied in size and purpose (cafes, quick & full-service restaurants, convenience stores and a post office. The university has a very cyclical business pattern but it affects different businesses in different ways. We hoped to present the data in diffent ways to understand the business impact based on key moments in the academic schedule. As a bonus we added a weather data element, to eventually evaluate the impact of weather on sales.

### Dataset
 - Sales data was extracted from the university campus services database. All data is confidential and for educational purposes. Length of data - 4 years (some locations omitted).
 - Weather data extract from RIC Airport weather station (NOAA)

### Data Cleaning and Loading
- Sales data was relatively clean. Unnecessary fields were removed, and table headers renamed, using excel and saved as CSV. 
- The data was then loaded into a Jupyter notebook file where it was processed into various formats (JSON (record orientation) and HTML table data)

### Visualization
- Plotly was the core JS library used. 
- Data can be filtered based on various metrics. 
- We provided a 10,000 ft view by showing the yearly data, and functionality to drill down into day and location specific data.

### Future Improvements
- Would like to view all of the dashboard media on one page. It is split on two in its current form.
- We had originally intended to visualize the location data on a map as a way to geographically see where dollars were spent.
- More business metrics, periodic statistical data.
- Streamlined data loading process for "realtime" data.
- Weather data turned out to be useful but more info was needed, possibly a weather headline scraper???
- There were a few gremlins in the data that require

### Concepts Applied/Learned
- Data Munging, Excel, Python, Pandas, HTML, CSS, JS, D3
- A better understanding of what goes into an data driven document - from soup to nuts!

### Conclusion
- I was pleasantly surprised with the end result. It certainly required application of many concepts to attain a usable product.
- Much more to learn and apply to get it where we originally envisioned.  




