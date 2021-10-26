/////////////////////////////////////////////////////////////////
// MODULE 12.4.1 - JavaScript Event Listeners
/////////////////////////////////////////////////////////////////

// Create an event listener using d3.selectAll()
// for any change in the "body" HTML element and
// calls the updatePage function defined bellow.
d3.selectAll("body").on("change", updatePage);


function updatePage() {
  // Print the selected option from the drop-down menu
  console.log(d3.selectAll("#selectOption").node().value);
};