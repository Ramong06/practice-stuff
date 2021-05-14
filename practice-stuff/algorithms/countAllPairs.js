// This is to find how many pairs are inside of an array
// Uses Math.floor.  The floor() function of the Math object accepts a floating point number and returns the largest integer 
// less than or equal to the given number.If the given number itself is an integer this function returns the same.
// .forEach is an Array method that we can use to execute a function on each element in an array. It is counting each item in the array
// The reduce() method reduces the array to a single value. executes a provided function for each value of the array (from left-to-right).
// The return value of the function is stored in an accumulator (result/total).

// Constraints 
// 1 <= n <= 100
// 1 <= ar[i] <= 100 where 0 <= i <= n

let n = 9;
let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

// This function should return the number 3 representing the 3 pairs within the array.
// acc is accumulator. The accumulator accumulates callback's return values. It is the accumulated value previously returned in the last invocation of the callback.
// elem iterates over the array and each element will placed inside its value. (does not need to be named elem, can be any word) 
const pairNumber = (n, ar) => {
    var pairs = {};
    ar.forEach(n => pairs[n] = (pairs[n] || 0) + 1);
    return Object.values(pairs).reduce((acc, elem) => acc + Math.floor(elem / 2), 0);
};

// This is to print the result of the function above to the console.
let result = pairNumber(n, ar);
console.log(result + '\n');



