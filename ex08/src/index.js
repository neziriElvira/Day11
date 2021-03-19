// Only change code below this line
function myMutation(arr) {
    var count = 0;
    for (var i = 0; i < arr[1].length; i++) {
        var check = 0;
        for (var j = 0; j < arr[0].length; j++) {
            if (arr[0][j].toLowerCase() === arr[1][i].toLowerCase()) {
                check++;
            }
        }
        if (check > 0) {
            count++;
        }
    }
    if (count === arr[1].length) {
        return true;
    }
    return false;
}
// Only change code above this line

console.log(myMutation(['voodoo', 'dvo'])); // Change this line
module.exports = myMutation;