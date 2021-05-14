// This will show how to combine 2 arrays.
 
const fruits1 = ['apple', 'banana', 'grapes'];
const fruits2 = ['melon', 'watermelon', 'lemon'];

// First method will be the concat method.
const combinedArray = fruits1.concat(fruits2);

console.log(combinedArray);

// Second method is Spread syntax

const combinedArray2 = [...fruits1, ...fruits2];
console.log(combinedArray2);


