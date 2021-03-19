
// Only change code below this line
function multiplyArrayFunction(myArray) {
    var copyOfMyArray = [...myArray];
    var arr = [];
    var product = 1;
    var sum = 0;
    for (var i = 0; i < copyOfMyArray.length; i++) {
        for (var j = 0; j < copyOfMyArray[i].length; j++) {
            product *= copyOfMyArray[i][j];
            sum += copyOfMyArray[i][j];
        }
    }
    arr = [product, sum];
    return arr;
}
// Only change code above this line

console.log(multiplyArrayFunction([[2], [5, 6, 7], [8, 9]])); // Change this line
console.log(multiplyArrayFunction([[2.5, 2], [0.5, 0.2], [8]])); // Change this line
console.log(multiplyArrayFunction([[1, 2], [3, 4, 5, 6], [7, 8, 9]])); // Change this line
module.exports = multiplyArrayFunction;