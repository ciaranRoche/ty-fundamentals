//-------------------------
// Calculating averages
// Step 2: refactor
//-------------------------

//-------------------------
// Calculate Sam's average
//-------------------------

// a list of sam's marks
var samsMarks = [45, 52, 60, 67, 43]

// calculate sam's total 
var samsAverage = 0;

for (var i = 0; i < samsMarks.length; i++) {
    samsAverage += samsMarks[i];
}

// calculate sam's average 
samsAverage = samsAverage / samsMarks.length;
console.log("Sam's average: " + samsAverage);

//-------------------------
// Calculate Pam's average
//-------------------------

var pamsMarks = [70, 36, 60, 46, 43]

var pamsAverage = 0;

for (var i = 0; i < pamsMarks.length; i++) {
    pamsAverage += pamsMarks[i];
}

// calculate sam's average 
pamsAverage = pamsAverage / pamsMarks.length;
console.log("Pam's average: " + pamsAverage);