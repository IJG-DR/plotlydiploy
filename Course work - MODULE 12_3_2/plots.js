///////////////////////////////////////////////////////
// MODULE 12.3.2 - Load a JSON file with D3.json()
///////////////////////////////////////////////////////

// IMPORTNAT!! Remember to run a server instance in your
// terminal on the folder containing your files by
// running 'python -m http.server' on the command
// line. NOTE: your environment must be active on 
// the folder.

d3.json("samples.json").then(function(data){
    console.log("hello");
});

// Now inspect the imported data file
d3.json("samples.json").then(data => console.log(data));

// Now create a new array only containing the wash
// frequency (wfreq in the key for this field, and
// it is contained inside the 'metadata' key field)
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});

// Repeat but now sort the array in descending order.
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b-a);
    console.log(wfreq);
});

// Repeat but now exclude all null values from the
// array after it is sorted.
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element !=
null);
    console.log(filteredWfreq);
});

// SKILL DRILL - Use the Object.entries() and 
// forEach() methods to print all the metadata 
// of the first person in the samples.json() 
// dataset (ID 940).
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});