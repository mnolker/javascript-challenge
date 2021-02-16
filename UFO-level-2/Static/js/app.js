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

// function updateTable() {
//     // Get a reference to the table body
//     var tbody = d3.select("tbody");
//     tbody.html("");

//     // Use d3 to update each cell's text with
//     // ufoReport values (date/time, city, state, country, shape, comment)
//     filteredData.forEach((ufoReport) => {
//         var row = tbody.append("tr");
//         Object.entries(ufoReport).forEach(([key, value]) => {
//             var cell = row.append("td");
//             cell.text(value);
//         });
//     });
// };

// Complete the event handler function to filter the table
function runFilter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node & Get the value property of the input elements
    var dateValue = document.getElementById("datetime").value;
    var cityValue = document.getElementById("city").value.toLowerCase();
    var stateValue = document.getElementById("state").value.toLowerCase();
    var countryValue = document.getElementById("country").value.toLowerCase();
    var shapeValue = document.getElementById("shape").value.toLowerCase();
    var filteredData = tableData;

    //Fitler each search criteria
    if (dateValue !== ""){
        filteredData = filteredData.filter(data => data.datetime === dateValue);
    }
    if (cityValue !== ""){
        filteredData = filteredData.filter(data => data.city === cityValue);
    }
    if (stateValue !== ""){
        filteredData = filteredData.filter(data => data.state === stateValue);
    }
    if (countryValue !== ""){
        filteredData = filteredData.filter(data => data.country === countryValue);
    }
    if (shapeValue !== ""){
        filteredData = filteredData.filter(data => data.shape === shapeValue);
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

    // updateTable(filteredData);
