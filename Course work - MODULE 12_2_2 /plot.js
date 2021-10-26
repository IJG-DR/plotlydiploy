//////////////////////////////////////////////////////////
// MODULE 12.2.2 - Practicing JavaScript Methods
//////////////////////////////////////////////////////////

console.log(cityGrowths);

// sort the cities in descending order of population 
// growth (data key for population growth is 
// 'Increase_from_2016')
var sortedCities = cityGrowths.sort((a,b) => b.Increase_from_2016 - a.Increase_from_2016);
console.log(sortedCities);

// Use the slice() method to select only the top 
// five cities by population growth. 
var topFiveCities = sortedCities.slice(0,5);
console.log(topFiveCities);

// Create arrays of city names and growth figures
// using the map() method. In this case, all the 
// data is in string format. We need to convert the
// population data to integer using the parseInt()
// method.
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));
console.log(topFiveCityNames);
console.log(topFiveCityGrowths);

// Create a bar chart with the arrays.
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);

//////////////////////////////////////////////////////////
// SKILL DRILL - Use the same dataset to create a
// bar chart of the 7 largest cities by population.
//////////////////////////////////////////////////////////

// Sort cities by total population
var sortedCities = cityGrowths.sort((a,b) => b.population - a.population);
console.log(sortedCities);

// Use the slice() method to select only the top 
// 7 cities by population. 
var topSevenCities = sortedCities.slice(0,7);
console.log(topSevenCities);

// Create arrays of city names and growth figures
// using the map() method. In this case, all the 
// data is in string format. We need to convert the
// population data to integer using the parseInt()
// method.
var topSevenCityNames = topSevenCities.map(city => city.City);
var topSevenCityPops = topSevenCities.map(city => parseInt(city.population));
console.log(topSevenCityNames);
console.log(topSevenCityPops);

// Create a bar chart with the arrays.
var trace = {
    x: topSevenCityNames,
    y: topSevenCityPops,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Largest Cities by Population",
    xaxis: { title: "City" },
    yaxis: { title: "Population"}
  };
  Plotly.newPlot("bar-plot-7popul", data, layout);