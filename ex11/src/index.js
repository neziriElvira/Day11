// Only change code below this line

function splitArrayInGruops(arr, n) {
    var result = [];
    var count = 0;
    while (count < n) {
        result.push(arr.splice(0, n));
        count++;
    }
    return result;
}

// Only change code above this line

console.log(splitArrayInGruops(["a", "b", "c", "d"], 2)); //Change this line
console.log(splitArrayInGruops([0, 1, 2, 3, 4, 5, 6], 3)); //Change this line
console.log(splitArrayInGruops([0, 1, 2, 3, 4, 5], 2)); //Change this line
console.log(splitArrayInGruops([0, 1, 2, 3, 4, 5, 6, 7, 8], 3)); //Change this line
console.log(splitArrayInGruops([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)); //Change this line

module.exports = splitArrayInGruops;