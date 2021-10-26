/////////////////////////////////////////////////////////////////
// MODULE 12.4.1 - JavaScript Event Listeners
/////////////////////////////////////////////////////////////////

// Create an event listener using d3.selectAll()
// for any change in the "body" HTML element and
// calls the updatePage function defined bellow.
d3.selectAll("body").on("change", updatePage);


function updatePage() {
  // select the drop-down menu
  var dropdownMenu = d3.selectAll("#selectOption").node();
  // assign the id of the drop-down menu to a variable
  var dropdownMenuID = dropdownMenu.id;
  // set a variable to capture the selected option
  var selectedOption = dropdownMenu.value;

  console.log(dropdownMenuID);
  console.log(selectedOption);

  //console.log(d3.selectAll("#menu").node().id);
};