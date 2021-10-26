//////////////////////////////////////////////////////////////
// MODULE 12.4.2 Create a Dynamic Plotly Chart
//////////////////////////////////////////////////////////////



// Create a function to create the initial plot
function init() {
    data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16] }];
    Plotly.newPlot("plot", data);
  };

  
// Create a D3 event listener for the drop-down menu 
d3.selectAll("#dropdownMenu").on("change", updatePlotly);
  


// Create a function that updates the chart based
// on the drop-down menu selection
function updatePlotly() {
    var dropdownMenu = d3.select("#dropdownMenu");
    // Store the 'value' label for the menu option 
    // selected. NOTE IT IS NO THE TEXT ASSOCIATED
    // WITH THE SELECTED MENU OPTION.
    var dataset = dropdownMenu.property("value");
  
    var xData = [1, 2, 3, 4, 5];
    var yData = [];
  
    // If dataset1 is selected from the drop-down
    // menu, restore the original y data
    if (dataset === 'dataset1') {
      yData = [1, 2, 4, 8, 16];
    };
  
    // If dataset2 is selected from the drop-down
    // use a new set of y data
    if (dataset === 'dataset2') {
      yData = [1, 10, 100, 1000, 10000];
    };
  
    // Plot the line chart, using the 'restyle'
    // method to re-render as it does not create
    // a new graph (otherwise if we used Plotly.newPlot
    // we would be creating an additional chart
    // everytime we change a drop-down selection).
    var trace = {
      x: [xData],
      y: [yData],
    };
    Plotly.restyle("plot", trace);
  };
  

  
// Start the script with a call to the initialize function
init();