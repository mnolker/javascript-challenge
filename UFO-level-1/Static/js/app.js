// from data.js
var tableData = data;

// YOUR CODE HERE!

// DELETE WHEN FINISHED: https://stackoverflow.com/questions/45439840/append-to-html-table-using-javascript-with-data-elements


for(var i=0; i< tableData.length; i++){
	var tableString = "<tr>";
  	    tableString += "<td>" + arrayOne[i] + "</td>";
    tableString += "<td>" + ((typeof arrayTwo[i] === 'undefined') ? '' : arrayTwo[i]) + "</td>";
    tableString += "<td>" + ((typeof arrayThree[i] === 'undefined') ? '' : arrayThree[i])  + "</td>";
    tableString += "<td>" + ((typeof arrayFour[i] === 'undefined') ? '' : arrayFour[i]) + "</td>";
    tableString += "<tr>";
  
    $('table tbody').append(tableString);
}

    // $("#myModal").find(".table").append("<tr><td>"+valOne+"</td><td>"+valTwo+"</td><td>"+valThree+"</td><td>"+valFour+"</td></tr>");

    for (var i = 0; i <arrayOne.length; i++ ){
        var row = $('<tr/>').append($('<td/>', {text: arrayOne[i] || ''}))
                .append($('<td/>', {text: arrayTwo[i] || ''}))
                .append($('<td/>', {text: arrayThree[i] || ''}))
                .append($('<td/>', {text: arrayFour[i] || ''}));
        $('table tbody').append(row);
    }