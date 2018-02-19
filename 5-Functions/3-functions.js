function calculateAverage(name, marks) {
    var total = 0;

    for (var i = 0; i < marks.length; i++) {
        total += marks[i];
    }

    // calculate average 
    var average = total / marks.length;
    console.log(name + "'s average: " + average);
}

var samsMarks = [45, 52, 60, 67, 43]
calculateAverage("Sam", samsMarks)

var pamsMarks = [70, 36, 60, 46, 43]
calculateAverage("Pam", pamsMarks)