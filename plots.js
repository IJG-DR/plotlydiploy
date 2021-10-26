///////////////////////////////////////////////////////////////////
// MODULE 12.4.3 - Belly Button Demographics Panel
///////////////////////////////////////////////////////////////////

// DONT FORGET TO RUN LOCAL HTTP SERVER!!


// Create a function to 
function init() {
    
    // Select the drop-down menu (its 'id' was set 
    // to 'selDataset' in the HTML file). Store the
    // id in a variable.
    var selector = d3.select("#selDataset");
  
    // Populate the filtered data by reading the 
    // key 'name' and storing  them in a variable
    // sampleNames, then for each name, append the 
    // list of options on the HTML drop-down menu.
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  

// Create a function that is called directly from the
// index.html file when the drop-down menu item is selected.
// The HTML will pass the argument 'this.value' to the function
// which the function will manipulate as newSample within the
// function.
function optionChanged(newSample) {
    // print the selected subject id to the console
    console.log(newSample);

    // call on a function that will provide the demographics
    // metadata for the selected subject.
    buildMetadata(newSample);
    
    // call on a function that will build the charts for the
    // selected subject.
    buildCharts(newSample);
    
    
  }


// Create a function that will provide the demographics
// metadata for the selected subject from the drop-down menu.  
function buildMetadata(sample) {
    
    // From the data, store the data contained in the 
    // 'metadata' key in a new array called metadata.
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      
      // filter the metadata array to select the field in the
      // key 'id' which corresponds to the subject (passed to 
      // the function as 'sample')
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      
      // select the first record from this array
      var result = resultArray[0];
      
      // point a new variable to the html element
      // that will display the demographics information
      var PANEL = d3.select("#sample-metadata");
  
      // clear the element from any previous information
      PANEL.html("");
      
      // append the element to reflect the new demographics
      // information, using the Object.entries and forEach 
      // method and changing the key labels to upper case.
      Object.entries(result).forEach(([key,value]) => {
            PANEL.append("h6").text(key.toUpperCase() + ': ' + value)
    });
  });
}

// Call the init function
init();