// Only change code below this line

function mySplice(arr1, arr2, n) {
    for (var i = 0; i < arr1.length; i++) {
        arr2.splice(n, 0, arr1[i]);
    }
    return arr2;
}
// Only change code above this line

console.log(mySplice([1, 2, 3], [4, 5], 2)); //Change this line
module.exports = mySplice;