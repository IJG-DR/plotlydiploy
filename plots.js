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



// Create a function that will build the charts for the
// selected subject.
function buildCharts(sample) {

    // 2. Use d3.json to load and retrieve the samples.json file 
    d3.json("samples.json").then((data) => {
    


        ///////////////////////////////////////////////////////////////////////
        // CHALLENGE DELIVERABLE 1 - Create the bar chart
        ///////////////////////////////////////////////////////////////////////

        // 3. Create a variable that holds the samples array. 
        var bactSamples = data.samples;
    
        // 4. Create a variable that filters the samples for the object 
        // with the desired sample number.
        var filteredSamples = bactSamples.filter(rows => rows.id == sample );
    
        // 5. Create a variable that holds the first sample in the array.
        var selectionSample = filteredSamples[0];
        selectionSample["sample_values"].sort((a,b) => b - a )

        // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
        var otuIds = selectionSample["otu_ids"]
        var otuLabels = selectionSample["otu_labels"]
        var sampleValues = selectionSample["sample_values"]
        
        // 7. Create the yticks for the bar chart.
        // Hint: Get the the top 10 otu_ids and map them in descending order  
        //  so the otu_ids with the most bacteria are last. 
        var yticks = [];
        var yvalues = otuIds.slice(0,10);
        for (let i = 0; i < 10; i++) {
            yticks.push("OTU " + yvalues[i]);
        }

        //var yticks = yvalues.map(n => "OTU " + yvalues);
        var xvalues = sampleValues.slice(0,10);

        // 8. Create the trace for the bar chart. 
        var trace = [{
            type: "bar",
            x: xvalues,
            y: yticks,
            text: otuLabels,
            marker: { 
                   color: "plum" 
            },
            orientation: 'h'
        }];

        // 9. Create the layout for the bar chart. 
        var barLayout = {
            title: "Top 10 Bacteria Cultures Found",
            yaxis: {autorange: "reversed"},
            paper_bgcolor: "lightgrey",
            plot_bgcolor: "lightgrey"
        };

        // 10. Use Plotly to plot the data with the layout. 
        Plotly.newPlot("bar", trace, barLayout);



        ///////////////////////////////////////////////////////////////////////
        // CHALLENGE DELIVERABLE 2 - Create the bubble chart
        ///////////////////////////////////////////////////////////////////////

        //Create the trace for the bubble chart.
        var trace2 = [{
            x: otuIds,
            y: sampleValues,
            mode: 'markers', 
            marker: {size: sampleValues, color: otuIds},
            text: otuLabels
        }];

        // Create the layout for the bubble chart.
        var bubble_layout = {
              title: "Bacteria Cultures Per Sample",
              xaxis: {
                   title: {
                        text: "OTU ID"
                   }
              },
              paper_bgcolor: "lightgrey",
              plot_bgcolor: "lightgrey"
        }

        // Plot the bubble chart
        Plotly.newPlot("bubble", trace2, bubble_layout);



        ///////////////////////////////////////////////////////////////////////
        // CHALLENGE DELIVERABLE 3 - Create the gauge chart
        ///////////////////////////////////////////////////////////////////////

        // Store the washing frequency in a variable
        var subjects = data.metadata
        var person = subjects.filter(rows => rows.id == sample );
        var individual = person[0];
        var frequency = individual["wfreq"];

        // 4. Create the trace for the gauge chart.
        var gaugeData = [{
            value: frequency,
            title: "Scrubs per Week",
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                axis: { range: [null, 10] },
                bar: { color: "navy" },
                steps: [
                  { range: [0, 2], color: "plum" },
                  { range: [2, 4], color: "thistle"},
                  { range: [4, 6], color: "lavender"},
                  { range: [6, 8], color: "lightsteelblue"},
                  { range: [8, 10], color: "cornflowerblue"},
                ],
            }
        }];

        // 5. Create the layout for the gauge chart.
        var gaugeLayout = { 
            paper_bgcolor: "lightgrey",
            plot_bgcolor: "lightgrey",
            title: { text: "Belly Button Wash Frequency" , size: 30 }
        };

        // 6. Use Plotly to plot the gauge data and layout.
        Plotly.newPlot("gauge",gaugeData,gaugeLayout);

  });

}



// Call the init function
init();