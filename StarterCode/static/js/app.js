// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
console.log(data);
function buildtable(data) {
  tbody.html("");
  data.forEach((HappinessIndex) => {
      var row = tbody.append("tr");
      Object.entries(HappinessIndex).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
}

// Select the button
d3.selectAll("#filter-btn").on("click",runEnter);

// Create event handlers 
//form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#country");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(data);
  let filteredData= tableData;
  if (inputValue != ""){
   filteredData = data.filter(row => row.datetime == inputValue);}

  console.log(filteredData);

  buildtable(filteredData);
  // First, create an array with just the date values
  //var date = filteredData.map(date => data.date);

 
  // Then, select the unordered list element by class name
  //var list = d3.select(".summary");

};
buildtable(tableData);
