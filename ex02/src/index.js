// Create a temps array here

var temps = [
    [31, 32, 19, 37],
    [29, 27, 55, 36],
    [17, 27, 42, 46],
    [29, 52, 21, 64],
    [91, 27, 31, 61]
];

// End of temps array

function myArrayFunction(arr) {
    var newTemps = [...arr];
    var averageDayTemp = [];

    // Only change code below this line
    for (var i = 0; i < newTemps.length; i++) {
        var sum = 0;
        var copyJ = 0;
        for (var j = 0; j < newTemps[i].length; j++) {
            sum += newTemps[i][j];
            copyJ = j + 1;
        }
        averageDayTemp.push(sum / copyJ);
    }

    // Only change code above this line
    return averageDayTemp;
}

console.log(myArrayFunction(temps)); // Change this line
module.exports = myArrayFunction;