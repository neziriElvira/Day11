// Create a monitorsListArray array here
var monitorsListArray = ["Apple", "Peach", "Berry"];

// End of monitorsListArray an array

function myMonitorsFunction(arr) {
    var newMonitorsList = [...arr];
    // Only change code below this line
    var monitorsList = [];
    for (var i = 0; i < newMonitorsList.length; i++) {
        var arrayStringAndNumber = [newMonitorsList[i], i + 1];
        monitorsList.push(arrayStringAndNumber);
    }
    return monitorsList;
    // Only change code above this line
}

console.log(myMonitorsFunction(monitorsListArray)); // Change this line
module.exports = myMonitorsFunction;