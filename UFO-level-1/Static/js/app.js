// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Create event handlers 
button.on("click", runFilter);
// input.on("submit",runEnter);

var tbody = d3.select("tbody");

// Use d3 to update each cell's text with
// ufoReport values (date/time, city, state, country, shape, comment)
tableData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Complete the event handler function to filter the table
function runFilter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    if (inputValue !== ""){
    var filteredData = tableData.filter(date => date.datetime === inputValue);
    }
    console.log(filteredData);

    // Get a reference to the table body
    var tbody = d3.select("tbody");
    tbody.html("");

    // Use d3 to update each cell's text with
    // ufoReport values (date/time, city, state, country, shape, comment)
    filteredData.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

