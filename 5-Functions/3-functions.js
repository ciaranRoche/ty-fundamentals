//-------------------------
// Calculating averages
// Step 3: refactor again
//-------------------------

// define a more generic function that takes in 
// a name and a list of marks as arguments
function calculateAverage(name, marks) {
    var total = 0;

    for (var i = 0; i < marks.length; i++) {
        total += marks[i];
    }

    // calculate average 
    var average = total / marks.length;
    console.log(name + "'s average: " + average);
}

// use the function to calculate sam
// and pam's averages respectively
var samsMarks = [45, 52, 60, 67, 43]
calculateAverage("Sam", samsMarks)

var pamsMarks = [70, 36, 60, 46, 43]
calculateAverage("Pam", pamsMarks)