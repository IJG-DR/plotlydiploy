///////////////////////////////////////////////////////
// MODULE 12.3.1 - Inspect an API call with d3.json()
///////////////////////////////////////////////////////

// Set the url for the spaceX connection
const url = "https://api.spacexdata.com/v2/launchpads";

// Place a call to the SpaceX API using d3.json and print
// the json to the console
d3.json(url).then(receivedData => console.log(receivedData));


// If we only want to print the first record, use indexing.
d3.json(url).then(spaceXResults => console.log(spaceXResults[0]));

// And if we want to retrieve the 'full_name' field 
// from the first record, we select the key for that field
// in our indexing.
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// And if we want to get the lattitude for the location
// of this launch site, which is within a list inside the
// location element (i.e. a list within a list), we index
// the keys for each list
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].location.latitude));

///////////////////////////////////////////////////////
// SKILL DRILL - Use map() method to print only the 
// latitude and longitude coordinates of each
// SpaceX launch station.
///////////////////////////////////////////////////////

d3.json(url).then(data => data.map(row => console.log(row.location.latitude, row.location.longitude)));

