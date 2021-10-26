////////////////////////////////////////////////////////
// MODULE 12.1.2 - Create a Line Plot
////////////////////////////////////////////////////////

Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]},{x: [10, 12, 13], y: [15, 25, 35]}]);


////////////////////////////////////////////////////////
// MODULE 12.1.3 Create a Bar Chart
////////////////////////////////////////////////////////

var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
 };

 // Add a chart title, x-axis and y-axis labels
var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
};

 Plotly.newPlot("barplotArea", [trace], layout);

////////////////////////////////////////////////////////
// SKILL DRILL
////////////////////////////////////////////////////////

var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
   };
   var data = [trace];
   var layout = {
    title: "'Bar' Chart",
    xaxis: { title: "Drinks"},
    yaxis: { title: "% of Drinks Ordered"}
   };
   Plotly.newPlot("newplotArea", data, layout);


////////////////////////////////////////////////////////
// MODULE 12.1.4 - Create a Pie Chart
////////////////////////////////////////////////////////

// Note that pie chart uses labels/values instead of x/y as keys
var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
   };
   var data = [trace];
   var layout = {
    title: "'Pie' Chart",
   };
Plotly.newPlot("pieplotArea", data, layout);

////////////////////////////////////////////////////////
// SKILL DRILL - Create a Scatter Plot
////////////////////////////////////////////////////////

var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: 'markers',
    type: 'scatter'
  };
  
var trace2 = {
    x: [2, 3, 4, 5],
    y: [16, 5, 11, 9],
    mode: 'lines',
    type: 'scatter'
};

var trace3 = {
    x: [1, 2, 3, 4],
    y: [12, 9, 15, 12],
    mode: 'lines+markers',
    type: 'scatter'
};

var data = [trace1, trace2, trace3];
Plotly.newPlot("scatterplotArea", data);

////////////////////////////////////////////////////////
// MODULE 12.2.1 - Functional JavaScript
////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
// SKILL DRILL - Use map() method to add 5 to each 
// number in an array
////////////////////////////////////////////////////////

var numbers = [0,2,4,6,8];

var addfive = numbers.map(num => num + 5);
console.log(numbers);
console.log(addfive);


////////////////////////////////////////////////////////
// SKILL DRILL - Use map() method to extract the 
// population from each city array
////////////////////////////////////////////////////////

var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityPops = cities.map(city => city.population);

console.log(cityPops);


////////////////////////////////////////////////////////
// SKILL DRILL - Use filter() method to extract the
// results to include only animals whose species 
// name starts with the letter "s."
////////////////////////////////////////////////////////

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var startsWithS = words.filter(word => word.startsWith("s"));
console.log(startsWithS);

// Sort a list in ascending order
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((item1,item2) => item1 - item2);
console.log(sortedAge);

// Sort a list in descending order
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((item1,item2) => item2 - item1);
console.log(sortedAge);

////////////////////////////////////////////////////////
// SKILL DRILL - UUse slice() to select the first 
// three elements of the words array.
////////////////////////////////////////////////////////

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var slice1 = words.slice(0,3);
console.log(slice1);

// now select all elements after the 2nd one to 
// the end (excluding the 2nd). REMEMBER the first
// item in a list is in position 0.
var slice2 = words.slice(2,);
console.log(slice2);