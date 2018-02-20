var ages = [20, 30];
var names = ["Bob", "Joe"];
var cities = ["Waterford", "Dublin"];

// indexing always starts at 0
console.log(ages[0])
console.log(ages[1])

console.log(names[0])
console.log(names[1])

console.log(cities[0])
console.log(cities[1])
console.log(cities[2]) // 3rd element in 'cities' array?

//The pop() method removes the last element from an array
console.log('\ncity length before the pop ->', cities.length);
var pop = cities.pop();
console.log('We just popped the length is now -> ', cities.length);

// The push() method adds a new element to an array (at the end)
cities.push("Cork");
cities.push("Belfast");
console.log('\nWe just pushed the lenght is now ->', cities.length);
console.log(cities[2]) // 3rd element in 'cities' array

// The shift() method removes the first array element and "shifts" all other elements to a lower index.
console.log('\ncity 0 before shift -> ', cities[0])
cities.shift()
console.log('city 0 after shift -> ',cities[0])

//Array elements are accessed using their index number and can be changed
console.log("\n",cities[0])
cities[0] = "New York";
console.log(cities[0])

// The concat() method creates a new array by merging (concatenating) existing arrays.
var newArray = names.concat(cities);
console.log(newArray);

// Using the forEach() to itterate over the array
console.log("\nAll the cities are ->")
cities.forEach(function(city){
    console.log(city)
});


