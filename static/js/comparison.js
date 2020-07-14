google.charts.load('current', {packages: ['bar']});
google.charts.setOnLoadCallback(defaultinit);

function defaultinit() {
  var data = google.visualization.arrayToDataTable([
    ['Country', 'Finland', 'Denmark', 'Norway', 'Iceland', 'Netherlands'],
    ['2019', 59.8, 58.4, 51.9, 51.5, 61.4]
  ]);

  var options = {
    chart: {title: "Global Innovation Index",
    subtitle: "Comparison of top 5 countries"},
    width: '500',
    height: '300',
    legend: { position: 'top', maxLines: 3 },
    bar: { groupWidth: '75%' }
  };
  var dispchart = new google.charts.Bar(document.getElementById('comparison_chart'));

      dispchart.draw(data, options);
}

d3.selectAll("#topics").on("change", selection);

function selection() {
  var menu = d3.select("#topics");
  var input = menu.property("value");
  var data = [];
  var options = [];

  var innovationdata = google.visualization.arrayToDataTable([
    ['Country', 'Finland', 'Denmark', 'Norway', 'Iceland', 'Netherlands'],
    ['2019', 59.8, 58.4, 51.9, 51.5, 61.4]
  ]);
    
  var innovationoptions = {
    chart: {title: "Global Innovation Index",
    subtitle: "Comparison of top 5 countries"},
    width: '500',
    height: '300',
    legend: { position: 'top', maxLines: 3 },
    bar: { groupWidth: '75%' }
  };

  var birthdata = google.visualization.arrayToDataTable([
    ['Country', 'Finland', 'Denmark', 'Norway', 'Iceland', 'Netherlands'],
    ['2019', 1.36, 1.74, 1.53, 1.67, 1.57]
  ]);
    
  var birthoptions = {
    chart: {title: "Average Births Per Woman",
    subtitle: "Comparison of top 5 countries"},
    width: '500',
    height: '300',
    legend: { position: 'top', maxLines: 3 },
    bar: { groupWidth: '75%' }
  };

  var weatherdata = google.visualization.arrayToDataTable([
    ['Country', 'Finland', 'Norway', 'Iceland', 'Netherlands'],
    ['2019', 69, 49, 48, 61]
  ]);

  var weatheroptions = {
    chart: {title: "Days of Sunshine per Year",
    subtitle: "Comparison of top 5 countries"},
    width: '500',
    height: '300',
    legend: { position: 'top', maxLines: 3 },
    bar: { groupWidth: '75%' }
  };

  if (input === "Global Innovation Index") {
    data = innovationdata;
    options = innovationoptions;
  }
  else if (input === "Average Births Per Woman") {
    data = birthdata;
    options = birthoptions;
  }
  else if (input === "Number of Days of Sunshine") {
    data = weatherdata;
    options = weatheroptions;
  }

  var dispchart = new google.charts.Bar(document.getElementById('comparison_chart'));
  dispchart.draw(data,options);
}
selection();