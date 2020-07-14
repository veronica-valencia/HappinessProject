// Incoming data is internally referred to as incomingData
d3.json("data/data.json").then((incomingData) => {
  function filterCountryHappiness(Country) {
    return Country.Happiness;
  }

  // Use filter() to pass the function as its argument
  var filteredCountry = incomingData.filter(filterCountryHappiness);

  //  Check to make sure your are filtering your movies.
  console.log(filteredCountry);
  
  // Use the map method with the arrow function to return all the filtered movie titles.
  var country = filteredCountry.map(country =>  country.Country);

  // Use the map method with the arrow function to return all the filtered movie metascores.
  var happiness = filteredCountryHappiness.map(country => country.Happiness);

  // Check your filtered metascores.
  console.log(ratings);

  // Create your trace.
  var trace = {
    x: Country,
    y: Happiness,
    type: "bar"
  };

  // Create the data array for our plot
  var data = [trace];

  // Define the plot layout
  var layout = {
    title: "Countries Happiness Index",
    xaxis: { title: "Country" },
    yaxis: { title: "Happiness Score"}
  };

  // Plot the chart to a div tag with id "bar-plot"
  Plotly.newPlot("bar-plot", data, layout);
});